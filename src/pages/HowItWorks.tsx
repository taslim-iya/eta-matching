import { ArrowRight, Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 } from 'lucide-react';
import { PROGRAMS } from '../lib/programs';

const ICONS: Record<string, any> = { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 };

interface Props { onNavigate: (p: any) => void; }

export default function HowItWorks({ onNavigate }: Props) {
  return (
    <div>
      <section style={{ background: '#fff', padding: '64px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Process</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>How it works</h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
            Cambridge ETA Matching is a curated program. Here is how the process works for each matching program.
          </p>

          {PROGRAMS.map((p, idx) => {
            const Icon = ICONS[p.icon] || Users;
            return (
              <div key={p.id} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: idx < PROGRAMS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, background: p.bg, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} style={{ color: p.color }} />
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>{p.label}</h2>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20, maxWidth: 600 }}>{p.longDescription}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  {p.steps.map((s, si) => (
                    <div key={si} style={{ padding: 20, background: 'var(--cream)' }}>
                      <span style={{ fontSize: 11, fontWeight: 900, color: p.color }}>{String(si + 1).padStart(2, '0')}</span>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', margin: '6px 0 4px' }}>{s.title}</h3>
                      <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => onNavigate(`apply-${p.id}`)} className="btn-primary" style={{ marginTop: 16, fontSize: 13 }}>
                  {p.ctaLabel} <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 24 }}>What to expect</h2>
          {[
            { label: 'Response time', text: 'We aim to review all applications within 5–10 working days.' },
            { label: 'Communication', text: 'All updates and introductions are sent via email.' },
            { label: 'No guarantees', text: 'Submission does not guarantee a match. We prioritise quality and relevance.' },
            { label: 'Confidentiality', text: 'Your information is shared only with potential matches and is never published or distributed externally.' },
          ].map((item, i) => (
            <div key={i} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
