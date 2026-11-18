#!/bin/bash
# BerksAI Server Setup Script
# Run this ONCE on your DigitalOcean server to set up the backend

set -e

echo "🚀 BerksAI Server Setup"
echo "======================="
echo ""

# Check if running on server
if [ ! -d "/var/www/berksai" ]; then
    echo "❌ Error: This script should be run on the DigitalOcean server"
    echo "   Expected directory: /var/www/berksai"
    exit 1
fi

cd /var/www/berksai

# Install PM2 globally if not already installed
echo "📦 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo "✅ PM2 installed"
else
    echo "✅ PM2 already installed"
fi

# Create server/.env if it doesn't exist
if [ ! -f "server/.env" ]; then
    echo "⚙️  Creating server/.env file..."
    cat > server/.env << 'ENV_EOF'
# Backend environment variables
ANTHROPIC_API_KEY=your-api-key-here
PORT=3001
DAILY_BUDGET_CAP=10.00
ALERT_EMAIL=matthew.irving@berksai.com
NODE_ENV=production
ENV_EOF
    echo "✅ Created server/.env"
    echo "⚠️  IMPORTANT: Edit server/.env and add your Anthropic API key!"
else
    echo "✅ server/.env already exists"
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
npm install --production

# Start backend with PM2
echo "🔄 Starting backend with PM2..."
pm2 start server/index.js --name berksai-api || pm2 restart berksai-api
pm2 save
pm2 startup

echo ""
echo "✅ Backend setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit server/.env and add your Anthropic API key:"
echo "   nano /var/www/berksai/server/.env"
echo ""
echo "2. Update Nginx configuration:"
echo "   sudo nano /etc/nginx/sites-available/berksai.com"
echo "   (See nginx-config.conf for the complete configuration)"
echo ""
echo "3. Add the API proxy location block to your Nginx config:"
echo "   location /api {"
echo "       proxy_pass http://localhost:3001;"
echo "       proxy_http_version 1.1;"
echo "       proxy_set_header Host \$host;"
echo "       proxy_set_header X-Real-IP \$remote_addr;"
echo "       proxy_cache_bypass \$http_upgrade;"
echo "   }"
echo ""
echo "4. Test and reload Nginx:"
echo "   sudo nginx -t"
echo "   sudo systemctl reload nginx"
echo ""
echo "5. Restart the backend after adding API key:"
echo "   pm2 restart berksai-api"
echo ""
echo "6. Check backend status:"
echo "   pm2 status"
echo "   pm2 logs berksai-api"
echo ""
