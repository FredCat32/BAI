import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>BerksAI | On-Site AI Prompt Training & Consulting in Berks County, PA</title>
        <meta
          name="description"
          content="On-site AI prompt training focused on ROI, plus AI strategy, machine learning, and automation for Pennsylvania businesses. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/" />
        <meta property="og:title" content="BerksAI | On-Site AI Prompt Training & Consulting in Berks County, PA" />
        <meta property="og:description" content="On-site AI prompt training focused on ROI. Microsoft Copilot, ChatGPT, Claude, Gemini, and more." />
        <meta property="og:url" content="https://berksai.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Oley, PA &middot; Serving Berks County and Eastern Pennsylvania</p>
          <h1>Protect your AI investment.</h1>
          <p className="hero-subtitle">
            Most businesses are already paying for AI tools. Whether that spend pays off
            depends on how well your team uses them. We come to your office and train
            your people to get reliable, repeatable results, then help you decide where
            else AI is worth the money.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="cta-button">
              Book a free consultation
            </Link>
            <Link to="/about" className="text-link">About BerksAI &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container feature-grid">
          <div>
            <p className="eyebrow">Our #1 service</p>
            <h2>On-site prompt training for your team</h2>
            <p className="lead">
              We come to you. Hands-on sessions built around the work your team actually
              does, delivered by people experienced in AI training, with a focus on
              return on the tools you've already bought.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <strong>Aimed at ROI.</strong> We start with the tasks that cost your team the
              most time and train against those first, so the payoff is easy to see.
            </li>
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
            <h2>We measure it, so nobody is guessing</h2>
            <p className="lead">
              Before we train anyone, we look at how your team works today. Afterward,
              we check again. You see what changed and what didn't. Sometimes the right
              answer is a better prompt, a different tool, or no AI at all, and we'll
              say so.
            </p>
          </div>
          <ul className="check-list">
            <li>
              <strong>A look at what's in use today.</strong> Which AI tools your team has,
              who uses them, what for, and which ones are going unused.
            </li>
            <li>
              <strong>A baseline on real tasks.</strong> We time a few routine tasks and
              note how much rework they need, so there's something to compare against.
            </li>
            <li>
              <strong>Training on those same tasks.</strong> Hands-on, built around your
              own emails, documents, and procedures.
            </li>
            <li>
              <strong>A follow-up measurement.</strong> Time, rework, and quality on the
              same tasks, plus how often the tools are actually used, in a short written
              summary.
            </li>
            <li>
              <strong>A clear next step.</strong> More training, a different tool, or
              nothing further. If something didn't help, we'll tell you to drop it.
            </li>
          </ul>
        </div>
      </section>

      <section className="tools-strip">
        <div className="container">
          <p className="tools-label">Training on the tools your business already uses</p>
          <ul className="tools-list">
            <li>Microsoft Copilot</li>
            <li>ChatGPT</li>
            <li>Claude &amp; Cowork</li>
            <li>Google Gemini</li>
            <li>Grok</li>
            <li>GitHub Copilot</li>
            <li>Perplexity</li>
          </ul>
          <Link to="/tech" className="text-link">See all tools we support &rarr;</Link>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>The full range of AI services</h2>
          <p className="section-intro">
            Training comes first. When it points to something worth building, we can
            take that on too.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>AI strategy &amp; ROI assessment</h3>
              <p>
                Review your current tools and processes, identify where AI will and won't
                pay off, and lay out costs and tradeoffs in plain language.
              </p>
            </div>
            <div className="service-card">
              <h3>Machine learning</h3>
              <p>
                Forecasting, classification, anomaly detection, and other models built on
                your own business data.
              </p>
            </div>
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
            <div className="service-card">
              <h3>Data &amp; systems integration</h3>
              <p>
                Clean up and connect your data and software so AI tools have something
                reliable to work with.
              </p>
            </div>
            <div className="service-card">
              <h3>Executive &amp; leadership workshops</h3>
              <p>
                Briefings for owners and managers on what AI can do, what it can't, and
                how to set sensible usage policies.
              </p>
            </div>
            <div className="service-card">
              <h3>Ongoing support</h3>
              <p>
                Follow-up sessions, prompt library updates, and answers when your team
                gets stuck.
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
                <strong>We come to you:</strong> Based in Oley, with on-site training
                and consulting across Berks County and Eastern Pennsylvania.
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
              <h3>How do you measure results?</h3>
              <p>
                We time a few routine tasks before training and again afterward, and track
                rework, quality, and how often the tools get used. Results depend on your
                work, and we'll share what we find even when the improvement is small.
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
