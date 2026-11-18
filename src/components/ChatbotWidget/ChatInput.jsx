import { useState, useRef, useEffect } from 'react';
import { useRateLimit } from './hooks/useRateLimit';

const MAX_LENGTH = 1000;

function ChatInput({ onSendMessage, isLoading, messageCount }) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);
  const { canSend, cooldownRemaining, recordMessageSent, isAtLimit } = useRateLimit(messageCount);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading || !canSend) return;

    onSendMessage(input);
    setInput('');
    recordMessageSent();

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const canSubmit = input.trim() && !isLoading && canSend && !isAtLimit;

  return (
    <div className="chat-input-container">
      {!canSend && cooldownRemaining > 0 && (
        <div className="rate-limit-message">
          Please wait {cooldownRemaining} second{cooldownRemaining !== 1 ? 's' : ''} before sending another message
        </div>
      )}
      {isAtLimit && (
        <div className="rate-limit-message">
          You've reached the conversation limit. Please start a new conversation.
        </div>
      )}
      <form onSubmit={handleSubmit} className="chat-input-form">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="chat-input"
          disabled={isLoading || isAtLimit}
          rows={1}
        />
        <button
          type="submit"
          className="chat-send-button"
          disabled={!canSubmit}
          aria-label="Send message"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10l16-8-8 16-2-6-6-2z" />
          </svg>
        </button>
      </form>
      <div className="chat-input-footer">
        <span className="character-count">{input.length}/{MAX_LENGTH}</span>
      </div>
    </div>
  );
}

export default ChatInput;
