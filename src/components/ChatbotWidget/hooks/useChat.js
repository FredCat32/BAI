import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const API_URL = import.meta.env.VITE_API_URL || '/api';

function getOrCreateSessionId() {
  const stored = localStorage.getItem('chatbot_session_id');
  if (stored) {
    const session = JSON.parse(stored);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (now - session.createdAt < twentyFourHours) {
      return session.id;
    }
  }

  const newSessionId = uuidv4();
  localStorage.setItem('chatbot_session_id', JSON.stringify({
    id: newSessionId,
    createdAt: Date.now()
  }));

  return newSessionId;
}

export function useChat() {
  const [sessionId] = useState(() => getOrCreateSessionId());
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailCaptured, setEmailCaptured] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_messages_${sessionId}`);
    const savedEmailStatus = localStorage.getItem(`email_captured_${sessionId}`);

    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Failed to load saved messages:', e);
      }
    } else {
      fetchInitialGreeting();
    }

    if (savedEmailStatus === 'true') {
      setEmailCaptured(true);
    }
  }, [sessionId]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_messages_${sessionId}`, JSON.stringify(messages));
    }
  }, [messages, sessionId]);

  const fetchInitialGreeting = async () => {
    try {
      const response = await fetch(`${API_URL}/greeting`, {
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });
      
      if (!response.ok) {
        throw new Error('API unavailable');
      }
      
      const data = await response.json();

      setMessages([{
        role: 'assistant',
        content: data.message,
        timestamp: Date.now()
      }]);
    } catch (error) {
      console.error('Failed to fetch greeting:', error);
      // Fallback greeting when API is unavailable
      setMessages([{
        role: 'assistant',
        content: 'Hi! I\'m the BerksAI assistant. I\'m currently in development mode. For immediate assistance, please email matthew.irving@berksai.com or call (267) 357-8007.',
        timestamp: Date.now()
      }]);
    }
  };

  const sendMessage = useCallback(async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: messageText.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message: messageText.trim(),
          conversationHistory: messages
        }),
        signal: AbortSignal.timeout(15000) // 15 second timeout
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to send message');
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.message,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message);

      // Better error messages for common issues
      let errorContent;
      if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
        errorContent = 'The chatbot is taking too long to respond. Please try again or contact us directly at matthew.irving@berksai.com';
      } else if (error.message.includes('wait')) {
        errorContent = error.message;
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorContent = 'The chatbot service is currently unavailable. Please email matthew.irving@berksai.com or call (267) 357-8007 for immediate assistance.';
      } else {
        errorContent = 'Sorry, I encountered an error. Please email matthew.irving@berksai.com or call (267) 357-8007.';
      }

      const errorMessage = {
        role: 'assistant',
        content: errorContent,
        timestamp: Date.now(),
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, messages, isLoading]);

  const clearConversation = useCallback(() => {
    setMessages([]);
    setEmailCaptured(false);
    localStorage.removeItem(`chat_messages_${sessionId}`);
    localStorage.removeItem(`email_captured_${sessionId}`);
    fetchInitialGreeting();
  }, [sessionId]);

  const captureEmail = useCallback(async (name, email) => {
    try {
      const response = await fetch(`${API_URL}/capture-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          name,
          email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to submit email');
      }

      setEmailCaptured(true);
      localStorage.setItem(`email_captured_${sessionId}`, 'true');

      return { success: true, message: data.message };
    } catch (error) {
      console.error('Error capturing email:', error);
      return { success: false, message: error.message };
    }
  }, [sessionId]);

  return {
    messages,
    isLoading,
    error,
    emailCaptured,
    sendMessage,
    clearConversation,
    captureEmail,
    messageCount: messages.filter(m => m.role === 'user').length
  };
}
