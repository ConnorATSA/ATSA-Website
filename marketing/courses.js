// ATSA marketing — Courses listing. Exposes window.Courses.
const NS_COURSES = window.ATSADesignSystem_6b2905;

function Courses({ onOpenCourse }) {
  const { CourseCard, Tabs, Input, Badge, Icon } = NS_COURSES;
  const D = window.ATSA_DATA;
  const isMobile = window.useIsMobile();
  const [cat, setCat] = React.useState('all');
  const [q, setQ] = React.useState('');

  const tabs = [{ id: 'all', label: 'All courses', count: D.courses.length }].concat(
    D.categories.map((c) => ({ id: c.catId, label: c.label, icon: c.icon }))
  );
  const list = D.courses.filter((c) =>
    (cat === 'all' || c.catId === cat) &&
    (q === '' || (c.title + c.blurb + c.cat).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div>
      {/* page head */}
      <section style={{ background: 'var(--atsa-cloud)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 20px 30px' : '48px 28px 36px' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--atsa-ocean)', margin: '0 0 10px' }}>Professional development</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: isMobile ? 32 : 42, letterSpacing: '-0.02em', color: 'var(--atsa-navy)', margin: '0 0 12px', lineHeight: 1.1 }}>Workshops &amp; programs</h1>
          <p style={{ fontSize: 17, color: 'var(--atsa-slate)', maxWidth: 560, margin: 0, lineHeight: 1.6 }}>
            Practical professional development for swim teachers, coaches and program managers — with depth in inclusive practice, neurodiversity and water safety.
          </p>
          <div style={{ maxWidth: 420, marginTop: 22 }}>
            <Input icon="search" placeholder="Search workshops…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </section>

      {/* filters + grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '24px 20px 48px' : '28px 28px 64px' }}>
        <div style={{ overflowX: 'auto', paddingBottom: 6, marginBottom: 26 }}>
          <Tabs variant="pills" value={cat} onChange={setCat} items={tabs} />
        </div>
        {list.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--atsa-slate)' }}>
            <Icon name="search" size={32} /><p style={{ marginTop: 12 }}>No workshops match &ldquo;{q}&rdquo;.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 22 }}>
            {list.map((c) => (
              <CourseCard key={c.id} category={c.cat} title={c.title} description={c.blurb} icon={c.icon}
                accent={c.accent} duration={c.duration} level={c.level} price={c.price} accredited={c.accredited}
                ctaLabel="View workshop" onClick={() => onOpenCourse(c.id)} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

window.Courses = Courses;
