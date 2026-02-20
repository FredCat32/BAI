import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src="/logo.png" alt="BerksAI - AI Automation and Consulting Services in Berks County Pennsylvania" className="logo-image" />
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/tech" onClick={handleNavClick}>
                Tech Stack
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleNavClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header