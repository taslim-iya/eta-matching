import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL || '';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = url && key ? createClient(url, key) : null;

export async function submitApplication(data: Record<string, unknown>) {
  if (supabase) {
    const { error } = await supabase.from('matching_applications').insert(data);
    if (!error) return { ok: true, source: 'supabase' };
  }
  // Fallback to localStorage
  const subs = JSON.parse(localStorage.getItem('eta-connections-submissions') || '[]');
  subs.push({ ...data, submittedAt: new Date().toISOString() });
  localStorage.setItem('eta-connections-submissions', JSON.stringify(subs));
  return { ok: true, source: 'local' };
}

export async function getApplications() {
  if (supabase) {
    const { data, error } = await supabase
      .from('matching_applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) return data;
  }
  return JSON.parse(localStorage.getItem('eta-connections-submissions') || '[]');
}

export async function uploadFile(file: File, folder: string): Promise<string | null> {
  if (!supabase) return null;
  const ext = file.name.split('.').pop();
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from('documents').upload(path, file);
  if (error) return null;
  const { data } = supabase.storage.from('documents').getPublicUrl(path);
  return data.publicUrl;
}
