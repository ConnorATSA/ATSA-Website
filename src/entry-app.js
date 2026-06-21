// Unified site: 1% Better Challenge app. Exposes window.ChallengeApp.
(function(){

  const NS = window.ATSADesignSystem_6b2905;

  function TabBar({ tab, setTab }) {
    const { Icon } = NS;
    const tabs = [['today','Today','home'],['tracker','Tracker','calendar'],['team','Team','users'],['growth','Growth','award'],['profile','Profile','user']];
    return (
      <div style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border-subtle)', display: 'flex', padding: '8px 6px 12px' }}>
        {tabs.map(([id,label,icon]) => {
          const active = tab === id;
          return (
            <button key={id} onClick={() => setTab(id)} style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 0', color: active ? 'var(--atsa-navy)' : 'var(--atsa-navy-40)' }}>
              <Icon name={icon} size={23} strokeWidth={active ? 2.4 : 2} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11 }}>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  function Celebration({ data, onClose }) {
    const { Button, Icon } = NS;
    const fresh = (data.fresh || []).map((id) => window.ChallengeStore.badgeById(id)).filter(Boolean);
    const badge = fresh[0];
    return (
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(11,59,94,0.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: 24, animation: 'overlayfade .2s ease' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 'var(--radius-xl)', padding: '30px 26px', textAlign: 'center', maxWidth: 340, width: '100%', animation: 'pop .3s cubic-bezier(0.16,1,0.3,1)' }}>
          <span style={{ display: 'inline-flex', width: 70, height: 70, borderRadius: 999, background: 'var(--atsa-teal)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Icon name={badge ? badge.icon : 'check'} size={38} color="#fff" strokeWidth={badge ? 2 : 3} />
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 23, color: 'var(--atsa-navy)', margin: '0 0 6px' }}>
            {badge ? `Badge unlocked!` : `Day ${data.day} done`}
          </h3>
          <p style={{ fontSize: 15, color: 'var(--atsa-slate)', lineHeight: 1.55, margin: '0 0 20px' }}>
            {badge ? <><strong style={{ color: 'var(--atsa-navy)' }}>{badge.name}</strong> — {badge.desc}</> : `That's one more 1%. Small changes, stacked. See you tomorrow.`}
          </p>
          <Button variant="accent" fullWidth onClick={onClose}>Keep going</Button>
        </div>
      </div>
    );
  }

  function DaySheet({ day, onClose }) {
    const { Icon, Button } = NS;
    const info = window.CHALLENGE_DAYS[day];
    const done = window.ChallengeStore.isDone(day);
    return (
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(11,59,94,0.5)', display: 'flex', alignItems: 'flex-end', zIndex: 60, animation: 'overlayfade .2s ease' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: '24px 24px 0 0', width: '100%', padding: '8px 22px 28px', animation: 'sheetup .3s cubic-bezier(0.16,1,0.3,1)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 999, background: 'var(--border-default)', margin: '8px auto 18px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
            <span style={{ display: 'inline-flex', width: 42, height: 42, borderRadius: 11, background: info.themeColor, color: '#fff', alignItems: 'center', justifyContent: 'center' }}><Icon name={info.themeIcon} size={22} /></span>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--atsa-ocean)' }}>Day {day} · {info.themeName}</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--atsa-navy)' }}>{done ? 'Completed' : 'Not yet done'}</div>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 20, lineHeight: 1.3, color: 'var(--atsa-navy)', margin: '0 0 12px' }}>{info.action}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--atsa-cloud)', borderRadius: 'var(--radius-md)', padding: '13px 15px' }}>
            <Icon name="info" size={18} style={{ color: 'var(--atsa-ocean)', flexShrink: 0, marginTop: 1 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--atsa-slate)' }}><strong style={{ color: 'var(--atsa-navy)' }}>Why it works.</strong> {info.why}</p>
          </div>
          <div style={{ marginTop: 18 }}><Button variant="secondary" fullWidth onClick={onClose}>Close</Button></div>
        </div>
      </div>
    );
  }

  function ReflectionSheet({ themeN, onClose }) {
    const { Icon, Button } = NS;
    const t = window.CHALLENGE.themes[themeN - 1];
    const existing = (window.ChallengeStore.get().reflections[themeN] || {}).text || '';
    const [text, setText] = React.useState(existing);
    const save = () => { if (text.trim()) window.ChallengeStore.saveReflection(themeN, text.trim()); onClose(true); };
    return (
      <div onClick={() => onClose(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(11,59,94,0.5)', display: 'flex', alignItems: 'flex-end', zIndex: 60, animation: 'overlayfade .2s ease' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: '24px 24px 0 0', width: '100%', padding: '8px 22px 28px', animation: 'sheetup .3s cubic-bezier(0.16,1,0.3,1)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 999, background: 'var(--border-default)', margin: '8px auto 18px' }} />
          <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 6 }}>Reflect · Theme {themeN}</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--atsa-navy)', margin: '0 0 6px' }}>{t.name}</h3>
          <p style={{ fontSize: 14.5, color: 'var(--atsa-slate)', lineHeight: 1.5, margin: '0 0 14px' }}>{t.reflect}</p>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} autoFocus placeholder="Write a sentence or two…"
            style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--atsa-navy)', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '12px 14px', resize: 'vertical', lineHeight: 1.55 }} />
          <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
            <Button variant="ghost" onClick={() => onClose(false)}>Cancel</Button>
            <Button variant="accent" fullWidth iconLeft="check" onClick={save}>Save reflection</Button>
          </div>
        </div>
      </div>
    );
  }

  function Profile({ onReset, onSignOut, onAdmin }) {
    const { Card, Icon, Button, Switch, Avatar } = NS;
    const store = window.ChallengeStore;
    const s = store.get();
    const u = s.user || {};
    const remote = store.isRemote();
    const [, force] = React.useState(0);
    const rows = [
      ['award', 'Badges earned', String(s.badges.length)],
      ['check-circle', 'Days completed', String(store.completedCount())],
      ['book-open', 'Reflections', String(Object.keys(s.reflections).length)],
    ];
    return (
      <div style={{ padding: '28px 22px 110px' }}>
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <Avatar name={u.name || 'You'} tone="teal" size="xl" style={{ margin: '0 auto' }} />
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--atsa-navy)', marginTop: 10 }}>{u.name || 'You'}</div>
          <div style={{ fontSize: 13.5, color: 'var(--atsa-slate)' }}>{u.school || 'Independent'}</div>
        </div>
        <Card padding="none" style={{ marginBottom: 16 }}>
          {rows.map(([icon, label, val], i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 9, background: 'var(--atsa-cloud)', color: 'var(--atsa-ocean)', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={18} /></span>
              <span style={{ flex: 1, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--atsa-navy)' }}>{label}</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--atsa-navy)' }}>{val}</span>
            </div>
          ))}
        </Card>
        <Card padding="md" style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 12 }}>Reminders</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Switch label="Daily action email" defaultChecked={s.settings.reminders === 'daily'} onChange={() => {}} />
            <Switch label="Share progress with my team" defaultChecked={s.settings.shareWithTeam} onChange={() => {}} />
          </div>
        </Card>
        {u.isAdmin && (
          <Card padding="none" style={{ marginBottom: 16 }}>
            <button onClick={onAdmin} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 9, background: 'var(--atsa-teal-20)', color: '#0E7D6C', alignItems: 'center', justifyContent: 'center' }}><Icon name="shield-check" size={18} /></span>
              <span style={{ flex: 1, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--atsa-navy)' }}>Invite teachers</span>
              <Icon name="chevron-right" size={18} style={{ color: 'var(--atsa-navy-40)' }} />
            </button>
          </Card>
        )}
        <Card padding="md" style={{ marginBottom: 16, background: 'var(--atsa-cloud)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--atsa-slate)', marginBottom: 8 }}>Your data</div>
          <p style={{ fontSize: 13.5, color: 'var(--atsa-slate)', lineHeight: 1.5, margin: 0 }}>{remote ? 'Your progress is saved to your account and syncs across your devices.' : 'This is a local demo — progress is saved only on this device.'}</p>
        </Card>
        {remote
          ? <Button variant="ghost" size="sm" fullWidth iconLeft="log-out" onClick={onSignOut}>Sign out</Button>
          : <Button variant="ghost" size="sm" fullWidth onClick={() => { if (confirm('Reset the demo? This clears your local progress.')) { onReset(); } }}>Reset demo</Button>}
      </div>
    );
  }

  function Login({ onDemo }) {
    const { Button, Icon, Input } = NS;
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
    const [msg, setMsg] = React.useState('');

    const submit = async (e) => {
      e.preventDefault();
      const addr = email.trim();
      if (!addr || !window.SB) return;
      setStatus('sending'); setMsg('');
      const { error } = await window.SB.sendMagicLink(addr);
      if (error) {
        // Supabase sometimes returns an empty/garbled error body (e.g. when the
        // invite-only DB trigger rejects a sign-in), which used to render as "{}".
        let m = (error && typeof error.message === 'string') ? error.message.trim() : '';
        if (!m || m === '{}' || m === '[object Object]') m = '';
        if (/rate|too many|429/i.test(m) || error.status === 429) {
          m = 'Too many attempts — please wait a minute and try again.';
        } else if (!m || error.status === 403 || error.status === 422 || error.status >= 500) {
          m = 'We couldn’t send a sign-in link to that address. Access is invite-only — please use the email you were invited with, or contact your administrator.';
        }
        setStatus('error'); setMsg(m);
      }
      else setStatus('sent');
    };

    return (
      <div style={{ height: '100%', background: 'var(--atsa-navy)', color: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '40px 26px 26px', textAlign: 'center' }}>
          <img src={window.__resources?.logoIcon || '../../assets/logos/atsa-icon.svg'} alt="" style={{ height: 46, marginBottom: 16 }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em', margin: '0 0 8px' }}>The 1% Better Challenge</h1>
          <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>Sign in to track your 100 days. We&rsquo;ll email a one-tap link — no password needed.</p>
        </div>
        <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', flex: 1, padding: '26px 24px 40px' }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', paddingTop: 8 }}>
              <span style={{ display: 'inline-flex', width: 60, height: 60, borderRadius: 999, background: 'var(--atsa-teal-20)', color: '#0E7D6C', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name="mail" size={30} /></span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: 'var(--atsa-navy)', margin: '0 0 8px' }}>Check your email</h2>
              <p style={{ fontSize: 14.5, color: 'var(--atsa-slate)', lineHeight: 1.55, margin: '0 0 18px' }}>We sent a sign-in link to <strong style={{ color: 'var(--atsa-navy)' }}>{email.trim()}</strong>. Open it on this device to log in.</p>
              <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>Use a different email</Button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--atsa-navy)', marginBottom: 14 }}>Sign in</div>
              <Input label="Email" type="email" placeholder="you@swimschool.com.au" value={email} onChange={(e) => setEmail(e.target.value)} icon="mail" required />
              {status === 'error' && <p style={{ color: '#C0392B', fontSize: 13.5, margin: '10px 0 0', lineHeight: 1.5 }}>{msg}</p>}
              <div style={{ marginTop: 16 }}><Button type="submit" variant="accent" size="lg" fullWidth iconRight="arrow-right" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Email me a sign-in link'}</Button></div>
              <p style={{ fontSize: 12.5, color: 'var(--atsa-slate)', lineHeight: 1.5, margin: '14px 0 0', textAlign: 'center' }}>Access is invite-only — use the email you were invited with.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '22px 0' }}>
                <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} /><span style={{ fontSize: 12, color: 'var(--atsa-navy-40)' }}>or</span><div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
              </div>
              <Button variant="secondary" fullWidth onClick={onDemo}>Explore a demo (no account)</Button>
            </form>
          )}
        </div>
      </div>
    );
  }

  function AdminInvites({ onClose }) {
    const { Button, Icon, Input, Select, Switch, Card } = NS;
    const [schools, setSchools] = React.useState([]);
    const [invites, setInvites] = React.useState([]);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [schoolId, setSchoolId] = React.useState('');
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [sendLink, setSendLink] = React.useState(true);
    const [busy, setBusy] = React.useState(false);
    const [msg, setMsg] = React.useState(null); // { type: 'ok' | 'err', text }

    const refresh = React.useCallback(async () => {
      const { data } = await window.SB.listInvites();
      setInvites(data || []);
    }, []);

    React.useEffect(() => {
      (async () => { setSchools(await window.SB.listSchools()); await refresh(); })();
    }, [refresh]);

    const submit = async (e) => {
      e.preventDefault();
      const addr = email.trim().toLowerCase();
      if (!addr) return;
      setBusy(true); setMsg(null);
      const { error } = await window.SB.inviteUser({ email: addr, full_name: name, school_id: schoolId || null, is_admin: isAdmin });
      if (error) {
        const dup = /duplicate|unique/i.test(error.message || '');
        setMsg({ type: 'err', text: dup ? 'That email is already on the invite list.' : (error.message || 'Could not add the invite.') });
        setBusy(false); return;
      }
      let extra = '';
      if (sendLink) {
        const { error: sendErr } = await window.SB.sendMagicLink(addr);
        extra = sendErr ? ' (invite saved, but the sign-in email couldn’t be sent)' : ' and emailed them a sign-in link';
      }
      setMsg({ type: 'ok', text: `Invited ${addr}${extra}.` });
      setEmail(''); setName(''); setSchoolId(''); setIsAdmin(false);
      setBusy(false); refresh();
    };

    const remove = async (inv) => {
      if (!confirm(`Remove the invite for ${inv.email}? New sign-ins will be blocked — anyone who has already joined keeps access.`)) return;
      await window.SB.deleteInvite(inv.id); refresh();
    };

    const schoolOptions = [{ value: '', label: 'No school' }].concat(schools.map((s) => ({ value: s.id, label: s.name })));

    return (
      <div style={{ position: 'absolute', inset: 0, background: '#fff', zIndex: 70, display: 'flex', flexDirection: 'column', animation: 'sheetup .25s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{ background: 'var(--atsa-navy)', color: '#fff', padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <button onClick={onClose} aria-label="Back" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'inline-flex', padding: 0 }}><Icon name="chevron-left" size={24} /></button>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>Invite teachers</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)' }}>Add people to the invite-only challenge</div>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
          <form onSubmit={submit}>
            <Input label="Email" type="email" placeholder="teacher@swimschool.com.au" value={email} onChange={(e) => setEmail(e.target.value)} icon="mail" required />
            <div style={{ height: 12 }} />
            <Input label="Full name" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} icon="user" />
            <div style={{ height: 12 }} />
            <Select label="School" options={schoolOptions} value={schoolId} onChange={(e) => setSchoolId(e.target.value)} />
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Switch label="Make this person an admin" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
              <Switch label="Email them a sign-in link now" checked={sendLink} onChange={(e) => setSendLink(e.target.checked)} />
            </div>
            {msg && <p style={{ fontSize: 13.5, lineHeight: 1.5, margin: '12px 0 0', color: msg.type === 'ok' ? '#0E7D6C' : '#C0392B' }}>{msg.text}</p>}
            <div style={{ marginTop: 16 }}><Button type="submit" variant="accent" size="lg" fullWidth iconRight="arrow-right" disabled={busy}>{busy ? 'Inviting…' : 'Send invite'}</Button></div>
          </form>
          <div style={{ marginTop: 26 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--atsa-slate)', marginBottom: 10 }}>Invited ({invites.length})</div>
            <Card padding="none">
              {invites.length === 0 && <div style={{ padding: '18px 16px', fontSize: 14, color: 'var(--atsa-slate)' }}>No invites yet.</div>}
              {invites.map((inv, i) => (
                <div key={inv.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 16px', borderBottom: i < invites.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14.5, color: 'var(--atsa-navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{inv.full_name || inv.email}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--atsa-slate)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{inv.email}</div>
                  </div>
                  {inv.is_admin && <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0E7D6C', background: 'var(--atsa-teal-20)', borderRadius: 6, padding: '3px 7px' }}>Admin</span>}
                  <span style={{ fontSize: 11, fontWeight: 600, color: inv.accepted ? '#0E7D6C' : 'var(--atsa-navy-40)' }}>{inv.accepted ? 'Joined' : 'Pending'}</span>
                  <button onClick={() => remove(inv)} aria-label="Remove invite" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--atsa-navy-40)', display: 'inline-flex', padding: 4 }}><Icon name="x" size={17} /></button>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    );
  }

  function App() {
    const [phase, setPhase] = React.useState('loading'); // loading | login | app
    const [tab, setTab] = React.useState('today');
    const [celebrate, setCelebrate] = React.useState(null);
    const [daySheet, setDaySheet] = React.useState(null);
    const [reflectN, setReflectN] = React.useState(null);
    const [admin, setAdmin] = React.useState(false);
    const [, force] = React.useState(0);
    const screenRef = React.useRef(null);

    React.useEffect(() => window.ChallengeStore.subscribe(() => force((n) => n + 1)), []);
    React.useEffect(() => { if (screenRef.current) screenRef.current.scrollTop = 0; }, [tab]);

    const enterRemote = React.useCallback(async () => {
      try {
        const profile = await window.SB.getProfile();
        if (!profile) { setPhase('login'); return; }
        window.ChallengeStore.setRemote(profile);
        window.ChallengeStore.hydrate(await window.SB.loadAll());
        setTab('today'); setPhase('app');
      } catch (e) { setPhase('login'); }
    }, []);

    React.useEffect(() => {
      if (!window.SB) { setPhase(window.ChallengeStore.isOnboarded() ? 'app' : 'login'); return; }
      let sub;
      (async () => {
        const session = await window.SB.getSession();
        if (session) await enterRemote(); else setPhase('login');
        const res = window.SB.onAuth(async (event, sess) => {
          if (event === 'SIGNED_IN' && sess) await enterRemote();
          else if (event === 'SIGNED_OUT') setPhase('login');
        });
        sub = res && res.data && res.data.subscription;
      })();
      return () => { try { sub && sub.unsubscribe(); } catch (e) {} };
    }, [enterRemote]);

    const startDemo = () => {
      window.ChallengeStore.signUp({ name: 'Mia Tran', email: 'mia@example.com', school: 'Toowoomba Swim Co.' });
      window.ChallengeStore.seedDemo(34);
      setTab('today'); setPhase('app');
    };
    const signOut = async () => { if (window.SB) await window.SB.signOut(); window.ChallengeStore.signOutLocal(); setPhase('login'); };

    if (phase === 'loading') {
      return (<div className="phone"><div className="screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--atsa-navy-40)' }}><NS.Icon name="droplet" size={30} /></div></div>);
    }
    if (phase === 'login') {
      return (<div className="phone"><div className="screen"><Login onDemo={startDemo} /></div></div>);
    }

    return (
      <div className="phone">
        <div className="screen" ref={screenRef}>
          {tab === 'today' && <window.CheckIn onCheckedIn={(res) => setCelebrate(res)} onGoTracker={() => setTab('tracker')} />}
          {tab === 'tracker' && <window.Tracker onOpenDay={(d) => setDaySheet(d)} />}
          {tab === 'team' && <window.Team />}
          {tab === 'growth' && <window.Growth onWriteReflection={(n) => setReflectN(n)} />}
          {tab === 'profile' && <Profile onReset={() => { window.ChallengeStore.reset(); setPhase('login'); }} onSignOut={signOut} onAdmin={() => setAdmin(true)} />}
        </div>
        <TabBar tab={tab} setTab={setTab} />
        {celebrate && <Celebration data={celebrate} onClose={() => setCelebrate(null)} />}
        {daySheet && <DaySheet day={daySheet} onClose={() => setDaySheet(null)} />}
        {reflectN && <ReflectionSheet themeN={reflectN} onClose={() => setReflectN(null)} />}
        {admin && <AdminInvites onClose={() => setAdmin(false)} />}
      </div>
    );
  }
  window.ChallengeApp = App;
})();
