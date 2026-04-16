import { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2, ArrowLeft, CheckCircle } from 'lucide-react';
import { PROGRAMS } from '../lib/programs';
import ApplicationForm from '../components/ApplicationForm';

const ICONS: Record<string, any> = { Handshake, TrendingUp, Compass, Settings, GraduationCap, Users, Briefcase, Scale, Building2 };

interface Props { programId: string; onNavigate: (p: string) => void; }

export default function Apply({ programId, onNavigate }: Props) {
  const program = PROGRAMS.find(p => p.id === programId);

  if (!program) {
    return (
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', marginBottom: 16 }}>Program not found.</p>
        <button onClick={() => onNavigate('home')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  const Icon = ICONS[program.icon] || Handshake;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>
      {/* Back link */}
      <button onClick={() => onNavigate('home')} className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 24, padding: 0 }}>
        <ArrowLeft size={14} /> Back to all programs
      </button>

      {/* Program header */}
      <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, background: program.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={22} color={program.color} />
          </div>
          <div>
            <p className="label" style={{ color: program.color }}>{program.shortLabel}</p>
            <h1 className="font-serif" style={{ fontSize: 28, fontWeight: 700 }}>{program.label}</h1>
          </div>
        </div>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 700, marginBottom: 20 }}>{program.longDescription}</p>

        {/* Key points */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {program.bullets.map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-2)' }}>
              <CheckCircle size={13} color="var(--success)" /> {b}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {program.steps.map((s, i) => (
            <div key={i} style={{ flex: '1 1 200px', padding: 16, border: '1px solid var(--border)', borderLeft: '3px solid ' + program.color }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: program.color, marginBottom: 4 }}>Step {i + 1}</p>
              <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.title}</p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application form */}
      <div>
        <p className="label" style={{ marginBottom: 8, color: 'var(--blue)' }}>Application</p>
        <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Apply to {program.shortLabel}</h2>
        <ApplicationForm program={program} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
