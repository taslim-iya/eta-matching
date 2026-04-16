import { ArrowRight, Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2, Shield, CheckCircle } from 'lucide-react';
import { getMainPrograms, PROGRAMS } from '../lib/programs';

const ICONS: Record<string, any> = { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 };

interface Props { onNavigate: (p: any) => void; }

const AUDIENCES = ['Students', 'Alumni', 'Searchers', 'Aspiring Searchers', 'Operators', 'Investors', 'Advisors', 'Independent Sponsors', 'Service Providers', 'ETA Ecosystem Professionals'];

export default function Landing({ onNavigate }: Props) {
  const programs = getMainPrograms();

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 16 }}>Cambridge ETA Matching</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
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
      <section style={{ background: 'var(--navy)', padding: '24px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { n: '8', l: 'Matching Programs' },
            { n: '500+', l: 'Search Funds Globally' },
            { n: '35%', l: 'Median IRR' },
            { n: 'Open', l: 'To All ETA Community' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 24, fontWeight: 900, color: 'var(--gold)' }}>{s.n}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Programs</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>Find your match</h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 560, marginBottom: 40 }}>
            Each program is designed for a specific type of connection within the ETA ecosystem. Select the one that fits your needs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {programs.map(p => {
              const Icon = ICONS[p.icon] || Users;
              return (
                <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, background: p.bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: p.color }} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>{p.label}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.tags.slice(0, 4).map(t => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: p.color, background: p.bg, padding: '4px 8px' }}>{t}</span>
                    ))}
                  </div>
                  <button onClick={() => onNavigate(`apply-${p.id}`)} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                    {p.ctaLabel} <ArrowRight size={13} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Submit Opportunity card */}
          <div style={{ marginTop: 20, border: '2px solid var(--navy)', padding: 32, display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Building2 size={20} style={{ color: 'var(--navy)' }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>Recruit through the community</h3>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                Submit an internship, role, or talent need to recruit from the ETA community.
              </p>
            </div>
            <button onClick={() => onNavigate('apply-opportunity')} className="btn-primary">Submit an Opportunity <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Open to the ETA Community</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 24 }}>Who it's for</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
            {AUDIENCES.map(a => (
              <span key={a} style={{ background: '#fff', border: '1px solid var(--border)', padding: '10px 20px', fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{a}</span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
            Cambridge ETA Matching is open to the broader ETA community worldwide, with Cambridge ETA Club acting as the convening platform.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Process</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 40 }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 24 }}>
            {[
              { step: '01', title: 'Apply', desc: 'Choose your program and tell us about your background, interests, and what you\'re looking for.' },
              { step: '02', title: 'Review', desc: 'The Cambridge ETA team reviews every submission for seriousness, fit, and relevance.' },
              { step: '03', title: 'Match', desc: 'Where there is strong potential fit, we facilitate warm, curated introductions with full context.' },
            ].map(s => (
              <div key={s.step}>
                <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)' }}>{s.step}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 4px' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>This is a curated program, not an open directory.</p>
        </div>
      </section>

      {/* Curated Approach */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Shield size={22} style={{ color: 'var(--navy)', marginBottom: 16 }} />
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>A curated approach</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7 }}>
            Cambridge ETA Matching prioritises quality over volume. We review every submission, focus on seriousness and fit, and aim to create relevant introductions across the ETA ecosystem rather than operating as an open marketplace.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Ready to connect?</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 32 }}>
            Whether you're looking for a search partner, investors, an operator, a mentor, or ETA talent — we're here to help.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <button onClick={() => { document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: 14, fontWeight: 700, padding: '12px 24px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Explore Programs <ArrowRight size={14} />
            </button>
            <button onClick={() => onNavigate('faq')}
              style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 14, fontWeight: 700, padding: '10px 24px', background: 'transparent', cursor: 'pointer' }}>
              Read FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
