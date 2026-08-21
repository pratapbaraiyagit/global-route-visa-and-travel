export type VisaService = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  image: string;
  overview: string;
  whoCanApply: string[];
  requirements: string[];
  documents: string[];
  process: { title: string; description: string }[];
  processing: string[];
  commonMistakes: string[];
  faqs: { q: string; a: string }[];
};

export const visaServices: VisaService[] = [
  {
    slug: 'tourist-visa',
    name: 'Tourist Visa',
    short: 'Leisure travel, sightseeing and short visits for tourism purposes.',
    icon: 'Camera',
    image:
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A tourist visa allows you to visit a country for leisure, sightseeing and short-term travel. We help you understand the eligibility criteria, prepare a clean document set and submit a strong application that clearly demonstrates your intent to return.',
    whoCanApply: [
      'Individuals travelling for leisure, sightseeing or recreation',
      'Applicants with a clear travel itinerary and sufficient funds',
      'Travellers with strong ties to their home country',
      'Those meeting the host country’s character and health requirements',
    ],
    requirements: [
      'Valid passport with at least six months validity beyond travel',
      'Demonstrable financial means to cover the trip',
      'Confirmed return ticket or itinerary',
      'Proof of accommodation for the duration of stay',
      'Evidence of strong ties to home country (employment, family, property)',
    ],
    documents: [
      'Valid passport and previous passports',
      'Recent passport-size photographs meeting specification',
      'Completed visa application form',
      'Bank statements for the last 3–6 months',
      'Travel itinerary and hotel bookings',
      'Employment letter or leave approval',
      'Travel insurance covering the trip',
    ],
    process: [
      { title: 'Consultation', description: 'We assess your travel purpose and confirm the right visa category.' },
      { title: 'Document Review', description: 'Our team reviews your documents for completeness and consistency.' },
      { title: 'Form Filing', description: 'We complete the application form accurately and book your appointment.' },
      { title: 'Submission', description: 'We accompany you through biometrics and submission where required.' },
      { title: 'Decision Tracking', description: 'We track the decision and guide you on next steps.' },
    ],
    processing: [
      'Processing timelines vary by destination and season — we share current estimates during consultation',
      'Express processing may be available for select destinations at an additional fee',
      'Applications are stronger with a clear itinerary and consistent documentation',
    ],
    commonMistakes: [
      'Inconsistent information across form, documents and interview',
      'Insufficient proof of funds or sudden large deposits',
      'Vague travel itinerary with no clear purpose',
      'Missing supporting letters or expired documents',
    ],
    faqs: [
      { q: 'How long can I stay on a tourist visa?', a: 'Stay duration depends on the destination and the visa granted. We confirm this during your consultation based on current rules.' },
      { q: 'Can I extend my tourist visa?', a: 'Extensions are limited and country-specific. We advise on eligibility before you travel rather than after arrival.' },
      { q: 'Do I need to show a return ticket?', a: 'Most destinations require a confirmed return ticket or onward travel proof as part of a strong application.' },
    ],
  },
  {
    slug: 'student-visa',
    name: 'Student Visa',
    short: 'Study abroad at recognised institutions with complete documentation support.',
    icon: 'GraduationCap',
    image:
      'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A student visa enables you to pursue academic or vocational studies at a recognised institution abroad. We guide you from offer-letter review to financial documentation, helping you present a credible academic plan.',
    whoCanApply: [
      'Students with an offer of admission from a recognised institution',
      'Applicants able to demonstrate sufficient funds for tuition and living costs',
      'Those meeting language proficiency requirements',
      'Students with a clear academic progression plan',
    ],
    requirements: [
      'Confirmed admission or unconditional offer from a recognised institution',
      'Proof of funds for tuition and living expenses',
      'Accepted English-language test scores where applicable',
      'Academic transcripts and certificates',
      'Intent to study and return after course completion',
    ],
    documents: [
      'Valid passport',
      'Offer letter / Confirmation of Acceptance',
      'Academic transcripts and certificates',
      'English proficiency test results',
      'Proof of funds (bank statements, education loan, sponsor letters)',
      'Statement of Purpose',
      'Tuition fee payment receipts',
      'Passport-size photographs',
    ],
    process: [
      { title: 'Profile Review', description: 'We evaluate your admission offer and financial position.' },
      { title: 'Document Planning', description: 'We build a document checklist tailored to your destination.' },
      { title: 'Financials', description: 'We help structure your proof of funds to meet embassy expectations.' },
      { title: 'Filing', description: 'We complete forms, book biometrics and prepare you for interview.' },
      { title: 'Pre-Departure', description: 'We guide you on post-approval steps and travel readiness.' },
    ],
    processing: [
      'Student visa timelines depend on course start date and destination',
      'Early filing is recommended — ideally 2–3 months before intake',
      'Some destinations require a credibility interview',
    ],
    commonMistakes: [
      'Unstructured or generic Statement of Purpose',
      'Inconsistent financial evidence across sponsor and bank documents',
      'Mismatch between course level and previous academic background',
      'Missing or expired English test scores',
    ],
    faqs: [
      { q: 'Can I work while on a student visa?', a: 'Work rights vary by destination. We explain the specific conditions that apply to your chosen country during consultation.' },
      { q: 'What if my course is delayed?', a: 'We help you understand whether a fresh application or deferral is appropriate based on your situation.' },
      { q: 'Do I need an interview?', a: 'Some destinations require a credibility interview. We conduct a mock interview to prepare you.' },
    ],
  },
  {
    slug: 'business-visa',
    name: 'Business Visa',
    short: 'Attend meetings, conferences and explore business opportunities abroad.',
    icon: 'Briefcase',
    image:
      'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A business visa supports short-term travel for meetings, conferences, trade fairs and establishing business relationships. We help you present a clear business purpose with credible documentation.',
    whoCanApply: [
      'Business owners, partners and senior executives',
      'Employees travelling for client meetings or negotiations',
      'Delegates attending conferences or trade fairs',
      'Investors exploring opportunities abroad',
    ],
    requirements: [
      'Valid passport with sufficient validity',
      'Invitation letter from the host company or conference',
      'Letter from your employer explaining the business purpose',
      'Proof of business activity or registration',
      'Sufficient funds to cover the trip',
    ],
    documents: [
      'Valid passport',
      'Invitation letter from overseas business partner',
      'Covering letter from your employer',
      'Company registration proof',
      'Recent bank statements',
      'Conference or event registration confirmation',
      'Travel itinerary',
    ],
    process: [
      { title: 'Purpose Mapping', description: 'We clarify your business purpose and the right visa category.' },
      { title: 'Documentation', description: 'We arrange invitation letters and employer correspondence.' },
      { title: 'Filing', description: 'We complete the application and schedule your appointment.' },
      { title: 'Interview Prep', description: 'We brief you on likely questions and expected answers.' },
      { title: 'Follow-up', description: 'We track the decision and share next steps promptly.' },
    ],
    processing: [
      'Business visas often process faster than long-stay categories',
      'Invitation letters should be recent and on company letterhead',
      'Clear business intent reduces the chance of additional queries',
    ],
    commonMistakes: [
      'Vague invitation letters without specific dates or purpose',
      'Mismatch between stated purpose and supporting documents',
      'No proof of ongoing business activity',
      'Applying on a tourist visa for business travel',
    ],
    faqs: [
      { q: 'Can I work on a business visa?', a: 'No. Business visas are for meetings and events, not employment. We help you identify the correct category if work is involved.' },
      { q: 'How long is a business visa valid?', a: 'Validity varies by destination. We share current validity during your consultation.' },
      { q: 'Do I need an invitation letter?', a: 'Most destinations require an invitation letter. We help draft and review it for you.' },
    ],
  },
  {
    slug: 'work-visa',
    name: 'Work Visa',
    short: 'Take up employment abroad with the correct sponsorship and documentation.',
    icon: 'HardHat',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A work visa allows you to take up employment in another country, typically with a confirmed job offer and employer sponsorship. We help you understand the route, compile evidence and prepare for any interview.',
    whoCanApply: [
      'Applicants with a confirmed job offer or employer sponsorship',
      'Skilled professionals meeting occupation and salary criteria',
      'Those meeting language and health requirements',
      'Workers with relevant qualifications and experience',
    ],
    requirements: [
      'Confirmed employment offer or sponsorship',
      'Relevant qualifications and experience evidence',
      'Meeting salary and occupation thresholds where applicable',
      'Language proficiency where required',
      'Valid passport and health clearance',
    ],
    documents: [
      'Valid passport',
      'Employment contract or offer letter',
      'Sponsorship or employer approval letter',
      'Educational and professional certificates',
      'Language test results',
      'Police clearance certificate',
      'Medical fitness certificate where required',
    ],
    process: [
      { title: 'Eligibility Check', description: 'We assess your offer against destination-specific criteria.' },
      { title: 'Sponsorship', description: 'We guide your employer on sponsorship requirements.' },
      { title: 'Documentation', description: 'We build a complete document set for your role.' },
      { title: 'Filing', description: 'We submit the application and track progress.' },
      { title: 'Arrival Support', description: 'We brief you on post-arrival registration where needed.' },
    ],
    processing: [
      'Work visa timelines depend on sponsorship approval and destination',
      'Some routes require a labour market test by the employer',
      'Keep original certificates ready for verification',
    ],
    commonMistakes: [
      'Incomplete sponsorship documentation',
      'Mismatch between job title and actual role',
      'Missing police clearance or medical certificates',
      'Applying in the wrong work category',
    ],
    faqs: [
      { q: 'Can I change employers on a work visa?', a: 'Changing employers usually requires a new sponsorship. We advise on the process specific to your destination.' },
      { q: 'Can my family join me?', a: 'Many work routes allow dependants. We help with dependent applications once your work visa is approved.' },
      { q: 'Is a job offer mandatory?', a: 'For most work routes, yes. We help confirm whether your destination offers any offer-free skilled routes.' },
    ],
  },
  {
    slug: 'family-visa',
    name: 'Family / Dependent Visa',
    short: 'Reunite with family or join a spouse or parent living abroad.',
    icon: 'Users',
    image:
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A family or dependent visa lets you join a spouse, parent or qualifying relative who is a resident or citizen of another country. We help you establish the relationship and meet the financial requirements.',
    whoCanApply: [
      'Spouses and partners of residents or citizens',
      'Children joining parents abroad',
      'Dependent parents of qualifying residents',
      'Fiancé(e)s in destinations that recognise such routes',
    ],
    requirements: [
      'Valid relationship proof with the sponsor',
      'Sponsor meeting income or financial requirements',
      'Suitable accommodation evidence',
      'Valid passport and health clearance',
      'Intent to live together genuinely',
    ],
    documents: [
      'Valid passports of applicant and sponsor',
      'Marriage certificate or relationship proof',
      'Birth certificates for children',
      'Sponsor’s income proof and tax documents',
      'Accommodation evidence',
      'Photographs and relationship timeline',
      'Language test results where applicable',
    ],
    process: [
      { title: 'Relationship Review', description: 'We assess the strength of your relationship evidence.' },
      { title: 'Financials', description: 'We confirm the sponsor meets financial thresholds.' },
      { title: 'Documentation', description: 'We compile a complete relationship and finance file.' },
      { title: 'Filing', description: 'We submit the application and track the decision.' },
      { title: 'Arrival', description: 'We guide you on post-arrival registration and residency.' },
    ],
    processing: [
      'Family visa timelines vary widely by destination and relationship type',
      'Genuine relationship evidence is the most important factor',
      'Sponsor’s financial position must be clearly documented',
    ],
    commonMistakes: [
      'Insufficient relationship evidence or gaps in timeline',
      'Sponsor income just below the required threshold',
      'Missing translations of regional documents',
      'Inconsistent dates across documents',
    ],
    faqs: [
      { q: 'How long until I can work on a family visa?', a: 'Work rights depend on the destination. We clarify this during your consultation.' },
      { q: 'What if my sponsor is between jobs?', a: 'Some destinations allow savings as an alternative. We help assess your options.' },
      { q: 'Can my children apply with me?', a: 'Yes, dependent children can usually apply alongside or after the main applicant.' },
    ],
  },
  {
    slug: 'visitor-visa',
    name: 'Visitor Visa',
    short: 'Short visits to family, friends or for casual personal travel.',
    icon: 'Plane',
    image:
      'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A visitor visa covers short-term visits to family or friends, casual personal travel and social occasions. We help you present a clear purpose, a credible sponsor and strong home ties.',
    whoCanApply: [
      'Applicants visiting family or friends abroad',
      'Travellers attending social or family occasions',
      'Those with a credible host and accommodation',
      'Applicants able to fund their visit',
    ],
    requirements: [
      'Valid passport',
      'Invitation letter from the host',
      'Proof of relationship with the host where applicable',
      'Sufficient funds for the visit',
      'Evidence of intent to return',
    ],
    documents: [
      'Valid passport',
      'Invitation letter from host',
      'Host’s ID proof and residence proof',
      'Bank statements of applicant or sponsor',
      'Travel itinerary',
      'Proof of relationship with host',
    ],
    process: [
      { title: 'Purpose Review', description: 'We confirm the visit purpose and host details.' },
      { title: 'Host Documents', description: 'We arrange the invitation and host proofs.' },
      { title: 'Filing', description: 'We complete the application and book your appointment.' },
      { title: 'Tracking', description: 'We track the decision and share updates promptly.' },
    ],
    processing: [
      'Visitor visas generally process faster than long-stay categories',
      'A credible host and clear purpose strengthen the application',
      'Previous travel history helps establish credibility',
    ],
    commonMistakes: [
      'Missing host documents or vague invitation letters',
      'Insufficient proof of funds',
      'No evidence of intent to return',
      'Applying too close to the travel date',
    ],
    faqs: [
      { q: 'Can my host sponsor my trip financially?', a: 'Yes, with a sponsorship letter and their financial proof. We help prepare both.' },
      { q: 'How long can I stay?', a: 'Stay duration depends on the destination. We confirm this during consultation.' },
      { q: 'Can I extend my visit?', a: 'Extensions are limited. We advise on this before you travel.' },
    ],
  },
  {
    slug: 'transit-visa',
    name: 'Transit Visa',
    short: 'Short layovers and connecting travel through a third country.',
    icon: 'PlaneTakeoff',
    image:
      'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'A transit visa is for travellers passing through a country en route to their final destination. We confirm whether you need one based on your nationality, layover and onward ticket.',
    whoCanApply: [
      'Travellers with a connecting flight through a third country',
      'Applicants with a confirmed onward ticket',
      'Those whose nationality requires a transit visa for the layover country',
      'Passengers with a short layover within permitted hours',
    ],
    requirements: [
      'Valid passport',
      'Confirmed onward ticket to a third country',
      'Visa for the final destination where applicable',
      'Layover within the permitted duration',
    ],
    documents: [
      'Valid passport',
      'Confirmed onward flight ticket',
      'Visa for final destination if required',
      'Completed transit visa application',
      'Recent photograph',
    ],
    process: [
      { title: 'Layover Check', description: 'We confirm whether a transit visa is required for your route.' },
      { title: 'Documentation', description: 'We arrange your onward ticket and supporting proofs.' },
      { title: 'Filing', description: 'We submit the application and track the decision.' },
    ],
    processing: [
      'Transit visas usually process quickly',
      'Some countries offer transit without a visa for short layovers — we confirm eligibility',
      'Always carry your onward ticket printed',
    ],
    commonMistakes: [
      'Assuming no transit visa is needed for your nationality',
      'Layover exceeding permitted visa-free hours',
      'Missing the final destination visa',
    ],
    faqs: [
      { q: 'Do I always need a transit visa?', a: 'Not always. It depends on your nationality, layover country and duration. We confirm this for your route.' },
      { q: 'Can I leave the airport on a transit visa?', a: 'Usually no. If you plan to exit, a visitor visa may be needed instead.' },
    ],
  },
  {
    slug: 'immigration-pr',
    name: 'Immigration / PR Assistance',
    short: 'Permanent residency routes for skilled professionals and families.',
    icon: 'Globe2',
    image:
      'https://images.pexels.com/photos/3573511/pexels-photo-3573511.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      'Permanent residency allows you to live, work and settle in another country long-term. We help you understand the route that fits your profile — points-based, employer-led or family-sponsored — and plan your application strategically.',
    whoCanApply: [
      'Skilled professionals meeting points-based criteria',
      'Applicants with qualifying work experience and education',
      'Those with family or employer sponsorship in some routes',
      'Individuals with language proficiency and settlement funds',
    ],
    requirements: [
      'Points-based eligibility (age, education, experience, language)',
      'Proof of settlement funds',
      'Language proficiency test results',
      'Educational credential assessment',
      'Health and character clearance',
    ],
    documents: [
      'Valid passport',
      'Educational transcripts and credential assessment',
      'Language test results',
      'Work experience letters',
      'Proof of funds',
      'Police clearance certificate',
      'Medical examination report',
    ],
    process: [
      { title: 'Profile Assessment', description: 'We evaluate your points and route eligibility.' },
      { title: 'Strategy', description: 'We recommend the strongest route for your profile.' },
      { title: 'Documentation', description: 'We arrange credential assessment and language tests.' },
      { title: 'Expression of Interest', description: 'We help file your profile in the relevant pool.' },
      { title: 'Application', description: 'On invitation, we compile and submit the full application.' },
    ],
    processing: [
      'PR timelines vary widely by route and destination',
      'Points-based routes involve invitations in rounds',
      'Early profile creation improves your chances over time',
    ],
    commonMistakes: [
      'Underestimating the importance of language scores',
      'Missing credential assessment before filing',
      'Inconsistent work experience letters',
      'Applying in a route not suited to your profile',
    ],
    faqs: [
      { q: 'How long does PR take?', a: 'It varies by route and destination. We share current timelines after assessing your profile.' },
      { q: 'Can my family be included?', a: 'Yes, most PR routes allow dependants. We help plan the family application.' },
      { q: 'Is a job offer required?', a: 'Not always. Some routes are offer-free. We confirm the best fit for you.' },
    ],
  },
];

export const visaServiceMeta = visaServices.map((v) => ({
  slug: v.slug,
  name: v.name,
  short: v.short,
  icon: v.icon,
}));
