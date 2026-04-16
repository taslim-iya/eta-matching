import { Mail } from 'lucide-react';

interface Props { onNavigate: (p: string) => void; }

export default function Footer({ onNavigate }: Props) {
  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '48px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: 'var(--blue-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: 900, fontSize: 8, color: '#fff' }}>ETA</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 13 }}>ETA Connections</span>
            </div>
            <p style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.6, maxWidth: 280 }}>
              A curated matching platform for the global ETA community. In partnership with Cambridge ETA Club.
            </p>
          </div>
          <div>
            <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Programs</p>
            {[
              { id: 'apply-partner', l: 'Partner Matching' },
              { id: 'apply-investor-searcher', l: 'Investor Matching' },
              { id: 'apply-advisor', l: 'Advisor Matching' },
              { id: 'apply-operator', l: 'Operator Matching' },
              { id: 'apply-internship', l: 'Internship Matching' },
            ].map(n => (
              <button key={n.id} onClick={() => onNavigate(n.id)} className="btn-ghost"
                style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, padding: '4px 0' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {n.l}
              </button>
            ))}
          </div>
          <div>
            <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Learn More</p>
            {[
              { id: 'how-it-works', l: 'How It Works' },
              { id: 'faq', l: 'FAQ' },
            ].map(n => (
              <button key={n.id} onClick={() => onNavigate(n.id)} className="btn-ghost"
                style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, padding: '4px 0' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {n.l}
              </button>
            ))}
            <a href="https://etacambridge.com" target="_blank" rel="noopener"
              style={{ display: 'block', color: '#60A5FA', fontSize: 13, padding: '4px 0', textDecoration: 'none', marginTop: 8 }}>
              Cambridge ETA Club Website &#8599;
            </a>
          </div>
          <div>
            <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Contact</p>
            <a href="mailto:team@etacambridge.co.uk" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#60A5FA', fontSize: 13, textDecoration: 'none' }}>
              <Mail size={14} /> team@etacambridge.co.uk
            </a>
          </div>
        </div>
        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, opacity: 0.4 }}>&#169; {new Date().getFullYear()} ETA Connections. In partnership with Cambridge ETA Club.</p>
          <p style={{ fontSize: 11, opacity: 0.4 }}>Cambridge Judge Business School</p>
        </div>
      </div>
    </footer>
  );
}
