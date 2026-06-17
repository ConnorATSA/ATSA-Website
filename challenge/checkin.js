// ATSA · 1% Better Challenge — daily check-in (today's action). window.CheckIn
function CheckIn({ onCheckedIn, onGoTracker }) {
  const { Button, Card, Icon, ProgressBar } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const [, force] = React.useState(0);
  const [note, setNote] = React.useState('');
  const [noteOpen, setNoteOpen] = React.useState(false);

  const day = store.currentDay();
  const info = window.CHALLENGE_DAYS[day];
  const doneToday = store.isDone(day);
  const allDone = store.completedCount() >= 100;
  const user = store.get().user || {};
  const firstName = (user.name || 'there').split(' ')[0];
  const streak = store.streak();

  const greet = (() => { const h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; })();

  const doCheckIn = () => {
    const res = store.checkIn(day);
    force((n) => n + 1);
    onCheckedIn && onCheckedIn(res);
  };

  if (allDone) {
    return (
      <div style={{ padding: '28px 22px 110px' }}>
        <Card variant="navy" padding="lg" style={{ textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: 999, background: 'var(--atsa-teal)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name="award" size={34} /></span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, margin: '0 0 8px' }}>Day 100 — you did it.</h2>
          <p style={{ color: 'var(--text-on-navy)', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>A hundred 1% changes look like everything in hindsight. Better isn’t a destination — it’s a direction you keep choosing.</p>
          <Button variant="accent" fullWidth onClick={onGoTracker}>See your 100 days</Button>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px 22px 110px' }}>
      {/* greeting + streak */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 14, color: 'var(--atsa-slate)' }}>{greet},</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 23, color: 'var(--atsa-navy)' }}>{firstName}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: streak > 0 ? 'var(--atsa-teal-20)' : 'var(--atsa-cloud)', color: streak > 0 ? '#0E7D6C' : 'var(--atsa-slate)', borderRadius: 999, padding: '8px 14px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap' }}>
          <Icon name="droplet" size={17} /> {streak === 1 ? '1 day' : streak + ' days'}
        </div>
      </div>

      {/* mini progress */}
      <div style={{ marginBottom: 18 }}>
        <ProgressBar value={store.completedCount()} max={100} tone="ocean" size="sm" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12.5, color: 'var(--atsa-slate)' }}>
          <span>{store.completedCount()} of 100 days</span><span>{store.percent()}% complete</span>
        </div>
      </div>

      {/* today's action card */}
      <Card padding="none" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: 'none' }}>
        <div style={{ background: info.themeColor, color: '#fff', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={info.themeIcon} size={24} /></span>
          <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, lineHeight: 1.3 }}>Theme {info.themeN} · {info.themeName}</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, lineHeight: 1 }}>Day {day}</div>
          </div>
        </div>
        <div style={{ padding: '22px 20px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 10 }}>Today’s 1%</div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 23, lineHeight: 1.3, color: 'var(--atsa-navy)', margin: '0 0 14px', letterSpacing: '-0.01em', textWrap: 'pretty' }}>{info.action}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--atsa-cloud)', borderRadius: 'var(--radius-md)', padding: '13px 15px' }}>
            <Icon name="info" size={18} style={{ color: 'var(--atsa-ocean)', flexShrink: 0, marginTop: 1 }} />
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--atsa-slate)' }}><strong style={{ color: 'var(--atsa-navy)' }}>Why it works.</strong> {info.why}</p>
          </div>

          {/* note */}
          {doneToday ? null : noteOpen ? (
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Optional: how did it go? (saved with your day)"
              style={{ width: '100%', boxSizing: 'border-box', marginTop: 14, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--atsa-navy)', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '11px 13px', resize: 'vertical', lineHeight: 1.5 }} />
          ) : null}

          {/* action */}
          {doneToday ? (
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 11, background: 'var(--atsa-teal-20)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
              <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 999, background: 'var(--atsa-teal)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="check" size={19} strokeWidth={3} color="#fff" /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#0E7D6C' }}>Done for today</div>
                <div style={{ fontSize: 13, color: '#0E7D6C' }}>Nice work. Come back tomorrow for Day {Math.min(day + 1, 100)}.</div>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <Button variant="accent" size="lg" fullWidth iconLeft="check" onClick={doCheckIn}>Mark today done</Button>
              {!noteOpen ? (
                <button onClick={() => setNoteOpen(true)} style={{ background: 'none', border: 'none', color: 'var(--atsa-ocean)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 6 }}>+ Add a reflection note</button>
              ) : null}
            </div>
          )}
        </div>
      </Card>

      {/* forgiving message */}
      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--atsa-slate)', margin: '18px 24px 0', lineHeight: 1.5 }}>
        Missed a day? That’s normal — just pick it up today. Consistency beats intensity.
      </p>
    </div>
  );
}
window.CheckIn = CheckIn;
