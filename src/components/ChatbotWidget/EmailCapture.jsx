import { useState } from 'react';

function EmailCapture({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const result = await onSubmit(name.trim(), email.trim());

    if (result.success) {
      setMessage('Thanks! We\'ll be in touch soon.');
      setTimeout(() => {
        setIsDismissed(true);
      }, 2000);
    } else {
      setMessage(result.message || 'Failed to submit. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="email-capture">
      <button
        className="email-capture-dismiss"
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss"
      >
        ×
      </button>
      <h4>Stay Connected</h4>
      <p>Leave your contact info and we'll follow up with more details about how we can help.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          className="email-capture-input"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="email-capture-input"
        />
        {message && (
          <div className={`email-capture-message ${message.includes('Thanks') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="email-capture-submit"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default EmailCapture;
