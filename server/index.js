import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import chatRouter from './routes/chat.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from the server directory (works both locally and in production)
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://berksai.com', 'https://www.berksai.com']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json({ limit: '10kb' }));

app.use('/api', chatRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 BerksAI chatbot server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
