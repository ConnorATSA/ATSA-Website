// ATSA unified site — top-level hash router.
// Routes:  #/  -> marketing site   |   #/challenge -> Challenge landing
//          #/challenge/app -> the embedded Challenge check-in app
(function () {
  const { useState, useEffect } = React;

  // Global navigation helper used across all sections.
  window.ATSANav = function (hash) {
    if (location.hash === hash) { window.scrollTo(0, 0); return; }
    location.hash = hash;
    window.scrollTo(0, 0);
  };

  const parse = () => location.hash || '#/';

  function AppBar() {
    const link = { color: '#fff', textDecoration: 'none', opacity: 0.92, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14 };
    return (
      <div className="challenge-appbar">
        <a href="#/" style={link} onClick={(e) => { e.preventDefault(); window.ATSANav('#/'); }}>← ATSA</a>
        <span>The 1% Better Challenge</span>
        <a href="#/challenge" style={link} onClick={(e) => { e.preventDefault(); window.ATSANav('#/challenge'); }}>About</a>
      </div>
    );
  }

  function Root() {
    const [route, setRoute] = useState(parse());
    useEffect(() => {
      const onHash = () => { setRoute(parse()); window.scrollTo(0, 0); };
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);

    if (route.indexOf('#/challenge/app') === 0) {
      return (<div><AppBar /><window.ChallengeApp /></div>);
    }
    if (route.indexOf('#/challenge') === 0) {
      return <window.ChallengeLanding />;
    }
    return <window.MarketingApp />;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
})();
