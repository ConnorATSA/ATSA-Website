// ATSA · 1% Better Challenge — Onboarding (welcome + sign-up). window.Onboarding
function Onboarding({ onDone }) {
  const { Button, Input, Card, Checkbox, Switch, Icon } = window.ATSADesignSystem_6b2905;
  const C = window.CHALLENGE;
  const [step, setStep] = React.useState('welcome');
  const [form, setForm] = React.useState({ name: '', email: '', school: '', reminders: 'daily', consent: false });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const canBegin = form.name.trim() && form.email.trim() && form.consent;

  const begin = () => {
    window.ChallengeStore.signUp({ name: form.name.trim(), email: form.email.trim(), school: form.school.trim() });
    window.ChallengeStore.updateSettings({ reminders: form.reminders });
    onDone();
  };

  if (step === 'welcome') {
    return (
      <div style={{ minHeight: '100%', background: 'var(--atsa-navy)', color: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: -120, bottom: -80, width: 560, opacity: 0.1 }} fill="none" stroke="#fff" strokeWidth="3">
          {[0,1,2,3,4,5].map((i)=>(<path key={i} d={`M-20 ${180+i*70} q 80 -42 160 0 t 160 0 t 160 0 t 160 0 t 160 0`} strokeLinecap="round"/>))}
        </svg>
        <div style={{ position: 'relative', padding: '56px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <img src={window.__resources?.logoIcon || "../../assets/logos/atsa-icon.svg"} alt="ATSA" style={{ width: 64, height: 64, marginBottom: 28 }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', padding: '6px 13px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--atsa-aqua)', marginBottom: 20 }}>
            A 100-day teaching challenge
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 44, lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0 }}>
            The 1% Better<br/>Challenge
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', margin: '18px 0 0', maxWidth: 420 }}>
            {C.meta.subtitle}
          </p>
          <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-lg)', padding: '16px 18px', margin: '28px 0 0', display: 'flex', gap: 13, alignItems: 'flex-start' }}>
            <Icon name="info" size={20} style={{ color: 'var(--atsa-aqua)', flexShrink: 0, marginTop: 1 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.86)' }}>{C.meta.mathsNote}</p>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={() => setStep('signup')}>Start the challenge</Button>
            <button onClick={() => { window.ChallengeStore.signUp({ name: 'Mia Tran', email: 'mia@example.com', school: 'Toowoomba Swim Co.' }); window.ChallengeStore.seedDemo(34); onDone(); }}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 8 }}>
              Explore a demo account →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // sign-up form
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '24px 24px 10px' }}>
        <button onClick={() => setStep('welcome')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'var(--atsa-ocean)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0 }}>
          <Icon name="chevron-left" size={16} /> Back
        </button>
      </div>
      <div style={{ padding: '4px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, color: 'var(--atsa-navy)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Create your account</h2>
        <p style={{ fontSize: 15, color: 'var(--atsa-slate)', margin: '0 0 24px', lineHeight: 1.5 }}>Just the basics — checking in each day takes one tap.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Your name" placeholder="e.g. Mia Tran" value={form.name} onChange={(e) => set('name', e.target.value)} required />
          <Input label="Email" type="email" icon="mail" placeholder="you@example.com" value={form.email} onChange={(e) => set('email', e.target.value)} required />
          <Input label="Swim school / team" placeholder="e.g. Toowoomba Swim Co." hint="Optional — lets you join your team later." value={form.school} onChange={(e) => set('school', e.target.value)} />
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'var(--atsa-navy)', marginBottom: 8 }}>Reminders</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['daily','Daily nudge'],['weekly','Weekly'],['off','None']].map(([v,l]) => (
                <button key={v} onClick={() => set('reminders', v)} style={{
                  flex: 1, padding: '10px 8px', borderRadius: 10, cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13.5,
                  border: '1.5px solid ' + (form.reminders === v ? 'var(--atsa-ocean)' : 'var(--border-default)'),
                  background: form.reminders === v ? 'var(--atsa-aqua-20)' : '#fff',
                  color: form.reminders === v ? 'var(--atsa-navy)' : 'var(--atsa-slate)',
                }}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--atsa-cloud)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
            <Checkbox checked={form.consent} onChange={(e) => set('consent', e.target.checked)}
              label="I agree to take part"
              description="We store your name, email and reflections to run the challenge. You can export or delete your data anytime." />
          </div>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 24 }}>
          <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" disabled={!canBegin} onClick={begin}>Begin Day 1</Button>
        </div>
      </div>
    </div>
  );
}
window.Onboarding = Onboarding;
