// ATSA marketing — Course detail. Exposes window.CourseDetail.
const NS_CD = window.ATSADesignSystem_6b2905;

function CourseDetail({ courseId, onNavigate, onOpenCourse, onEnrol }) {
  const { Button, Card, Badge, Icon, Alert, CourseCard } = NS_CD;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const c = D.courses.find((x) => x.id === courseId) || D.courses[0];
  const related = D.courses.filter((x) => x.catId === c.catId && x.id !== c.id).slice(0, 3);
  const fallback = D.courses.filter((x) => x.id !== c.id).slice(0, 3);
  const more = (related.length ? related : fallback);

  const steps = [
    ['phone', 'Get in touch', 'Tell us about your team, your pool and your learners.'],
    ['calendar', 'We tailor it', 'We shape the session to your goals and pick a date that suits.'],
    ['users', 'We deliver', 'On-site at your pool or online — practical and ready to use.'],
  ];
  const included = ['Practical, real-classroom strategies', 'Can be delivered at your pool', 'Tailored to your team'];
  if (c.accredited) included.unshift('Certificate of completion');

  const accentBg = { navy: 'var(--atsa-navy)', ocean: 'var(--atsa-ocean)', teal: 'var(--atsa-teal)', aqua: 'var(--atsa-aqua)' }[c.accent];

  return (
    <div>
      {/* hero band */}
      <section style={{ background: accentBg, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, opacity: 0.12 }} fill="none" stroke="#fff" strokeWidth="3">
          {[0, 1, 2].map((i) => <path key={i} d={`M0 ${80 + i * 40} q 120 -36 240 0 t 240 0 t 240 0 t 240 0 t 240 0 t 240 0`} strokeLinecap="round" />)}
        </svg>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: isMobile ? '20px 20px 36px' : '24px 28px 44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 22, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => onNavigate('courses')} style={{ color: 'inherit', textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>Professional development</button>
            <Icon name="chevron-right" size={14} />
            <span style={{ color: '#fff' }}>{c.title}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em' }}>{c.cat}</span>
            {c.accredited ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.92)', color: 'var(--atsa-navy)', fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 700 }}><Icon name="award" size={14} /> Certificate provided</span> : null}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 30 : 46, letterSpacing: '-0.02em', margin: '0 0 8px', maxWidth: 720, lineHeight: 1.1 }}>{c.title}</h1>
          <p style={{ fontSize: isMobile ? 16 : 18, color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: 0, lineHeight: 1.55 }}>{c.blurb}</p>
        </div>
      </section>

      {/* body */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '32px 20px 48px' : '44px 28px 64px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 0.9fr', gap: isMobile ? 28 : 40, alignItems: 'start' }}>
        <div>
          {/* quick meta row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, paddingBottom: 26, borderBottom: '1px solid var(--border-subtle)', marginBottom: 28 }}>
            {[['clock', 'Duration', c.duration], ['users', 'Who it’s for', c.audience || c.level], ['map-pin', 'Delivery', 'On-site or online']].map(([icon, k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: 'var(--atsa-cloud)', color: 'var(--atsa-ocean)' }}><Icon name={icon} size={20} /></span>
                <div><div style={{ fontSize: 12, color: 'var(--atsa-slate)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--atsa-navy)' }}>{v}</div></div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)', margin: '0 0 16px', letterSpacing: '-0.01em' }}>What you&rsquo;ll learn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12, marginBottom: 34 }}>
            {c.outcomes.map((o) => (
              <div key={o} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ marginTop: 1, color: 'var(--atsa-teal)', flexShrink: 0 }}><Icon name="check-circle" size={20} /></span>
                <span style={{ fontSize: 15.5, color: 'var(--atsa-navy)', lineHeight: 1.5 }}>{o}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--atsa-navy)', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Who it&rsquo;s for</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--atsa-slate)', margin: '0 0 24px', maxWidth: 620 }}>
            Built for {(c.audience || c.level || 'aquatic professionals').toLowerCase()} — whether you&rsquo;re building your practice or developing your team. Practical, strengths-based, and ready to use on the pool deck.
          </p>

          <Alert variant="info" title="Inclusive by design">
            We bring neurodiversity-affirming, strengths-based practice into every session — and we&rsquo;re happy to tailor content to your team, your pool and your learners.
          </Alert>
        </div>

        {/* enquiry card */}
        <div style={{ position: isMobile ? 'static' : 'sticky', top: 88 }}>
          <Card variant="raised" padding="lg">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, color: 'var(--atsa-navy)', marginBottom: 4 }}>Book this workshop</div>
            <p style={{ fontSize: 14, color: 'var(--atsa-slate)', margin: '0 0 18px' }}>Tailored to your team and pool. Get in touch for a quote and dates.</p>

            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', marginBottom: 10 }}>How it works</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {steps.map(([icon, t, d], i) => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 999, background: 'var(--atsa-aqua-20)', color: 'var(--atsa-ocean)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--atsa-navy)' }}>{t}</div>
                    <div style={{ fontSize: 13, color: 'var(--atsa-slate)', lineHeight: 1.5 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={onEnrol}>Enquire now</Button>
            <Button variant="ghost" size="md" fullWidth iconLeft="phone" style={{ marginTop: 8 }} onClick={() => onNavigate('contact')}>Ask a question</Button>

            <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: 14, color: 'var(--atsa-navy)' }}>
                  <Icon name="check" size={16} strokeWidth={3} style={{ color: 'var(--atsa-teal)' }} />{f}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* related */}
      <section style={{ background: 'var(--atsa-cloud)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px' : '52px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 24 : 28, color: 'var(--atsa-navy)', margin: '0 0 24px', letterSpacing: '-0.01em' }}>You might also like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 22 }}>
            {more.map((rc) => (
              <CourseCard key={rc.id} category={rc.cat} title={rc.title} description={rc.blurb} icon={rc.icon}
                accent={rc.accent} duration={rc.duration} level={rc.level} price={rc.price} accredited={rc.accredited}
                ctaLabel="View workshop" onClick={() => onOpenCourse(rc.id)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.CourseDetail = CourseDetail;
