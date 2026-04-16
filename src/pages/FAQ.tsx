import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface Props { onNavigate: (p: any) => void; }

const FAQS = [
  { q: 'Who can apply?', a: 'Cambridge ETA Matching is open to members of the broader ETA community, including students, alumni, searchers, operators, investors, advisors, and ETA-adjacent professionals. You do not need to be a Cambridge student or alumni to apply.' },
  { q: 'Is this only for Cambridge students and alumni?', a: 'No. Cambridge ETA Club hosts the program, but it is designed to serve the wider ETA community. We welcome applications from anyone seriously engaged in entrepreneurship through acquisition.' },
  { q: 'What kinds of opportunities are included?', a: 'Partner matching (search partners, collaborators, operators, advisors), internship matching (search fund internships, deal sourcing roles, portfolio operations, ETA ecosystem roles), and opportunity submissions from firms looking to recruit ETA talent.' },
  { q: 'Do you guarantee a match?', a: 'No. All applications are reviewed, but submission does not guarantee a match or placement. We prioritise quality and relevance over volume.' },
  { q: 'Can firms recruit through the community?', a: 'Yes. Searchers, investors, operators, acquired companies, and ETA-related firms can submit talent needs or internship opportunities through our Submit Opportunity form.' },
  { q: 'Is there a cost to apply?', a: 'Currently, there is no cost to apply to any of the matching programs.' },
  { q: 'How long does the review process take?', a: 'We aim to review applications within 5–10 working days. If your application is a strong fit, you will hear from us via email with next steps or an introduction.' },
  { q: 'What information do I need to provide?', a: 'All applicants need to provide their name, email, role, and background. Internship candidates must upload a CV (cover letter optional). Firms submitting opportunities must provide their company website and role details.' },
  { q: 'Is my information kept confidential?', a: 'Yes. Your application details are shared only with potential matches and the Cambridge ETA team. We never publish or distribute your information externally.' },
  { q: 'Can I apply to more than one program?', a: 'Yes. You can apply for partner matching, internship matching, and submit opportunities separately.' },
  { q: 'What if I do not hear back?', a: 'If your application is not a match at this time, you may not receive a response. You are welcome to reapply in the future or reach out to team@etacambridge.co.uk with questions.' },
  { q: 'How do I contact the team?', a: 'Email us at team@etacambridge.co.uk for any questions about the matching program.' },
];

export default function FAQ({ onNavigate }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <section style={{ background: '#fff', padding: '64px 16px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="label" style={{ marginBottom: 8 }}>Common Questions</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Frequently asked questions</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 40 }}>
            Everything you need to know about Cambridge ETA Matching.
          </p>

          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', gap: 16, textAlign: 'left' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{faq.q}</span>
                  {open === i ? <ChevronUp size={16} style={{ color: 'var(--muted)', flexShrink: 0 }} /> : <ChevronDown size={16} style={{ color: 'var(--muted)', flexShrink: 0 }} />}
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 18 }}>
                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section style={{ background: 'var(--cream)', padding: '64px 16px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Still have questions?</h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>
            Reach out to the team at <a href="mailto:team@etacambridge.co.uk" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>team@etacambridge.co.uk</a>
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('apply-partner')} className="btn-primary">Apply Now <ArrowRight size={14} /></button>
            <button onClick={() => onNavigate('home')} className="btn-secondary">Back to Home</button>
          </div>
        </div>
      </section>
    </div>
  );
}
