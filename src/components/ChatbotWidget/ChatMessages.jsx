import { useEffect, useRef } from 'react';

function ChatMessages({ messages, isLoading }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-message ${message.role === 'user' ? 'user' : 'assistant'} ${message.isError ? 'error' : ''}`}
        >
          <div className="message-content">
            {message.content}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="chat-message assistant">
          <div className="message-content typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;
