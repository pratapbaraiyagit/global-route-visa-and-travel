export type Package = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  category: 'International' | 'Domestic' | 'Honeymoon' | 'Family' | 'Corporate';
  description: string;
  itinerary: { day: string; title: string; detail: string }[];
  inclusions: string[];
  exclusions: string[];
};

export const packages: Package[] = [
  {
    slug: 'dubai-luxury-escape',
    title: 'Dubai Luxury Escape',
    destination: 'Dubai, UAE',
    duration: '5 Nights / 6 Days',
    price: '₹49,999',
    image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Burj Khalifa observation deck', 'Desert safari with BBQ dinner', 'Marina dhow cruise', 'City shopping tour'],
    category: 'International',
    description:
      'A premium short break to Dubai covering iconic landmarks, a desert safari and a marina cruise, with handpicked 4-star accommodation.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Marina', detail: 'Arrival, hotel check-in and a relaxed evening at Dubai Marina.' },
      { day: 'Day 2', title: 'City Tour & Burj Khalifa', detail: 'Guided city tour and access to the Burj Khalifa observation deck.' },
      { day: 'Day 3', title: 'Desert Safari', detail: 'Evening desert safari with dune bashing, cultural shows and BBQ dinner.' },
      { day: 'Day 4', title: 'Shopping Day', detail: 'Visit Dubai Mall, Gold Souk and optional theme park.' },
      { day: 'Day 5', title: 'Dhow Cruise', detail: 'Relaxed marina dhow cruise with dinner. Free time for shopping.' },
      { day: 'Day 6', title: 'Departure', detail: 'Check-out and transfer to airport.' },
    ],
    inclusions: ['5 nights 4-star hotel', 'Daily breakfast', 'All transfers', 'Desert safari & dhow cruise', 'Burj Khalifa access'],
    exclusions: ['Airfare', 'Visa fees', 'Lunches and dinners', 'Personal expenses', 'Travel insurance'],
  },
  {
    slug: 'switzerland-alpine-romance',
    title: 'Switzerland Alpine Romance',
    destination: 'Interlaken, Lucerne & Zurich',
    duration: '7 Nights / 8 Days',
    price: '₹1,49,999',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Jungfrau excursion', 'Lake Lucerne cruise', 'Scenic rail journeys', 'Charming alpine towns'],
    category: 'Honeymoon',
    description:
      'A romantic journey through the Swiss Alps with scenic trains, lake cruises and stays in picturesque towns.',
    itinerary: [
      { day: 'Day 1', title: 'Arrive Zurich', detail: 'Arrival and transfer to Interlaken.' },
      { day: 'Day 2', title: 'Jungfrau', detail: 'Full-day excursion to Jungfraujoch — Top of Europe.' },
      { day: 'Day 3', title: 'Interlaken Free Day', detail: 'Optional adventure activities or relaxed town walk.' },
      { day: 'Day 4', title: 'To Lucerne', detail: 'Scenic rail to Lucerne and lake cruise.' },
      { day: 'Day 5', title: 'Mt. Titlis', detail: 'Excursion to Mt. Titlis with cable car.' },
      { day: 'Day 6', title: 'Lucerne Free Day', detail: 'Explore the old town and chapel bridge.' },
      { day: 'Day 7', title: 'To Zurich', detail: 'Transfer to Zurich and city exploration.' },
      { day: 'Day 8', title: 'Departure', detail: 'Transfer to airport.' },
    ],
    inclusions: ['7 nights hotel', 'Daily breakfast', 'Swiss Travel Pass', 'Jungfrau & Titlis excursions', 'Lake cruise'],
    exclusions: ['Airfare', 'Visa fees', 'Lunches and dinners', 'Personal expenses', 'Travel insurance'],
  },
  {
    slug: 'kerala-backwaters',
    title: 'Kerala Backwaters Retreat',
    destination: 'Kerala, India',
    duration: '4 Nights / 5 Days',
    price: '₹24,999',
    image: 'https://images.pexels.com/photos/9310907/pexels-photo-9310907.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Houseboat stay in Alleppey', 'Munnar tea gardens', 'Kathakali performance', 'Ayurvedic massage'],
    category: 'Domestic',
    description:
      'A serene domestic escape through Kerala’s backwaters, tea gardens and cultural experiences.',
    itinerary: [
      { day: 'Day 1', title: 'Arrive Cochin', detail: 'Arrival and transfer to Munnar.' },
      { day: 'Day 2', title: 'Munnar', detail: 'Tea gardens, Mattupetty Dam and spice plantation.' },
      { day: 'Day 3', title: 'To Alleppey', detail: 'Board the houseboat for an overnight backwater cruise.' },
      { day: 'Day 4', title: 'Kovalam', detail: 'Drive to Kovalam beach. Relax and unwind.' },
      { day: 'Day 5', title: 'Departure', detail: 'Transfer to Trivandrum airport.' },
    ],
    inclusions: ['4 nights stay', 'Daily breakfast', 'Houseboat cruise', 'All transfers', 'Sightseeing'],
    exclusions: ['Airfare', 'Lunches and dinners', 'Personal expenses', 'Optional activities', 'Travel insurance'],
  },
  {
    slug: 'maldives-overwater-villa',
    title: 'Maldives Overwater Villa',
    destination: 'Malé, Maldives',
    duration: '4 Nights / 5 Days',
    price: '₹89,999',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Overwater villa stay', 'Snorkelling & dolphin cruise', 'Couples spa session', 'Private beach dinner'],
    category: 'Honeymoon',
    description:
      'An idyllic honeymoon in an overwater villa with turquoise lagoons, snorkelling and a private beach dinner.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival', detail: 'Speedboat transfer to your resort and check-in.' },
      { day: 'Day 2', title: 'Lagoon Snorkelling', detail: 'Guided snorkelling and dolphin cruise.' },
      { day: 'Day 3', title: 'Spa Day', detail: 'Couples spa session and free time on the beach.' },
      { day: 'Day 4', title: 'Private Dinner', detail: 'Private beach dinner and sunset cruise.' },
      { day: 'Day 5', title: 'Departure', detail: 'Transfer to airport.' },
    ],
    inclusions: ['4 nights overwater villa', 'All meals', 'Speedboat transfers', 'Snorkelling trip', 'Couples spa'],
    exclusions: ['Airfare', 'Visa fees', 'Optional water sports', 'Personal expenses', 'Travel insurance'],
  },
  {
    slug: 'goa-family-beach',
    title: 'Goa Family Beach Holiday',
    destination: 'Goa, India',
    duration: '3 Nights / 4 Days',
    price: '₹15,999',
    image: 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Befront resort stay', 'North & South Goa sightseeing', 'River cruise', 'Flea market visit'],
    category: 'Family',
    description:
      'A relaxed family beach holiday in Goa covering popular beaches, churches, a river cruise and the local markets.',
    itinerary: [
      { day: 'Day 1', title: 'Arrive Goa', detail: 'Arrival and check-in. Evening at the beach.' },
      { day: 'Day 2', title: 'North Goa', detail: 'Fort Aguada, Baga and Calangute beaches. River cruise.' },
      { day: 'Day 3', title: 'South Goa', detail: 'Old Goa churches, Mangueshi temple and Colva beach.' },
      { day: 'Day 4', title: 'Departure', detail: 'Flea market visit and transfer to airport.' },
    ],
    inclusions: ['3 nights resort', 'Daily breakfast', 'Sightseeing transfers', 'River cruise', 'Welcome drinks'],
    exclusions: ['Airfare', 'Lunches and dinners', 'Personal expenses', 'Optional water sports', 'Travel insurance'],
  },
  {
    slug: 'singapore-family-fun',
    title: 'Singapore Family Fun',
    destination: 'Singapore',
    duration: '4 Nights / 5 Days',
    price: '₹69,999',
    image: 'https://images.pexels.com/photos/8197632/pexels-photo-8197632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Universal Studios', 'Night Safari', 'Gardens by the Bay', 'Sentosa Island'],
    category: 'Family',
    description:
      'A family-friendly Singapore itinerary with theme parks, the Night Safari and the iconic Gardens by the Bay.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival', detail: 'Arrival and city orientation tour.' },
      { day: 'Day 2', title: 'Sentosa', detail: 'Sentosa Island with Universal Studios.' },
      { day: 'Day 3', title: 'Night Safari', detail: 'Day at leisure and evening Night Safari.' },
      { day: 'Day 4', title: 'Gardens by the Bay', detail: 'Gardens by the Bay and Marina Bay Sands light show.' },
      { day: 'Day 5', title: 'Departure', detail: 'Free time and transfer to airport.' },
    ],
    inclusions: ['4 nights hotel', 'Daily breakfast', 'Universal Studios ticket', 'Night Safari', 'All transfers'],
    exclusions: ['Airfare', 'Visa fees', 'Lunches and dinners', 'Personal expenses', 'Travel insurance'],
  },
  {
    slug: 'thailand-explorer',
    title: 'Thailand Explorer',
    destination: 'Bangkok & Pattaya',
    duration: '5 Nights / 6 Days',
    price: '₹34,999',
    image: 'https://images.pexels.com/photos/1031653/pexels-photo-1031653.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Coral Island tour', 'Bangkok temple tour', 'Safari World', 'Chao Phraya dinner cruise'],
    category: 'International',
    description:
      'A value-packed Thailand tour covering Bangkok temples, Pattaya’s Coral Island and a river dinner cruise.',
    itinerary: [
      { day: 'Day 1', title: 'Arrive Bangkok', detail: 'Arrival and transfer to Pattaya.' },
      { day: 'Day 2', title: 'Coral Island', detail: 'Coral Island tour with lunch.' },
      { day: 'Day 3', title: 'To Bangkok', detail: 'Transfer to Bangkok and Chao Phraya dinner cruise.' },
      { day: 'Day 4', title: 'Temples', detail: 'Bangkok temple tour and gems gallery.' },
      { day: 'Day 5', title: 'Safari World', detail: 'Full-day Safari World and Marine Park.' },
      { day: 'Day 6', title: 'Departure', detail: 'Transfer to airport.' },
    ],
    inclusions: ['5 nights hotel', 'Daily breakfast', 'Coral Island tour', 'Safari World', 'Dinner cruise'],
    exclusions: ['Airfare', 'Visa fees', 'Lunches and dinners', 'Personal expenses', 'Travel insurance'],
  },
  {
    slug: 'rajasthan-heritage',
    title: 'Rajasthan Heritage Trail',
    destination: 'Jaipur, Jodhpur & Udaipur',
    duration: '6 Nights / 7 Days',
    price: '₹39,999',
    image: 'https://images.pexels.com/photos/3598834/pexels-photo-3598834.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: ['Amber Fort', 'Mehrangarh Fort', 'Lake Pichola boat ride', 'Heritage hotel stays'],
    category: 'Domestic',
    description:
      'A cultural journey through Rajasthan’s forts, palaces and lakes with stays in heritage properties.',
    itinerary: [
      { day: 'Day 1', title: 'Arrive Jaipur', detail: 'Arrival and evening at leisure.' },
      { day: 'Day 2', title: 'Jaipur', detail: 'Amber Fort, City Palace and Hawa Mahal.' },
      { day: 'Day 3', title: 'To Jodhpur', detail: 'Travel to Jodhpur and Mehrangarh Fort.' },
      { day: 'Day 4', title: 'To Udaipur', detail: 'Travel to Udaipur via Ranakpur temples.' },
      { day: 'Day 5', title: 'Udaipur', detail: 'City Palace and Lake Pichola boat ride.' },
      { day: 'Day 6', title: 'Free Day', detail: 'Optional day trip or relaxed exploration.' },
      { day: 'Day 7', title: 'Departure', detail: 'Transfer to airport.' },
    ],
    inclusions: ['6 nights heritage hotel', 'Daily breakfast', 'All transfers', 'Sightseeing', 'Boat ride'],
    exclusions: ['Airfare', 'Lunches and dinners', 'Personal expenses', 'Optional activities', 'Travel insurance'],
  },
];

export const packageMeta = packages.map((p) => ({
  slug: p.slug,
  title: p.title,
  destination: p.destination,
  duration: p.duration,
  price: p.price,
  image: p.image,
  highlights: p.highlights,
  category: p.category,
}));
