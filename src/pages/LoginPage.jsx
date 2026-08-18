import { useState } from 'react'
import Brand from '../components/Brand'
import Button from '../components/Button'
import { Icon } from '../components/Icons'

export default function LoginPage({ navigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const submit = (event) => { event.preventDefault(); setSubmitted(true); setTimeout(() => navigate('dashboard'), 650) }
  return <main className="login-page">
    <section className="login-art"><div className="login-brand"><button onClick={() => navigate('home')}><Brand light /></button><p>CENTRAL ELECTRICITY CONTROL BOARD OF INDIA</p></div><div className="login-street"><div className="login-moon"/><div className="login-pole"><div/><i/></div><div className="login-road"/></div><div className="login-quote"><span className="quote-line"/><p>“When we light with intention,<br/>we preserve more than energy.”</p><small>LUMINA PRINCIPLES / 01</small></div><div className="login-geo"><Icon name="map" size={16}/> India National Grid · 23.2599° N, 77.4126° E</div></section>
    <section className="login-panel"><button className="back-link" onClick={() => navigate('home')}>← Back to Lumina</button><div className="login-form-wrap"><div className="login-heading"><span className="secure-icon"><Icon name="shield" size={21}/></span><p className="eyebrow">AUTHORISED ACCESS</p><h1>Welcome back.</h1><p>Sign in to the Lumina command platform.</p></div><form onSubmit={submit}><label>Official email<input type="email" placeholder="name@cecb.gov.in" required/></label><label>Password<span className="password-input"><input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" required/><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="toggle password"><Icon name="eye" size={18}/></button></span></label><div className="form-options"><label className="check-label"><input type="checkbox"/> <span>Keep me signed in</span></label><a href="#">Forgot password?</a></div><Button type="submit" className={submitted ? 'is-loading' : ''}>{submitted ? 'Verifying secure access...' : 'Sign in securely'} <Icon name="arrow" size={17}/></Button></form><div className="sso-divider"><span/> or continue with <span/></div><button className="sso-button"><span className="emblem">▦</span> Government SSO</button><p className="support-copy">Need assistance? <a href="#">Contact platform support</a></p></div><div className="security-note"><Icon name="shield" size={15}/> Protected under CECB digital infrastructure policy</div></section>
  </main>
}
