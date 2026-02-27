import { CarTintTemplateV2 } from '../components';

const SERVICES = [
  { title: 'Window Tinting', size: 'medium' as const },
  { title: 'Chameleon Tint', size: 'small' as const },
  { title: 'Vehicle Light Wraps', size: 'small' as const },
  { title: 'Full Car Wraps', size: 'large' as const, description: 'Complete vehicle transformation with premium vinyl' },
  { title: 'Dechrome', size: 'small' as const },
  { title: 'Ultra Reflective Wrap', size: 'medium' as const },
  { title: 'Detailing', size: 'medium' as const, description: 'Paint correction, enhancement & protection' },
  { title: 'Coding & Diagnostics', size: 'small' as const },
  { title: 'Supercar Crash Repair', size: 'large' as const, description: 'Expert repair for high-end vehicles' },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=800&fit=crop',
];

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Vehicles Transformed' },
  { value: '100%', label: 'Customer Satisfaction' },
];

export default function CarTintV2() {
  return (
    <CarTintTemplateV2
      welcomeText="WELCOME TO"
      headline="Premium Car Tinting & Customisation"
      subheadline="Supercar and luxury bodyshop. We transform vehicles with precision and passion."
      phoneNumber="+447771107107"
      findUsUrl="https://g.page/tintsondemand?share"
      email="info@example.com"
      servicesTitle="OUR SERVICES"
      services={SERVICES}
      galleryImages={GALLERY_IMAGES}
      stats={STATS}
      footerCtaText="Ready to transform your vehicle?"
      heroImageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
    />
  );
}
