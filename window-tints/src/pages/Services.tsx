import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="wt-page-hero">
        <div className="wt-page-hero-content">
          <span className="wt-section-badge">Our Services</span>
          <h1 className="wt-page-hero-title">Window Tint Services</h1>
          <p className="wt-page-hero-sub">
            From standard tint to premium ceramic film, we offer a range of
            solutions to suit your needs and budget.
          </p>
        </div>
      </section>

      <section className="wt-services-page">
        <div className="wt-services-list">
          {SERVICES.map((service, i) => (
            <article key={i} className="wt-service-card">
              <div className="wt-service-card-header">
                <h2>{service.title}</h2>
                {service.description && (
                  <p className="wt-service-card-tagline">{service.description}</p>
                )}
              </div>
              {service.details && (
                <p className="wt-service-card-details">{service.details}</p>
              )}
            </article>
          ))}
        </div>

        <div className="wt-services-cta">
          <p>Ready to book? Get in touch for a free quote.</p>
          <div className="wt-services-cta-actions">
            <a href="tel:+447771107107" className="wt-btn wt-btn-primary">
              Call Now
            </a>
            <Link to="/#contact" className="wt-btn wt-btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
