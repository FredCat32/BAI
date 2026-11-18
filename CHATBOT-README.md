# BerksAI Chatbot Widget

> **Status (Nov 2026): disabled.** The site now runs on Vercel as a static app. The chatbot widget is not mounted in `src/App.jsx` and the Express backend is not deployed. The old DigitalOcean server that ran it (Nginx + PM2) was decommissioned, so the PM2/Nginx instructions that used to be in this file no longer apply.
>
> **Why it can't just be switched back on:** `server/middleware/rateLimiter.js` and `budgetTracker.js` keep their state in memory, which does not survive between Vercel serverless invocations. To bring the chatbot back, either:
> 1. Convert `server/routes/chat.js` into Vercel serverless functions under `api/` and move rate-limit and budget state to external storage (for example Vercel KV or Upstash Redis), or
> 2. Host the Express backend separately (Railway, Render, Fly.io), set `ANTHROPIC_API_KEY` and `DAILY_BUDGET_CAP` there, allow `https://berksai.com` in CORS, and point the widget's API base URL at it.
>
> Then re-add `<ChatbotWidget />` to `src/App.jsx`.
>
> **Before re-enabling:** update `server/services/knowledgeBase.js`. It still describes the old "AI automation consulting" positioning and quotes price ranges and timelines that are no longer published on the site. It should reflect the current offering: on-site prompt training first, ROI focus, and no invented figures or client claims. Also restyle `ChatbotWidget.css` for the current off-white theme; it was written for the old dark theme.

AI-powered chatbot for lead generation and customer support on the BerksAI website.

## Features

✅ **AI-Powered Responses** - Uses Claude Haiku 4.5 (`claude-haiku-4-5`) for fast, accurate answers
✅ **Lead Capture** - Collects email after 3 message exchanges
✅ **Mobile Responsive** - Full-screen on mobile, floating widget on desktop
✅ **Spam Protection** - Multi-layer rate limiting
✅ **Cost Control** - Daily budget caps with monitoring
✅ **Conversation Persistence** - Saves chat across page navigation
✅ **Knowledge Base** - Pre-loaded with company info, services, pricing

## Quick Start (Development)

```bash
# Run both frontend and backend
npm run dev:all

# Or separately:
npm run dev:server  # Backend on port 3001
npm run dev         # Frontend on port 5173
```

## Deployment

The chatbot is currently not deployed. See the status note at the top of this file for how to bring it back, and [DEPLOYMENT.md](DEPLOYMENT.md) for how the static site is deployed. `deploy.sh` is legacy and targets the decommissioned server.

## Configuration

### Backend Environment Variables
Edit `server/.env`:
```env
ANTHROPIC_API_KEY=sk-ant-xxxxx  # Your Anthropic API key
PORT=3001                        # Backend port
DAILY_BUDGET_CAP=10.00          # Daily spend limit in USD
ALERT_EMAIL=your@email.com      # Budget alert notifications
NODE_ENV=production             # Environment
```

### Rate Limits
Default limits (edit `server/middleware/rateLimiter.js`):
- 2 second cooldown between messages
- 20 messages/hour per IP
- 100 messages/day per IP
- 30 messages/hour per session
- 50 messages max per conversation
- 1000 character message limit

### Budget Monitoring
- Alerts at 50%, 75%, 90% of daily budget
- Automatic shutoff at 100%
- Real-time cost tracking in server logs
- API endpoint: `/api/usage`

## Architecture

### Backend (Express.js)
```
server/
├── index.js                    # Express server
├── routes/chat.js             # Chat API endpoint
├── middleware/
│   ├── rateLimiter.js         # Rate limiting
│   ├── budgetTracker.js       # Cost tracking
│   └── validateSession.js     # Session validation
└── services/
    ├── anthropicClient.js     # Claude API integration
    └── knowledgeBase.js       # Company information
```

### Frontend (React)
```
src/components/ChatbotWidget/
├── ChatbotWidget.jsx          # Main component
├── ChatWindow.jsx             # Chat interface
├── ChatMessages.jsx           # Message display
├── ChatInput.jsx              # Input with rate limiting
├── ChatHeader.jsx             # Header with controls
├── ChatToggleButton.jsx       # Floating button
├── EmailCapture.jsx           # Lead capture form
├── ChatbotWidget.css          # Styles
└── hooks/
    ├── useChat.js             # Chat state management
    ├── useLocalStorage.js     # Persistence
    └── useRateLimit.js        # Client-side throttling
```

## API Endpoints

### POST /api/chat
Send a message to the chatbot.

**Request:**
```json
{
  "sessionId": "uuid-v4",
  "message": "What services do you offer?",
  "conversationHistory": [...]
}
```

