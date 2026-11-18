function ChatHeader({ onClose, onMinimize, onClear }) {
  return (
    <div className="chat-header">
      <div className="chat-header-title">
        <h3>BerksAI Assistant</h3>
        <span className="chat-header-subtitle">Powered by AI</span>
      </div>
      <div className="chat-header-actions">
        <button
          className="chat-header-button"
          onClick={onClear}
          aria-label="Clear conversation"
          title="Clear conversation"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 6h10v7a1 1 0 01-1 1H4a1 1 0 01-1-1V6zM5 2h6l1 1v1H4V3l1-1z" />
          </svg>
        </button>
        <button
          className="chat-header-button"
          onClick={onMinimize}
          aria-label="Minimize chat"
          title="Minimize"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 8h10v1H3z" />
          </svg>
        </button>
        <button
          className="chat-header-button"
          onClick={onClose}
          aria-label="Close chat"
          title="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.5 3.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
