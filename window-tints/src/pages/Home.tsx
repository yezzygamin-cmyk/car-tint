import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'

const GALLERY = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=800&fit=crop',
]

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '3000+', label: 'Cars Tinted' },
  { value: '99%', label: 'UV Blocked' },
]

export default function Home() {
  return (
    <>
      <section className="wt-hero">
        <div className="wt-hero-bg-wrap">
          <div
            className="wt-hero-bg"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop)`,
            }}
          />
          <div className="wt-hero-gradient" />
          <div className="wt-hero-mesh" />
        </div>
        <div className="wt-hero-content">
          <span className="wt-hero-badge">Professional Service</span>
          <h1 className="wt-hero-title">Premium Car Window Tinting</h1>
          <p className="wt-hero-sub">
            Expert fitting. Premium films. UV protection, heat reduction &
            style.
          </p>
          <div className="wt-hero-actions">
            <a href="tel:+447771107107" className="wt-btn wt-btn-primary">
              <span className="wt-btn-icon">📞</span>
              Call for a Quote
            </a>
            <Link to="/#contact" className="wt-btn wt-btn-ghost">
              <span className="wt-btn-icon">📍</span>
              Find Us
            </Link>
            <Link to="/services" className="wt-btn wt-btn-outline">
              Our Services
            </Link>
          </div>
        </div>
        <div className="wt-hero-scroll">
          <span className="wt-scroll-indicator" />
        </div>
      </section>

      <section className="wt-stats">
        <div className="wt-stats-inner">
          {STATS.map((stat, i) => (
            <div key={i} className="wt-stat">
              <span className="wt-stat-value">{stat.value}</span>
              <span className="wt-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wt-services-preview">
        <div className="wt-section-header">
          <span className="wt-section-badge">Our Services</span>
          <h2 className="wt-section-title">Window tint options for every need</h2>
        </div>
        <div className="wt-bento">
          {SERVICES.slice(0, 4).map((service, i) => (
            <div
              key={i}
              className={`wt-bento-item wt-bento-${service.size ?? 'small'}`}
            >
              <div className="wt-bento-content">
                <h3>{service.title}</h3>
                {service.description && <p>{service.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="wt-services-preview-cta">
          <Link to="/services" className="wt-btn wt-btn-outline">
            View all services
          </Link>
        </div>
      </section>

      <section id="benefits" className="wt-benefits">
        <div className="wt-section-header">
          <span className="wt-section-badge">Why Choose Us</span>
          <h2 className="wt-section-title">Benefits of window tinting</h2>
        </div>
        <div className="wt-benefits-grid">
          <div className="wt-benefit-card">
            <span className="wt-benefit-icon">☀️</span>
            <h3>UV Protection</h3>
            <p>Block harmful UV rays to protect your skin and interior.</p>
          </div>
          <div className="wt-benefit-card">
            <span className="wt-benefit-icon">🌡️</span>
            <h3>Heat Reduction</h3>
            <p>Stay cooler in summer and reduce AC load.</p>
          </div>
          <div className="wt-benefit-card">
            <span className="wt-benefit-icon">🔒</span>
            <h3>Privacy & Security</h3>
            <p>Enjoy added privacy and shatter resistance.</p>
          </div>
          <div className="wt-benefit-card">
            <span className="wt-benefit-icon">✨</span>
            <h3>Style</h3>
            <p>
              Enhance your car&apos;s look with a sleek, professional finish.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="wt-gallery">
        <div className="wt-section-header">
          <span className="wt-section-badge">Portfolio</span>
          <h2 className="wt-section-title">Our work speaks for itself</h2>
        </div>
        <div className="wt-masonry">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className={`wt-masonry-item wt-masonry-${(i % 3) + 1}`}
            >
              <img src={src} alt={`Tinted car ${i + 1}`} loading="lazy" />
              <div className="wt-masonry-overlay" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="wt-contact">
        <div className="wt-contact-inner">
          <div className="wt-contact-info">
            <h2>Ready to get your car tinted?</h2>
            <p>Get a free quote today. We&apos;re here to help.</p>
            <a href="tel:+447771107107" className="wt-contact-link">
              +44 777 110 7107
            </a>
            <a href="mailto:info@windowtints.example" className="wt-contact-link">
              info@windowtints.example
            </a>
            <a
              href="https://g.page/tintsondemand?share"
              target="_blank"
              rel="noopener noreferrer"
              className="wt-contact-link"
            >
              View on map →
            </a>
          </div>
          <div className="wt-form-placeholder">
            <span>Contact form</span>
            <p>Coming soon</p>
          </div>
        </div>
      </section>
    </>
  )
}
