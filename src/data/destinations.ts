export type Destination = {
  slug: string;
  country: string;
  capital: string;
  image: string;
  visaTypes: string[];
  description: string;
  purposes: string[];
  checklist: string[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const destinations: Destination[] = [
  {
    slug: 'canada',
    country: 'Canada',
    capital: 'Ottawa',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Tourist Visa', 'Student Visa', 'Work Visa', 'PR / Express Entry'],
    description:
      'Known for its welcoming immigration policy, world-class universities and stunning landscapes, Canada is a top choice for students, skilled workers and families.',
    purposes: ['Higher education', 'Skilled work and PR', 'Tourism and family visits', 'Business expansion'],
    checklist: [
      'Valid passport',
      'Completed application form',
      'Proof of funds',
      'Letter of acceptance (students) or job offer (workers)',
      'Language test results (IELTS / TEF)',
      'Police clearance certificate',
      'Medical examination report',
    ],
    process: [
      { title: 'Determine Route', description: 'We identify the right visa or immigration route for your goal.' },
      { title: 'Eligibility', description: 'We assess points, funds and document readiness.' },
      { title: 'Filing', description: 'We prepare and submit your application accurately.' },
      { title: 'Tracking', description: 'We monitor the decision and guide next steps.' },
    ],
    faqs: [
      { q: 'Is Express Entry the only PR route?', a: 'No. There are provincial and family routes too. We recommend the best fit after assessing your profile.' },
      { q: 'Do I need a job offer for PR?', a: 'Not always. Express Entry is offer-free for many profiles. We confirm during consultation.' },
    ],
  },
  {
    slug: 'usa',
    country: 'USA',
    capital: 'Washington, D.C.',
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['B1/B2 Visitor Visa', 'F-1 Student Visa', 'H-1B Work Visa', 'L-1 Intra-company Visa'],
    description:
      'A global hub for education, business and innovation, the USA attracts students, professionals and travellers seeking world-class opportunities.',
    purposes: ['Higher education', 'Skilled work', 'Business and investment', 'Tourism'],
    checklist: [
      'Valid passport',
      'DS-160 confirmation',
      'Visa fee receipt',
      'Appointment confirmation',
      'Supporting documents per category',
      'Financial proof',
      'Ties to home country',
    ],
    process: [
      { title: 'Category Selection', description: 'We confirm the correct visa category for your purpose.' },
      { title: 'DS-160 Filing', description: 'We complete the form accurately with you.' },
      { title: 'Interview Prep', description: 'We conduct a mock interview and review likely questions.' },
      { title: 'Decision', description: 'We track the outcome and guide you on next steps.' },
    ],
    faqs: [
      { q: 'Is the interview mandatory?', a: 'For most categories, yes. We prepare you thoroughly for it.' },
      { q: 'Can I change status after arrival?', a: 'Some changes are possible. We advise on eligibility before you travel.' },
    ],
  },
  {
    slug: 'uk',
    country: 'United Kingdom',
    capital: 'London',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Standard Visitor Visa', 'Student Visa', 'Skilled Worker Visa', 'Family Visa'],
    description:
      'With historic universities, a strong economy and clear visa categories, the UK remains a popular destination for students, professionals and families.',
    purposes: ['Higher education', 'Skilled work', 'Family visits', 'Business meetings'],
    checklist: [
      'Valid passport',
      'Completed online application',
      'Tuberculosis test report where required',
      'Financial evidence',
      'CAS (students) or CoS (workers)',
      'English language proof',
      'Biometric appointment confirmation',
    ],
    process: [
      { title: 'Route Mapping', description: 'We confirm the correct UK route for your purpose.' },
      { title: 'Documentation', description: 'We arrange CAS/CoS and financial evidence.' },
      { title: 'Filing', description: 'We complete the application and book biometrics.' },
      { title: 'Decision', description: 'We track the decision and guide next steps.' },
    ],
    faqs: [
      { q: 'Do I need a TB test?', a: 'Required for some nationalities for stays over 6 months. We confirm during consultation.' },
      { q: 'Can I switch visas inside the UK?', a: 'Some switches are allowed. We advise on eligibility before you travel.' },
    ],
  },
  {
    slug: 'australia',
    country: 'Australia',
    capital: 'Canberra',
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Visitor Visa (600)', 'Student Visa (500)', 'Skilled Work Visa', 'PR (189/190/491)'],
    description:
      'Australia offers a high quality of life, strong education system and clear skilled migration pathways for professionals and students alike.',
    purposes: ['Higher education', 'Skilled migration', 'Tourism', 'Family visits'],
    checklist: [
      'Valid passport',
      'Online application form',
      'Proof of funds',
      'Health insurance (OSHC/OVHC)',
      'English test results',
      'Skills assessment (workers)',
      'Police and medical clearance',
    ],
    process: [
      { title: 'Route Selection', description: 'We identify the right subclass for your goal.' },
      { title: 'Skills Assessment', description: 'We guide you through the relevant assessing authority.' },
      { title: 'Expression of Interest', description: 'We file your EOI in SkillSelect where applicable.' },
      { title: 'Visa Application', description: 'On invitation, we submit the full application.' },
    ],
    faqs: [
      { q: 'Is skills assessment mandatory?', a: 'For skilled routes, yes. We help you choose the right authority.' },
      { q: 'Can I include my family?', a: 'Yes. We help plan the family application alongside yours.' },
    ],
  },
  {
    slug: 'new-zealand',
    country: 'New Zealand',
    capital: 'Wellington',
    image: 'https://images.pexels.com/photos/7245307/pexels-photo-7245307.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Visitor Visa', 'Student Visa', 'Work Visa', 'Skilled Migrant PR'],
    description:
      'New Zealand combines scenic beauty with a strong work-life balance and structured skilled migration for professionals and students.',
    purposes: ['Higher education', 'Skilled work', 'Tourism', 'Business visits'],
    checklist: [
      'Valid passport',
      'Online application',
      'Proof of funds',
      'Health and character evidence',
      'English test results',
      'Job offer (for work routes)',
    ],
    process: [
      { title: 'Route Mapping', description: 'We confirm the right visa for your goal.' },
      { title: 'Documentation', description: 'We arrange funds, health and character proofs.' },
      { title: 'Filing', description: 'We submit the application online.' },
      { title: 'Decision', description: 'We track the outcome and guide next steps.' },
    ],
    faqs: [
      { q: 'Do I need a job offer to migrate?', a: 'Some skilled routes require one, others don’t. We assess your profile.' },
      { q: 'Is health clearance mandatory?', a: 'Yes for most long-stay routes. We guide you through the process.' },
    ],
  },
  {
    slug: 'germany',
    country: 'Germany',
    capital: 'Berlin',
    image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Schengen Visa', 'Student Visa', 'EU Blue Card', 'Job Seeker Visa'],
    description:
      'Germany is a leader in engineering education, manufacturing and skilled work, with structured pathways for students and qualified professionals.',
    purposes: ['Higher education', 'Skilled work', 'Job search', 'Tourism'],
    checklist: [
      'Valid passport',
      'Completed application form',
      'Proof of accommodation',
      'Proof of funds or blocked account',
      'Health insurance',
      'University admission letter',
      'Recognised qualification proof',
    ],
    process: [
      { title: 'Route Selection', description: 'We identify the right German visa route.' },
      { title: 'Documentation', description: 'We arrange funds, insurance and admission proofs.' },
      { title: 'Appointment', description: 'We book your embassy appointment and prepare you.' },
      { title: 'Decision', description: 'We track the outcome and guide next steps.' },
    ],
    faqs: [
      { q: 'Is a blocked account required for students?', a: 'Usually yes. We help you understand the amount and setup.' },
      { q: 'Can I get a job seeker visa?', a: 'For qualified professionals, yes. We assess your eligibility.' },
    ],
  },
  {
    slug: 'france',
    country: 'France',
    capital: 'Paris',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Schengen Short-stay', 'Student Visa', 'Talent Passport', 'Work Visa'],
    description:
      'From business and fashion to education and culture, France offers diverse visa routes through the Schengen system and long-stay categories.',
    purposes: ['Higher education', 'Skilled work and talent', 'Tourism', 'Business meetings'],
    checklist: [
      'Valid passport',
      'Schengen application form',
      'Travel insurance (min €30,000 cover)',
      'Proof of accommodation',
      'Financial proof',
      'University admission (students)',
      'Employment contract (workers)',
    ],
    process: [
      { title: 'Route Mapping', description: 'We confirm short-stay vs long-stay for your purpose.' },
      { title: 'Documentation', description: 'We arrange insurance, funds and purpose proofs.' },
      { title: 'Filing', description: 'We submit the application and book your appointment.' },
      { title: 'Decision', description: 'We track the outcome and guide next steps.' },
    ],
    faqs: [
      { q: 'Does a Schengen visa let me travel across Europe?', a: 'Yes, within the Schengen area for short stays. We explain the rules.' },
      { q: 'What is the Talent Passport?', a: 'A route for skilled professionals and investors. We assess your eligibility.' },
    ],
  },
  {
    slug: 'uae',
    country: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Tourist Visa', 'Visit Visa', 'Employment Visa', 'Investor / Golden Visa'],
    description:
      'A dynamic destination for tourism, employment and investment, the UAE offers fast visa processing and long-stay options for professionals and entrepreneurs.',
    purposes: ['Tourism', 'Employment', 'Business and investment', 'Family visits'],
    checklist: [
      'Valid passport (6+ months)',
      'Passport-size photograph',
      'Confirmed return ticket',
      'Hotel booking or sponsor proof',
      'Employment contract (work visa)',
      'Trade licence (investor visa)',
    ],
    process: [
      { title: 'Route Selection', description: 'We confirm tourist, work or investor route.' },
      { title: 'Sponsorship', description: 'We arrange sponsor or employer documentation.' },
      { title: 'Filing', description: 'We submit the application and track processing.' },
      { title: 'Arrival', description: 'We guide you on post-arrival medical and ID steps.' },
    ],
    faqs: [
      { q: 'Can I get a visa on arrival?', a: 'Depends on your nationality. We confirm eligibility for your passport.' },
      { q: 'What is the Golden Visa?', a: 'A long-term residency route for investors and talent. We assess your eligibility.' },
    ],
  },
  {
    slug: 'singapore',
    country: 'Singapore',
    capital: 'Singapore',
    image: 'https://images.pexels.com/photos/8197632/pexels-photo-8197632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Tourist Visa', 'Student Pass', 'Employment Pass', 'EntrePass'],
    description:
      'A global business and education hub, Singapore offers structured passes for professionals, students and entrepreneurs with clear eligibility criteria.',
    purposes: ['Higher education', 'Skilled work', 'Business setup', 'Tourism'],
    checklist: [
      'Valid passport',
      'Completed e-form',
      'Recent photograph',
      'University letter (students)',
      'Employer offer (workers)',
      'Financial proof',
    ],
    process: [
      { title: 'Pass Selection', description: 'We confirm the correct pass for your purpose.' },
      { title: 'Documentation', description: 'We arrange sponsor and employer proofs.' },
      { title: 'Filing', description: 'We submit the application and track processing.' },
      { title: 'Arrival', description: 'We guide you on collection of the pass.' },
    ],
    faqs: [
      { q: 'Can I bring my family on an Employment Pass?', a: 'Yes, for eligible salary bands. We confirm during consultation.' },
      { q: 'Is an EntrePass right for me?', a: 'For founders with innovative ventures, yes. We assess your profile.' },
    ],
  },
  {
    slug: 'europe',
    country: 'Europe (Schengen)',
    capital: 'Multiple',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    visaTypes: ['Schengen Tourist Visa', 'Student Visa', 'Work Visa', 'Long-stay National Visa'],
    description:
      'The Schengen area allows travel across 27+ European countries with a single short-stay visa, with long-stay national visas for study and work.',
    purposes: ['Tourism across multiple countries', 'Higher education', 'Skilled work', 'Business travel'],
    checklist: [
      'Valid passport',
      'Schengen application form',
      'Travel insurance (min €30,000)',
      'Flight reservation',
      'Hotel bookings or sponsor letter',
      'Financial proof',
      'Covering letter with itinerary',
    ],
    process: [
      { title: 'Primary Country', description: 'We identify the correct Schengen country to apply through.' },
      { title: 'Documentation', description: 'We arrange insurance, itinerary and proofs.' },
      { title: 'Filing', description: 'We submit the application and book your appointment.' },
      { title: 'Decision', description: 'We track the outcome and guide next steps.' },
    ],
    faqs: [
      { q: 'Which country should I apply through?', a: 'The country of your main stay or first entry. We confirm this for your itinerary.' },
      { q: 'Can I travel to all of Europe on Schengen?', a: 'Within the Schengen area, yes for short stays. We explain the exceptions.' },
    ],
  },
];

export const destinationMeta = destinations.map((d) => ({
  slug: d.slug,
  country: d.country,
  image: d.image,
  visaTypes: d.visaTypes,
  description: d.description,
}));
