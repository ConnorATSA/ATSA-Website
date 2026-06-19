/* =====================================================================
   ATSA · 1% Better Challenge — Supabase client + helpers. window.SB
   Falls back to null (local demo only) if config or the library is
   missing, so the app never hard-breaks.
   ===================================================================== */
(function () {
  const URL = window.SUPABASE_URL, KEY = window.SUPABASE_KEY;
  if (!window.supabase || !URL || !KEY) { window.SB = null; return; }

  const client = window.supabase.createClient(URL, KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' },
  });

  const today = () => new Date().toISOString().slice(0, 10);
  const uid = async () => (await client.auth.getUser()).data.user?.id || null;

  const SB = {
    client,
    onAuth(cb) { return client.auth.onAuthStateChange((event, session) => cb(event, session)); },
    async getSession() { return (await client.auth.getSession()).data.session; },

    // Passwordless sign-in. Invite-only is enforced by the database trigger.
    async sendMagicLink(email) {
      return client.auth.signInWithOtp({
        email: (email || '').trim().toLowerCase(),
        options: { emailRedirectTo: location.origin + '/' },
      });
    },
    async signOut() { try { await client.auth.signOut(); } catch (e) {} },

    async getProfile() {
      const id = await uid(); if (!id) return null;
      const { data } = await client.from('profiles')
        .select('id, full_name, email, is_admin, start_date, school_id, schools(name)')
        .eq('id', id).single();
      return data || null;
    },

    // Load this user's progress + reflections into the shapes the store uses.
    async loadAll() {
      const [p, r] = await Promise.all([
        client.from('progress').select('day, completed_at'),
        client.from('reflections').select('theme, text, updated_at'),
      ]);
      const done = {}; (p.data || []).forEach((row) => { done[row.day] = row.completed_at; });
      const reflections = {}; (r.data || []).forEach((row) => { reflections[row.theme] = { text: row.text, date: (row.updated_at || '').slice(0, 10) }; });
      return { done, reflections };
    },

    async checkIn(day) { const id = await uid(); if (!id) return; await client.from('progress').upsert({ user_id: id, day, completed_at: today() }, { onConflict: 'user_id,day' }); },
    async undoCheckIn(day) { const id = await uid(); if (!id) return; await client.from('progress').delete().eq('user_id', id).eq('day', day); },
    async saveReflection(theme, text) { const id = await uid(); if (!id) return; await client.from('reflections').upsert({ user_id: id, theme, text, updated_at: new Date().toISOString() }, { onConflict: 'user_id,theme' }); },

    // Real per-school leaderboard (used in a later phase).
    async schoolLeaderboard() {
      const me = await client.from('profiles').select('school_id').single();
      const schoolId = me.data?.school_id;
      if (!schoolId) return [];
      const { data: people } = await client.from('profiles').select('id, full_name').eq('school_id', schoolId);
      if (!people || !people.length) return [];
      const { data: prog } = await client.from('progress').select('user_id, completed_at')
        .in('user_id', people.map((p) => p.id));
      const byUser = {};
      (prog || []).forEach((row) => { (byUser[row.user_id] = byUser[row.user_id] || []).push(row.completed_at); });
      return people.map((p) => ({ id: p.id, name: p.full_name || 'Teacher', days: (byUser[p.id] || []).length, dates: byUser[p.id] || [] }));
    },
  };

  // After a magic-link return (URL carries ?code=...), drop the user into the app.
  const cameFromLink = /[?&]code=/.test(location.search);
  client.auth.onAuthStateChange((event, session) => {
    if (cameFromLink && session && location.hash.indexOf('#/challenge') !== 0) {
      window.location.hash = '#/challenge/app';
    }
  });

  window.SB = SB;
})();
