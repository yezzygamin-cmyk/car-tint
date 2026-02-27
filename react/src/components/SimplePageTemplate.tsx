import type { ReactNode } from 'react';

interface SimplePageTemplateProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function SimplePageTemplate({
  title,
  subtitle,
  children,
  footer,
}: SimplePageTemplateProps) {
  const defaultFooter = `© ${new Date().getFullYear()}`;

  return (
    <main className="simple-page-template">
      {(title || subtitle) && (
        <header className="simple-page-hero">
          {title && <h1>{title}</h1>}
          {subtitle && <p className="simple-page-subtitle">{subtitle}</p>}
        </header>
      )}
      <section className="simple-page-content">{children}</section>
      <footer className="simple-page-footer">{footer ?? defaultFooter}</footer>
    </main>
  );
}
