import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact BerksAI | Free AI Consultation | Berks County, PA</title>
        <meta
          name="description"
          content="Contact BerksAI for a free consultation on on-site AI prompt training and consulting in Berks County. Call (267) 357-8007 or email matthew.irving@berksai.com"
        />
        <link rel="canonical" href="https://berksai.com/contact" />
        <meta property="og:title" content="Contact BerksAI | Free AI Consultation" />
        <meta property="og:description" content="Contact BerksAI for a free consultation on on-site AI prompt training and consulting in Berks County." />
        <meta property="og:url" content="https://berksai.com/contact" />
      </Helmet>
      <div className="container">
        <div className="contact-content">
          <h1>Get In Touch</h1>
          <p>
            Want to talk about training your team to get more out of AI, or whether AI
            is worth the money for your business? Send an email or give us a call. The
            first conversation is free.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:matthew.irving@berksai.com?subject=Free%20consultation%20request"
              className="cta-button-large"
            >
              Email us
            </a>
            <a href="tel:+12673578007" className="cta-button-secondary">
              Call (267) 357-8007
            </a>
          </div>

          <div className="alternative-contact">
            <h3>Details</h3>
            <p><strong>Email:</strong> <a href="mailto:matthew.irving@berksai.com">matthew.irving@berksai.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+12673578007">(267) 357-8007</a></p>
            <p><strong>Location:</strong> Oley, PA • On-site across Berks County and Eastern Pennsylvania</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact