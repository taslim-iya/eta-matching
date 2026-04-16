import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Props { onNavigate: (p: string) => void; }

const FAQS = [
  { q: 'What is ETA Connections?', a: 'ETA Connections is a curated matching platform for the entrepreneurship through acquisition (ETA) ecosystem. We connect searchers, investors, operators, advisors, and talent through nine specialised programs. Built in partnership with Cambridge ETA Club at Cambridge Judge Business School.' },
  { q: 'Is it free to apply?', a: 'Yes, all matching programs are completely free to apply to. We do not charge fees for introductions.' },
  { q: 'How is this different from a job board or marketplace?', a: 'We are not a marketplace. Every application is manually reviewed, and introductions are curated based on fit, alignment, and complementary skills. We prioritise quality over quantity.' },
  { q: 'Who reviews applications?', a: 'Applications are reviewed by the ETA Connections team in partnership with Cambridge ETA Club. Our reviewers have experience across search funds, acquisitions, investing, and operations.' },
  { q: 'How long does it take to get matched?', a: 'It depends on the program and the volume of applications. Typically, you will hear from us within 2-4 weeks of submitting your application. Some matches happen faster when there is clear alignment.' },
  { q: 'What happens after I get introduced?', a: 'After we facilitate a warm introduction, the relationship is yours to develop. We check in periodically to see how things are going and offer support if needed.' },
  { q: 'Is my information confidential?', a: 'Absolutely. Your application details are shared only with potential matches, and only after we have identified a strong fit. We never share your information publicly or with third parties.' },
  { q: 'Can I apply to multiple programs?', a: 'Yes. You can submit applications to as many programs as are relevant to you. Each application is reviewed independently.' },
  { q: 'What is Cambridge ETA Club?', a: 'Cambridge ETA Club is a student-run organisation at Cambridge Judge Business School focused on entrepreneurship through acquisition. The club organises events, connects the ETA community, and now partners with ETA Connections to facilitate curated matching.' },
  { q: 'I am not based in the UK. Can I still apply?', a: 'Absolutely. ETA Connections serves the global ETA community. While we have strong roots in Cambridge, our matching programs are open to applicants worldwide.' },
];

export default function FAQ({ onNavigate }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 20px' }}>
      <p className="label" style={{ marginBottom: 12, color: 'var(--blue)' }}>FAQ</p>
      <h1 className="font-serif" style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Frequently asked questions</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 40 }}>
        Everything you need to know about ETA Connections and our matching programs.
      </p>

      <div>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="btn-ghost"
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', textAlign: 'left' }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', flex: 1, paddingRight: 16 }}>{faq.q}</span>
              <ChevronDown size={16} style={{ color: 'var(--muted)', transform: openIdx === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
            </button>
            {openIdx === i && (
              <div style={{ paddingBottom: 20 }}>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, padding: 32, background: 'var(--surface-2)', border: '1px solid var(--border)', textAlign: 'center' }}>
        <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Still have questions?</h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 16, lineHeight: 1.6 }}>
          Reach out to us at <a href="mailto:team@etacambridge.co.uk" style={{ color: 'var(--blue)', textDecoration: 'none' }}>team@etacambridge.co.uk</a>
        </p>
        <button onClick={() => onNavigate('home')} className="btn-primary">View Programs <ArrowRight size={14} /></button>
      </div>
    </div>
  );
}
