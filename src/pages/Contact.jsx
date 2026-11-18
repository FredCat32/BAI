import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact BerksAI | Free AI Consultation | Berks County, PA</title>
        <meta
          name="description"
          content="Contact BerksAI for a free consultation. AI automation and consulting services in Berks County. Call (267) 357-8007 or email matthew.irving@berksai.com"
        />
        <link rel="canonical" href="https://berksai.com/contact" />
        <meta property="og:title" content="Contact BerksAI | Free AI Consultation" />
        <meta property="og:description" content="Contact BerksAI for a free consultation. AI automation and consulting services in Berks County." />
        <meta property="og:url" content="https://berksai.com/contact" />
      </Helmet>
      <div className="container">
        <div className="contact-content">
          <h1>Get In Touch</h1>
          <p>
            Interested in learning how automation could help your business? 
            Fill out our contact form and we'll get back to you within 24 hours.
          </p>
          
          <a 
            href="https://forms.berksai.com/forms/QLA1OKsAhBwX5HWGyJap0"
            className="cta-button-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill Out Contact Form → 
          </a>
          
          <div className="alternative-contact">
            <h3>Or reach out directly:</h3>
            <p><strong>Email:</strong> matthew.irving@berksai.com</p>
            <p><strong>Phone:</strong> (267) 357-8007</p>
            <p><strong>Location:</strong> Oley, PA • Serving Berks County</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact