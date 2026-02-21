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
              We help Berks County and Pennsylvania businesses automate repetitive workflows—client intake, 
              follow-ups, scheduling, and more—using custom AI solutions that save time and money.
            </p>
            <p className="local-badge">
              📍 Based in Oley, PA • Serving Berks County, Reading, King of Prussia, Philadelphia & Beyond
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

      <section className="blog-highlight">
        <div className="container">
          <div className="blog-cta">
            <h2>Latest from the BerksAI Blog</h2>
            <p>
              Practical AI insights and automation tips for Pennsylvania businesses
            </p>
            <div className="featured-post">
              <h3>
                <Link to="/blog/what-i-learned-helping-pennsylvania-businesses-implement-ai">
                  What I Learned Helping Pennsylvania Businesses Implement AI
                </Link>
              </h3>
              <p>
                Real insights from working with local Berks County businesses—what actually works, 
                what doesn't, and what you should know before spending a dime on AI. Honest talk 
                about costs, timelines, and ROI.
              </p>
              <Link to="/blog" className="blog-link">
                Read More Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas does BerksAI serve?</h3>
              <p>
                We're based in Oley, PA and serve Berks County (Reading, Wyomissing, Oley), 
                Montgomery County (King of Prussia, Norristown), Philadelphia and the Main Line 
                suburbs, as well as Lancaster, Lehigh, Chester, and Delaware counties. We work 
                with businesses throughout Eastern Pennsylvania and remotely across the state 
                and beyond.
              </p>
            </div>

            <div className="faq-item">
              <h3>How much does AI automation cost?</h3>
              <p>
                Project costs vary based on complexity. A basic AI chatbot starts around 
                $2,500-5,000, workflow automation systems range from $5,000-15,000, and 
                custom enterprise solutions start at $15,000+. We offer free consultations 
                to provide accurate quotes based on your specific needs.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does implementation take?</h3>
              <p>
                Most projects take 2-6 weeks from initial consultation to launch. Simple 
                chatbot implementations can be completed in 2-3 weeks, while complex workflow 
                automation or custom AI systems may take 4-8 weeks. We provide detailed 
                timelines during the consultation phase.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do I need technical knowledge to use AI?</h3>
              <p>
                Not at all. We handle all the technical implementation and provide complete 
                training for your team. Our solutions are designed to be user-friendly and 
                integrate seamlessly with your existing tools. We also provide ongoing support 
                to ensure everything runs smoothly.
              </p>
            </div>

            <div className="faq-item">
              <h3>What types of businesses can benefit from AI?</h3>
              <p>
                Any business with repetitive workflows can benefit. We've helped HVAC companies, 
                contractors, professional services, retail businesses, healthcare providers, and 
                more. If you're spending time on manual tasks like customer service, email 
                management, scheduling, or data entry, AI can help.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I get started?</h3>
              <p>
                Book a free consultation call at 267-357-8007 or through our contact form. 
                We'll discuss your business challenges, identify automation opportunities, 
                and provide a customized roadmap with cost estimates. No commitment required.
              </p>
            </div>
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