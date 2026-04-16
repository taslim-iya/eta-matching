import { useState, useEffect } from 'react';
import { RefreshCw, Download, Eye, Trash2, ChevronDown, ChevronRight, Users, FileText } from 'lucide-react';
import { getApplications } from '../lib/supabase';
import { PROGRAMS } from '../lib/programs';

interface Application {
  id?: string;
  type: string;
  name: string;
  email: string;
  role: string;
  linkedin?: string;
  phone?: string;
  background: string;
  looking_for?: string;
  interests: string[];
  sectors?: string[];
  website?: string;
  company_name?: string;
  company_description?: string;
  investment_range?: string;
  message?: string;
  cv_url?: string;
  cover_letter_url?: string;
  status: string;
  created_at?: string;
  submittedAt?: string;
}

interface Props { onNavigate: (p: string) => void; }

export default function Admin({ onNavigate }: Props) {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Application | null>(null);
  const [filterType, setFilterType] = useState('all');

  const load = async () => {
    setLoading(true);
    const data = await getApplications();
    setApps(data as Application[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const filtered = filterType === 'all' ? apps : apps.filter(a => a.type === filterType);
  const programName = (id: string) => PROGRAMS.find(p => p.id === id)?.shortLabel || id;
  const formatDate = (d?: string) => d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'N/A';

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Role', 'Program', 'LinkedIn', 'Phone', 'Background', 'Looking For', 'Interests', 'Sectors', 'Status', 'Date'];
    const rows = filtered.map(a => [
      a.name, a.email, a.role, programName(a.type), a.linkedin || '', a.phone || '',
      (a.background || '').replace(/,/g, ';'), (a.looking_for || '').replace(/,/g, ';'),
      (a.interests || []).join('; '), (a.sectors || []).join('; '),
      a.status, formatDate(a.created_at || a.submittedAt),
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.map(c => '"' + c + '"').join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'eta-connections-applications.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  // Count by type
  const counts: Record<string, number> = {};
  apps.forEach(a => { counts[a.type] = (counts[a.type] || 0) + 1; });

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ marginBottom: 32 }}>
        <p className="label" style={{ marginBottom: 8 }}>Admin Panel</p>
        <h1 className="font-serif" style={{ fontSize: 32, marginBottom: 8 }}>Applications</h1>
        <p style={{ color: 'var(--muted)', fontSize: 15 }}>View and manage all matching program applications.</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 24 }}>
        <StatCard label="Total" value={apps.length} icon={<Users size={16} />} />
        <StatCard label="New" value={apps.filter(a => a.status === 'new').length} icon={<FileText size={16} />} />
        {Object.entries(counts).slice(0, 4).map(([type, count]) => (
          <StatCard key={type} label={programName(type)} value={count} />
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <select className="input" value={filterType} onChange={e => setFilterType(e.target.value)}
          style={{ width: 'auto', appearance: 'auto', padding: '8px 12px', fontSize: 13 }}>
          <option value="all">All Programs ({apps.length})</option>
          {PROGRAMS.map(p => (
            <option key={p.id} value={p.id}>{p.shortLabel} ({counts[p.id] || 0})</option>
          ))}
        </select>
        <button onClick={load} className="btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>
          <RefreshCw size={13} /> Refresh
        </button>
        <button onClick={exportCSV} className="btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>
          <Download size={13} /> Export CSV
        </button>
      </div>

      {loading ? (
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>Loading applications...</div>
      ) : filtered.length === 0 ? (
        <div style={{ padding: 60, textAlign: 'center', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 8 }}>No applications yet.</p>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>Applications will appear here as people sign up through the matching programs.</p>
        </div>
      ) : (
        <div style={{ border: '1px solid var(--border)' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 140px 120px 120px 48px', padding: '10px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
            <span className="label">Name</span>
            <span className="label">Email</span>
            <span className="label">Program</span>
            <span className="label">Role</span>
            <span className="label">Date</span>
            <span />
          </div>
          {filtered.map((app, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 140px 120px 120px 48px', padding: '12px 16px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'center', cursor: 'pointer', transition: 'background 0.1s' }}
              onClick={() => setSelected(selected === app ? null : app)}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{app.name}</span>
              <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{app.email}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)' }}>{programName(app.type)}</span>
              <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{app.role}</span>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>{formatDate(app.created_at || app.submittedAt)}</span>
              <span style={{ color: 'var(--muted)' }}>{selected === app ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
            </div>
          ))}
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div style={{ marginTop: 16, border: '1px solid var(--border)', padding: 24, background: 'var(--surface-2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 700 }}>{selected.name}</h3>
            <button onClick={() => setSelected(null)} className="btn-ghost" style={{ padding: '4px 8px', fontSize: 12, color: 'var(--muted)' }}>Close</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <Detail label="Email" value={selected.email} />
            <Detail label="Role" value={selected.role} />
            <Detail label="Program" value={programName(selected.type)} />
            <Detail label="Phone" value={selected.phone} />
            <Detail label="LinkedIn" value={selected.linkedin} isLink />
            <Detail label="Status" value={selected.status} />
          </div>
          {selected.background && <Detail label="Background" value={selected.background} full />}
          {selected.looking_for && <Detail label="Looking For" value={selected.looking_for} full />}
          {selected.interests && selected.interests.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <span className="label" style={{ display: 'block', marginBottom: 6 }}>Interests</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {selected.interests.map(i => (
                  <span key={i} style={{ padding: '4px 12px', fontSize: 12, fontWeight: 600, background: 'var(--blue-light)', color: 'var(--blue)', border: '1px solid var(--blue)' }}>{i}</span>
                ))}
              </div>
            </div>
          )}
          {selected.sectors && selected.sectors.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <span className="label" style={{ display: 'block', marginBottom: 6 }}>Sectors</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {selected.sectors.map(s => (
                  <span key={s} style={{ padding: '4px 12px', fontSize: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {selected.company_name && <Detail label="Company" value={selected.company_name} full />}
          {selected.company_description && <Detail label="Company Description" value={selected.company_description} full />}
          {selected.investment_range && <Detail label="Investment Range" value={selected.investment_range} full />}
          {selected.message && <Detail label="Additional Message" value={selected.message} full />}
          {selected.cv_url && (
            <div style={{ marginTop: 12 }}>
              <a href={selected.cv_url} target="_blank" rel="noopener" className="btn-secondary" style={{ fontSize: 12, padding: '6px 14px' }}>
                <Eye size={13} /> View CV
              </a>
            </div>
          )}
          {selected.cover_letter_url && (
            <div style={{ marginTop: 8 }}>
              <a href={selected.cover_letter_url} target="_blank" rel="noopener" className="btn-secondary" style={{ fontSize: 12, padding: '6px 14px' }}>
                <Eye size={13} /> View Cover Letter
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: number; icon?: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid var(--border)', padding: '16px 20px', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        {icon && <span style={{ color: 'var(--blue)' }}>{icon}</span>}
        <span className="label">{label}</span>
      </div>
      <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)' }}>{value}</span>
    </div>
  );
}

function Detail({ label, value, full, isLink }: { label: string; value?: string | null; full?: boolean; isLink?: boolean }) {
  if (!value) return null;
  return (
    <div style={{ marginTop: full ? 16 : 0 }}>
      <span className="label" style={{ display: 'block', marginBottom: 4 }}>{label}</span>
      {isLink ? (
        <a href={value.startsWith('http') ? value : 'https://' + value} target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--blue)', textDecoration: 'none' }}>{value}</a>
      ) : (
        <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{value}</p>
      )}
    </div>
  );
}
