export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: 'Rohan Malhotra',
    role: 'Founder & Lead Visa Consultant',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Rohan founded GlobalRoute with a vision to make visa and travel guidance transparent. He has over a decade of experience across student, work and immigration routes.',
  },
  {
    name: 'Ananya Verma',
    role: 'Head of Travel & Tours',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Ananya curates customised travel itineraries and group tours, combining destination expertise with a keen eye for premium experiences.',
  },
  {
    name: 'Arjun Nair',
    role: 'Senior Immigration Consultant',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Arjun specialises in skilled migration and PR pathways, helping professionals assess their points and build strong, credible applications.',
  },
  {
    name: 'Sara Khan',
    role: 'Client Success Manager',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Sara leads client communications, ensuring every enquiry is handled promptly and every applicant feels supported throughout their journey.',
  },
];

export const values = [
  {
    title: 'Transparency',
    description: 'Honest advice, clear pricing and realistic timelines — no false promises.',
    icon: 'Eye',
  },
  {
    title: 'Integrity',
    description: 'We recommend only what is right for your situation, not what is easiest to sell.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Excellence',
    description: 'Meticulous documentation and attention to detail on every application.',
    icon: 'Award',
  },
  {
    title: 'Client First',
    description: 'Every decision we make starts with what is best for the applicant.',
    icon: 'HeartHandshake',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'We discuss your travel purpose, destination and profile to understand your goals and confirm the right route.',
    icon: 'MessagesSquare',
  },
  {
    step: 2,
    title: 'Requirement Assessment',
    description: 'We assess your eligibility, review your documents and share a clear, honest assessment of your chances.',
    icon: 'ClipboardCheck',
  },
  {
    step: 3,
    title: 'Document Preparation',
    description: 'We build a complete, consistent document set and prepare your application to meet embassy expectations.',
    icon: 'FileStack',
  },
  {
    step: 4,
    title: 'Application / Booking Support',
    description: 'We file your application, book appointments and prepare you for interviews or biometrics.',
    icon: 'Send',
  },
  {
    step: 5,
    title: 'Ongoing Assistance',
    description: 'We track your decision, handle queries and support you right through to departure and beyond.',
    icon: 'LifeBuoy',
  },
];
