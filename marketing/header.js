// ATSA marketing — shared header & footer. Exposes window.Header / window.Footer.

// Maps a nav label to a marketing page key.
function navTarget(item) {
  switch (item) {
    case 'Professional development': return 'courses';
    case 'For swim schools': return 'courses';
    case 'About': return 'about';
    case 'Contact': return 'contact';
    default: return 'home';
  }
}

function Header({ onNavigate, current }) {
  const { Button } = window.ATSADesignSystem_6b2905;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile(880);
  const [open, setOpen] = React.useState(false);

  const go = (page) => { setOpen(false); onNavigate(page); };
  const goChallenge = () => { setOpen(false); window.ATSANav('#/challenge'); };

  const navLinkStyle = (active) => ({
    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
    color: active ? 'var(--atsa-navy)' : 'var(--atsa-slate)', textDecoration: 'none',
    padding: '8px 14px', borderRadius: 999, transition: 'color .12s, background .12s',
    background: 'transparent', border: 'none', cursor: 'pointer',
  });

  const desktopNav = (
    <React.Fragment>
      <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
        {D.nav.map((item) => {
          const target = navTarget(item);
          const active = current === target && !(item === 'For swim schools');
          return (
            <button key={item} type="button" onClick={() => onNavigate(target)} style={navLinkStyle(active)}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--atsa-cloud)'; e.currentTarget.style.color = 'var(--atsa-navy)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = active ? 'var(--atsa-navy)' : 'var(--atsa-slate)'; }}>
              {item}
            </button>
          );
        })}
        <button type="button" onClick={goChallenge} style={navLinkStyle(current === 'challenge')}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--atsa-cloud)'; e.currentTarget.style.color = 'var(--atsa-navy)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--atsa-slate)'; }}>
          The 1% Better Challenge
        </button>
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Button variant="primary" iconRight="arrow-right" onClick={() => onNavigate('courses')}>Book a workshop</Button>
      </div>
    </React.Fragment>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: isMobile ? '12px 18px' : '14px 28px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <button type="button" onClick={() => go('home')} style={{ display: 'flex', flexShrink: 0, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src={window.__resources?.logoPrimary || "../../assets/logos/atsa-logo-primary.svg"} alt="ATSA" style={{ height: isMobile ? 36 : 42 }} />
        </button>

        {!isMobile && desktopNav}

        {isMobile && (
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}
            style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 10, border: '1px solid var(--border-subtle)', background: '#fff', cursor: 'pointer', color: 'var(--atsa-navy)' }}>
            <window.ATSADesignSystem_6b2905.Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        )}
      </div>

      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', background: '#fff', padding: '8px 14px 16px' }}>
          {D.nav.map((item) => (
            <button key={item} type="button" onClick={() => go(navTarget(item))}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '13px 12px', borderRadius: 10, border: 'none', background: 'transparent', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--atsa-navy)', cursor: 'pointer' }}>
              {item}
            </button>
          ))}
          <button type="button" onClick={goChallenge}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '13px 12px', borderRadius: 10, border: 'none', background: 'transparent', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--atsa-navy)', cursor: 'pointer' }}>
            The 1% Better Challenge
          </button>
          <div style={{ marginTop: 12 }}>
            <Button variant="primary" fullWidth iconRight="arrow-right" onClick={() => go('courses')}>Book a workshop</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ onNavigate, onOpenCourse }) {
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const linkStyle = { color: 'rgba(255,255,255,0.72)', textDecoration: 'none', fontSize: 14, lineHeight: 2, background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' };

  const colBtn = (title, items) => (
    <div>
      <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--atsa-aqua)', margin: '0 0 10px' }}>{title}</p>
      {items.map(([label, onClick]) => <div key={label}><button type="button" onClick={onClick} style={linkStyle}>{label}</button></div>)}
    </div>
  );

  const pdItems = [
    ['Inclusive Practice', () => onOpenCourse('inclusive-practice')],
    ['Teaching Neurodivergent Learners', () => onOpenCourse('teaching-neurodivergent')],
    ['Water Safety Education', () => onOpenCourse('water-safety-education')],
    ['Program Leadership', () => onOpenCourse('program-leadership')],
  ];
  const atsaItems = [
    ['About ATSA', () => onNavigate('about')],
    ['For swim schools', () => onNavigate('courses')],
    ['Consulting & advisory', () => onNavigate('contact')],
    ['Contact', () => onNavigate('contact')],
  ];

  return (
    <footer style={{ background: 'var(--atsa-navy)', color: '#fff', marginTop: 0 }}>
      <div style={{ background: 'var(--atsa-navy-deep)', textAlign: 'center', padding: '13px 20px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, letterSpacing: '0.01em', color: 'rgba(255,255,255,0.9)' }}>
        Raising the standard in aquatic education
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '36px 20px 24px' : '48px 28px 28px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr 1fr 1fr', gap: isMobile ? 28 : 36 }}>
        <div>
          <img src={window.__resources?.logoReversed || "../../assets/logos/atsa-logo-reversed.svg"} alt="ATSA" style={{ height: 52, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14.5, color: 'var(--atsa-aqua)', margin: '0 0 12px' }}>Aquatic training &amp; inclusive practice</p>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
            Professional development and consulting for the aquatics industry — grounded in real experience on the pool deck, and inclusive by design.
          </p>
        </div>
        {colBtn('Professional development', pdItems)}
        {colBtn('ATSA', atsaItems)}
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--atsa-aqua)', margin: '0 0 10px' }}>Get in touch</p>
          <div><a href={'tel:' + D.brand.phone.replace(/\s/g, '')} style={linkStyle}>{D.brand.phone}</a></div>
          <div><a href={'mailto:' + D.brand.email} style={{ ...linkStyle, fontSize: 13, wordBreak: 'break-word', display: 'inline-block' }}>{D.brand.email}</a></div>
          <div style={{ ...linkStyle, cursor: 'default' }}>{D.brand.location}</div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 28px', borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
        <span>© 2026 Aquatic Training Solutions Australia</span>
        <span>{D.brand.web}</span>
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
