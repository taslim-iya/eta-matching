import { Mail } from 'lucide-react';

interface Props { onNavigate: (p: any) => void; }

export default function Footer({ onNavigate }: Props) {
  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '48px 16px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: 'var(--gold)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: 900, fontSize: 8, color: 'var(--navy)' }}>ETA</span>
              </div>
              <span style={{ fontWeight: 900, fontSize: 13 }}>Cambridge ETA Matching</span>
            </div>
            <p style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.6 }}>
              A curated matching program by Cambridge ETA Club for the broader ETA community.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: 12 }}>Programs</p>
            {[{ id: 'apply-partner', l: 'Partner Matching' }, { id: 'apply-internship', l: 'Internship Matching' }, { id: 'submit-opportunity', l: 'Submit Opportunity' }].map(n => (
              <button key={n.id} onClick={() => onNavigate(n.id)} style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 13, cursor: 'pointer', padding: '4px 0', transition: 'color 0.15s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {n.l}
              </button>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: 12 }}>Learn More</p>
            {[{ id: 'how-it-works', l: 'How It Works' }, { id: 'faq', l: 'FAQ' }].map(n => (
              <button key={n.id} onClick={() => onNavigate(n.id)} style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 13, cursor: 'pointer', padding: '4px 0' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {n.l}
              </button>
            ))}
            <a href="https://etacambridgecouk.vercel.app" target="_blank" rel="noopener" style={{ display: 'block', color: 'var(--gold)', fontSize: 13, padding: '4px 0', textDecoration: 'none', marginTop: 4 }}>
              Cambridge ETA Club ↗
            </a>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: 12 }}>Contact</p>
            <a href="mailto:team@etacambridge.co.uk" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gold)', fontSize: 13, textDecoration: 'none' }}>
              <Mail size={14} /> team@etacambridge.co.uk
            </a>
          </div>
        </div>
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, opacity: 0.4 }}>© {new Date().getFullYear()} Cambridge ETA Club. All rights reserved.</p>
          <p style={{ fontSize: 11, opacity: 0.4 }}>Cambridge Judge Business School</p>
        </div>
      </div>
    </footer>
  );
}
