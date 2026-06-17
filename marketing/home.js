// ATSA marketing — Home screen. Exposes window.Home.
const NS_HOME = window.ATSADesignSystem_6b2905;

function WaveDivider({ color = '#fff', flip = false }) {
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 48, transform: flip ? 'rotate(180deg)' : 'none' }}>
      <path d="M0 30 q 90 -28 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 V60 H0 Z" fill={color} />
    </svg>
  );
}

function Home({ onNavigate, onOpenCourse }) {
  const { Button, CourseCard, Stat, Card, Icon, Badge } = NS_HOME;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const isNarrow = window.useIsMobile(560);
  const popular = D.courses.filter((c) => c.popular);

  const HERO_WAVE = (
    <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: -40, bottom: -60, width: 520, opacity: 0.10 }} fill="none" stroke="#fff" strokeWidth="2">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M-20 ${180 + i * 64} q 75 -40 150 0 t 150 0 t 150 0 t 150 0 t 150 0 t 150 0`} strokeLinecap="round" />
      ))}
    </svg>
  );

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--atsa-navy)', color: '#fff', overflow: 'hidden' }}>
        {HERO_WAVE}
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: isMobile ? '48px 20px 64px' : '76px 28px 92px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr', gap: isMobile ? 32 : 48, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-aqua)' }}>
              <Icon name="award" size={15} /> Professional development &amp; consulting
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 34 : 52, lineHeight: 1.07, letterSpacing: '-0.02em', margin: '20px 0 0', textWrap: 'balance' }}>
              Raising the standard in aquatic education
            </h1>
            <p style={{ fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '20px 0 32px' }}>
              Training and advisory for swim teachers, coaches and program managers — grounded in real experience on the pool deck, and inclusive by design.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onNavigate('courses')}>Browse workshops</Button>
              <Button variant="inverse-secondary" size="lg" iconLeft="phone" onClick={() => onNavigate('contact')}>Talk to us</Button>
            </div>
          </div>
          <div>
            <Card variant="raised" padding="lg" style={{ background: '#fff' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 16px' }}>Why partner with ATSA</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                {D.stats.map((s) => <Stat key={s.label} label={s.label} value={s.value} />)}
              </div>
            </Card>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: -1 }}><WaveDivider color="var(--surface-page, #fff)" /></div>
      </section>

      {/* CATEGORIES */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '8px 20px' : '8px 28px 8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? 12 : 16 }}>
          {D.categories.map((c) => (
            <Card key={c.id} interactive padding="md" onClick={() => onNavigate('courses')} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'var(--atsa-aqua-20)', color: 'var(--atsa-ocean)', flexShrink: 0 }}>
                <Icon name={c.icon} size={24} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--atsa-navy)', overflowWrap: 'anywhere' }}>{c.label}</div>
                <div style={{ fontSize: 13, color: 'var(--atsa-slate)' }}>View workshops</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px' : '56px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 26, gap: 16, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 8px' }}>Popular right now</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 28 : 34, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: 0 }}>Professional development</h2>
          </div>
          <Button variant="secondary" iconRight="arrow-right" onClick={() => onNavigate('courses')}>View all workshops</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 22 }}>
          {popular.concat(D.courses.filter((c) => !c.popular).slice(0, 1)).map((c) => (
            <CourseCard key={c.id} category={c.cat} title={c.title} description={c.blurb} icon={c.icon}
              accent={c.accent} duration={c.duration} level={c.level} price={c.price} accredited={c.accredited}
              ctaLabel="View workshop" onClick={() => onOpenCourse(c.id)} />
          ))}
        </div>
      </section>

      {/* INCLUSION BAND */}
      <section style={{ background: 'var(--atsa-sand)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '44px 20px' : '60px 28px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 12px' }}>Inclusion at the core</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 26 : 32, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: '0 0 16px', lineHeight: 1.15 }}>Inclusive practice every learner can feel</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#5a5040', margin: '0 0 22px', maxWidth: 460 }}>
              We help teaching teams build practice around difference, not despite it — strengths‑based, neurodiversity‑affirming, and practical on the pool deck. Every learner belongs in the water.
            </p>
            <Button variant="primary" iconRight="arrow-right" onClick={() => onNavigate('about')}>Our approach to inclusion</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['heart', 'Neurodiversity‑affirming', 'Strengths‑based strategies for autistic and ADHD learners.'], ['users', 'Built with teachers', 'Real classroom strategies your team can use on Monday.'], ['award', 'Lived experience', 'Connor teaches from his own practice and recognised expertise.']].map(([icon, t, d]) => (
              <Card key={t} padding="md" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fff' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 12, background: 'var(--atsa-teal-20)', color: '#0E7D6C', flexShrink: 0 }}>
                  <NS_HOME.Icon name={icon} size={22} />
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: 'var(--atsa-navy)' }}>{t}</div>
                  <div style={{ fontSize: 14, color: 'var(--atsa-slate)', lineHeight: 1.5 }}>{d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ position: 'relative', background: 'var(--atsa-ocean)', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto', padding: isMobile ? '48px 20px' : '64px 28px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 28 : 36, letterSpacing: '-0.02em', margin: '0 0 14px' }}>Bring ATSA to your team</h2>
          <p style={{ fontSize: isMobile ? 16 : 18, color: 'rgba(255,255,255,0.85)', margin: '0 0 28px' }}>Book a workshop, or talk to us about professional development and consulting for your swim school.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="inverse" size="lg" iconRight="arrow-right" onClick={() => onNavigate('courses')}>Browse workshops</Button>
            <Button variant="inverse-secondary" size="lg" iconLeft="mail" onClick={() => onNavigate('contact')}>Partner with us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
