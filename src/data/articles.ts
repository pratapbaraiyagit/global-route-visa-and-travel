export type Article = {
  slug: string;
  title: string;
  category: 'Visa Guides' | 'Travel Tips' | 'Documentation' | 'Immigration' | 'Travel Planning';
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: 'complete-guide-to-preparing-your-visa-documents',
    title: 'Complete Guide to Preparing Your Visa Documents',
    category: 'Documentation',
    excerpt:
      'A clear, practical checklist to help you organise your visa paperwork and avoid the most common documentation mistakes.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Rohan Malhotra',
    date: '2025-07-12',
    readTime: '6 min read',
    content: [
      'A well-prepared document set is the foundation of a strong visa application. Embassies assess not just what you submit, but how consistent and credible it appears.',
      'Start with your passport. Ensure it is valid for at least six months beyond your planned travel date and has enough blank pages. Previous passports showing travel history are valuable supporting evidence.',
      'Financial documents should tell a coherent story. Sudden large deposits can raise questions, so maintain steady balances and keep statements for the full requested period — usually three to six months.',
      'Purpose-specific documents matter. Students need admission letters and proof of funds; business travellers need invitation letters; visitors need host details. We tailor every checklist to your destination and category.',
      'Finally, keep everything organised in the order requested by the embassy. A clean, indexed file makes it easier for the officer to assess your application quickly and positively.',
    ],
  },
  {
    slug: 'common-visa-application-mistakes-to-avoid',
    title: 'Common Visa Application Mistakes to Avoid',
    category: 'Visa Guides',
    excerpt:
      'Small errors can lead to refusals. Here are the most common visa application mistakes and how to prevent them.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Arjun Nair',
    date: '2025-06-28',
    readTime: '5 min read',
    content: [
      'Many refusals are preventable. The most common mistake is inconsistency — when the information on your form does not match your supporting documents.',
      'Another frequent error is insufficient proof of funds. Embassies want to see that you can comfortably afford the trip without needing to work illegally.',
      'Vague purpose is another red flag. A clear, specific itinerary or purpose statement helps the officer understand why you are travelling.',
      'Missing or expired documents, such as old bank statements or expired passports, can also lead to refusal. Always check expiry dates before filing.',
      'Finally, applying too close to your travel date leaves no room for processing delays. Start early to avoid unnecessary stress.',
    ],
  },
  {
    slug: 'how-to-plan-your-first-international-trip',
    title: 'How to Plan Your First International Trip',
    category: 'Travel Planning',
    excerpt:
      'From passports to packing, a step-by-step guide for first-time international travellers.',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Ananya Verma',
    date: '2025-06-15',
    readTime: '7 min read',
    content: [
      'Your first international trip is exciting, and a little preparation goes a long way. Start by checking your passport validity — most countries require six months of validity beyond your travel date.',
      'Next, confirm whether you need a visa. Some destinations offer visa-on-arrival or e-visas, while others require a full application. We can help you identify the right route.',
      'Book your flights and accommodation early. Not only does this save money, but confirmed bookings are often required as part of your visa application.',
      'Arrange travel insurance that covers medical emergencies, trip cancellations and lost baggage. Schengen destinations require a minimum cover of €30,000.',
      'Finally, keep digital and printed copies of all important documents. A simple folder with your passport, visa, tickets and hotel bookings will make your journey far smoother.',
    ],
  },
  {
    slug: 'travel-documents-you-should-keep-ready',
    title: 'Travel Documents You Should Keep Ready',
    category: 'Documentation',
    excerpt:
      'A quick reference list of the documents every international traveller should have on hand.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Sara Khan',
    date: '2025-05-30',
    readTime: '4 min read',
    content: [
      'Before any international trip, keep a ready folder of essential documents. This saves time at airports and during visa applications.',
      'The basics include your passport, visa (or printout of your e-visa), flight tickets and hotel bookings. Keep both printed and digital copies.',
      'For students, carry your admission letter and fee receipts. For business travellers, carry your invitation letter and company proof.',
      'Travel insurance is essential — carry both the policy document and the emergency assistance number.',
      'Finally, keep a few passport-size photographs handy. They are occasionally required for local permits or forms on arrival.',
    ],
  },
  {
    slug: 'student-visa-application-checklist',
    title: 'Student Visa Application Checklist',
    category: 'Visa Guides',
    excerpt:
      'Everything a student needs to prepare before filing a student visa application abroad.',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Rohan Malhotra',
    date: '2025-05-18',
    readTime: '6 min read',
    content: [
      'A student visa application stands or falls on documentation. Start with your admission offer — it should be from a recognised institution and clearly state your course and fees.',
      'Financial evidence is critical. Most destinations require proof of funds for tuition plus living expenses. Some require a blocked account or education loan documentation.',
      'Language proficiency is next. Keep your IELTS, TOEFL or equivalent test scores ready and ensure they are within the validity period.',
      'Your Statement of Purpose should explain your academic journey, why you chose the course and institution, and your plans after graduation. We help you craft this carefully.',
      'Finally, arrange academic transcripts, passport photographs and a valid passport. We provide a tailored checklist once your destination is confirmed.',
    ],
  },
  {
    slug: 'understanding-skilled-migration-pathways',
    title: 'Understanding Skilled Migration Pathways',
    category: 'Immigration',
    excerpt:
      'A plain-English overview of how skilled migration and permanent residency routes work.',
    image: 'https://images.pexels.com/photos/3573511/pexels-photo-3573511.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Arjun Nair',
    date: '2025-05-02',
    readTime: '8 min read',
    content: [
      'Skilled migration allows professionals to live and work abroad permanently. Most routes are points-based, considering age, education, experience and language ability.',
      'Canada’s Express Entry, Australia’s SkillSelect and New Zealand’s Skilled Migrant Category are popular examples. Each has its own points test and invitation rounds.',
      'A job offer is not always required. Several routes invite applicants based on points alone, though a job offer or provincial nomination can significantly boost your score.',
      'Language scores matter more than most applicants realise. A small improvement in your IELTS band can move you from borderline to invited.',
      'We assess your profile, recommend the strongest route and help you file your Expression of Interest at the right time.',
    ],
  },
  {
    slug: 'tips-for-smooth-airport-transfers',
    title: 'Tips for Smooth Airport Transfers',
    category: 'Travel Tips',
    excerpt:
      'How to make your airport pickup and drop stress-free, especially for international travel.',
    image: 'https://images.pexels.com/photos/6262317/pexels-photo-6262317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Sara Khan',
    date: '2025-04-20',
    readTime: '4 min read',
    content: [
      'Airport transfers are the first and last impression of any trip. A little planning makes them seamless.',
      'Book your transfer in advance, especially for early morning or late night flights. Last-minute bookings are often more expensive and less reliable.',
      'Share your flight number with your driver so they can track delays. A professional service will adjust pickup time automatically.',
      'For international arrivals, allow time for immigration and baggage — usually 45–60 minutes after landing before you are ready to leave.',
      'Keep your driver’s contact number handy, and always confirm the pickup point. At large airports, meeting points can be a short walk from arrivals.',
    ],
  },
  {
    slug: 'schengen-visa-explained',
    title: 'Schengen Visa Explained: Travel Across Europe',
    category: 'Visa Guides',
    excerpt:
      'How the Schengen short-stay visa works and which country you should apply through.',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Ananya Verma',
    date: '2025-04-05',
    readTime: '6 min read',
    content: [
      'A Schengen visa allows short stays across 27+ European countries with a single visa. It is ideal for tourism, business and family visits.',
      'You should apply through the country of your main destination — where you will spend the most nights. If nights are equal, apply through the country of first entry.',
      'Travel insurance with a minimum cover of €30,000 is mandatory. We arrange compliant policies as part of our service.',
      'Processing usually takes 10–15 working days, though this can extend during peak season. Apply early to avoid last-minute stress.',
      'We help you identify the correct embassy, prepare your itinerary and file a complete application to give you the best chance of approval.',
    ],
  },
];

export const articleMeta = articles.map((a) => ({
  slug: a.slug,
  title: a.title,
  category: a.category,
  excerpt: a.excerpt,
  image: a.image,
  author: a.author,
  date: a.date,
  readTime: a.readTime,
}));
