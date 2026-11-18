import express from 'express';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { checkBudgetBeforeRequest, trackUsageAfterRequest, getDailyUsage } from '../middleware/budgetTracker.js';
import { validateSession } from '../middleware/validateSession.js';
import { generateChatResponse } from '../services/anthropicClient.js';
import { getSystemPrompt, getInitialGreeting } from '../services/knowledgeBase.js';

const router = express.Router();

router.post('/chat', validateSession, rateLimiter, checkBudgetBeforeRequest, async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        error: { message: 'Message is required and must be non-empty' }
      });
    }

    const messages = [
      ...conversationHistory.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message.trim()
      }
    ];

    const systemPrompt = getSystemPrompt();

    const response = await generateChatResponse(messages, systemPrompt);

    const usage = trackUsageAfterRequest(
      response.usage.inputTokens,
      response.usage.outputTokens
    );

    res.json({
      message: response.content,
      usage: {
        dailyUsed: usage.dailyUsed,
        dailyCap: usage.dailyCap,
        percentUsed: usage.percentUsed
      }
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);

    if (error.message.includes('API')) {
      return res.status(503).json({
        error: { message: error.message }
      });
    }

    res.status(500).json({
      error: { message: 'An error occurred while processing your message. Please try again.' }
    });
  }
});

router.get('/greeting', (req, res) => {
  res.json({
    message: getInitialGreeting()
  });
});

router.get('/usage', (req, res) => {
  const usage = getDailyUsage();
  res.json(usage);
});

router.post('/capture-email', validateSession, async (req, res) => {
  try {
    const { name, email, sessionId } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: { message: 'Name and email are required' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: { message: 'Invalid email format' }
      });
    }

    console.log('Email captured:', { name, email, sessionId, timestamp: new Date().toISOString() });

    res.json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });
  } catch (error) {
    console.error('Email capture error:', error);
    res.status(500).json({
      error: { message: 'Failed to save email. Please try the contact form instead.' }
    });
  }
});

export default router;
