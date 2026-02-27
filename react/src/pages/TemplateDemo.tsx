import { Link } from 'react-router-dom';
import { SimplePageTemplate } from '../components';

export default function TemplateDemo() {
  return (
    <SimplePageTemplate
      title="Simple Page Template"
      subtitle="Use this as a starting point for new pages"
    >
      <Link to="/" className="btn-link">
        Back to Home
      </Link>
      <p>
        This page demonstrates the SimplePageTemplate component. Replace this
        content with your own sections, components, or text.
      </p>
      <p>
        The template provides a hero (title + subtitle), a main content area, and
        a footer. All props are optional.
      </p>
    </SimplePageTemplate>
  );
}
