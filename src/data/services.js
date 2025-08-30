import { Building, Hammer, Paintbrush, PaintBucket, Home, Building2, Ruler, Users, Clock, CheckCircle, Shield, Award } from 'lucide-react';

export const services = [
  {
    id: 'construction',
    icon: Building,
    title: 'Construction',
    description: 'Professional construction services for residential and commercial properties, ensuring quality and timely completion.',
    metaDescription: 'Expert construction services for residential and commercial projects. From ground-up construction to major renovations, we deliver quality results on time and within budget.',
    image: '/construction.webp',
    features: [
      'New home construction',
      'Commercial building construction',
      'Project management',
      'Site preparation and excavation',
      'Foundation work',
      'Structural framing'
    ],
    details: `Our construction services are designed to bring your vision to life with precision and excellence. Whether you're planning a new home, office building, or commercial space, our team of experienced professionals will guide you through every step of the process.

We use only the highest quality materials and the latest construction techniques to ensure your project is built to last. Our commitment to excellence means we pay attention to every detail, from the initial planning stages to the final walkthrough.`
  },
  {
    id: 'renovation',
    icon: Hammer,
    title: 'Renovation',
    description: 'Transform your space with our expert renovation services, from minor updates to complete home makeovers.',
    metaDescription: 'Professional renovation services to transform your space. Kitchen remodels, bathroom renovations, and whole-home makeovers with quality craftsmanship.',
    image: '/renovation.jpg',
    features: [
      'Kitchen remodeling',
      'Bathroom renovations',
      'Basement finishing',
      'Room additions',
      'Whole-home renovations',
      'Historic restorations'
    ],
    details: `Breathe new life into your space with our comprehensive renovation services. Whether you're looking to update a single room or completely transform your entire home, our team has the expertise to deliver exceptional results.

We work closely with you to understand your vision and provide expert guidance on design, materials, and layout. Our attention to detail and commitment to quality ensures your renovation project exceeds your expectations.`
  },
  {
    id: 'interior-design',
    icon: PaintBucket,
    title: 'Interior Design',
    description: 'Creative interior design solutions to bring your vision to life with style and functionality.',
    metaDescription: 'Professional interior design services for residential and commercial spaces. Transform your space with our expert design solutions and attention to detail.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    features: [
      'Space planning and layout',
      'Color consultation',
      'Furniture selection',
      'Lighting design',
      'Material and finish selection',
      'Custom millwork design'
    ],
    details: `Our interior design services create beautiful, functional spaces that reflect your personal style and meet your lifestyle needs. We combine aesthetics with functionality to design spaces that are not only visually stunning but also practical for everyday living.

From concept development to final installation, we handle every detail to ensure a seamless design process and exceptional results.`
  },
  {
    id: 'painting',
    icon: Paintbrush,
    title: 'Painting',
    description: 'Professional painting services to refresh and enhance the beauty of your property.',
    metaDescription: 'Expert residential and commercial painting services. Interior and exterior painting with premium quality paints and attention to detail.',
    image: '/painting.jpg',
    features: [
      'Interior painting',
      'Exterior painting',
      'Cabinet refinishing',
      'Wallpaper removal',
      'Drywall repair',
      'Decorative finishes'
    ],
    details: `A fresh coat of paint can dramatically transform any space, and our professional painting services ensure flawless results every time. We use only premium quality paints and materials to provide a finish that looks beautiful and lasts.

Our experienced painters pay meticulous attention to detail, from proper surface preparation to clean, crisp lines. Whether you're updating a single room or repainting your entire home or business, we deliver exceptional results on time and within budget.`
  }
];

// Create a service lookup object by ID
export const servicesById = services.reduce((acc, service, index) => {
  acc[service.id] = { ...service, index };
  return acc;
}, {});
