import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])

  return (
    <main className="wt">
      <header className="wt-header">
        <div className="wt-header-inner">
          <Link to="/" className="wt-brand">
            WINDOW TINTS
          </Link>
          <nav className="wt-nav">
            <Link to="/services">Services</Link>
            <Link to="/#benefits">Benefits</Link>
            <Link to="/#gallery">Gallery</Link>
            <Link to="/#contact">Contact</Link>
            <a href="tel:+447771107107" className="wt-nav-cta">
              Call Now
            </a>
          </nav>
        </div>
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
