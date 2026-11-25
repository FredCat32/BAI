import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './locations/LocationPage.css'

function NotFound() {
  return (
    <div className="location-page">
      <Helmet>
        <title>Page not found | BerksAI</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="location-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p className="location-lede">
            That page doesn't exist or has moved. Try the <Link to="/">home page</Link>,
            the <Link to="/blog">blog</Link>, or <Link to="/contact">get in touch</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}

export default NotFound
