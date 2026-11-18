import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useChat } from './hooks/useChat';
import ChatToggleButton from './ChatToggleButton';
import ChatWindow from './ChatWindow';
import './ChatbotWidget.css';

function ChatbotWidget() {
  const [isExpanded, setIsExpanded] = useLocalStorage('chatbot_expanded', false);
  const chatHookData = useChat();
  const location = useLocation();
  const isFirstRender = useRef(true);

  // Auto-minimize chatbot when navigating to a new page (but not on initial load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Only minimize if it's actually expanded
    if (isExpanded) {
      setIsExpanded(false);
    }
  }, [location.pathname]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {!isExpanded && <ChatToggleButton onClick={handleToggle} />}
      {isExpanded && (
        <ChatWindow
          {...chatHookData}
          onClose={handleClose}
          onMinimize={handleClose}
        />
      )}
    </>
  );
}

export default ChatbotWidget;
