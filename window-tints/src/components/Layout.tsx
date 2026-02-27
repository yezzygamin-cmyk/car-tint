import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [pathname, hash])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  return (
    <main className="wt">
      <header className="wt-header">
        <div className="wt-header-inner">
          <Link to="/" className="wt-brand">
            WINDOW TINTS
          </Link>

          {/* Desktop nav */}
          <nav className="wt-nav wt-nav-desktop">
            <Link to="/services">Services</Link>
            <Link to="/#benefits">Benefits</Link>
            <Link to="/#gallery">Gallery</Link>
            <Link to="/#contact">Contact</Link>
            <a href="tel:+447771107107" className="wt-nav-cta">
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`wt-hamburger${menuOpen ? ' wt-hamburger--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen((v) => !v)
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <nav
          className={`wt-nav-mobile${menuOpen ? ' wt-nav-mobile--open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/#benefits" onClick={() => setMenuOpen(false)}>Benefits</Link>
          <Link to="/#gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+447771107107" className="wt-nav-mobile-cta">
            📞 Call Now
          </a>
        </nav>
      </header>

      <div className="wt-outlet">
        <Outlet />
      </div>

      <footer className="wt-footer">
        <div className="wt-footer-inner">
          <p>© {new Date().getFullYear()} Window Tints. All rights reserved.</p>
          <a href="tel:+447771107107" className="wt-footer-cta">
            Call Now
          </a>
        </div>
      </footer>
    </main>
  )
}
