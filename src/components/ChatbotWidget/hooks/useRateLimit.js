import { useState, useEffect, useCallback } from 'react';

const COOLDOWN_MS = 2000;
const MAX_MESSAGES_PER_SESSION = 50;

export function useRateLimit(messageCount) {
  const [canSend, setCanSend] = useState(true);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [lastSentTime, setLastSentTime] = useState(0);

  useEffect(() => {
    if (messageCount >= MAX_MESSAGES_PER_SESSION) {
      setCanSend(false);
      return;
    }

    const now = Date.now();
    const timeSinceLastMessage = now - lastSentTime;

    if (timeSinceLastMessage < COOLDOWN_MS) {
      setCanSend(false);
      setCooldownRemaining(Math.ceil((COOLDOWN_MS - timeSinceLastMessage) / 1000));

      const timer = setInterval(() => {
        const remaining = Math.ceil((COOLDOWN_MS - (Date.now() - lastSentTime)) / 1000);

        if (remaining <= 0) {
          setCanSend(true);
          setCooldownRemaining(0);
          clearInterval(timer);
        } else {
          setCooldownRemaining(remaining);
        }
      }, 100);

      return () => clearInterval(timer);
    } else {
      setCanSend(true);
      setCooldownRemaining(0);
    }
  }, [lastSentTime, messageCount]);

  const recordMessageSent = useCallback(() => {
    setLastSentTime(Date.now());
    setCanSend(false);
  }, []);

  const isAtLimit = messageCount >= MAX_MESSAGES_PER_SESSION;

  return {
    canSend: canSend && !isAtLimit,
    cooldownRemaining,
    recordMessageSent,
    isAtLimit,
    remainingMessages: Math.max(0, MAX_MESSAGES_PER_SESSION - messageCount)
  };
}
