import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Apply from './pages/Apply';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import { PROGRAMS } from './lib/programs';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setPage(hash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page === 'home' ? '' : page;
  }, [page]);

  const render = () => {
    if (page === 'how-it-works') return <HowItWorks onNavigate={setPage} />;
    if (page === 'faq') return <FAQ onNavigate={setPage} />;

    // Check if it's an apply page
    if (page.startsWith('apply-')) {
      const programId = page.replace('apply-', '');
      const program = PROGRAMS.find(p => p.id === programId);
      if (program) return <Apply programId={programId} onNavigate={setPage} />;
    }

    return <Landing onNavigate={setPage} />;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={page} onNavigate={setPage} />
      <main style={{ flex: 1 }}>{render()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
