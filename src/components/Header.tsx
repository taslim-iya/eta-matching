import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { currentPage: string; onNavigate: (p: any) => void; }

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'apply-partner', label: 'Partner Matching' },
  { id: 'apply-internship', label: 'Internship Matching' },
  { id: 'submit-opportunity', label: 'Submit Opportunity' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header({ currentPage, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid var(--border)', background: '#fff', position: 'sticky', top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <button onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: 32, height: 32, background: 'var(--gold)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 900, fontSize: 10, color: 'var(--navy)' }}>ETA</span>
          </div>
          <span style={{ fontWeight: 900, fontSize: 14, color: 'var(--navy)' }}>Cambridge ETA Matching</span>
        </button>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => onNavigate(n.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontSize: 13, fontWeight: currentPage === n.id ? 700 : 500, color: currentPage === n.id ? 'var(--navy)' : 'var(--muted)', transition: 'color 0.15s' }}>
              {n.label}
            </button>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', padding: 16 }} className="mobile-nav">
          {NAV.map(n => (
            <button key={n.id} onClick={() => { onNavigate(n.id); setOpen(false); }}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', fontSize: 14, fontWeight: currentPage === n.id ? 700 : 500, color: currentPage === n.id ? 'var(--navy)' : 'var(--muted)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
              {n.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-toggle, .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
