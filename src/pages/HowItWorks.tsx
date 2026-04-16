import { ArrowRight, Handshake, GraduationCap, Building2 } from 'lucide-react';

interface Props { onNavigate: (p: any) => void; }

export default function HowItWorks({ onNavigate }: Props) {
  return (
    <div>
      <section style={{ background: '#fff', padding: '64px 16px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Process</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>How it works</h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
            Cambridge ETA Matching is a curated program, not an open directory. Here is how the process works for each program.
          </p>

          {/* Partner Matching Process */}
          <div style={{ marginBottom: 56, paddingBottom: 56, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Handshake size={20} style={{ color: 'var(--navy)' }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Partner Matching</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { step: '01', title: 'Apply', desc: 'Submit your background, experience, ETA interest, and what you are looking for in a search partner, collaborator, or teammate. Include your LinkedIn profile and any relevant context.' },
                { step: '02', title: 'We review your profile', desc: 'The Cambridge ETA team reviews every submission for seriousness, relevance, and alignment with the ETA community. We are looking for genuine intent and clear goals.' },
                { step: '03', title: 'Curated introductions', desc: 'Where there is a strong potential fit between applicants, we facilitate introductions. You will receive an email with details about your match and suggested next steps.' },
              ].map(s => (
                <div key={s.step} style={{ padding: 24, background: 'var(--cream)' }}>
                  <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)', display: 'block', marginBottom: 8 }}>{s.step}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('apply-partner')} className="btn-primary" style={{ marginTop: 20 }}>Apply for Partner Matching <ArrowRight size={14} /></button>
          </div>

          {/* Internship Matching Process */}
          <div style={{ marginBottom: 56, paddingBottom: 56, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <GraduationCap size={20} style={{ color: 'var(--navy)' }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Internship Matching</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { step: '01', title: 'Candidates apply or firms submit roles', desc: 'Students and early-career professionals submit their CV, background, and preferred role types. Firms and searchers submit available internship and project opportunities.' },
                { step: '02', title: 'We review for fit', desc: 'The team reviews both candidate applications and submitted opportunities. We assess for relevance, quality, and potential alignment between candidates and roles.' },
                { step: '03', title: 'We connect relevant people', desc: 'Where there is strong alignment between a candidate and an opportunity, we facilitate a direct introduction. Both parties receive details and context to help the conversation start productively.' },
              ].map(s => (
                <div key={s.step} style={{ padding: 24, background: 'var(--cream)' }}>
                  <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)', display: 'block', marginBottom: 8 }}>{s.step}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('apply-internship')} className="btn-primary" style={{ marginTop: 20 }}>Apply for Internship Matching <ArrowRight size={14} /></button>
          </div>

          {/* Submitting Opportunities */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Building2 size={20} style={{ color: 'var(--navy)' }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Submitting Opportunities</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { step: '01', title: 'Submit your opportunity', desc: 'Provide details about your company, the role or project, and what you are looking for in a candidate. Include your website and any relevant links.' },
                { step: '02', title: 'We review and qualify', desc: 'The team reviews submitted opportunities for legitimacy, relevance to the ETA community, and overall quality. We may reach out for additional details.' },
                { step: '03', title: 'Matched with candidates', desc: 'Qualified opportunities are matched with relevant candidates from the matching pool. Both parties are introduced with full context.' },
              ].map(s => (
                <div key={s.step} style={{ padding: 24, background: 'var(--cream)' }}>
                  <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)', display: 'block', marginBottom: 8 }}>{s.step}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('submit-opportunity')} className="btn-primary" style={{ marginTop: 20 }}>Submit an Opportunity <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* Timeline / What to expect */}
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
