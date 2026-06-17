// Unified site: 1% Better Challenge landing. Exposes window.ChallengeLanding.
(function(){

  const NS = window.ATSADesignSystem_6b2905;
  const { Button, Card, Icon, Badge } = NS;
  const C = window.CHALLENGE;

  function Wave({ color = '#fff' }) {
    return (
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 46 }}>
        <path d="M0 30 q 90 -28 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 V60 H0 Z" fill={color} />
      </svg>
    );
  }

  function Header() {
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(11,59,94,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#/" onClick={(e) => { e.preventDefault(); window.ATSANav('#/'); }} style={{ display: 'flex' }}><img src={window.__resources?.logoReversed || "../../assets/logos/atsa-logo-reversed.svg"} alt="ATSA" style={{ height: 38 }} /></a>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href="#/challenge/app" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14.5, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', padding: '8px 10px' }}>Log in</a>
            <Button variant="accent" iconRight="arrow-right" href="#/challenge/app">Start the challenge</Button>
          </div>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section style={{ position: 'relative', background: 'var(--atsa-navy)', color: '#fff', overflow: 'hidden' }}>
        <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: -60, top: -40, width: 560, opacity: 0.09 }} fill="none" stroke="#fff" strokeWidth="3">
          {[0,1,2,3,4,5,6].map((i)=>(<path key={i} d={`M-20 ${120+i*70} q 80 -42 160 0 t 160 0 t 160 0 t 160 0 t 160 0`} strokeLinecap="round"/>))}
        </svg>
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '72px 28px 96px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-aqua)' }}>
              A 100-day teaching challenge
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '20px 0 0', textWrap: 'balance' }}>
              The 1% Better Challenge
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 500, margin: '20px 0 32px' }}>
              {C.meta.subtitle} A daily check-in for swim teachers — one small, deliberate change at a time.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" iconRight="arrow-right" href="#/challenge/app">Start the challenge</Button>
              <Button variant="inverse-secondary" size="lg" href="#how">How it works</Button>
            </div>
          </div>
          <div>
            <Card variant="raised" padding="lg" style={{ background: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 14 }}>The maths</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--atsa-navy)' }}>2.7<span style={{ color: 'var(--atsa-teal)' }}>×</span></div>
              <p style={{ fontSize: 15, color: 'var(--atsa-slate)', lineHeight: 1.55, margin: '12px 0 0' }}>
                better after 100 days. {C.meta.mathsNote}
              </p>
            </Card>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: -1 }}><Wave color="var(--surface-page)" /></div>
      </section>
    );
  }

  function How() {
    const steps = [
      ['calendar', 'Pick the day', 'Work through in order, or dip into the theme you most want to grow.'],
      ['droplet', 'Do the one thing', 'Make that single change in your next lesson — nothing else required.'],
      ['check-circle', 'Tick it off', 'Mark the day in the app. One or two taps, even with wet hands.'],
      ['book-open', 'Reflect each theme', 'At the end of each ten-day theme, answer a short reflection prompt.'],
    ];
    return (
      <section id="how" style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 10px' }}>How it works</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: '0 0 12px' }}>Consistency beats intensity</h2>
          <p style={{ fontSize: 17, color: 'var(--atsa-slate)', lineHeight: 1.6, margin: 0 }}>You don’t become a better teacher in one heroic leap — you become one by getting slightly better, on purpose, every day. A missed day isn’t failure; just pick it up tomorrow.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {steps.map(([icon, t, d], i) => (
            <Card key={t} padding="lg">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'var(--atsa-aqua-20)', color: 'var(--atsa-ocean)', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={22} /></span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--atsa-navy-40)' }}>{i + 1}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: 'var(--atsa-navy)', marginBottom: 5 }}>{t}</div>
              <p style={{ fontSize: 14, color: 'var(--atsa-slate)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  function Themes() {
    return (
      <section style={{ background: 'var(--atsa-cloud)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 28px' }}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 10px' }}>The ten themes</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: 0 }}>Ten themes · ten days each</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            {C.themes.map((t) => (
              <div key={t.n} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ background: t.color, color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 9 }}>
                  <Icon name={t.icon} size={20} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14 }}>{String(t.n).padStart(2, '0')}</span>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15.5, color: 'var(--atsa-navy)', lineHeight: 1.25, marginBottom: 6 }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--atsa-slate)' }}>Days {(t.n - 1) * 10 + 1}–{t.n * 10}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Preview() {
    const sample = window.CHALLENGE_DAYS[1];
    return (
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 12px' }}>One tap a day</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 34, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: '0 0 16px', lineHeight: 1.15 }}>A daily check-in built for the pool deck</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['check-circle', 'One or two taps', 'See today’s action, mark it done. That’s it.'], ['droplet', 'Forgiving streaks', 'Miss a day? No shame, no reset — just pick it up.'], ['award', 'Badges & milestones', 'Celebrate each theme, and 25, 50, 75, 100 days.'], ['book-open', 'A growth journal', 'Your reflections, saved across all 100 days.']].map(([icon, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: 11, background: 'var(--atsa-teal-20)', color: '#0E7D6C', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={icon} size={20} /></span>
                <div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16.5, color: 'var(--atsa-navy)' }}>{t}</div><div style={{ fontSize: 14, color: 'var(--atsa-slate)', lineHeight: 1.5 }}>{d}</div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><Button variant="primary" size="lg" iconRight="arrow-right" href="#/challenge/app">Open the check-in</Button></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card padding="none" style={{ overflow: 'hidden', maxWidth: 320, width: '100%', boxShadow: 'var(--shadow-lg)', border: 'none' }}>
            <div style={{ background: sample.themeColor, color: '#fff', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: 11, background: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center' }}><Icon name={sample.themeIcon} size={21} /></span>
              <div><div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85 }}>Theme 1 · {sample.themeName}</div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>Day 1</div></div>
            </div>
            <div style={{ padding: '20px 18px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 8 }}>Today’s 1%</div>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 19, lineHeight: 1.3, color: 'var(--atsa-navy)', margin: '0 0 14px' }}>{sample.action}</p>
              <Button variant="accent" fullWidth iconLeft="check">Mark today done</Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  function CTA() {
    return (
      <section style={{ background: 'var(--atsa-ocean)', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 28px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em', margin: '0 0 14px' }}>Ready to get 1% better?</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', margin: '0 0 28px' }}>Start today. 100 tiny changes, one day at a time.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="inverse" size="lg" iconRight="arrow-right" href="#/challenge/app">Start the challenge</Button>
            <Button variant="inverse-secondary" size="lg" iconLeft="mail">Bring it to your swim school</Button>
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer style={{ background: 'var(--atsa-navy-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <img src={window.__resources?.logoReversed || "../../assets/logos/atsa-logo-reversed.svg"} alt="ATSA" style={{ height: 40 }} />
          <span style={{ fontSize: 13.5 }}>© 2026 Aquatic Training Solutions Australia · Raising the standard in aquatic education</span>
        </div>
      </footer>
    );
  }

  function Landing() {
    return (<div><Header /><Hero /><How /><Themes /><Preview /><CTA /><Footer /></div>);
  }
  window.ChallengeLanding = Landing;
})();
