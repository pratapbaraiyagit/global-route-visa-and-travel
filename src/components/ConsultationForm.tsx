import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, ShieldCheck, HeartHandshake, MessagesSquare, UserRound } from 'lucide-react';

const visaTypes = [
  'Tourist Visa', 'Student Visa', 'Business Visa', 'Work Visa',
  'Family / Dependent Visa', 'Visitor Visa', 'Transit Visa', 'Immigration / PR', 'Not sure yet',
];

const countries = [
  'Canada', 'USA', 'United Kingdom', 'Australia', 'New Zealand', 'Germany',
  'France', 'UAE', 'Singapore', 'Europe', 'Other',
];

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'residence' | 'destination' | 'visaType', string>>;

const trustPoints = [
  { icon: ShieldCheck, text: 'No-obligation consultation' },
  { icon: UserRound, text: 'Personalized guidance' },
  { icon: MessagesSquare, text: 'Transparent communication' },
  { icon: HeartHandshake, text: 'Dedicated support' },
];

export function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const residence = String(data.get('residence') || '').trim();
    const destination = String(data.get('destination') || '').trim();
    const visaType = String(data.get('visaType') || '').trim();
    if (!name) e.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    if (!phone || phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.';
    if (!residence) e.residence = 'Please select your country of residence.';
    if (!destination) e.destination = 'Please select a destination.';
    if (!visaType) e.visaType = 'Please select a visa type.';
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-600 text-navy-900">Request received</h3>
        <p className="mt-2 text-sm text-navy-600">
          Thank you. Our team will review your information and contact you within one business day to
          schedule your free consultation.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-6">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="label">Full Name *</label>
          <input id="c-name" name="name" type="text" className="input" placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="label">Email *</label>
          <input id="c-email" name="email" type="email" className="input" placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="label">Phone *</label>
          <input id="c-phone" name="phone" type="tel" className="input" placeholder="+00 000 000 0000" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="c-residence" className="label">Country of Residence *</label>
          <select id="c-residence" name="residence" className="input" defaultValue="">
            <option value="" disabled>Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.residence && <p className="mt-1 text-xs text-red-600">{errors.residence}</p>}
        </div>
        <div>
          <label htmlFor="c-destination" className="label">Destination *</label>
          <select id="c-destination" name="destination" className="input" defaultValue="">
            <option value="" disabled>Select destination</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.destination && <p className="mt-1 text-xs text-red-600">{errors.destination}</p>}
        </div>
        <div>
          <label htmlFor="c-visa" className="label">Visa Type *</label>
          <select id="c-visa" name="visaType" className="input" defaultValue="">
            <option value="" disabled>Select visa type</option>
            {visaTypes.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          {errors.visaType && <p className="mt-1 text-xs text-red-600">{errors.visaType}</p>}
        </div>
        <div>
          <label htmlFor="c-date" className="label">Travel Date</label>
          <input id="c-date" name="travelDate" type="date" className="input" />
        </div>
        <div>
          <label htmlFor="c-travelers" className="label">Number of Travelers</label>
          <input id="c-travelers" name="travelers" type="number" min={1} defaultValue={1} className="input" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="label">Message</label>
          <textarea id="c-message" name="message" rows={3} className="input resize-none" placeholder="Anything we should know before the call?" />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-5 w-full" disabled={submitting}>
        {submitting ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <>Request Free Consultation <Send className="h-4 w-4" /></>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-navy-400">
        Demo form — requests are not stored. This is a portfolio website.
      </p>
    </form>
  );
}

export function ConsultationTrustPoints() {
  return (
    <ul className="space-y-3">
      {trustPoints.map((t) => (
        <li key={t.text} className="flex items-center gap-3 text-sm text-navy-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-700">
            <t.icon className="h-4 w-4" />
          </span>
          {t.text}
        </li>
      ))}
    </ul>
  );
}
