const ipHourlyLimit = new Map();
const ipDailyLimit = new Map();
const sessionHourlyLimit = new Map();
const recentMessages = new Map();
const messageHistory = new Map();

const LIMITS = {
  IP_HOURLY: 20,
  IP_DAILY: 100,
  SESSION_HOURLY: 30,
  DUPLICATE_THRESHOLD: 5,
  RAPID_FIRE_COUNT: 10,
  RAPID_FIRE_WINDOW: 60000,
  MESSAGE_COOLDOWN: 2000,
  MAX_MESSAGE_LENGTH: 1000
};

function cleanupOldEntries() {
  const now = Date.now();
  const oneHour = 3600000;
  const oneDay = 86400000;

  for (const [key, data] of ipHourlyLimit.entries()) {
    if (now - data.resetAt > oneHour) {
      ipHourlyLimit.delete(key);
    }
  }

  for (const [key, data] of ipDailyLimit.entries()) {
    if (now - data.resetAt > oneDay) {
      ipDailyLimit.delete(key);
    }
  }

  for (const [key, data] of sessionHourlyLimit.entries()) {
    if (now - data.resetAt > oneHour) {
      sessionHourlyLimit.delete(key);
    }
  }

  for (const [key, timestamp] of recentMessages.entries()) {
    if (now - timestamp > LIMITS.MESSAGE_COOLDOWN) {
      recentMessages.delete(key);
    }
  }

  for (const [key, messages] of messageHistory.entries()) {
    const filtered = messages.filter(m => now - m.timestamp < LIMITS.RAPID_FIRE_WINDOW);
    if (filtered.length === 0) {
      messageHistory.delete(key);
    } else {
      messageHistory.set(key, filtered);
    }
  }
}

setInterval(cleanupOldEntries, 300000);

function getRateLimitData(store, key, limit, window) {
  const now = Date.now();
  const data = store.get(key);

  if (!data || now > data.resetAt) {
    const newData = {
      count: 0,
      resetAt: now + window
    };
    store.set(key, newData);
    return newData;
  }

  return data;
}

function checkDuplicateMessages(sessionId, message) {
  const history = messageHistory.get(sessionId) || [];
  const duplicateCount = history.filter(m => m.text === message).length;
  return duplicateCount >= LIMITS.DUPLICATE_THRESHOLD;
}

function checkRapidFire(sessionId) {
  const history = messageHistory.get(sessionId) || [];
  return history.length >= LIMITS.RAPID_FIRE_COUNT;
}

function addToHistory(sessionId, message) {
  const history = messageHistory.get(sessionId) || [];
  history.push({
    text: message,
    timestamp: Date.now()
  });
  messageHistory.set(sessionId, history);
}

export function rateLimiter(req, res, next) {
  try {
    const ip = req.ip || req.connection.remoteAddress;
    const sessionId = req.body.sessionId;
    const message = req.body.message;

    if (!sessionId || !message) {
      return res.status(400).json({
        error: { message: 'Missing sessionId or message' }
      });
    }

    if (message.length > LIMITS.MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: { message: `Message too long. Maximum ${LIMITS.MAX_MESSAGE_LENGTH} characters.` }
      });
    }

    const lastMessageTime = recentMessages.get(sessionId);
    if (lastMessageTime && Date.now() - lastMessageTime < LIMITS.MESSAGE_COOLDOWN) {
      const waitTime = Math.ceil((LIMITS.MESSAGE_COOLDOWN - (Date.now() - lastMessageTime)) / 1000);
      return res.status(429).json({
        error: {
          message: `Please wait ${waitTime} seconds before sending another message.`,
          retryAfter: waitTime
        }
      });
    }

    if (checkDuplicateMessages(sessionId, message)) {
      return res.status(429).json({
        error: {
          message: 'You\'ve sent this message too many times. Please try a different question.'
        }
      });
    }

    if (checkRapidFire(sessionId)) {
      return res.status(429).json({
        error: {
          message: 'Too many messages too quickly. Please wait a moment before continuing.'
        }
      });
    }

    const ipHourly = getRateLimitData(ipHourlyLimit, ip, LIMITS.IP_HOURLY, 3600000);
    if (ipHourly.count >= LIMITS.IP_HOURLY) {
      return res.status(429).json({
        error: {
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((ipHourly.resetAt - Date.now()) / 1000)
        }
      });
    }

    const ipDaily = getRateLimitData(ipDailyLimit, ip, LIMITS.IP_DAILY, 86400000);
    if (ipDaily.count >= LIMITS.IP_DAILY) {
      return res.status(429).json({
        error: {
          message: 'Daily limit exceeded. Please try again tomorrow.',
          retryAfter: Math.ceil((ipDaily.resetAt - Date.now()) / 1000)
        }
      });
    }

    const sessionHourly = getRateLimitData(sessionHourlyLimit, sessionId, LIMITS.SESSION_HOURLY, 3600000);
    if (sessionHourly.count >= LIMITS.SESSION_HOURLY) {
      return res.status(429).json({
        error: {
          message: 'You\'ve reached the conversation limit. Please try again in an hour.',
          retryAfter: Math.ceil((sessionHourly.resetAt - Date.now()) / 1000)
        }
      });
    }

    ipHourly.count++;
    ipDaily.count++;
    sessionHourly.count++;
    recentMessages.set(sessionId, Date.now());
    addToHistory(sessionId, message);

    res.setHeader('X-RateLimit-Limit-Hourly', LIMITS.IP_HOURLY);
    res.setHeader('X-RateLimit-Remaining-Hourly', Math.max(0, LIMITS.IP_HOURLY - ipHourly.count));
    res.setHeader('X-RateLimit-Reset-Hourly', Math.ceil(ipHourly.resetAt / 1000));

    next();
  } catch (error) {
    console.error('Rate limiter error:', error);
    next();
  }
}
