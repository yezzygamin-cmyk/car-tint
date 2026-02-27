import type { ReactNode } from 'react';

export interface CarTintService {
  title: string;
  description?: string;
  icon?: string;
}

export interface CarTintTemplateProps {
  /** Welcome/branding text above main headline */
  welcomeText?: string;
  /** Main headline (e.g. "SUPERCAR AND LUXURY BODYSHOP") */
  headline: string;
  /** Optional logo/brand image URL */
  logoUrl?: string;
  /** Hero background image URL */
  heroImageUrl?: string;
  /** Phone number for Call Now CTA */
  phoneNumber?: string;
  /** Map/location URL for Find Us CTA */
  findUsUrl?: string;
  /** Services section title */
  servicesTitle?: string;
  /** List of services to display */
  services?: CarTintService[];
  /** Gallery image URLs */
  galleryImages?: string[];
  /** Footer CTA text */
  footerCtaText?: string;
  /** Optional custom content between sections */
  children?: ReactNode;
}

export default function CarTintTemplate({
  welcomeText = 'WELCOME TO',
  headline,
  logoUrl,
  heroImageUrl,
  phoneNumber,
  findUsUrl,
  servicesTitle = 'OUR SERVICES:',
  services = [],
  galleryImages = [],
  footerCtaText = 'YOUR CAR CUSTOMISATION JOURNEY STARTS HERE, GET IN TOUCH TODAY',
  children,
}: CarTintTemplateProps) {
  return (
    <main className="car-tint-template">
      {/* Hero Section */}
      <section className="car-tint-hero">
        {heroImageUrl && (
          <div className="car-tint-hero-bg" style={{ backgroundImage: `url(${heroImageUrl})` }} />
        )}
        <div className="car-tint-hero-overlay" />
        <div className="car-tint-hero-content">
          {welcomeText && <p className="car-tint-welcome">{welcomeText}</p>}
          {logoUrl && <img src={logoUrl} alt="" className="car-tint-logo" />}
          <div className="car-tint-cta-row">
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="car-tint-btn car-tint-btn-primary">
                Call Now
              </a>
            )}
            {findUsUrl && (
              <a href={findUsUrl} target="_blank" rel="noopener noreferrer" className="car-tint-btn car-tint-btn-secondary">
                Find Us
              </a>
            )}
          </div>
          <h1 className="car-tint-headline">{headline}</h1>
          <a href="#services" className="car-tint-btn car-tint-btn-outline">
            Find Out More
          </a>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section id="services" className="car-tint-services">
          <h2 className="car-tint-section-title">{servicesTitle}</h2>
          <div className="car-tint-services-grid">
            {services.map((service, i) => (
              <div key={i} className="car-tint-service-card">
                {service.icon && (
                  <div className="car-tint-service-icon">{service.icon}</div>
                )}
                <h3>{service.title}</h3>
                {service.description && <p>{service.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom content slot */}
      {children}

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="car-tint-gallery">
          <div className="car-tint-gallery-grid">
            {galleryImages.map((src, i) => (
              <div key={i} className="car-tint-gallery-item">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="car-tint-footer-cta">
        <p className="car-tint-footer-text">{footerCtaText}</p>
        <div className="car-tint-cta-row">
          {phoneNumber && (
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="car-tint-btn car-tint-btn-primary">
              Call Now
            </a>
          )}
          {findUsUrl && (
            <a href={findUsUrl} target="_blank" rel="noopener noreferrer" className="car-tint-btn car-tint-btn-secondary">
              Find Us
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
