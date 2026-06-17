// Unified site: marketing section. Exposes window.MarketingApp.
(function(){

  const NS = window.ATSADesignSystem_6b2905;
  const { Button, Card, Icon } = NS;

  function EnrolModal({ onClose }) {
    return (
      <div className="atsa-modal-overlay" onClick={onClose}>
        <div className="atsa-modal" onClick={(e) => e.stopPropagation()}>
          <Card variant="raised" padding="lg">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 999, background: 'var(--atsa-teal-20)', color: '#0E7D6C' }}>
                <Icon name="check-circle" size={32} />
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, textAlign: 'center', color: 'var(--atsa-navy)', margin: '0 0 8px' }}>You&rsquo;re booked in</h3>
            <p style={{ textAlign: 'center', color: 'var(--atsa-slate)', fontSize: 15, lineHeight: 1.6, margin: '0 0 22px' }}>
              This is a demo booking — in the real site we&rsquo;d email your confirmation, materials and joining details.
            </p>
            <Button variant="primary" fullWidth onClick={onClose}>Back to browsing</Button>
          </Card>
        </div>
      </div>
    );
  }

  function App() {
    const [route, setRoute] = React.useState({ page: 'home', courseId: null });
    const [modal, setModal] = React.useState(false);
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'auto' });
    const go = (page) => { setRoute({ page, courseId: null }); scrollTop(); };
    const openCourse = (courseId) => { setRoute({ page: 'detail', courseId }); scrollTop(); };

    return (
      <div>
        <window.Header onNavigate={go} current={route.page === 'detail' ? 'courses' : route.page} />
        {route.page === 'home' && <window.Home onNavigate={go} onOpenCourse={openCourse} />}
        {route.page === 'courses' && <window.Courses onOpenCourse={openCourse} />}
        {route.page === 'detail' && <window.CourseDetail courseId={route.courseId} onNavigate={go} onOpenCourse={openCourse} onEnrol={() => setModal(true)} />}
        {route.page === 'about' && <window.About onNavigate={go} />}
        {route.page === 'contact' && <window.Contact onNavigate={go} />}
        <window.Footer onNavigate={go} onOpenCourse={openCourse} />
        {modal && <EnrolModal onClose={() => setModal(false)} />}
      </div>
    );
  }
  window.MarketingApp = App;
})();
