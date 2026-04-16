import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Apply from './pages/Apply';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';
import { PROGRAMS } from './lib/programs';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setPage(hash);
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = p === 'home' ? '' : p;
  };

  const render = () => {
    if (page === 'how-it-works') return <HowItWorks onNavigate={navigate} />;
    if (page === 'faq') return <FAQ onNavigate={navigate} />;
    if (page === 'admin') return <Admin onNavigate={navigate} />;

    if (page.startsWith('apply-')) {
      const programId = page.replace('apply-', '');
      const program = PROGRAMS.find(p => p.id === programId);
      if (program) return <Apply programId={programId} onNavigate={navigate} />;
    }

    return <Landing onNavigate={navigate} />;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={page} onNavigate={navigate} />
      <main style={{ flex: 1 }}>{render()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
