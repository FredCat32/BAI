import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About BerksAI | AI Trainer Matthew Irving | Oley, PA</title>
        <meta
          name="description"
          content="Meet Matthew Irving, AI engineer and founder of BerksAI. On-site AI prompt training and consulting for Berks County businesses, with before-and-after measurement. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/about" />
        <meta property="og:title" content="About BerksAI | AI Trainer Matthew Irving" />
        <meta property="og:description" content="Meet Matthew Irving, founder of BerksAI. On-site AI prompt training and consulting for Berks County businesses." />
        <meta property="og:url" content="https://berksai.com/about" />
      </Helmet>
      <div className="container">
        <div className="about-header">
          <h1>About BerksAI</h1>
          <p>Practical AI training and consulting for local businesses</p>
        </div>

        <div className="founder-section">
          <h2>Meet the Founder - Matthew Irving</h2>
          <div className="founder-content">
            <div className="founder-text">
              <h3>Background</h3>
              <p>
                I'm an AI engineer. I've built AI workflows and applications for the U.S. Navy
                and the Marine Corps, and for pharmaceutical companies in the Philadelphia
                area. I work with React, JavaScript, Python, C#, and Langchain, and my
                projects have included chatbots, email agents, and multi-step workflows.
              </p>
              <p>
                That background is why I focus on training and measurement. I know how
                these tools work and where they fall short, so I can teach your team to
                use them well and check whether they're actually helping.
              </p>
              <p>
                BerksAI itself is new, so I don't have a portfolio of BerksAI client case
                studies yet, and I'd rather say so than make one up. What I can offer is
                hands-on work, honest advice, and a way to measure whether it paid off. You
                can read the longer version in{' '}
                <Link to="/blog/why-im-starting-an-ai-consulting-business-in-berks-county">
                  Why I'm Starting an AI Consulting Business in Berks County
                </Link>
                .
              </p>
            </div>

            <div className="founder-image">
              <img
                src="/headshot.webp"
                alt="Matthew Irving, AI engineer and founder of BerksAI"
                width="800"
                height="1200"
                loading="lazy"
                className="founder-photo"
              />
            </div>
          </div>
        </div>

        <div className="company-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              AI shouldn't only benefit large corporations. Our mission is to help local
              businesses get real value from the AI tools they already pay for, use them
              safely, and know when AI isn't worth the money.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              While building AI products, I realized I could contribute to Berks County
              and Eastern Pennsylvania by helping local businesses use AI well. Many small
              companies in Berks County, King of Prussia, Philadelphia, and across the
              region could benefit from these tools but don't know where to begin. Helping
              them learn to use AI, and check that it's working, is what BerksAI is for.
            </p>
          </div>

          <div className="about-section">
            <h2>How We Work</h2>
            <p>
              Our main service is on-site prompt training for your team. We start by
              looking at how your people use AI today and timing a few routine tasks.
              Then we train on those same tasks, using your own emails, documents, and
              procedures.
            </p>
            <p>
              Afterward we measure again: time, rework, quality, and how often the tools
              get used. You get a short written summary of what changed and what didn't.
              If something didn't help, we'll say so and recommend dropping it.
            </p>
            <p>
              When training points to something worth building, such as a workflow
              automation, a custom assistant, or a machine learning model on your own data,
              we can do that too.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Local Focus</h3>
              <p>We understand the challenges and opportunities of businesses in our region</p>
            </div>

            <div className="value-card">
              <h3>Measured Results</h3>
              <p>We record how work looks before and after, so nobody is guessing</p>
            </div>

            <div className="value-card">
              <h3>Honest Advice</h3>
              <p>If AI isn't the right answer for something, we'll tell you</p>
            </div>

            <div className="value-card">
              <h3>Hands-On Support</h3>
              <p>On-site training and follow-up when your team has questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
