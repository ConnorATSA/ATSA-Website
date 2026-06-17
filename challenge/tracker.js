// ATSA · 1% Better Challenge — progress tracker (10×10 grid). window.Tracker
function Tracker({ onOpenDay }) {
  const { Card, Icon, ProgressBar, Stat } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const C = window.CHALLENGE;
  const done = store.get().done;
  const current = store.currentDay();
  const curInfo = window.CHALLENGE_DAYS[current];

  return (
    <div style={{ padding: '24px 22px 110px' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)', margin: '0 0 4px', letterSpacing: '-0.01em' }}>Your 100 days</h2>
      <p style={{ fontSize: 14.5, color: 'var(--atsa-slate)', margin: '0 0 20px' }}>Ten themes · ten days each · one hundred tiny changes.</p>

      {/* stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
        <Card padding="sm" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)' }}>{store.percent()}%</div>
          <div style={{ fontSize: 11.5, color: 'var(--atsa-slate)', fontWeight: 600 }}>Complete</div>
        </Card>
        <Card padding="sm" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-teal)' }}>{store.completedCount()}</div>
          <div style={{ fontSize: 11.5, color: 'var(--atsa-slate)', fontWeight: 600 }}>Days done</div>
        </Card>
        <Card padding="sm" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-ocean)' }}>{store.streak()}</div>
          <div style={{ fontSize: 11.5, color: 'var(--atsa-slate)', fontWeight: 600 }}>Day streak</div>
        </Card>
      </div>

      {/* current theme */}
      <Card padding="md" style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 22, borderLeft: `4px solid ${curInfo.themeColor}` }}>
        <span style={{ display: 'inline-flex', width: 42, height: 42, borderRadius: 11, background: curInfo.themeColor, color: '#fff', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={curInfo.themeIcon} size={22} /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11.5, color: 'var(--atsa-slate)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Currently on</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16.5, color: 'var(--atsa-navy)' }}>Theme {curInfo.themeN} · {curInfo.themeName}</div>
        </div>
      </Card>

      {/* the 10×10 grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {C.themes.map((t) => {
          const prog = store.themeProgress(t.n);
          return (
            <div key={t.n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: 'var(--atsa-navy-60)', textAlign: 'right', flexShrink: 0 }}>{t.n}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 5, flex: 1 }}>
                {t.days.map((day) => {
                  const isDone = !!done[day.d];
                  const isCurrent = day.d === current;
                  return (
                    <button key={day.d} onClick={() => onOpenDay(day.d)} title={`Day ${day.d}`}
                      style={{
                        aspectRatio: '1', borderRadius: 6, cursor: 'pointer', padding: 0,
                        border: isCurrent ? '2px solid var(--atsa-navy)' : '1px solid ' + (isDone ? 'transparent' : 'var(--border-default)'),
                        background: isDone ? t.color : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'transform .12s',
                      }}>
                      {isDone ? <Icon name="check" size={11} strokeWidth={3.5} color="#fff" /> : <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--atsa-navy-40)' }}>{day.d}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* theme legend */}
      <div style={{ marginTop: 22 }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-slate)', marginBottom: 10 }}>The ten themes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {C.themes.map((t) => {
            const prog = store.themeProgress(t.n);
            return (
              <div key={t.n} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
                <span style={{ width: 12, height: 12, borderRadius: 4, background: t.color, flexShrink: 0 }} />
                <span style={{ flex: 1, color: 'var(--atsa-navy)', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{t.name}</span>
                <span style={{ color: prog === 10 ? '#0E7D6C' : 'var(--atsa-slate)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{prog}/10</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
window.Tracker = Tracker;
