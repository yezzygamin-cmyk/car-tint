import { CarTintTemplate } from '../components';

const DEFAULT_SERVICES = [
  { title: 'Window Tinting' },
  { title: 'Chameleon Tint' },
  { title: 'Vehicle Light Wraps' },
  { title: 'Full Car Wraps' },
  { title: 'Dechrome' },
  { title: 'Ultra Reflective Wrap' },
  { title: 'Detailing', description: 'Paint Correction, Enhancement & Protection' },
  { title: 'Coding, Diagnostics & Carplay activation' },
  { title: 'Supercar Crash Repair' },
];

/** Placeholder images - replace with real URLs in production */
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
];

export default function CarTint() {
  return (
    <CarTintTemplate
      welcomeText="WELCOME TO"
      headline="SUPERCAR AND LUXURY BODYSHOP AND CUSTOMISATION CENTRE"
      phoneNumber="+447771107107"
      findUsUrl="https://g.page/tintsondemand?share"
      servicesTitle="OUR SERVICES:"
      services={DEFAULT_SERVICES}
      galleryImages={PLACEHOLDER_IMAGES}
      footerCtaText="YOUR CAR CUSTOMISATION JOURNEY STARTS HERE, GET IN TOUCH TODAY"
      heroImageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
    />
  );
}
