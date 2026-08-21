export type Vehicle = {
  name: string;
  seats: number;
  image: string;
  features: string[];
  bestFor: string;
};

export const vehicles: Vehicle[] = [
  {
    name: 'Sedan',
    seats: 4,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1000',
    features: ['Air-conditioned', 'Comfortable seating', 'Luggage space', 'Charging ports'],
    bestFor: 'Solo and small family transfers',
  },
  {
    name: 'SUV',
    seats: 6,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1000',
    features: ['Spacious cabin', 'Higher ground clearance', 'Extra luggage', 'Premium comfort'],
    bestFor: 'Families and long-distance travel',
  },
  {
    name: 'Premium Car',
    seats: 4,
    image: 'https://images.pexels.com/photos/372946/pexels-photo-372946.jpeg?auto=compress&cs=tinysrgb&w=1000',
    features: ['Luxury interiors', 'Professional chauffeur', 'Bottled water', 'Wi-Fi onboard'],
    bestFor: 'Business and executive travel',
  },
  {
    name: 'Mini Bus',
    seats: 14,
    image: 'https://images.pexels.com/photos/2667021/pexels-photo-2667021.jpeg?auto=compress&cs=tinysrgb&w=1000',
    features: ['Group seating', 'Ample luggage', 'Air-conditioned', 'Pushback seats'],
    bestFor: 'Family groups and small tour parties',
  },
  {
    name: 'Coach',
    seats: 35,
    image: 'https://images.pexels.com/photos/9310907/pexels-photo-9310907.jpeg?auto=compress&cs=tinysrgb&w=1000',
    features: ['Large group capacity', 'Onboard washroom', 'PA system', 'Reclining seats'],
    bestFor: 'Corporate groups and event transport',
  },
];

export const transportServices = [
  {
    name: 'Airport Pickup & Drop',
    icon: 'PlaneTakeoff',
    description: 'On-time airport transfers with flight tracking and professional drivers, available 24/7 for domestic and international terminals.',
  },
  {
    name: 'Private Taxi',
    icon: 'Car',
    description: 'Comfortable city and intercity travel with verified drivers and clean, air-conditioned vehicles for every journey.',
  },
  {
    name: 'Corporate Transportation',
    icon: 'Building2',
    description: 'Monthly contracts for employee transfers, guest pickups and executive travel with dedicated account management.',
  },
  {
    name: 'Group Transportation',
    icon: 'Users',
    description: 'Mini buses and coaches for family events, weddings, tours and large group coordination across cities.',
  },
  {
    name: 'Intercity Travel',
    icon: 'Route',
    description: 'Comfortable long-distance travel between cities with flexible pickup points and experienced drivers.',
  },
  {
    name: 'Event Transportation',
    icon: 'CalendarCheck',
    description: 'End-to-end logistics for conferences, weddings and large events with coordinated multi-vehicle scheduling.',
  },
];
