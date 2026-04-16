import { ArrowRight, Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2, Shield, CheckCircle } from 'lucide-react';
import { getMainPrograms, PROGRAMS } from '../lib/programs';

const ICONS: Record<string, any> = { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 };

interface Props { onNavigate: (p: string) => void; }

export default function Landing({ onNavigate }: Props) {
  const programs = getMainPrograms();

  return (
    <div>
      {/* Hero — WPDS editorial style */}
      <section style={{ background: '#fff', padding: '80px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 16, color: 'var(--blue)' }}>ETA Connections</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            The ETA community, connected
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
            Curated matching programs for searchers, investors, operators, advisors, and talent across the entrepreneurship through acquisition ecosystem.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button onClick={() => { document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
              Explore Programs <ArrowRight size={15} />
            </button>
            <button onClick={() => onNavigate('apply-opportunity')} className="btn-secondary">Submit an Opportunity</button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'var(--navy)', padding: '24px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { n: '9', l: 'Matching Programs' },
            { n: '500+', l: 'Search Funds Globally' },
            { n: '35%', l: 'Median IRR' },
            { n: '100%', l: 'Free to Apply' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <p className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>{s.n}</p>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership with Cambridge ETA */}
      <section style={{ padding: '60px 20px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <p className="label" style={{ marginBottom: 12, color: 'var(--blue)' }}>Our Partnership</p>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Built with Cambridge ETA Club</h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
              ETA Connections is built in partnership with the Cambridge ETA Club at Cambridge Judge Business School. The club brings together students, alumni, searchers, operators, and investors interested in entrepreneurship through acquisition.
            </p>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Through this partnership, we leverage the Cambridge network to create high-quality, curated matches across the global ETA ecosystem. Every application is reviewed by a team with deep experience in search funds, acquisitions, and operator transitions.
            </p>
            <a href="https://etacambridge.com" target="_blank" rel="noopener" className="btn-secondary" style={{ fontSize: 13 }}>
              Visit Cambridge ETA Club <ArrowRight size={13} />
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: <Shield size={20} />, title: 'Curated Quality', desc: 'Every application is manually reviewed. We focus on quality matches over volume.' },
              { icon: <Users size={20} />, title: 'Global Network', desc: 'Connect with searchers, investors, and operators across the US, UK, Europe, and beyond.' },
              { icon: <CheckCircle size={20} />, title: 'Confidential Process', desc: 'Your information is shared only with matched parties. Full discretion guaranteed.' },
            ].map(f => (
              <div key={f.title} style={{ display: 'flex', gap: 16, padding: 20, border: '1px solid var(--border)', background: '#fff' }}>
                <div style={{ color: 'var(--blue)', flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section id="programs" style={{ padding: '60px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 12, color: 'var(--blue)' }}>Matching Programs</p>
          <h2 className="font-serif" style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Find your match</h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
            Nine curated programs designed to connect the right people at the right stage of their ETA journey.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
            {programs.map(p => {
              const Icon = ICONS[p.icon] || Handshake;
              return (
                <button key={p.id} onClick={() => onNavigate('apply-' + p.id)}
                  style={{ textAlign: 'left', padding: 28, border: '1px solid var(--border)', background: '#fff', cursor: 'pointer', transition: 'all 0.2s', borderLeft: '3px solid ' + p.color, fontFamily: 'Inter, sans-serif' }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.borderLeftColor = p.color; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 36, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color={p.color} />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{p.shortLabel}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 12 }}>{p.description}</p>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    Apply Now <ArrowRight size={12} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section style={{ padding: '60px 20px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 12, color: 'var(--blue)' }}>Who is this for?</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Built for the ETA ecosystem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {['Students', 'Alumni', 'Searchers', 'Aspiring Searchers', 'Operators', 'Investors', 'Advisors', 'Independent Sponsors', 'Service Providers', 'ETA Professionals'].map(a => (
              <div key={a} style={{ padding: '14px 20px', border: '1px solid var(--border)', fontSize: 14, fontWeight: 600, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%', flexShrink: 0 }} />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 20px', background: 'var(--navy)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Ready to get connected?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 28, lineHeight: 1.7 }}>
            Choose a matching program above and submit your application. Our team will review it and make curated introductions.
          </p>
          <button onClick={() => { document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ background: '#fff', color: 'var(--navy)' }}>
            View All Programs <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
