import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import locations from './locations'
import './LocationPage.css'

function LocationPage({ location }) {
  const url = `https://berksai.com/${location.slug}`
  const others = locations.filter((l) => l.slug !== location.slug)

  return (
    <div className="location-page">
      <Helmet>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="location-hero">
        <div className="container">
          <p className="eyebrow">Service area &middot; {location.city}, PA</p>
          <h1>{location.h1}</h1>
          <p className="location-lede">{location.lede}</p>
          <Link to="/contact" className="cta-button">Book a free consultation</Link>
        </div>
      </section>

      <section className="location-section">
        <div className="container location-narrow">
          <h2>Working with {location.city} businesses</h2>
          {location.local.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="location-section location-alt">
        <div className="container location-narrow">
          <h2>Common starting points</h2>
          <p>For example, training often starts with tasks like these:</p>
          <dl className="location-list">
            {location.startingPoints.map(([term, text]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="location-section">
        <div className="container location-narrow">
          <h2>How an engagement works</h2>
          <ol className="location-steps">
            <li><strong>Look at what's in use today:</strong> which AI tools you have, who uses them, and for what.</li>
            <li><strong>Baseline a few real tasks:</strong> time them and note how much rework they need.</li>
            <li><strong>Train on those same tasks</strong> at your office, with your own documents and procedures.</li>
            <li><strong>Measure again</strong> and share a short written summary of what changed and what didn't.</li>
            <li><strong>Recommend a next step:</strong> more training, a different tool, or nothing further.</li>
          </ol>
          <p>
            See the <Link to="/tech">tools we train on</Link> or read more{' '}
            <Link to="/about">about BerksAI</Link>.
          </p>
        </div>
      </section>

      <section className="location-section location-alt">
        <div className="container location-narrow">
          <h2>Questions from {location.city} businesses</h2>
          {location.faq.map(([q, a]) => (
            <div className="location-faq" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="location-section">
        <div className="container location-narrow">
          <h2>Talk to us</h2>
          <p>
            The first conversation is free. Call <a href="tel:+12673578007">(267) 357-8007</a> or{' '}
            <Link to="/contact">get in touch</Link>.
          </p>
          <p className="location-others">
            Also serving:{' '}
            {others.map((l, i) => (
              <span key={l.slug}>
                {i > 0 && ' · '}
                <Link to={`/${l.slug}`}>{l.city}</Link>
              </span>
            ))}
            {' '}· Berks County and Eastern Pennsylvania
          </p>
        </div>
      </section>
    </div>
  )
}

export default LocationPage
