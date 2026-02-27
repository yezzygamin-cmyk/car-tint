export interface Service {
  title: string
  description?: string
  details?: string
  size?: 'small' | 'medium' | 'large'
}

export const SERVICES: Service[] = [
  {
    title: 'Standard Tint',
    description: 'Classic look, UV & heat reduction',
    details: 'Our standard tint offers excellent value with proven UV protection and heat rejection. Ideal for everyday drivers seeking style and comfort.',
    size: 'small',
  },
  {
    title: 'Ceramic Tint',
    description: 'Premium heat rejection, no signal interference',
    details: 'Premium ceramic film delivers superior heat rejection without affecting GPS, phone, or radio signals. Best-in-class performance and durability.',
    size: 'medium',
  },
  {
    title: 'Chameleon Tint',
    description: 'Color-shifting finish',
    details: 'Stand out with our chameleon tint that shifts colour depending on the angle. A unique, eye-catching finish for your vehicle.',
    size: 'small',
  },
  {
    title: 'Privacy Tint',
    description: 'Enhanced privacy and security',
    details: 'Darker tints for maximum privacy. Reduces visibility from outside while maintaining good outward vision. Popular for rear windows.',
    size: 'small',
  },
  {
    title: 'Front Windscreen',
    description: 'Subtle UV strip or full screen within legal limits',
    details: 'Protect your dash and yourself with a sun strip or full windscreen tint within legal specifications. Reduces glare and heat.',
    size: 'large',
  },
  {
    title: 'Security Film',
    description: 'Shatter-resistant, added safety',
    details: 'Security film holds shattered glass in place during impact. Adds an extra layer of safety and can deter break-ins.',
    size: 'medium',
  },
]
