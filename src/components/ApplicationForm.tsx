import { useState, useRef } from 'react';
import { Send, CheckCircle, Upload, X } from 'lucide-react';
import { submitApplication, uploadFile } from '../lib/supabase';
import { type Program, SECTORS, INVESTMENT_RANGES } from '../lib/programs';

const ROLES = ['Student', 'Alumni', 'Searcher', 'Aspiring Searcher', 'Operator', 'Investor', 'Advisor', 'Independent Sponsor', 'Service Provider', 'ETA Ecosystem Professional', 'Other'];

interface Props { program: Program; onNavigate: (p: string) => void; }

export default function ApplicationForm({ program, onNavigate }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const cvRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: '', email: '', role: '', linkedin: '', phone: '',
    background: '', lookingFor: '', interests: [] as string[],
    sectors: [] as string[],
    website: '', companyName: '', companyDescription: '',
    investmentRange: '', message: '',
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const toggleList = (key: 'interests' | 'sectors', val: string) => {
    setForm(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) { setError('Please fill in all required fields.'); return; }
    if (form.interests.length === 0) { setError('Please select at least one interest.'); return; }
    setSubmitting(true);
    setError('');

    try {
      let cvUrl = '';
      let coverUrl = '';
      if (cvFile) { cvUrl = (await uploadFile(cvFile, 'matching/' + program.id)) || ''; }
      if (coverFile) { coverUrl = (await uploadFile(coverFile, 'matching/' + program.id)) || ''; }

      await submitApplication({
        type: program.id, name: form.name, email: form.email, role: form.role,
        linkedin: form.linkedin || null, phone: form.phone || null,
        background: form.background, looking_for: form.lookingFor || null,
        interests: form.interests, sectors: form.sectors.length ? form.sectors : null,
        website: form.website || null, company_name: form.companyName || null,
        company_description: form.companyDescription || null,
        investment_range: form.investmentRange || null, message: form.message || null,
        cv_url: cvUrl || null, cover_letter_url: coverUrl || null, status: 'new',
      });
      setSubmitted(true);
    } catch {
      // Fallback already handled in submitApplication
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ width: 56, height: 56, background: '#ECFDF5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle size={28} color="#059669" />
        </div>
        <h3 className="font-serif" style={{ fontSize: 24, marginBottom: 8 }}>Application Submitted</h3>
        <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.6 }}>
          Thank you for applying to the {program.label} program. Our team will review your application and get back to you.
        </p>
        <button onClick={() => onNavigate('home')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 640 }}>
      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '12px 16px', marginBottom: 20, fontSize: 13, color: '#DC2626' }}>{error}</div>
      )}

      <Section title="About You">
        <Row>
          <Field label="Full Name *" value={form.name} onChange={v => set('name', v)} placeholder="Your full name" />
          <Field label="Email *" value={form.email} onChange={v => set('email', v)} placeholder="you@example.com" type="email" />
        </Row>
        <Row>
          <div style={{ flex: 1 }}>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Role *</label>
            <select className="input" value={form.role} onChange={e => set('role', e.target.value)} style={{ appearance: 'auto' }}>
              <option value="">Select your role</option>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <Field label="LinkedIn" value={form.linkedin} onChange={v => set('linkedin', v)} placeholder="linkedin.com/in/..." />
        </Row>
        <Row>
          <Field label="Phone" value={form.phone} onChange={v => set('phone', v)} placeholder="+44..." />
        </Row>
      </Section>

      <Section title="Your Background">
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>Tell us about yourself *</label>
          <textarea className="input" value={form.background} onChange={e => set('background', e.target.value)}
            placeholder="Your professional background, experience, and current focus..." rows={4} />
        </div>
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>What are you looking for?</label>
          <textarea className="input" value={form.lookingFor} onChange={e => set('lookingFor', e.target.value)}
            placeholder="Describe what you hope to find through this program..." rows={3} />
        </div>
      </Section>

      <Section title="Interests *">
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>Select all that apply:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {program.interestOptions.map(opt => (
            <button key={opt} type="button" onClick={() => toggleList('interests', opt)}
              style={{ padding: '8px 16px', fontSize: 13, fontWeight: 600, border: '2px solid', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
                borderColor: form.interests.includes(opt) ? 'var(--blue)' : 'var(--border)',
                background: form.interests.includes(opt) ? 'var(--blue-light)' : 'transparent',
                color: form.interests.includes(opt) ? 'var(--blue)' : 'var(--text-2)' }}>
              {opt}
            </button>
          ))}
        </div>
      </Section>

      {program.requiresSectors && (
        <Section title="Sector Preferences">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {SECTORS.map(s => (
              <button key={s} type="button" onClick={() => toggleList('sectors', s)}
                style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, border: '1px solid', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  borderColor: form.sectors.includes(s) ? 'var(--blue)' : 'var(--border)',
                  background: form.sectors.includes(s) ? 'var(--blue-light)' : 'transparent',
                  color: form.sectors.includes(s) ? 'var(--blue)' : 'var(--text-2)' }}>
                {s}
              </button>
            ))}
          </div>
        </Section>
      )}

      {program.requiresInvestmentRange && (
        <Section title="Investment Range">
          <select className="input" value={form.investmentRange} onChange={e => set('investmentRange', e.target.value)} style={{ appearance: 'auto', maxWidth: 300 }}>
            <option value="">Select range</option>
            {INVESTMENT_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </Section>
      )}

      {program.requiresWebsite && (
        <Section title="Company Details">
          <Row>
            <Field label="Company Name" value={form.companyName} onChange={v => set('companyName', v)} placeholder="Company name" />
            <Field label="Website" value={form.website} onChange={v => set('website', v)} placeholder="https://..." />
          </Row>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Company Description</label>
            <textarea className="input" value={form.companyDescription} onChange={e => set('companyDescription', e.target.value)}
              placeholder="Brief description of the company and the opportunity..." rows={3} />
          </div>
        </Section>
      )}

      {program.requiresCV && (
        <Section title="Documents">
          <FileUpload label="CV / Resume *" file={cvFile} onFile={setCvFile} inputRef={cvRef} />
          <FileUpload label="Cover Letter (optional)" file={coverFile} onFile={setCoverFile} inputRef={coverRef} />
        </Section>
      )}

      <Section title="Additional Information">
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>Anything else?</label>
          <textarea className="input" value={form.message} onChange={e => set('message', e.target.value)}
            placeholder="Any additional context, preferences, or questions..." rows={3} />
        </div>
      </Section>

      <div style={{ paddingTop: 8 }}>
        <button type="submit" className="btn-primary" disabled={submitting} style={{ opacity: submitting ? 0.6 : 1 }}>
          {submitting ? 'Submitting...' : 'Submit Application'} <Send size={14} />
        </button>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>{children}</div>;
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }) {
  return (
    <div style={{ flex: 1 }}>
      <label className="label" style={{ display: 'block', marginBottom: 6 }}>{label}</label>
      <input className="input" type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

function FileUpload({ label, file, onFile, inputRef }: { label: string; file: File | null; onFile: (f: File | null) => void; inputRef: React.RefObject<HTMLInputElement | null> }) {
  return (
    <div>
      <label className="label" style={{ display: 'block', marginBottom: 6 }}>{label}</label>
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" onChange={e => onFile(e.target.files?.[0] || null)} style={{ display: 'none' }} />
      {file ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: '1px solid var(--border)', background: 'var(--surface-2)' }}>
          <span style={{ fontSize: 13, flex: 1 }}>{file.name}</span>
          <button type="button" onClick={() => { onFile(null); if (inputRef.current) inputRef.current.value = ''; }} className="btn-ghost" style={{ padding: 4, color: 'var(--muted)' }}><X size={14} /></button>
        </div>
      ) : (
        <button type="button" onClick={() => inputRef.current?.click()} className="btn-secondary" style={{ fontSize: 13, padding: '8px 16px' }}>
          <Upload size={14} /> Choose File
        </button>
      )}
    </div>
  );
}
