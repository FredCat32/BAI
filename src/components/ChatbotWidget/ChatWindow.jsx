import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import EmailCapture from './EmailCapture';

function ChatWindow({
  messages,
  isLoading,
  sendMessage,
  clearConversation,
  captureEmail,
  emailCaptured,
  messageCount,
  onClose,
  onMinimize
}) {
  const shouldShowEmailCapture = messageCount >= 3 && !emailCaptured;

  return (
    <div className="chat-window">
      <ChatHeader
        onClose={onClose}
        onMinimize={onMinimize}
        onClear={clearConversation}
      />
      <div className="chat-body">
        <ChatMessages messages={messages} isLoading={isLoading} />
        {shouldShowEmailCapture && (
          <EmailCapture onSubmit={captureEmail} />
        )}
      </div>
      <ChatInput
        onSendMessage={sendMessage}
        isLoading={isLoading}
        messageCount={messageCount}
      />
    </div>
  );
}

export default ChatWindow;
