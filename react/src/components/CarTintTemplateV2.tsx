import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export interface CarTintServiceV2 {
  title: string;
  description?: string;
  icon?: string;
  /** For bento layout: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large';
}

export interface CarTintTemplateV2Props {
  welcomeText?: string;
  headline: string;
  subheadline?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  phoneNumber?: string;
  findUsUrl?: string;
  email?: string;
  servicesTitle?: string;
  services?: CarTintServiceV2[];
  galleryImages?: string[];
  /** Stats to display: { value, label } */
  stats?: { value: string; label: string }[];
  footerCtaText?: string;
  children?: ReactNode;
}

export default function CarTintTemplateV2({
  welcomeText = 'WELCOME TO',
  headline,
  subheadline,
  logoUrl,
  heroImageUrl,
  phoneNumber,
  findUsUrl,
  email,
  servicesTitle = 'OUR SERVICES',
  services = [],
  galleryImages = [],
  stats = [],
  footerCtaText = 'Ready to transform your vehicle?',
  children,
}: CarTintTemplateV2Props) {
  return (
    <main className="car-tint-v2">
      {/* Sticky header */}
      <header className="ctv2-header">
        <div className="ctv2-header-inner">
          {logoUrl ? (
            <img src={logoUrl} alt="" className="ctv2-logo" />
          ) : (
            <Link to="/" className="ctv2-brand">CAR TINT</Link>
          )}
          <nav className="ctv2-nav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="ctv2-nav-cta">
                Call Now
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="ctv2-hero">
        <div className="ctv2-hero-bg-wrap">
          {heroImageUrl && (
            <div className="ctv2-hero-bg" style={{ backgroundImage: `url(${heroImageUrl})` }} />
          )}
          <div className="ctv2-hero-gradient" />
          <div className="ctv2-hero-mesh" />
        </div>
        <div className="ctv2-hero-content">
          {welcomeText && <span className="ctv2-hero-badge">{welcomeText}</span>}
          <h1 className="ctv2-hero-title">{headline}</h1>
          {subheadline && <p className="ctv2-hero-sub">{subheadline}</p>}
          <div className="ctv2-hero-actions">
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="ctv2-btn ctv2-btn-primary">
                <span className="ctv2-btn-icon">📞</span>
                Call Now
              </a>
            )}
            {findUsUrl && (
              <a href={findUsUrl} target="_blank" rel="noopener noreferrer" className="ctv2-btn ctv2-btn-ghost">
                <span className="ctv2-btn-icon">📍</span>
                Find Us
              </a>
            )}
            <a href="#services" className="ctv2-btn ctv2-btn-outline">
              Explore Services
            </a>
          </div>
        </div>
        <div className="ctv2-hero-scroll">
          <span className="ctv2-scroll-indicator" />
        </div>
      </section>

      {/* Stats bar */}
      {stats.length > 0 && (
        <section className="ctv2-stats">
          <div className="ctv2-stats-inner">
            {stats.map((stat, i) => (
              <div key={i} className="ctv2-stat">
                <span className="ctv2-stat-value">{stat.value}</span>
                <span className="ctv2-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services - Bento grid */}
      {services.length > 0 && (
        <section id="services" className="ctv2-services">
          <div className="ctv2-section-header">
            <span className="ctv2-section-badge">{servicesTitle}</span>
            <h2 className="ctv2-section-title">Premium automotive solutions</h2>
          </div>
          <div className="ctv2-bento">
            {services.map((service, i) => (
              <div
                key={i}
                className={`ctv2-bento-item ctv2-bento-${service.size ?? 'medium'}`}
              >
                <div className="ctv2-bento-content">
                  {service.icon && <span className="ctv2-bento-icon">{service.icon}</span>}
                  <h3>{service.title}</h3>
                  {service.description && <p>{service.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {children}

      {/* Gallery - Masonry-style */}
      {galleryImages.length > 0 && (
        <section id="gallery" className="ctv2-gallery">
          <div className="ctv2-section-header">
            <span className="ctv2-section-badge">PORTFOLIO</span>
            <h2 className="ctv2-section-title">Our work speaks for itself</h2>
          </div>
          <div className="ctv2-masonry">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`ctv2-masonry-item ctv2-masonry-${(i % 3) + 1}`}
              >
                <img src={src} alt={`Work ${i + 1}`} loading="lazy" />
                <div className="ctv2-masonry-overlay" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact placeholder */}
      <section id="contact" className="ctv2-contact">
        <div className="ctv2-contact-inner">
          <div className="ctv2-contact-info">
            <h2>{footerCtaText}</h2>
            <p>Get in touch for a free quote. We&apos;re here to help.</p>
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="ctv2-contact-link">
                {phoneNumber}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="ctv2-contact-link">
                {email}
              </a>
            )}
            {findUsUrl && (
              <a href={findUsUrl} target="_blank" rel="noopener noreferrer" className="ctv2-contact-link">
                View on map →
              </a>
            )}
          </div>
          <div className="ctv2-contact-form-placeholder">
            <div className="ctv2-form-placeholder">
              <span>Contact form</span>
              <p>Functionality coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ctv2-footer">
        <div className="ctv2-footer-inner">
          <p>© {new Date().getFullYear()} Car Tint. All rights reserved.</p>
          {phoneNumber && (
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="ctv2-footer-cta">
              Call Now
            </a>
          )}
        </div>
      </footer>
    </main>
  );
}
