import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

const services = [
  'Tourist Visa',
  'Student Visa',
  'Business Visa',
  'Work Visa',
  'Family / Dependent Visa',
  'Visitor Visa',
  'Immigration / PR',
  'Travel Package',
  'Flight Booking',
  'Hotel Booking',
  'Travel Insurance',
  'Transport Service',
  'General Enquiry',
];

const destinations = [
  'Canada', 'USA', 'United Kingdom', 'Australia', 'New Zealand', 'Germany',
  'France', 'UAE', 'Singapore', 'Europe', 'Other / Not sure yet',
];

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name) e.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    if (!phone || phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.';
    if (!message || message.length < 10) e.message = 'Please tell us a little more (min 10 characters).';
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
        <h3 className="mt-4 text-xl font-600 text-navy-900">Thank you for reaching out</h3>
        <p className="mt-2 text-sm text-navy-600">
          Your message has been received. Our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Full Name *</label>
          <input id="name" name="name" type="text" className="input" placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="label">Email *</label>
          <input id="email" name="email" type="email" className="input" placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone *</label>
          <input id="phone" name="phone" type="tel" className="input" placeholder="+00 000 000 0000" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="label">Service</label>
          <select id="service" name="service" className="input" defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="destination" className="label">Destination</label>
          <select id="destination" name="destination" className="input" defaultValue="">
            <option value="" disabled>Select a destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="label">Message *</label>
          <textarea id="message" name="message" rows={4} className="input resize-none" placeholder="Tell us how we can help…" />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>
      </div>
      <button type="submit" className="btn-primary mt-5 w-full" disabled={submitting}>
        {submitting ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-navy-400">
        Demo form — messages are not stored. Reach us directly at {siteConfig.email}.
      </p>
    </form>
  );
}
