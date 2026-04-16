import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getMainPrograms } from '../lib/programs';

interface Props { currentPage: string; onNavigate: (p: string) => void; }

export default function Header({ currentPage, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const programs = getMainPrograms();

  return (
    <header style={{ borderBottom: '1px solid var(--border)', background: '#fff', position: 'sticky', top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        {/* Brand */}
        <button onClick={() => onNavigate('home')} className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 0 }}>
          <div style={{ width: 32, height: 32, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 900, fontSize: 9, color: '#fff', letterSpacing: '0.05em' }}>ETA</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 14, color: 'var(--text)' }}>ETA Connections</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 0, alignItems: 'center' }} className="desktop-nav">
          <NavBtn label="Home" active={currentPage === 'home'} onClick={() => onNavigate('home')} />

          {/* Programs dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className="btn-ghost" style={{ padding: '8px 14px', fontSize: 13, fontWeight: currentPage.startsWith('apply-') ? 700 : 500, color: currentPage.startsWith('apply-') ? 'var(--blue)' : 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              Programs <ChevronDown size={12} />
            </button>
            {dropOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', minWidth: 300, zIndex: 50, padding: 6 }}>
                {programs.map(p => (
                  <button key={p.id} onClick={() => { onNavigate('apply-' + p.id); setDropOpen(false); }} className="btn-ghost"
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px', fontSize: 13, color: 'var(--text)', background: currentPage === 'apply-' + p.id ? 'var(--blue-light)' : 'transparent' }}
                    onMouseOver={e => { if (currentPage !== 'apply-' + p.id) e.currentTarget.style.background = 'var(--surface-2)'; }}
                    onMouseOut={e => { if (currentPage !== 'apply-' + p.id) e.currentTarget.style.background = 'transparent'; }}>
                    <span style={{ fontWeight: 600 }}>{p.shortLabel}</span>
                    <br /><span style={{ fontSize: 11, color: 'var(--muted)' }}>{p.description.slice(0, 70)}...</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavBtn label="How It Works" active={currentPage === 'how-it-works'} onClick={() => onNavigate('how-it-works')} />
          <NavBtn label="FAQ" active={currentPage === 'faq'} onClick={() => onNavigate('faq')} />
        </nav>

        {/* Mobile menu */}
        <button onClick={() => setOpen(!open)} className="btn-ghost mobile-toggle" style={{ display: 'none', padding: 4, color: 'var(--text)' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: 16 }} className="mobile-nav">
          {[
            { id: 'home', l: 'Home' },
            ...programs.map(p => ({ id: 'apply-' + p.id, l: p.shortLabel })),
            { id: 'how-it-works', l: 'How It Works' },
            { id: 'faq', l: 'FAQ' },

          ].map(n => (
            <button key={n.id} onClick={() => { onNavigate(n.id); setOpen(false); }} className="btn-ghost"
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', fontSize: 14, fontWeight: currentPage === n.id ? 700 : 500, color: currentPage === n.id ? 'var(--blue)' : 'var(--text)', borderBottom: '1px solid var(--border)' }}>
              {n.l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

function NavBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="btn-ghost" style={{ padding: '8px 14px', fontSize: 13, fontWeight: active ? 700 : 500, color: active ? 'var(--blue)' : 'var(--muted)' }}>
      {label}
    </button>
  );
}
