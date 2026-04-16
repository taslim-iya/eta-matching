import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (p: string) => void; }

export default function HowItWorks({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px' }}>
      <p className="label" style={{ marginBottom: 12, color: 'var(--blue)' }}>How It Works</p>
      <h1 className="font-serif" style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Simple, curated, confidential</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
        ETA Connections is not a marketplace. We are a curated matching service that prioritises quality over quantity.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {[
          { step: '01', title: 'Choose a Program', desc: 'Browse our nine matching programs and select the one that fits your needs. Each program is designed for a specific type of connection within the ETA ecosystem.' },
          { step: '02', title: 'Submit Your Application', desc: 'Fill out the application form with your background, interests, and what you are looking for. The more detail you provide, the better we can match you.' },
          { step: '03', title: 'We Review', desc: 'Our team, in partnership with Cambridge ETA Club, reviews every application. We assess seriousness, alignment, and complementary skills between applicants.' },
          { step: '04', title: 'Curated Introductions', desc: 'Where there is strong potential fit, we facilitate warm introductions with context for both sides. No cold outreach, no spam.' },
          { step: '05', title: 'Connect', desc: 'Take it from here. Meet, discuss, and explore the opportunity. We check in periodically to see how things are going.' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 20, padding: '32px 0', borderBottom: '1px solid var(--border)' }}>
            <span className="font-serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--blue)', opacity: 0.5 }}>{s.step}</span>
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 560 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, padding: 32, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
        <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Ready to apply?</h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.6 }}>Browse our programs and submit your application today. It takes less than 5 minutes.</p>
        <button onClick={() => onNavigate('home')} className="btn-primary">View Programs <ArrowRight size={14} /></button>
      </div>
    </div>
  );
}
