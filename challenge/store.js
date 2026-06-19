/* =====================================================================
   ATSA · 1% Better Challenge — client-side store (demo persistence)
   A real build replaces this with server accounts + a database. Here we
   persist to localStorage so the prototype behaves like the real thing.
   Exposes window.ChallengeStore.

   Streak model is FORGIVING by design (brand rule: never shame a missed
   day). One missed day does not reset the streak — a free "freeze" covers
   a single gap; a longer break ends the streak gently and a Comeback
   badge is offered when the user returns.
   ===================================================================== */
(function () {
  const KEY = 'atsa_1pct_v1';
  const DAY_MS = 86400000;

  const todayStr = () => new Date().toISOString().slice(0, 10);
  const dateNum = (s) => Math.floor(new Date(s + 'T00:00:00').getTime() / DAY_MS);

  const DEFAULT = {
    user: null,                 // { name, email, school }
    startDate: null,            // ISO date the challenge began
    done: {},                   // { [dayNumber]: ISOdate completed }
    reflections: {},            // { [themeN]: { text, date } }
    badges: [],                 // [badgeId]
    lastCheckIn: null,          // ISO date of most recent check-in
    freezesUsed: 0,
    settings: { reminders: 'daily', shareWithTeam: true },
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...DEFAULT };
      return { ...DEFAULT, ...JSON.parse(raw) };
    } catch (e) { return { ...DEFAULT }; }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  let state = load();
  let remote = false;            // true once signed in to a real Supabase account
  const listeners = new Set();
  const emit = () => { save(state); listeners.forEach((fn) => fn(state)); };

  // ---- Badges catalogue -------------------------------------------------
  const BADGES = [
    { id: 'first-step', name: 'First Step', icon: 'check-circle', desc: 'Checked in for the very first time.' },
    { id: 'first-reflection', name: 'Reflector', icon: 'book-open', desc: 'Wrote your first theme reflection.' },
    { id: 'theme-1', name: 'Connection & Rapport', icon: 'heart', desc: 'Completed Theme 1.' },
    { id: 'theme-2', name: 'Clear Communication', icon: 'book-open', desc: 'Completed Theme 2.' },
    { id: 'theme-3', name: 'Inclusion & Neurodiversity', icon: 'users', desc: 'Completed Theme 3.' },
    { id: 'theme-4', name: 'Safety & Awareness', icon: 'lifebuoy', desc: 'Completed Theme 4.' },
    { id: 'theme-5', name: 'Feedback & Encouragement', icon: 'star', desc: 'Completed Theme 5.' },
    { id: 'theme-6', name: 'Lesson Craft & Technique', icon: 'graduation-cap', desc: 'Completed Theme 6.' },
    { id: 'theme-7', name: 'The Environment', icon: 'waves', desc: 'Completed Theme 7.' },
    { id: 'theme-8', name: 'Parents & Families', icon: 'user', desc: 'Completed Theme 8.' },
    { id: 'theme-9', name: 'Looking After Yourself', icon: 'droplet', desc: 'Completed Theme 9.' },
    { id: 'theme-10', name: 'Leadership & Growth', icon: 'award', desc: 'Completed Theme 10.' },
    { id: 'day-25', name: 'Quarter Way', icon: 'star', desc: 'Reached 25 days.' },
    { id: 'day-50', name: 'Halfway Hero', icon: 'award', desc: 'Reached 50 days.' },
    { id: 'day-75', name: 'Three Quarters', icon: 'star', desc: 'Reached 75 days.' },
    { id: 'day-100', name: '1% Better', icon: 'award', desc: 'Completed all 100 days.' },
    { id: 'comeback', name: 'Comeback', icon: 'heart', desc: 'Picked it up again after a break. The habit is the point.' },
  ];
  const badgeById = (id) => BADGES.find((b) => b.id === id);

  // ---- Derived progress -------------------------------------------------
  function completedCount() { return Object.keys(state.done).length; }

  function currentDay() {
    // The day the user is "up to" = lowest day number not yet done (1..100)
    for (let d = 1; d <= 100; d++) if (!state.done[d]) return d;
    return 100;
  }

  function themeProgress(themeN) {
    const start = (themeN - 1) * 10 + 1;
    let n = 0;
    for (let d = start; d < start + 10; d++) if (state.done[d]) n++;
    return n;
  }

  // Forgiving streak: count back over consecutive calendar days with a
  // check-in, tolerating a single one-day gap (a "freeze").
  function streak() {
    const dates = Object.values(state.done).map(dateNum).sort((a, b) => b - a);
    if (!dates.length) return 0;
    const uniq = [...new Set(dates)];
    const today = dateNum(todayStr());
    // streak is only "live" if last check-in was today or yesterday (grace)
    if (today - uniq[0] > 1) return 0;
    let count = 1;
    let gaps = 0;
    for (let i = 1; i < uniq.length; i++) {
      const diff = uniq[i - 1] - uniq[i];
      if (diff === 1) { count++; }
      else if (diff === 2 && gaps === 0) { gaps++; count++; /* freeze covers the gap */ }
      else break;
    }
    return count;
  }

  // ---- Badge evaluation -------------------------------------------------
  function awardMaybe() {
    const add = (id) => { if (!state.badges.includes(id)) { state.badges.push(id); fresh.push(id); } };
    const fresh = [];
    if (completedCount() >= 1) add('first-step');
    if (Object.keys(state.reflections).length >= 1) add('first-reflection');
    for (let t = 1; t <= 10; t++) if (themeProgress(t) === 10) add('theme-' + t);
    [25, 50, 75, 100].forEach((m) => { if (completedCount() >= m) add('day-' + m); });
    return fresh;
  }

  // ---- Public API -------------------------------------------------------
  const api = {
    BADGES,
    badgeById,
    get: () => state,
    isOnboarded: () => !!state.user,
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

    signUp({ name, email, school }) {
      state.user = { name, email, school };
      state.startDate = state.startDate || todayStr();
      emit();
    },

    // ---- Remote (real account) wiring ----------------------------------
    isRemote: () => remote,
    setRemote(profile) {
      remote = true;
      state.user = {
        name: profile.full_name || (profile.email || '').split('@')[0],
        email: profile.email,
        school: (profile.schools && profile.schools.name) || null,
        schoolId: profile.school_id || null,
        isAdmin: !!profile.is_admin,
      };
      if (profile.start_date) state.startDate = profile.start_date;
      emit();
    },
    hydrate({ done, reflections }) {
      state.done = done || {};
      state.reflections = reflections || {};
      awardMaybe();
      emit();
    },
    signOutLocal() {
      remote = false;
      state = { ...DEFAULT, done: {}, reflections: {}, badges: [] };
      try { localStorage.removeItem(KEY); } catch (e) {}
      emit();
    },

    updateSettings(patch) { state.settings = { ...state.settings, ...patch }; emit(); },

    // mark a specific day done (defaults to the current day)
    checkIn(dayNumber) {
      const d = dayNumber || currentDay();
      if (state.done[d]) return { day: d, fresh: [] };
      // comeback detection: returning after a 3+ day gap
      if (state.lastCheckIn) {
        const gap = dateNum(todayStr()) - dateNum(state.lastCheckIn);
        if (gap >= 3) { if (!state.badges.includes('comeback')) state.badges.push('comeback'); }
      }
      state.done[d] = todayStr();
      state.lastCheckIn = todayStr();
      const fresh = awardMaybe();
      emit();
      if (remote && window.SB) window.SB.checkIn(d);
      return { day: d, fresh };
    },

    undoCheckIn(dayNumber) { delete state.done[dayNumber]; emit(); if (remote && window.SB) window.SB.undoCheckIn(dayNumber); },

    saveReflection(themeN, text) {
      state.reflections[themeN] = { text, date: todayStr() };
      awardMaybe();
      emit();
      if (remote && window.SB) window.SB.saveReflection(themeN, text);
    },

    // demo helper: jump progress forward to seed a lively prototype
    seedDemo(uptoDay) {
      const base = new Date();
      for (let d = 1; d <= uptoDay; d++) {
        const dt = new Date(base.getTime() - (uptoDay - d) * DAY_MS);
        state.done[d] = dt.toISOString().slice(0, 10);
      }
      state.lastCheckIn = todayStr();
      state.startDate = new Date(base.getTime() - (uptoDay - 1) * DAY_MS).toISOString().slice(0, 10);
      awardMaybe();
      emit();
    },

    reset() { state = { ...DEFAULT, done: {}, reflections: {}, badges: [] }; emit(); },

    // selectors
    completedCount, currentDay, themeProgress, streak,
    percent: () => Math.round((completedCount() / 100) * 100),
    isDone: (d) => !!state.done[d],
  };

  window.ChallengeStore = api;
})();
