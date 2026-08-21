export const siteConfig = {
  name: 'GlobalRoute Visa & Travel',
  shortName: 'GlobalRoute',
  tagline: 'Your Trusted Partner for Visas, Travel & Transport Solutions.',
  description:
    'Expert visa assistance, travel planning and reliable transport solutions — all under one roof.',
  phone: '+00 000 000 0000',
  phoneHref: '+0000000000000',
  email: 'contact@example-domain.demo',
  address: 'Sample City, Sample Country',
  addressLine: 'Unit 0, Sample Street, Sample City, Sample Country (demo address)',
  whatsapp: '0000000000000',
  whatsappMessage: "Hi, I'm interested in your visa/travel services. I'd like to know more.",
  hours: 'Mon–Sat: 9:30 AM – 7:00 PM (demo hours)',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
  foundedYear: 2013,
};

export type NavItem = { label: string; to: string };

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Visa Services', to: '/visa-services' },
  { label: 'Travel & Tours', to: '/travel-tours' },
  { label: 'Transport', to: '/transport' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Resources', to: '/resources' },
];

export const footerNav = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Process', to: '/process' },
    { label: 'Success Stories', to: '/success-stories' },
    { label: 'Contact', to: '/contact' },
  ],
  'Visa Services': [
    { label: 'Tourist Visa', to: '/visa-services/tourist-visa' },
    { label: 'Student Visa', to: '/visa-services/student-visa' },
    { label: 'Business Visa', to: '/visa-services/business-visa' },
    { label: 'Work Visa', to: '/visa-services/work-visa' },
  ],
  Travel: [
    { label: 'Destinations', to: '/destinations' },
    { label: 'Tour Packages', to: '/travel-tours' },
    { label: 'Travel Insurance', to: '/travel-tours' },
  ],
  Support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Resources', to: '/resources' },
    { label: 'Free Consultation', to: '/free-consultation' },
  ],
};

export const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Clients Assisted', value: '5,000+' },
  { label: 'Countries Covered', value: '25+' },
  { label: 'Dedicated Support', value: '24/7' },
];

export const trustPillars = [
  {
    title: 'Experienced Consultants',
    description:
      'A team of seasoned visa and travel specialists who understand evolving requirements across major destinations.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Transparent Process',
    description:
      'Clear steps, honest timelines and no hidden charges. You always know where your application stands.',
    icon: 'Eye',
  },
  {
    title: 'Personalized Assistance',
    description:
      'Guidance tailored to your travel purpose, background and destination — never a one-size-fits-all approach.',
    icon: 'UserRound',
  },
  {
    title: 'End-to-End Support',
    description:
      'From the first consultation to post-approval help, we stay with you across every step of the journey.',
    icon: 'LifeBuoy',
  },
];
