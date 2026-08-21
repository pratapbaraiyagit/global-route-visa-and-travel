export type FAQ = {
  category: 'Visa' | 'Travel' | 'Transport' | 'General';
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    category: 'Visa',
    question: 'What documents are required for a visa?',
    answer:
      'Common documents include a valid passport, recent photographs, a completed application form, proof of funds, travel itinerary and purpose-specific documents such as invitation or admission letters. We provide a tailored checklist after your consultation.',
  },
  {
    category: 'Visa',
    question: 'How does the visa consultation process work?',
    answer:
      'We begin with a free consultation to understand your purpose, destination and profile. We then assess eligibility, share a document checklist and guide you through filing, submission and tracking.',
  },
  {
    category: 'Visa',
    question: 'Can you help with visa documentation?',
    answer:
      'Yes. We review every document for completeness and consistency, help arrange missing paperwork and prepare your application to reduce the chance of queries or refusal.',
  },
  {
    category: 'Visa',
    question: 'Do you guarantee visa approval?',
    answer:
      'No consultancy can guarantee visa approval — the decision rests with the destination country’s authorities. We help you present the strongest possible application based on current requirements.',
  },
  {
    category: 'Visa',
    question: 'What happens if my visa is refused?',
    answer:
      'We review the refusal reasons, advise whether a fresh application or appeal is appropriate and help you address the gaps before reapplying.',
  },
  {
    category: 'Visa',
    question: 'Can you help with visa interviews?',
    answer:
      'Yes. For destinations that require an interview, we conduct mock interviews, prepare you for likely questions and review your supporting documents.',
  },
  {
    category: 'Visa',
    question: 'How early should I apply for a visa?',
    answer:
      'We recommend starting 2–3 months before your travel date where possible. Some destinations process faster, but early filing avoids last-minute stress.',
  },
  {
    category: 'Travel',
    question: 'Do you provide travel insurance?',
    answer:
      'Yes. We arrange travel insurance that meets Schengen and general international requirements, covering medical emergencies, trip cancellations and lost baggage.',
  },
  {
    category: 'Travel',
    question: 'Can I request a customized travel package?',
    answer:
      'Absolutely. We build tailor-made itineraries based on your destination, budget, travel dates and interests. Share your preferences and we will design a package for you.',
  },
  {
    category: 'Travel',
    question: 'Do you book flights and hotels?',
    answer:
      'Yes. We handle flight bookings and hotel reservations as part of our travel services, ensuring your itinerary aligns with your visa and travel plans.',
  },
  {
    category: 'Travel',
    question: 'What is included in your tour packages?',
    answer:
      'Most packages include accommodation, transfers, sightseeing and select meals. Exclusions such as airfare and visa fees are clearly listed on each package page.',
  },
  {
    category: 'Travel',
    question: 'Can you plan group or corporate travel?',
    answer:
      'Yes. We organise group holidays, corporate trips and incentive travel with dedicated coordination for larger parties.',
  },
  {
    category: 'Transport',
    question: 'Do you arrange airport transfers?',
    answer:
      'Yes. We provide airport pickup and drop services across major cities with sedans, SUVs and larger vehicles for families and groups.',
  },
  {
    category: 'Transport',
    question: 'What types of vehicles are available?',
    answer:
      'Our fleet includes sedans, SUVs, premium cars, mini buses and coaches, suited to solo travellers, families and large groups.',
  },
  {
    category: 'Transport',
    question: 'Can I book corporate transport on a monthly basis?',
    answer:
      'Yes. We offer corporate transport contracts for daily employee transfers, guest pickups and event logistics. Contact us for a custom quote.',
  },
  {
    category: 'Transport',
    question: 'Are your drivers verified?',
    answer:
      'Yes. All our drivers are background-verified, experienced and trained in professional customer service.',
  },
  {
    category: 'General',
    question: 'How can I contact a consultant?',
    answer:
      'You can reach us by phone, email, WhatsApp or the free consultation form on our website. Our team typically responds within one business day.',
  },
  {
    category: 'General',
    question: 'Where is your office located?',
    answer:
      'Our office is in Surat, Gujarat, India. We serve clients across India and abroad through online consultations.',
  },
  {
    category: 'General',
    question: 'Do you charge for the first consultation?',
    answer:
      'No. The first consultation is free. We only charge for specific services once you choose to proceed.',
  },
  {
    category: 'General',
    question: 'Is GlobalRoute a government agency?',
    answer:
      'No. GlobalRoute Visa & Travel is an independent consultancy. We are not affiliated with any government or embassy and do not guarantee visa outcomes.',
  },
];
