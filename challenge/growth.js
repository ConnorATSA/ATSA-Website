// ATSA · 1% Better Challenge — badges + reflection journal. window.Growth
function Growth({ onWriteReflection }) {
  const { Card, Icon, Tabs } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const C = window.CHALLENGE;
  const [tab, setTab] = React.useState('badges');
  const s = store.get();
  const earned = new Set(s.badges);

  return (
    <div style={{ padding: '24px 22px 110px' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Your growth</h2>
      <div style={{ marginBottom: 20 }}>
        <Tabs variant="pills" value={tab} onChange={setTab} items={[
          { id: 'badges', label: 'Badges', count: earned.size },
          { id: 'journal', label: 'Reflections', count: Object.keys(s.reflections).length },
        ]} />
      </div>

      {tab === 'badges' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {store.BADGES.map((b) => {
            const got = earned.has(b.id);
            return (
              <Card key={b.id} padding="md" style={{ textAlign: 'center', opacity: got ? 1 : 0.55, background: got ? '#fff' : 'var(--atsa-cloud)' }}>
                <span style={{ display: 'inline-flex', width: 52, height: 52, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 10,
                  background: got ? 'var(--atsa-teal-20)' : 'var(--atsa-slate-20)', color: got ? '#0E7D6C' : 'var(--atsa-slate)' }}>
                  {got ? <Icon name={b.icon} size={26} /> : <Icon name="award" size={24} />}
                </span>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14.5, color: 'var(--atsa-navy)', lineHeight: 1.2 }}>{b.name}</div>
                <div style={{ fontSize: 12, color: 'var(--atsa-slate)', marginTop: 4, lineHeight: 1.4 }}>{got ? b.desc : 'Locked'}</div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {C.themes.map((t) => {
            const r = s.reflections[t.n];
            const prog = store.themeProgress(t.n);
            const unlocked = prog === 10 || !!r;
            return (
              <Card key={t.n} padding="md" style={{ borderLeft: `4px solid ${t.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: r ? 10 : 0 }}>
                  <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 9, background: t.color, color: '#fff', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={t.icon} size={18} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15.5, color: 'var(--atsa-navy)' }}>{t.name}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--atsa-slate)' }}>{prog}/10 days</div>
                  </div>
                  <button onClick={() => onWriteReflection(t.n)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--atsa-ocean)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13.5, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {r ? 'Edit' : 'Write'} <Icon name="chevron-right" size={15} />
                  </button>
                </div>
                {r ? (
                  <div style={{ background: 'var(--atsa-cloud)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--atsa-navy)', fontStyle: 'italic' }}>“{r.text}”</p>
                  </div>
                ) : (
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--atsa-slate)', lineHeight: 1.5 }}>{t.reflect}</p>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
window.Growth = Growth;
