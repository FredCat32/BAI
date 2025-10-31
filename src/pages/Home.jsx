import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Intelligent Automation for Growing Businesses</h1>
            <p>
            Enterprise-Grade Solutions, Local Service
            </p>
            <br />
            <p>
            Smart AI solutions that eliminate repetitive tasks, reduce operational costs, 
            and free your team to focus on strategic growth.
            </p>
            <br />
           
            <p>
            We don't believe in one-size-fits-all automation. Our AI solutions are 
            tailored to your workflows, integrated seamlessly with your existing systems, 
            and designed to deliver measurable ROI from day one.
            </p>
            <Link to="/contact" className="cta-button">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Intelligent Chatbots</h3>
              <p>
                24/7 customer service that handles inquiries, schedules appointments, 
                and provides instant support while you focus on growing your business.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Email Automation Agents</h3>
              <p>
                AI-powered systems that sort, categorize, and respond to emails 
                automatically, dramatically reducing your administrative workload.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Workflow Automation</h3>
              <p>
                Multi-step automated processes that handle everything from lead 
                qualification to invoice processing, saving hours of manual work daily.
              </p>
            </div>
            
            <div className="service-card">
              <h3>AI Strategy & Implementation</h3>
              <p>
                From initial consultation to full deployment, I guide you through 
                every step with hands-on support and seamless integration.
              </p>
            </div>
            
            <div className="service-card">
              <h3>AI Training & Support</h3>
              <p>
                Comprehensive training for your team and ongoing support to ensure 
                successful AI adoption and maximum ROI from your investment.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Document Processing</h3>
              <p>
                AI-powered systems that read, extract, and process information from 
                invoices, contracts, and documents automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2>Why Choose BerksAI?</h2>
            <p>
              Many small companies in Berks County could benefit greatly from AI, but they 
              don't know where to begin—that's where I come in. With extensive experience 
              in React, Python, Langchain, and advanced AI implementations, I bring 
              enterprise-level capabilities to local businesses.
            </p>
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