**Response:**
```json
{
  "message": "We offer workflow automation, AI chatbots...",
  "usage": {
    "dailyUsed": 1.25,
    "dailyCap": 10.00,
    "percentUsed": 12.5
  }
}
```

### GET /api/greeting
Get the initial greeting message.

### GET /api/usage
Get current daily budget usage.

### POST /api/capture-email
Capture visitor email for lead generation.

**Request:**
```json
{
  "sessionId": "uuid-v4",
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Monitoring

*Applies only once the backend is hosted again.* Use your host's log viewer (Vercel Functions logs, Railway/Render logs) instead of the old PM2 commands.

**Check API Health:** `GET /health` on the backend

**View Budget Usage:** `GET /api/usage` on the backend

**Server Logs Show:**
```
API call: 245 in + 120 out = $0.0025 | Daily total: $1.25 / $10.00
⚠️  BUDGET ALERT: 50% of daily budget used ($5.00 / $10.00)
```

## Customization

### Update Company Information
Edit `server/services/knowledgeBase.js`:
- Services offered
- Pricing information
- Contact details
- AI behavior and tone

### Adjust Styling
Edit `src/components/ChatbotWidget/ChatbotWidget.css`:
- Colors (uses CSS variables: --color-red, --color-gray)
- Widget size and position
- Mobile responsiveness
- Button styles

### Modify Rate Limits
Edit `server/middleware/rateLimiter.js`:
```javascript
const LIMITS = {
  IP_HOURLY: 20,           // Increase for more traffic
  IP_DAILY: 100,
  SESSION_HOURLY: 30,
  MESSAGE_COOLDOWN: 2000,  // Milliseconds
  MAX_MESSAGE_LENGTH: 1000
};
```

## Email Capture Integration

Currently logs to console. To integrate with your CRM/email service:

**Edit `server/routes/chat.js`:**
```javascript
router.post('/capture-email', async (req, res) => {
  const { name, email, sessionId } = req.body;

  // Add your integration here:
  // - Send to Mailchimp
  // - Add to HubSpot
  // - Save to database
  // - Send notification email

  console.log('Email captured:', { name, email });
});
```

## Security Features

✅ **API Key Protection** - Never exposed to frontend
✅ **Session Validation** - UUID v4 format required
✅ **Rate Limiting** - Multiple layers (IP, session, behavior)
✅ **Input Sanitization** - Message length limits, validation
✅ **CORS Restrictions** - Only berksai.com domain allowed
✅ **Budget Caps** - Prevents runaway costs
✅ **Duplicate Detection** - Blocks repeated messages

## Cost Estimation

**Claude Haiku pricing (confirm against Anthropic's current rates; `server/middleware/budgetTracker.js` currently assumes $3 / $15 per million input / output tokens):**
- Input: $0.003 per 1M tokens
- Output: $0.015 per 1M tokens

**Average Conversation (5 messages):**
- ~1,500 tokens total
- Cost: ~$0.01 - $0.03

**Expected Monthly Cost:**
- 500 conversations: $10-15
- 1000 conversations: $20-30
- 2000 conversations: $40-60

## Troubleshooting

**Chatbot not appearing:**
- Check browser console for errors
- Verify backend is running: `pm2 status`
- Test API: `curl http://localhost:3001/health`

**Messages not sending:**
- Check rate limiting (2 sec cooldown)
- Verify Anthropic API key in `server/.env`
- Check PM2 logs: `pm2 logs berksai-api`

**Budget exceeded:**
- Increase in `server/.env`: `DAILY_BUDGET_CAP=20.00`
- Restart backend: `pm2 restart berksai-api`

**502 Bad Gateway:**
- Backend not running or crashed
- Check: `pm2 status` and `pm2 logs berksai-api`
- Restart: `pm2 restart berksai-api`

## Future Enhancements

Ideas for V2:
- [ ] Upgrade to Redis for distributed rate limiting
- [ ] Analytics dashboard (messages, costs, conversions)
- [ ] CRM integration (HubSpot, Salesforce)
- [ ] A/B testing different greetings
- [ ] Voice input (Web Speech API)
- [ ] RAG integration (search blog posts)
- [ ] Lead scoring
- [ ] Calendar integration for booking consultations
- [ ] Multi-language support

## Support

**Documentation:**
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [nginx-config.conf](nginx-config.conf) - Nginx configuration
- `server/.env.example` - Environment variable template

**Commands:**
```bash
npm run dev:all         # Run locally
./deploy.sh            # Deploy to server
pm2 logs berksai-api   # View logs
```
