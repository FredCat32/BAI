# BerksAI Chatbot Deployment Guide

This guide will help you deploy the chatbot to your DigitalOcean server.

## Prerequisites

- SSH access to your DigitalOcean server (configured as `berksai` in SSH config)
- Anthropic API key
- Nginx installed on server

## One-Time Server Setup

**Step 1: Copy setup script to server**
```bash
scp server-setup.sh berksai:/var/www/berksai/
```

**Step 2: SSH into server and run setup**
```bash
ssh berksai
cd /var/www/berksai
./server-setup.sh
```

**Step 3: Add your Anthropic API key**
```bash
nano /var/www/berksai/server/.env
```

Replace `your-api-key-here` with your actual API key:
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

Save and exit (Ctrl+X, Y, Enter)

**Step 4: Update Nginx configuration**
```bash
sudo nano /etc/nginx/sites-available/berksai.com
```

Add this location block inside your `server` block (before the existing `location /` block):
```nginx
# API proxy to Express backend
location /api {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

**Step 5: Test and reload Nginx**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

**Step 6: Restart backend**
```bash
pm2 restart berksai-api
```

**Step 7: Verify everything is running**
```bash
# Check PM2 status
pm2 status

# Check backend logs
pm2 logs berksai-api --lines 50

# Test API endpoint
curl http://localhost:3001/health
```

You should see: `{"status":"ok","timestamp":"..."}`

## Regular Deployments

After the one-time setup, deploying updates is simple:

```bash
./deploy.sh
```

This script will:
1. Build the React frontend
2. Deploy frontend files to server
3. Deploy backend files to server
4. Install/update backend dependencies
5. Restart the backend with PM2

## Monitoring

**Check backend status:**
```bash
ssh berksai
pm2 status
pm2 logs berksai-api
```

**Check API usage:**
```bash
curl https://berksai.com/api/usage
```

**Monitor costs:**
Backend logs show real-time cost tracking:
```
API call: 245 in + 120 out = $0.0025 | Daily total: $1.25 / $10.00
```

## Managing PM2

**Useful PM2 commands:**
```bash
pm2 status              # View all processes
pm2 logs berksai-api    # View logs
pm2 restart berksai-api # Restart backend
pm2 stop berksai-api    # Stop backend
pm2 start berksai-api   # Start backend
pm2 delete berksai-api  # Remove from PM2
```

**PM2 will auto-start on server reboot** (configured by `pm2 startup`)

## Troubleshooting

**Backend not starting:**
```bash
# Check logs for errors
pm2 logs berksai-api --err

# Common issues:
# 1. Missing API key in server/.env
# 2. Port 3001 already in use
# 3. Missing dependencies (run: npm install)
```

**Chatbot not loading:**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Check Nginx is proxying /api
sudo nginx -t
curl https://berksai.com/api/health

# 3. Check browser console for errors
```

**Rate limiting too strict:**
Edit `/var/www/berksai/server/middleware/rateLimiter.js` and increase limits.

**Budget exceeded:**
Edit `/var/www/berksai/server/.env` and increase `DAILY_BUDGET_CAP`.

## Files Reference

- `deploy.sh` - Deployment script (run locally)
- `server-setup.sh` - One-time server setup (run on server)
- `nginx-config.conf` - Complete Nginx configuration reference
- `server/.env` - Backend environment variables (on server)

## Testing Before Deployment

**Local testing:**
```bash
# Terminal 1 - Backend
npm run dev:server

# Terminal 2 - Frontend
npm run dev

# Open: http://localhost:5173
```

## Security Checklist

- ✅ Anthropic API key in server/.env (not committed to git)
- ✅ server/.env in .gitignore
- ✅ Rate limiting enabled
- ✅ Daily budget cap configured
- ✅ CORS restricted to berksai.com
- ✅ PM2 running as non-root user

## Success Verification

After deployment, verify:

1. **Frontend loads:** https://berksai.com
2. **Chat button appears:** Red circle in bottom-right
3. **API health check:** https://berksai.com/api/health
4. **Send test message:** Click chat button, send a message
5. **Check logs:** `pm2 logs berksai-api` shows API call with costs

## Support

If you encounter issues:
1. Check PM2 logs: `pm2 logs berksai-api`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Test API directly: `curl http://localhost:3001/api/health`
