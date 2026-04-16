import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getMainPrograms } from '../lib/programs';

interface Props { currentPage: string; onNavigate: (p: any) => void; }

const programs = getMainPrograms();

export default function Header({ currentPage, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid var(--border)', background: '#fff', position: 'sticky', top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <button onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: 32, height: 32, background: 'var(--gold)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 900, fontSize: 10, color: 'var(--navy)' }}>ETA</span>
          </div>
          <span style={{ fontWeight: 900, fontSize: 14, color: 'var(--navy)' }}>Cambridge ETA Matching</span>
        </button>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <button onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontSize: 13, fontWeight: currentPage === 'home' ? 700 : 500, color: currentPage === 'home' ? 'var(--navy)' : 'var(--muted)' }}>
            Home
          </button>

          {/* Programs dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontSize: 13, fontWeight: currentPage.startsWith('apply-') ? 700 : 500, color: currentPage.startsWith('apply-') ? 'var(--navy)' : 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              Programs <ChevronDown size={12} />
            </button>
            {dropOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', minWidth: 280, zIndex: 50, padding: 8 }}>
                {programs.map(p => (
                  <button key={p.id} onClick={() => { onNavigate(`apply-${p.id}`); setDropOpen(false); }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px', fontSize: 13, fontWeight: currentPage === `apply-${p.id}` ? 700 : 500, color: 'var(--navy)', background: currentPage === `apply-${p.id}` ? 'var(--cream)' : 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.1s' }}
                    onMouseOver={e => { if (currentPage !== `apply-${p.id}`) e.currentTarget.style.background = '#f8f8f6'; }}
                    onMouseOut={e => { if (currentPage !== `apply-${p.id}`) e.currentTarget.style.background = 'transparent'; }}>
                    <span style={{ fontWeight: 600 }}>{p.shortLabel}</span>
                    <br /><span style={{ fontSize: 11, color: 'var(--muted)' }}>{p.description.slice(0, 60)}...</span>
                  </button>
                ))}
                <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0' }} />
                <button onClick={() => { onNavigate('apply-opportunity'); setDropOpen(false); }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px', fontSize: 13, fontWeight: 600, color: 'var(--navy)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onMouseOver={e => (e.currentTarget.style.background = '#f8f8f6')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  Submit an Opportunity
                </button>
              </div>
            )}
          </div>

          <button onClick={() => onNavigate('how-it-works')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontSize: 13, fontWeight: currentPage === 'how-it-works' ? 700 : 500, color: currentPage === 'how-it-works' ? 'var(--navy)' : 'var(--muted)' }}>
            How It Works
          </button>
          <button onClick={() => onNavigate('faq')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontSize: 13, fontWeight: currentPage === 'faq' ? 700 : 500, color: currentPage === 'faq' ? 'var(--navy)' : 'var(--muted)' }}>
            FAQ
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', padding: 16, maxHeight: '80vh', overflowY: 'auto' }} className="mobile-nav">
          <button onClick={() => { onNavigate('home'); setOpen(false); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', fontSize: 14, fontWeight: 700, color: 'var(--navy)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
            Home
          </button>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', padding: '12px 0 4px' }}>Programs</p>
          {programs.map(p => (
            <button key={p.id} onClick={() => { onNavigate(`apply-${p.id}`); setOpen(false); }}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 0', fontSize: 14, fontWeight: 500, color: currentPage === `apply-${p.id}` ? 'var(--navy)' : 'var(--muted)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
              {p.shortLabel}
            </button>
          ))}
          <button onClick={() => { onNavigate('apply-opportunity'); setOpen(false); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 0', fontSize: 14, fontWeight: 600, color: 'var(--navy)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
            Submit an Opportunity
          </button>
          <button onClick={() => { onNavigate('how-it-works'); setOpen(false); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', fontSize: 14, fontWeight: 500, color: 'var(--muted)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
            How It Works
          </button>
          <button onClick={() => { onNavigate('faq'); setOpen(false); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', fontSize: 14, fontWeight: 500, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
            FAQ
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-toggle, .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
