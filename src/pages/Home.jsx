import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
        <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Automation & Consulting for Berks County Businesses</h1>
            <p>
              We help Pennsylvania businesses automate repetitive workflows—client intake, 
              follow-ups, scheduling, and more—using custom AI solutions that save time and money.
            </p>
            <p className="local-badge">
              📍 Based in Oley, PA • Serving Reading & Berks County
            </p>
            <Link 
              to="https://forms.berksai.com/forms/QLA1OKsAhBwX5HWGyJap0" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Services</h2>
          <h3 className="section-intro hero-content">
            We build custom AI and automation systems designed around your business—
            from simple workflows to advanced AI agents.
          </h3>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Workflow Automation</h3>
              <p>
                Automated systems for client intake, lead follow-ups, appointment 
                scheduling, and multi-step processes that eliminate manual work.
              </p>
            </div>
            
            <div className="service-card">
              <h3>AI Chatbots & Assistants</h3>
              <p>
                Custom chatbots for your website that handle customer inquiries, 
                schedule appointments, and provide support 24/7.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Document Processing & Extraction</h3>
              <p>
                AI-powered systems that read, extract, and organize information from 
                PDFs, invoices, contracts, and forms automatically.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Email & Communication Automation</h3>
              <p>
                Intelligent email systems that sort messages, send automatic responses, 
                and manage client communications without manual intervention.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Custom AI Solutions</h3>
              <p>
                Specialized AI systems tailored to your business—including knowledge 
                bases, intelligent agents, and custom-trained models.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Integration & Support</h3>
              <p>
                Complete implementation, team training, and ongoing support to ensure 
                your automation systems work seamlessly with your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
  <div className="container">
    <div className="about-simple">
      <h2>Why Work With BerksAI</h2>
      <ul className="value-list">
        <li>
          <strong>Local & Accessible:</strong> Based in Oley, serving Berks County with hands-on support
        </li>
        <li>
          <strong>Custom Solutions:</strong> Tailored automation systems, not cookie-cutter templates
        </li>
        <li>
          <strong>Practical Focus:</strong> We build what works—if it doesn't save time or money, we don't build it
        </li>
        <li>
          <strong>Full Support:</strong> From consultation through ongoing maintenance, we're with you
        </li>
      </ul>
    </div>
  </div>
</section>

      <section className="footer-highlights">
        <div className="container">
      
        </div>
      </section>
    </div>
  )
}

export default Home