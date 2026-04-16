import { Building2 } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

interface Props { onNavigate: (p: any) => void; }

export default function SubmitOpportunity({ onNavigate }: Props) {
  return (
    <div>
      <section style={{ background: '#fff', padding: '64px 16px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 48, height: 48, background: 'var(--cream)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Building2 size={22} style={{ color: 'var(--navy)' }} />
          </div>
          <p className="label" style={{ marginBottom: 8 }}>For Firms &amp; Recruiters</p>
          <h1 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Submit an Opportunity</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
            If you are a searcher, investor, operator, or ETA ecosystem firm looking to recruit talented students or community members, submit your opportunity here.
          </p>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '16px 16px 80px' }}>
        <ApplicationForm type="opportunity" onNavigate={onNavigate} />
      </section>
    </div>
  );
}
