// ATSA · 1% Better Challenge — Team + friendly leaderboard. window.Team
// Demo team data (a real build pulls this from the user's org / team).
window.CHALLENGE_TEAM = {
  name: 'Toowoomba Swim Co.',
  members: [
    { name: 'Mia Tran', days: 34, streak: 34, you: true },
    { name: 'Priya Nair', days: 41, streak: 12 },
    { name: 'Jack Doyle', days: 38, streak: 38 },
    { name: 'Sam Okafor', days: 30, streak: 6 },
    { name: 'Ella Brooks', days: 27, streak: 9 },
    { name: 'Noah Webb', days: 22, streak: 0 },
    { name: 'Aisha Khan', days: 19, streak: 19 },
  ],
};

function Team() {
  const { Card, Icon, Avatar, ProgressBar, Badge } = window.ATSADesignSystem_6b2905;
  const T = window.CHALLENGE_TEAM;
  // Friendly, non-competitive: rank by participation/consistency, celebrate everyone.
  const sorted = [...T.members].sort((a, b) => b.days - a.days);
  const active = T.members.filter((m) => m.streak > 0).length;
  const avg = Math.round(T.members.reduce((s, m) => s + m.days, 0) / T.members.length);
  const medal = ['#C9892B', '#8C9BA6', '#B07B4F'];

  return (
    <div style={{ padding: '24px 22px 110px' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)', margin: '0 0 2px', letterSpacing: '-0.01em' }}>Your team</h2>
      <p style={{ fontSize: 14.5, color: 'var(--atsa-slate)', margin: '0 0 18px' }}>{T.name} · moving forward together.</p>

      {/* team stats */}
      <Card variant="navy" padding="md" style={{ marginBottom: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, textAlign: 'center' }}>
          {[[T.members.length, 'On the challenge'], [active, 'Active this week'], [avg, 'Avg. days done']].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, color: '#fff' }}>{v}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-on-navy)', lineHeight: 1.3 }}>{l}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* encouragement, never shame */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--atsa-teal-20)', borderRadius: 'var(--radius-md)', padding: '13px 15px', marginBottom: 20 }}>
        <Icon name="heart" size={18} style={{ color: '#0E7D6C', flexShrink: 0, marginTop: 1 }} />
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: '#0E7D6C' }}>This board celebrates showing up — not speed or winning. Every check-in lifts the whole team.</p>
      </div>

      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-slate)', marginBottom: 10 }}>Team check-ins</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {sorted.map((m, i) => (
          <Card key={m.name} padding="sm" style={{ display: 'flex', alignItems: 'center', gap: 12, border: m.you ? '1.5px solid var(--atsa-ocean)' : '1px solid var(--border-subtle)' }}>
            <div style={{ width: 22, textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: i < 3 ? medal[i] : 'var(--atsa-navy-40)', flexShrink: 0 }}>{i + 1}</div>
            <Avatar name={m.name} tone={m.you ? 'ocean' : 'teal'} size="sm" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--atsa-navy)' }}>{m.name}{m.you ? <span style={{ color: 'var(--atsa-ocean)', fontWeight: 700 }}> · You</span> : ''}</div>
              <div style={{ fontSize: 12.5, color: 'var(--atsa-slate)' }}>{m.days} days done</div>
            </div>
            {m.streak > 0 ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#0E7D6C', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap' }}>
                <Icon name="droplet" size={15} /> {m.streak}
              </span>
            ) : (
              <span style={{ fontSize: 12.5, color: 'var(--atsa-slate)' }}>Resting</span>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
window.Team = Team;
