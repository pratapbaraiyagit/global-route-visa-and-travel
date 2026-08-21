export type Testimonial = {
  name: string;
  country: string;
  service: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    country: 'Canada',
    service: 'Student Visa',
    rating: 5,
    review:
      'The team made my student visa process stress-free. From document planning to the mock interview, every step was handled with care. I received my visa well before my intake date.',
  },
  {
    name: 'Priya Sharma',
    country: 'United Kingdom',
    service: 'Work Visa',
    rating: 5,
    review:
      'I was confused about the right work visa category for my job offer. Their consultant explained everything clearly and helped me file a strong application. Highly professional service.',
  },
  {
    name: 'Rahul and Sneha Desai',
    country: 'Switzerland',
    service: 'Honeymoon Package',
    rating: 5,
    review:
      'Our honeymoon was perfectly planned. Every transfer, hotel and excursion was on time and exactly as promised. The Alpine itinerary was unforgettable.',
  },
  {
    name: 'Karan Patel',
    country: 'USA',
    service: 'Business Visa',
    rating: 5,
    review:
      'Needed a business visa quickly for a conference. They arranged everything within a week and prepared me for the interview. Smooth experience throughout.',
  },
  {
    name: 'Ishita Joshi',
    country: 'Australia',
    service: 'PR Assistance',
    rating: 5,
    review:
      'They assessed my profile honestly and recommended the right skilled route. The documentation support was thorough and my PR was granted without any additional queries.',
  },
  {
    name: 'Vikram Singh',
    country: 'UAE',
    service: 'Tourist Visa + Transport',
    rating: 4,
    review:
      'Booked a tourist visa and airport transfers together. The visa came through quickly and the driver was waiting at arrivals. One less thing to worry about.',
  },
  {
    name: 'Nandita Rao',
    country: 'Germany',
    service: 'Student Visa',
    rating: 5,
    review:
      'The blocked account and insurance guidance was invaluable. I felt supported at every step and my visa was approved on the first attempt.',
  },
  {
    name: 'Sahil Khan',
    country: 'Singapore',
    service: 'Employment Pass',
    rating: 5,
    review:
      'They understood the Singapore pass system well and helped my employer with the paperwork. Clear communication and timely updates throughout.',
  },
  {
    name: 'Meera Iyer',
    country: 'New Zealand',
    service: 'Visitor Visa',
    rating: 5,
    review:
      'Applied to visit my sister and was worried about proving ties. Their team helped me build a strong application and it was approved without questions.',
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  image: string;
  goal: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'student-visa-journey',
    title: 'Student Visa Journey — Canada Intake',
    category: 'Student Visa',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    goal: 'A student wanted to pursue a master’s programme in Canada for the September intake.',
    challenge:
      'The applicant had a gap year and limited proof of funds, which can raise credibility concerns for student visa officers.',
    solution:
      'We structured a clear Statement of Purpose addressing the gap, arranged an education loan for financial proof and conducted two mock interviews.',
    outcome:
      'Visa approved ahead of the intake date. The student travelled on time and is now studying in Ontario.',
  },
  {
    slug: 'family-visit-journey',
    title: 'Family Visit Journey — UK',
    category: 'Visitor Visa',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1200',
    goal: 'A couple wanted to visit their son and family in the UK for six weeks.',
    challenge:
      'The applicants had limited travel history and needed to demonstrate strong ties to return home.',
    solution:
      'We built a complete sponsor file, arranged property and family-ties evidence and prepared them for a brief interview.',
    outcome:
      'Both visitor visas were granted for the requested duration. The family reunited in London.',
  },
  {
    slug: 'business-travel-journey',
    title: 'Business Travel — USA Conference',
    category: 'Business Visa',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    goal: 'A founder needed to attend an industry conference in the United States.',
    challenge:
      'First-time applicant with a young company and limited overseas travel history.',
    solution:
      'We prepared a detailed business purpose file with invitation letters, company registration and a clear travel plan, plus a mock interview.',
    outcome:
      'B1 visa approved. The founder attended the conference and connected with new partners.',
  },
  {
    slug: 'international-holiday-journey',
    title: 'International Holiday — Switzerland',
    category: 'Travel Package',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1200',
    goal: 'A honeymoon couple wanted a premium Swiss Alps itinerary.',
    challenge:
      'They had a short window and needed Schengen visas plus a tightly coordinated scenic rail itinerary.',
    solution:
      'We filed both Schengen applications together, arranged Swiss Travel Passes and built a day-by-day itinerary across three towns.',
    outcome:
      'Both visas granted. The couple enjoyed a seamless honeymoon across Interlaken, Lucerne and Zurich.',
  },
];
