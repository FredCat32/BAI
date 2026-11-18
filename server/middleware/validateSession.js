import { validate as uuidValidate } from 'uuid';

export function validateSession(req, res, next) {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({
      error: { message: 'Session ID is required' }
    });
  }

  if (!uuidValidate(sessionId)) {
    return res.status(400).json({
      error: { message: 'Invalid session ID format' }
    });
  }

  next();
}
