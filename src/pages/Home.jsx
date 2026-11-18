import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

const CONTACT_URL = 'https://forms.berksai.com/forms/QLA1OKsAhBwX5HWGyJap0'

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>BerksAI | AI Prompt Training & Consulting in Berks County, PA</title>
        <meta
          name="description"
          content="Hands-on AI prompt training and consulting for Pennsylvania businesses. Get real value from the AI tools you already pay for. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/" />
        <meta property="og:title" content="BerksAI | AI Prompt Training & Consulting in Berks County, PA" />
        <meta property="og:description" content="Hands-on AI prompt training and consulting for Pennsylvania businesses. Get real value from the AI tools you already pay for." />
        <meta property="og:url" content="https://berksai.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Oley, PA &middot; Serving Berks County and Eastern Pennsylvania</p>
          <h1>Protect your AI investment.</h1>
          <p className="hero-subtitle">
            Most businesses are already paying for AI tools. The difference between a
            subscription that gets used and one that doesn't usually comes down to how
            well your team knows how to ask. We train your people to write prompts that
            work, and help you decide where AI is worth the money.
          </p>
          <div className="hero-actions">
            <a
              href={CONTACT_URL}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free consultation
            </a>
            <Link to="/about" className="text-link">About BerksAI &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container feature-grid">
          <div>
            <h2>Prompt training for your team</h2>
            <p className="lead">
              Hands-on sessions built around the work your team actually does, not
              generic examples.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <strong>Prompts for your real tasks.</strong> Emails, proposals, reports,
              customer replies, and whatever else eats your week.
            </li>
            <li>
              <strong>A shared prompt library.</strong> Tested templates your whole team
              can reuse, so results don't depend on who happens to be good at it.
            </li>
            <li>
              <strong>Knowing the limits.</strong> Where AI is reliable, where it makes
              things up, and what should never go into a chat window.
            </li>
            <li>
              <strong>Written reference.</strong> Everything documented so training
              sticks after the session ends.
            </li>
          </ul>
        </div>
      </section>

      <section className="feature alt">
        <div className="container feature-grid">
          <div>
            <h2>An honest look before you spend</h2>
            <p className="lead">
              Sometimes the right answer is a better prompt, a different tool, or no AI
              at all. We'll tell you which.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <strong>Review of what you're paying for.</strong> Which tools your team
              uses, which they don't, and why.
            </li>
            <li>
              <strong>Plain-language recommendations.</strong> Costs, tradeoffs, and a
              realistic timeline before anything gets built.
            </li>
            <li>
              <strong>Small pilots first.</strong> Prove it works on one process before
              committing to more.
            </li>
          </ul>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Also available</h2>
          <p className="section-intro">
            When training and strategy point to something worth building, we build it.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Workflow automation</h3>
              <p>
                Client intake, follow-ups, scheduling, and other repetitive multi-step
                processes.
              </p>
            </div>
            <div className="service-card">
              <h3>Custom AI assistants</h3>
              <p>
                Chatbots and internal assistants trained on your own documents and
                policies.
              </p>
            </div>
            <div className="service-card">
              <h3>Document processing</h3>
              <p>
                Pull structured information out of PDFs, invoices, contracts, and forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature alt">
        <div className="container">
          <div className="about-simple">
            <h2>Why work with BerksAI</h2>
            <ul className="value-list">
              <li>
                <strong>Local and accessible:</strong> Based in Oley, with in-person
                sessions across Berks County.
              </li>
              <li>
                <strong>Practical focus:</strong> If it won't save you time or money,
                we'll say so.
              </li>
              <li>
                <strong>Built around your work:</strong> Training and solutions
                tailored to your business, not a template.
              </li>
              <li>
                <strong>Ongoing support:</strong> Questions don't stop when the
                engagement does.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="blog-highlight">
        <div className="container">
          <div className="blog-cta">
            <h2>From the blog</h2>
            <div className="featured-post">
              <h3>
                <Link to="/blog/what-i-learned-helping-pennsylvania-businesses-implement-ai">
                  What I Learned Helping Pennsylvania Businesses Implement AI
                </Link>
              </h3>
              <p>
                What actually works, what doesn't, and what to know before spending
                a dime on AI. Honest talk about costs, timelines, and ROI.
              </p>
              <Link to="/blog" className="blog-link">
                Read more articles &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas does BerksAI serve?</h3>
              <p>
                We're based in Oley, PA and serve Berks County (Reading, Wyomissing,
                Oley), Montgomery County (King of Prussia, Norristown), Philadelphia
                and the Main Line, as well as Lancaster, Lehigh, Chester, and Delaware
                counties. We also work remotely.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do we need technical knowledge?</h3>
              <p>
                No. Training is aimed at non-technical staff, and we handle any
                technical implementation ourselves.
              </p>
            </div>

            <div className="faq-item">
              <h3>What types of businesses can benefit?</h3>
              <p>
                Any business where people spend time on writing, customer
                communication, scheduling, or data entry. A free consultation will tell
                you quickly whether AI is a good fit.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I get started?</h3>
              <p>
                Call 267-357-8007 or use the contact form to book a free consultation.
                We'll talk through your situation and outline next steps. No
                commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
