import { useState, useRef } from 'react';
import { Send, CheckCircle, Upload, FileText, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { type Program, SECTORS, INVESTMENT_RANGES } from '../lib/programs';

const ROLES = ['Student', 'Alumni', 'Searcher', 'Aspiring Searcher', 'Operator', 'Investor', 'Advisor', 'Independent Sponsor', 'Service Provider', 'ETA Ecosystem Professional', 'Other'];

interface Props {
  program: Program;
  onNavigate: (p: any) => void;
}

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
    investmentRange: '',
    message: '',
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const toggleList = (key: 'interests' | 'sectors', val: string) => {
    setForm(f => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      let cvUrl = '';
      let coverUrl = '';

      if (cvFile) {
        const ext = cvFile.name.split('.').pop();
        const path = `matching/${program.id}/${Date.now()}-cv.${ext}`;
        const { error: upErr } = await supabase.storage.from('documents').upload(path, cvFile);
        if (!upErr) { const { data } = supabase.storage.from('documents').getPublicUrl(path); cvUrl = data.publicUrl; }
      }
      if (coverFile) {
        const ext = coverFile.name.split('.').pop();
        const path = `matching/${program.id}/${Date.now()}-cover.${ext}`;
        const { error: upErr } = await supabase.storage.from('documents').upload(path, coverFile);
        if (!upErr) { const { data } = supabase.storage.from('documents').getPublicUrl(path); coverUrl = data.publicUrl; }
      }

      const payload = {
        type: program.id,
        name: form.name,
        email: form.email,
        role: form.role,
        linkedin: form.linkedin || null,
        phone: form.phone || null,
        background: form.background,
        looking_for: form.lookingFor || null,
        interests: form.interests,
        sectors: form.sectors.length ? form.sectors : null,
        website: form.website || null,
        company_name: form.companyName || null,
        company_description: form.companyDescription || null,
        investment_range: form.investmentRange || null,
        message: form.message || null,
        cv_url: cvUrl || null,
        cover_letter_url: coverUrl || null,
        status: 'new',
      };

      const { error: dbError } = await supabase.from('matching_applications').insert(payload);
      if (dbError) {
        const subs = JSON.parse(localStorage.getItem('eta-matching-submissions') || '[]');
        subs.push({ ...form, type: program.id, cvFileName: cvFile?.name, coverFileName: coverFile?.name, submittedAt: new Date().toISOString() });
        localStorage.setItem('eta-matching-submissions', JSON.stringify(subs));
      }
      setSubmitted(true);
    } catch {
      const subs = JSON.parse(localStorage.getItem('eta-matching-submissions') || '[]');
      subs.push({ ...form, type: program.id, cvFileName: cvFile?.name, coverFileName: coverFile?.name, submittedAt: new Date().toISOString() });
      localStorage.setItem('eta-matching-submissions', JSON.stringify(subs));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 16px' }}>
        <div style={{ width: 56, height: 56, background: '#f0f7f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <CheckCircle size={28} style={{ color: '#16a34a' }} />
        </div>
        <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Application received</h2>
        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.6 }}>
          Thank you for your submission. The team will review your application and be in touch if there is a relevant match.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('home')} className="btn-primary">Back to Home</button>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', role: '', linkedin: '', phone: '', background: '', lookingFor: '', interests: [], sectors: [], website: '', companyName: '', companyDescription: '', investmentRange: '', message: '' }); setCvFile(null); setCoverFile(null); }} className="btn-secondary">Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 640, margin: '0 auto' }}>
      <div style={{ display: 'grid', gap: 20 }}>
        {/* Name + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Full Name *</label>
            <input required value={form.name} onChange={e => set('name', e.target.value)} className="input" placeholder="Your full name" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Email *</label>
            <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} className="input" placeholder="your@email.com" />
          </div>
        </div>

        {/* Role + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Your Role *</label>
            <select required value={form.role} onChange={e => set('role', e.target.value)} className="input">
              <option value="">Select your role</option>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Phone</label>
            <input value={form.phone} onChange={e => set('phone', e.target.value)} className="input" placeholder="+44 ..." />
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>LinkedIn Profile</label>
          <input value={form.linkedin} onChange={e => set('linkedin', e.target.value)} className="input" placeholder="https://linkedin.com/in/..." />
        </div>

        {/* Company fields */}
        {program.requiresCompany && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label className="label" style={{ display: 'block', marginBottom: 6 }}>Company / Organisation *</label>
              <input required value={form.companyName} onChange={e => set('companyName', e.target.value)} className="input" placeholder="Your company name" />
            </div>
            {program.requiresWebsite && (
              <div>
                <label className="label" style={{ display: 'block', marginBottom: 6 }}>Company Website *</label>
                <input required value={form.website} onChange={e => set('website', e.target.value)} className="input" placeholder="https://..." />
              </div>
            )}
          </div>
        )}
        {program.requiresCompany && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>About Your Company</label>
            <textarea value={form.companyDescription} onChange={e => set('companyDescription', e.target.value)} className="input" rows={3} placeholder="Brief description..." />
          </div>
        )}

        {/* Website only (no company) */}
        {program.requiresWebsite && !program.requiresCompany && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Website</label>
            <input value={form.website} onChange={e => set('website', e.target.value)} className="input" placeholder="https://..." />
          </div>
        )}

        {/* Investment Range */}
        {program.requiresInvestmentRange && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Investment Range</label>
            <select value={form.investmentRange} onChange={e => set('investmentRange', e.target.value)} className="input">
              <option value="">Select range</option>
              {INVESTMENT_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        )}

        {/* Interests */}
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 8 }}>What are you interested in? *</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {program.interestOptions.map(i => (
              <button key={i} type="button" onClick={() => toggleList('interests', i)}
                style={{
                  padding: '8px 16px', fontSize: 13, fontWeight: 600, border: '2px solid', cursor: 'pointer', transition: 'all 0.15s',
                  background: form.interests.includes(i) ? 'var(--navy)' : '#fff',
                  color: form.interests.includes(i) ? '#fff' : 'var(--navy)',
                  borderColor: form.interests.includes(i) ? 'var(--navy)' : 'var(--border)',
                }}>
                {i}
              </button>
            ))}
          </div>
        </div>

        {/* Sectors */}
        {program.requiresSectors && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 8 }}>Preferred Sectors</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {SECTORS.map(s => (
                <button key={s} type="button" onClick={() => toggleList('sectors', s)}
                  style={{
                    padding: '6px 12px', fontSize: 12, fontWeight: 500, border: '1px solid', cursor: 'pointer', transition: 'all 0.15s',
                    background: form.sectors.includes(s) ? 'var(--cream)' : '#fff',
                    color: form.sectors.includes(s) ? 'var(--navy)' : 'var(--muted)',
                    borderColor: form.sectors.includes(s) ? 'var(--navy)' : 'var(--border)',
                  }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Background */}
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>Background *</label>
          <textarea required value={form.background} onChange={e => set('background', e.target.value)} className="input" rows={4}
            placeholder="Your experience, current role, and ETA interest..." />
        </div>

        {/* Looking for */}
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>What are you looking for? *</label>
          <textarea required value={form.lookingFor} onChange={e => set('lookingFor', e.target.value)} className="input" rows={3}
            placeholder="Describe what you're looking for..." />
        </div>

        {/* CV Upload */}
        {program.requiresCV && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>CV / Resume *</label>
            <input ref={cvRef} type="file" accept=".pdf,.doc,.docx" onChange={e => setCvFile(e.target.files?.[0] || null)} style={{ display: 'none' }} />
            {cvFile ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', border: '2px solid var(--navy)', background: '#f8f8f8' }}>
                <FileText size={16} style={{ color: 'var(--navy)' }} />
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{cvFile.name}</span>
                <button type="button" onClick={() => setCvFile(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><X size={14} /></button>
              </div>
            ) : (
              <button type="button" onClick={() => cvRef.current?.click()}
                style={{ width: '100%', padding: '20px', border: '2px dashed var(--border)', background: '#fafaf8', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--navy)')} onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <Upload size={20} style={{ color: 'var(--muted)' }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>Upload your CV</span>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>PDF, DOC, or DOCX</span>
              </button>
            )}
          </div>
        )}

        {/* Cover letter — only for internship/operator */}
        {program.requiresCV && (
          <div>
            <label className="label" style={{ display: 'block', marginBottom: 6 }}>Cover Letter (optional)</label>
            <input ref={coverRef} type="file" accept=".pdf,.doc,.docx" onChange={e => setCoverFile(e.target.files?.[0] || null)} style={{ display: 'none' }} />
            {coverFile ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', border: '2px solid var(--navy)', background: '#f8f8f8' }}>
                <FileText size={16} style={{ color: 'var(--navy)' }} />
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{coverFile.name}</span>
                <button type="button" onClick={() => setCoverFile(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><X size={14} /></button>
              </div>
            ) : (
              <button type="button" onClick={() => coverRef.current?.click()}
                style={{ width: '100%', padding: '14px', border: '2px dashed var(--border)', background: '#fafaf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--navy)')} onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <Upload size={16} style={{ color: 'var(--muted)' }} />
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>Upload a cover letter (optional)</span>
              </button>
            )}
          </div>
        )}

        {/* Message */}
        <div>
          <label className="label" style={{ display: 'block', marginBottom: 6 }}>Anything else?</label>
          <textarea value={form.message} onChange={e => set('message', e.target.value)} className="input" rows={2} placeholder="Optional — any additional context" />
        </div>

        {error && <p style={{ color: '#dc2626', fontSize: 13 }}>{error}</p>}

        <div>
          <button type="submit" disabled={submitting || form.interests.length === 0} className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.6 : 1 }}>
            <Send size={14} /> {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 10, textAlign: 'center', lineHeight: 1.5 }}>
            Submission does not guarantee a match, introduction, or placement.
          </p>
        </div>
      </div>
    </form>
  );
}
