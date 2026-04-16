import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import ApplyPartner from './pages/ApplyPartner';
import ApplyInternship from './pages/ApplyInternship';
import SubmitOpportunity from './pages/SubmitOpportunity';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';

type Page = 'home' | 'apply-partner' | 'apply-internship' | 'submit-opportunity' | 'how-it-works' | 'faq';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    // Handle hash-based routing from external links
    const hash = window.location.hash.replace('#', '') as Page;
    if (['apply-partner', 'apply-internship', 'submit-opportunity', 'how-it-works', 'faq'].includes(hash)) {
      setPage(hash);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page === 'home' ? '' : page;
  }, [page]);

  const render = () => {
    switch (page) {
      case 'apply-partner': return <ApplyPartner onNavigate={setPage} />;
      case 'apply-internship': return <ApplyInternship onNavigate={setPage} />;
      case 'submit-opportunity': return <SubmitOpportunity onNavigate={setPage} />;
      case 'how-it-works': return <HowItWorks onNavigate={setPage} />;
      case 'faq': return <FAQ onNavigate={setPage} />;
      default: return <Landing onNavigate={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={page} onNavigate={setPage} />
      <main style={{ flex: 1 }}>{render()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
