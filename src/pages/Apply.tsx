import { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';
import { getProgramById, type Program } from '../lib/programs';

const ICONS: Record<string, any> = { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 };

interface Props { programId: string; onNavigate: (p: any) => void; }

export default function Apply({ programId, onNavigate }: Props) {
  const program = getProgramById(programId);
  if (!program) return <div style={{ padding: 64, textAlign: 'center' }}><p>Program not found.</p></div>;

  const Icon = ICONS[program.icon] || Users;

  return (
    <div>
      <section style={{ background: '#fff', padding: '64px 16px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 48, height: 48, background: program.bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Icon size={22} style={{ color: program.color }} />
          </div>
          <p className="label" style={{ marginBottom: 8 }}>{program.shortLabel}</p>
          <h1 className="font-serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{program.label}</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
            {program.longDescription.slice(0, 200)}...
          </p>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '16px 16px 80px' }}>
        <ApplicationForm program={program} onNavigate={onNavigate} />
      </section>
    </div>
  );
}
