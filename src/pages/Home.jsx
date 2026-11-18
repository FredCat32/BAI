import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>BerksAI | Protect Your AI Investment with Expert Prompt Engineering</title>
        <meta
          name="description"
          content="Professional AI consulting and prompt engineering for Pennsylvania businesses. Protect your AI investment with expert strategy, custom prompt optimization, and honest ROI assessments. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/" />
        <meta property="og:title" content="BerksAI | Protect Your AI Investment with Expert Prompt Engineering" />
        <meta property="og:description" content="Expert AI consulting and prompt engineering. Protect your AI investment with proven strategies and honest ROI assessments." />
        <meta property="og:url" content="https://berksai.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
        <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Professional AI Consulting</div>
            <h1>Protect Your AI Investment</h1>
            <p className="hero-subtitle">
              Expert prompt engineering and AI strategy for Pennsylvania businesses.
              Don't waste money on AI that doesn't deliver—get it right from the start.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">80%</div>
                <div className="stat-label">AI Projects Fail</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$47K</div>
                <div className="stat-label">Average Wasted Investment</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6 Months</div>
                <div className="stat-label">Time Lost to Poor Implementation</div>
              </div>
            </div>
            <Link 
              to="https://forms.berksai.com/forms/QLA1OKsAhBwX5HWGyJap0" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Schedule a Consultation
            </Link>
            <p className="local-badge">
              📍 Based in Oley, PA • Serving Berks County, Reading, King of Prussia, Philadelphia & Beyond
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Specialized AI Services</h2>
          <h3 className="section-intro">
            We ensure your AI investment delivers measurable results through expert engineering and strategic implementation.
          </h3>
          
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">🎯</div>
              <h3>Prompt Engineering & Optimization</h3>
              <p>
                Expert prompt design that makes AI actually work for your business. We engineer, test, 
                and optimize prompts to deliver consistent, accurate results—not generic responses.
              </p>
              <ul className="service-benefits">
                <li>Custom prompt templates for your workflows</li>
                <li>A/B testing and performance optimization</li>
                <li>Documentation and training for your team</li>
              </ul>
            </div>
            
            <div className="service-card featured">
              <div className="service-icon">🛡️</div>
              <h3>AI Strategy & ROI Protection</h3>
              <p>
                Honest assessment of where AI will help your business and where it won't. We prevent 
                expensive mistakes and ensure you invest in solutions that actually deliver returns.
              </p>
              <ul className="service-benefits">
                <li>Cost-benefit analysis before implementation</li>
                <li>Realistic timeline and expectation setting</li>
                <li>Proof-of-concept before full investment</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>Custom AI Assistants</h3>
              <p>
                AI chatbots and assistants trained on your business data, designed to handle real 
                customer inquiries with accurate, helpful responses 24/7.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Workflow Automation</h3>
              <p>
                Intelligent automation for client intake, scheduling, follow-ups, and multi-step 
                processes that eliminate repetitive manual work.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>Document Intelligence</h3>
              <p>
                AI-powered document processing that extracts and organizes information from 
                PDFs, invoices, contracts, and forms automatically.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>Integration & Training</h3>
              <p>
                Complete implementation with your existing tools, comprehensive team training, 
                and ongoing support to ensure long-term success.
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