let dailyUsage = {
  tokens: 0,
  cost: 0,
  resetAt: getNextMidnight()
};

let alertsSent = {
  fifty: false,
  seventyFive: false,
  ninety: false
};

const PRICING = {
  INPUT: 3.00 / 1000000,
  OUTPUT: 15.00 / 1000000
};

function getNextMidnight() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.getTime();
}

function resetDailyUsageIfNeeded() {
  const now = Date.now();
  if (now >= dailyUsage.resetAt) {
    dailyUsage = {
      tokens: 0,
      cost: 0,
      resetAt: getNextMidnight()
    };
    alertsSent = {
      fifty: false,
      seventyFive: false,
      ninety: false
    };
    console.log('Daily budget usage reset');
  }
}

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function logBudgetAlert(percentage, current, cap) {
  console.warn(`⚠️  BUDGET ALERT: ${percentage}% of daily budget used ($${current.toFixed(2)} / $${cap})`);

  if (process.env.ALERT_EMAIL) {
    console.log(`Email alert would be sent to: ${process.env.ALERT_EMAIL}`);
  }
}

function checkBudgetAlerts(cost, cap) {
  const percentage = (cost / cap) * 100;

  if (percentage >= 90 && !alertsSent.ninety) {
    logBudgetAlert(90, cost, cap);
    alertsSent.ninety = true;
  } else if (percentage >= 75 && !alertsSent.seventyFive) {
    logBudgetAlert(75, cost, cap);
    alertsSent.seventyFive = true;
  } else if (percentage >= 50 && !alertsSent.fifty) {
    logBudgetAlert(50, cost, cap);
    alertsSent.fifty = true;
  }
}

export function checkBudgetBeforeRequest(req, res, next) {
  resetDailyUsageIfNeeded();

  const budgetCap = parseFloat(process.env.DAILY_BUDGET_CAP || '10.00');

  if (dailyUsage.cost >= budgetCap) {
    return res.status(503).json({
      error: {
        message: 'The chatbot has reached its daily usage limit. Please try again tomorrow.',
        code: 'BUDGET_EXCEEDED'
      }
    });
  }

  const estimatedInputTokens = estimateTokens(req.body.message || '');
  const estimatedSystemTokens = estimateTokens(req.knowledgeBase || '') * 0.5;
  const estimatedCost = (estimatedInputTokens + estimatedSystemTokens) * PRICING.INPUT;

  if (dailyUsage.cost + estimatedCost > budgetCap) {
    return res.status(503).json({
      error: {
        message: 'The chatbot is approaching its daily usage limit. Please try again later.',
        code: 'BUDGET_NEAR_LIMIT'
      }
    });
  }

  next();
}

export function trackUsageAfterRequest(inputTokens, outputTokens) {
  resetDailyUsageIfNeeded();

  const inputCost = inputTokens * PRICING.INPUT;
  const outputCost = outputTokens * PRICING.OUTPUT;
  const totalCost = inputCost + outputCost;

  dailyUsage.tokens += (inputTokens + outputTokens);
  dailyUsage.cost += totalCost;

  const budgetCap = parseFloat(process.env.DAILY_BUDGET_CAP || '10.00');
  checkBudgetAlerts(dailyUsage.cost, budgetCap);

  console.log(`API call: ${inputTokens} in + ${outputTokens} out = $${totalCost.toFixed(4)} | Daily total: $${dailyUsage.cost.toFixed(2)} / $${budgetCap}`);

  return {
    dailyUsed: dailyUsage.cost,
    dailyCap: budgetCap,
    percentUsed: (dailyUsage.cost / budgetCap) * 100
  };
}

export function getDailyUsage() {
  resetDailyUsageIfNeeded();
  const budgetCap = parseFloat(process.env.DAILY_BUDGET_CAP || '10.00');

  return {
    tokens: dailyUsage.tokens,
    cost: dailyUsage.cost,
    cap: budgetCap,
    percentUsed: (dailyUsage.cost / budgetCap) * 100,
    resetAt: new Date(dailyUsage.resetAt).toISOString()
  };
}
