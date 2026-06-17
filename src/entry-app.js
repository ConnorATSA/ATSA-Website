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

  function Profile({ onReset }) {
    const { Card, Icon, Button, Switch, Avatar } = NS;
    const store = window.ChallengeStore;
    const s = store.get();
    const u = s.user || {};
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
        <Card padding="md" style={{ marginBottom: 16, background: 'var(--atsa-cloud)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--atsa-slate)', marginBottom: 8 }}>Your data</div>
          <p style={{ fontSize: 13.5, color: 'var(--atsa-slate)', lineHeight: 1.5, margin: '0 0 12px' }}>You own your data. Export or delete it anytime — this is a demo, so these are placeholders.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="secondary" size="sm" iconLeft="download">Export</Button>
            <Button variant="ghost" size="sm">Delete account</Button>
          </div>
        </Card>
        <Button variant="ghost" size="sm" fullWidth onClick={() => { if (confirm('Reset the demo? This clears your local progress.')) { onReset(); } }}>Reset demo</Button>
      </div>
    );
  }

  function App() {
    const [onboarded, setOnboarded] = React.useState(window.ChallengeStore.isOnboarded());
    const [tab, setTab] = React.useState('today');
    const [celebrate, setCelebrate] = React.useState(null);
    const [daySheet, setDaySheet] = React.useState(null);
    const [reflectN, setReflectN] = React.useState(null);
    const [, force] = React.useState(0);
    const screenRef = React.useRef(null);

    React.useEffect(() => window.ChallengeStore.subscribe(() => force((n) => n + 1)), []);
    React.useEffect(() => { if (screenRef.current) screenRef.current.scrollTop = 0; }, [tab]);

    if (!onboarded) {
      return (
        <div className="phone">
          <div className="screen"><window.Onboarding onDone={() => { setOnboarded(true); setTab('today'); }} /></div>
        </div>
      );
    }

    return (
      <div className="phone">
        <div className="screen" ref={screenRef}>
          {tab === 'today' && <window.CheckIn onCheckedIn={(res) => setCelebrate(res)} onGoTracker={() => setTab('tracker')} />}
          {tab === 'tracker' && <window.Tracker onOpenDay={(d) => setDaySheet(d)} />}
          {tab === 'team' && <window.Team />}
          {tab === 'growth' && <window.Growth onWriteReflection={(n) => setReflectN(n)} />}
          {tab === 'profile' && <Profile onReset={() => { window.ChallengeStore.reset(); setOnboarded(false); }} />}
        </div>
        <TabBar tab={tab} setTab={setTab} />
        {celebrate && <Celebration data={celebrate} onClose={() => setCelebrate(null)} />}
        {daySheet && <DaySheet day={daySheet} onClose={() => setDaySheet(null)} />}
        {reflectN && <ReflectionSheet themeN={reflectN} onClose={() => setReflectN(null)} />}
      </div>
    );
  }
  window.ChallengeApp = App;
})();
