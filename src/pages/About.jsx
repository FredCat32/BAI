import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About BerksAI</h1>
          <p>Empowering local businesses with cutting-edge AI solutions</p>
        </div>

        <div className="founder-section">
          <h2>Meet the Founder - Matthew Irving</h2>
          <div className="founder-content">
            <div className="founder-text">
              <h3>AI Technical Expertise</h3>
              <p>
                With a robust technical foundation spanning React, JavaScript, Python, C#, and 
                Langchain, I specialize in developing production-ready AI solutions that deliver 
                measurable business results. My expertise extends from front-end interfaces to 
                backend AI orchestration.
              </p>
              <p>
                I've architected and deployed sophisticated AI systems including intelligent chatbots 
                for customer service automation, AI-powered email agents that handle complex business 
                communications, and multi-step agentic workflows that streamline entire business 
                processes. These implementations have consistently reduced operational costs while 
                improving customer satisfaction and response times.
              </p>
              <p>
                My approach combines cutting-edge AI technology with practical business applications, 
                ensuring every solution integrates seamlessly with existing systems and delivers 
                immediate ROI. From natural language processing to automated decision-making workflows, 
                I bring enterprise-grade AI capabilities to businesses ready to embrace the future.
              </p>
            </div>
            
            <div className="founder-image">
              <img 
                src="/about-image.jpg" 
                alt="Matthew Irving - AI Consultant and Founder of BerksAI in Berks County Pennsylvania" 
                className="founder-photo"
              />
            </div>
          </div>
        </div>

        <div className="company-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At BerksAI, we believe that artificial intelligence shouldn't be exclusive to 
              large corporations. Our mission is to democratize AI technology and make it 
              accessible, practical, and profitable for local businesses of all sizes.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              While building AI products, I realized that I could contribute to advancing 
              Berks County and Eastern Pennsylvania by implementing AI in local businesses. 
              Many small companies in Berks County, King of Prussia, Philadelphia, and throughout 
              the region could benefit greatly from these technologies, but they don't know where 
              to begin—that's where I come in.
            </p>
            <p>
              Seeing this opportunity in the market and realizing I can help local companies 
              across Berks County and the broader Pennsylvania region, BerksAI was born.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              I've seen firsthand how AI can transform operations: chatbots that handle 
              customer inquiries 24/7, email agents that automatically sort and respond 
              to communications, and automated workflows that eliminate repetitive tasks. 
              These aren't futuristic concepts—they're practical solutions working right 
              now for businesses just like yours.
            </p>
            <p>
              We specialize in identifying opportunities where AI can make the biggest 
              impact on your business operations. From automating routine tasks to 
              enhancing customer experiences, we provide end-to-end AI solutions that 
              deliver measurable results.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Local Focus</h3>
              <p>We understand the unique challenges and opportunities of local businesses</p>
            </div>
            
            <div className="value-card">
              <h3>Practical Solutions</h3>
              <p>We deliver AI implementations that solve real problems and generate ROI</p>
            </div>
            
            <div className="value-card">
              <h3>Personal Service</h3>
              <p>Every client receives dedicated attention and customized solutions</p>
            </div>
            
            <div className="value-card">
              <h3>Ongoing Support</h3>
              <p>We're with you every step of the way, from planning to implementation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About