// ATSA marketing — shared responsive hook + About / Contact / For-swim-schools pages.
// Loaded before header.js so window.useIsMobile is available to every marketing screen.

// Returns true when the viewport is at or below `bp` px. Drives the inline-style
// responsive layout (the site uses inline styles, so CSS media queries can't reach it).
window.useIsMobile = function (bp) {
  bp = bp || 720;
  const get = () => (typeof window !== 'undefined' ? window.innerWidth <= bp : false);
  const [m, setM] = React.useState(get);
  React.useEffect(() => {
    const on = () => setM(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return m;
};

function PageHero({ kicker, title, intro }) {
  const isMobile = window.useIsMobile();
  return (
    <section style={{ background: 'var(--atsa-cloud)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px 30px' : '48px 28px 36px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 10px' }}>{kicker}</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 32 : 42, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: '0 0 12px', lineHeight: 1.1 }}>{title}</h1>
        <p style={{ fontSize: isMobile ? 16 : 17, color: 'var(--atsa-slate)', maxWidth: 620, margin: 0, lineHeight: 1.6 }}>{intro}</p>
      </div>
    </section>
  );
}

function About({ onNavigate }) {
  const { Button, Card, Icon } = window.ATSADesignSystem_6b2905;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const values = [
    ['heart', 'Inclusive by design', 'Every learner belongs in the water. We build practice around difference — strengths-based and neurodiversity-affirming.'],
    ['users', 'Built with teachers', 'Real classroom strategies your team can use on Monday — not theory for theory’s sake.'],
    ['award', 'Lived experience', 'Connor teaches from his own practice on the pool deck and his recognised work in inclusion and neurodiversity.'],
  ];
  return (
    <div>
      <PageHero
        kicker="About ATSA"
        title="Raising the standard in aquatic education"
        intro="Aquatic Training Solutions Australia is a professional development and consulting practice for the aquatics industry — grounded in real experience on the pool deck, and inclusive by design." />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px' : '56px 28px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? 28 : 48, alignItems: 'start' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 24 : 30, color: 'var(--atsa-navy)', margin: '0 0 16px', letterSpacing: '-0.01em' }}>Our story</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--atsa-slate)', margin: '0 0 16px' }}>
            ATSA was founded in 2018 to lift the quality of teaching across swim schools and aquatic programs. Since then we’ve trained more than 1,500 teachers and coaches in practical, inclusive teaching that works for every learner.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--atsa-slate)', margin: '0 0 16px' }}>
            We focus on what actually happens in the water — how to read a learner, adjust your pace and language, set up a calm and predictable lesson, and partner well with families. We bring neurodiversity-affirming, strengths-based practice into everything we deliver.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--atsa-slate)', margin: 0 }}>
            Whether you’re a teacher building your craft or a manager developing a team, our workshops and consulting are designed to be practical, generous and ready to use.
          </p>
          <div style={{ marginTop: 26 }}>
            <Button variant="primary" iconRight="arrow-right" onClick={() => onNavigate('courses')}>Browse workshops</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {values.map(([icon, t, d]) => (
            <Card key={t} padding="md" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fff' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 12, background: 'var(--atsa-teal-20)', color: '#0E7D6C', flexShrink: 0 }}>
                <Icon name={icon} size={22} />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: 'var(--atsa-navy)' }}>{t}</div>
                <div style={{ fontSize: 14, color: 'var(--atsa-slate)', lineHeight: 1.5 }}>{d}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--atsa-sand)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: isMobile ? '40px 20px' : '56px 28px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 24 : 30, color: 'var(--atsa-navy)', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Bring ATSA to your team</h2>
          <p style={{ fontSize: 17, color: '#5a5040', margin: '0 0 24px', lineHeight: 1.6 }}>Talk to us about professional development and consulting for your swim school.</p>
          <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => onNavigate('contact')}>Get in touch</Button>
        </div>
      </section>
    </div>
  );
}

function Contact({ onNavigate }) {
  const { Button, Card, Icon, Input } = window.ATSADesignSystem_6b2905;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const [sent, setSent] = React.useState(false);

  const rows = [
    ['phone', 'Phone', D.brand.phone, 'tel:' + D.brand.phone.replace(/\s/g, '')],
    ['mail', 'Email', D.brand.email, 'mailto:' + D.brand.email],
    ['map-pin', 'Based in', D.brand.location, null],
  ];

  return (
    <div>
      <PageHero
        kicker="Contact"
        title="Let’s talk"
        intro="Book a workshop, ask a question, or talk to us about professional development and consulting for your swim school. We’d love to hear from you." />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px' : '56px 28px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 28 : 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {rows.map(([icon, k, v, href]) => (
            <Card key={k} padding="md" style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#fff' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 12, background: 'var(--atsa-aqua-20)', color: 'var(--atsa-ocean)', flexShrink: 0 }}>
                <Icon name={icon} size={22} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, color: 'var(--atsa-slate)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</div>
                {href
                  ? <a href={href} style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--atsa-navy)', textDecoration: 'none', wordBreak: 'break-word' }}>{v}</a>
                  : <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--atsa-navy)' }}>{v}</div>}
              </div>
            </Card>
          ))}
        </div>

        <Card variant="raised" padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 999, background: 'var(--atsa-teal-20)', color: '#0E7D6C', marginBottom: 12 }}>
                <Icon name="check-circle" size={30} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--atsa-navy)', margin: '0 0 8px' }}>Thanks — we’ll be in touch</h3>
              <p style={{ fontSize: 15, color: 'var(--atsa-slate)', lineHeight: 1.6, margin: '0 0 18px' }}>
                Prefer to reach us directly? Email <a href={'mailto:' + D.brand.email} style={{ color: 'var(--atsa-ocean)' }}>{D.brand.email}</a> or call {D.brand.phone}.
              </p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--atsa-navy)', margin: '0 0 4px' }}>Send us a message</h3>
              <p style={{ fontSize: 14, color: 'var(--atsa-slate)', margin: '0 0 18px' }}>We’ll get back to you within a couple of business days.</p>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <Input label="Your name" placeholder="Jane Smith" required />
                <Input label="Email" type="email" placeholder="jane@swimschool.com.au" required />
              </div>
              <div style={{ marginBottom: 14 }}>
                <Input label="Swim school / organisation" placeholder="Optional" />
              </div>
              <label style={{ display: 'block', marginBottom: 18 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'var(--atsa-navy)', marginBottom: 6 }}>How can we help?</span>
                <textarea required rows={4} placeholder="Tell us a little about your team and what you’re after…"
                  style={{ width: '100%', boxSizing: 'border-box', padding: '11px 14px', borderRadius: 10, border: '1.5px solid var(--border-default)', fontFamily: 'inherit', fontSize: 15, color: 'var(--atsa-navy)', resize: 'vertical' }} />
              </label>
              <Button type="submit" variant="accent" size="lg" fullWidth iconRight="arrow-right">Send message</Button>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}

window.About = About;
window.Contact = Contact;
