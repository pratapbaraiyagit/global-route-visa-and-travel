export type ServiceCategory = {
  title: string;
  icon: string;
  blurb: string;
  items: { name: string; description: string; icon: string; link: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Visa Services',
    icon: 'Stamp',
    blurb: 'End-to-end visa assistance for every travel purpose.',
    items: [
      { name: 'Tourist Visa', description: 'Leisure and sightseeing travel made simple.', icon: 'Camera', link: '/visa-services/tourist-visa' },
      { name: 'Student Visa', description: 'Study at recognised institutions worldwide.', icon: 'GraduationCap', link: '/visa-services/student-visa' },
      { name: 'Business Visa', description: 'Meetings, conferences and business expansion.', icon: 'Briefcase', link: '/visa-services/business-visa' },
      { name: 'Work Visa', description: 'Take up employment with the right sponsorship.', icon: 'HardHat', link: '/visa-services/work-visa' },
      { name: 'Visitor Visa', description: 'Short visits to family and friends abroad.', icon: 'Plane', link: '/visa-services/visitor-visa' },
      { name: 'Family / Dependent Visa', description: 'Reunite with your loved ones overseas.', icon: 'Users', link: '/visa-services/family-visa' },
    ],
  },
  {
    title: 'Travel Services',
    icon: 'PlaneTakeoff',
    blurb: 'Curated travel experiences and seamless bookings.',
    items: [
      { name: 'Flight Booking', description: 'Best fares and convenient routes for every trip.', icon: 'Plane', link: '/travel-tours' },
      { name: 'Holiday Packages', description: 'Handcrafted itineraries for every kind of traveller.', icon: 'Package', link: '/travel-tours' },
      { name: 'Hotel Booking', description: 'Verified stays from budget to premium.', icon: 'BedDouble', link: '/travel-tours' },
      { name: 'Travel Insurance', description: 'Comprehensive cover for medical and trip risks.', icon: 'ShieldCheck', link: '/travel-tours' },
    ],
  },
  {
    title: 'Transport Services',
    icon: 'Car',
    blurb: 'Reliable, comfortable and professional transport.',
    items: [
      { name: 'Airport Transfers', description: 'On-time pickup and drop for every flight.', icon: 'PlaneTakeoff', link: '/transport' },
      { name: 'Private Taxi', description: 'Comfortable cars for city and intercity travel.', icon: 'Car', link: '/transport' },
      { name: 'Corporate Transport', description: 'Monthly contracts for employee and guest travel.', icon: 'Building2', link: '/transport' },
      { name: 'Group Transportation', description: 'Mini buses and coaches for larger groups.', icon: 'Users', link: '/transport' },
    ],
  },
];
