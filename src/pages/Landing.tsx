import { ArrowRight, Handshake, GraduationCap, Building2, Shield, Users, CheckCircle } from 'lucide-react';

interface Props { onNavigate: (p: any) => void; }

const AUDIENCES = ['Students', 'Alumni', 'Searchers', 'Aspiring Searchers', 'Operators', 'Investors', 'Advisors', 'Independent Sponsors', 'ETA Ecosystem Professionals'];

export default function Landing({ onNavigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 16 }}>Cambridge ETA Matching</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            Find your search partner or ETA&nbsp;internship
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 32 }}>
            A curated matching program for members of the ETA community looking to build, buy, grow, and support businesses through entrepreneurship through acquisition.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button onClick={() => onNavigate('apply-partner')} className="btn-primary">Apply for Partner Matching <ArrowRight size={15} /></button>
            <button onClick={() => onNavigate('apply-internship')} className="btn-primary" style={{ background: 'var(--gold)' }}>Apply for Internship Matching <ArrowRight size={15} /></button>
            <button onClick={() => onNavigate('submit-opportunity')} className="btn-secondary">Submit an Opportunity</button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 16 }}>About the Program</p>
          <p className="font-serif" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--navy)', lineHeight: 1.6, maxWidth: 720 }}>
            Cambridge ETA Matching helps members of the ETA community connect in practical, high-quality ways. Whether you are looking for a search partner, a project collaborator, an operating teammate, an internship, or strong ETA talent, the program is designed to create curated introductions with a focus on fit, seriousness, and relevance.
          </p>
        </div>
      </section>

      {/* Two Cards */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Programs</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 40 }}>Two ways to connect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div className="card">
              <Handshake size={22} style={{ color: 'var(--navy)', marginBottom: 16 }} />
              <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Partner Matching</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20 }}>
                Find a search partner, collaborator, operator, builder, or ETA-aligned teammate for a project, search, acquisition, or long-term opportunity.
              </p>
              {['Search partner matching', 'Project collaborators', 'Operators and builders', 'Advisor and teammate introductions', 'Curated introductions based on fit'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <CheckCircle size={14} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--navy)' }}>{b}</span>
                </div>
              ))}
              <button onClick={() => onNavigate('apply-partner')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                Apply <ArrowRight size={14} />
              </button>
            </div>

            <div className="card">
              <GraduationCap size={22} style={{ color: 'var(--navy)', marginBottom: 16 }} />
              <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Internship Matching</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20 }}>
                Connect students and early-career talent with ETA-related internships across search funds, acquired businesses, investors, advisory firms, and ETA ecosystem companies.
              </p>
              {['Search fund internships', 'Deal sourcing and diligence roles', 'Portfolio and operator internships', 'ETA ecosystem opportunities', 'Curated candidate introductions'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <CheckCircle size={14} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--navy)' }}>{b}</span>
                </div>
              ))}
              <button onClick={() => onNavigate('apply-internship')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                Apply <ArrowRight size={14} />
              </button>
            </div>
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
            Cambridge ETA Matching is open to the broader ETA community, with Cambridge ETA Club acting as the convening platform.
          </p>
        </div>
      </section>

      {/* How It Works preview */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Process</p>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 40 }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 32 }}>
            {[
              { step: '01', title: 'Apply', desc: 'Submit your background, interests, and what you are looking for.' },
              { step: '02', title: 'Review', desc: 'The team reviews submissions for seriousness, fit, and relevance.' },
              { step: '03', title: 'Connect', desc: 'Where there is a strong potential fit, we facilitate introductions.' },
            ].map(s => (
              <div key={s.step}>
                <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)' }}>{s.step}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 4px' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>This is a curated program, not an open directory.</p>
          <button onClick={() => onNavigate('how-it-works')} className="btn-secondary" style={{ marginTop: 16 }}>Learn more <ArrowRight size={14} /></button>
        </div>
      </section>

      {/* Curated Approach */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', maxWidth2: 720 }}>
          <Shield size={22} style={{ color: 'var(--navy)', marginBottom: 16 }} />
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>A curated approach</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 640 }}>
            Cambridge ETA Matching is designed to prioritise quality over volume. We review submissions, focus on seriousness and fit, and aim to create relevant introductions across the ETA ecosystem rather than operating as an open marketplace.
          </p>
        </div>
      </section>

      {/* Recruit */}
      <section style={{ background: '#fff', padding: '80px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ border: '2px solid var(--navy)', padding: 48, display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: 560 }}>
              <Building2 size={22} style={{ color: 'var(--navy)', marginBottom: 12 }} />
              <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Recruit through the community</h2>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                If you are a searcher, investor, operator, acquired company, or ETA ecosystem firm looking to recruit talented students or community members, you can submit your opportunity.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button onClick={() => onNavigate('submit-opportunity')} className="btn-primary">Submit an Opportunity <ArrowRight size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Ready to connect?</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 32 }}>
            Whether you are looking for a search partner, an internship, or strong ETA talent, the program is here to help.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <button onClick={() => onNavigate('apply-partner')} style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: 14, fontWeight: 700, padding: '12px 24px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Apply Now <ArrowRight size={14} />
            </button>
            <button onClick={() => onNavigate('faq')} style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 14, fontWeight: 700, padding: '10px 24px', background: 'transparent', cursor: 'pointer' }}>
              Read FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
