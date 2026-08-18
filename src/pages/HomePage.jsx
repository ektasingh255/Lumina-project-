import { useState } from 'react'
import Brand from '../components/Brand'
import Button from '../components/Button'
import StreetlightScene from '../components/StreetlightScene'
import SectionHeading from '../components/SectionHeading'
import { Icon } from '../components/Icons'

const benefits = [
  { icon: 'bolt', title: 'Adaptive by nature', copy: 'Each pole responds locally to real activity, smoothly moving between a validated safety floor and full brightness.' },
  { icon: 'eye', title: 'Privacy, built in', copy: 'Radar and ambient sensing understand movement, never identity. No cameras. No personal tracking.' },
  { icon: 'shield', title: 'Safe, even offline', copy: 'A local controller preserves safe illumination and manual override when the network is unavailable.' },
]

const workflow = [
  ['01', 'Sense', 'Privacy-safe radar notices movement and ambient conditions.'],
  ['02', 'Anticipate', 'A predictive model prepares nearby poles ahead of demand.'],
  ['03', 'Illuminate', 'Lights ramp smoothly to the right level, in the right place.'],
  ['04', 'Prove', 'Lumina measures every watt saved and every asset event.'],
]

export default function HomePage({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="home-page">
    <header className="site-header">
      <button className="brand-button" onClick={() => navigate('home')} aria-label="Lumina home"><Brand light /></button>
      <nav className={menuOpen ? 'open' : ''}><a href="#solution">Solution</a><a href="#impact">Impact</a><a href="#architecture">Architecture</a></nav>
      <div className="header-actions"><button className="text-link" onClick={() => navigate('login')}>Control centre</button><Button variant="outline" className="header-explore" onClick={() => navigate('dashboard')}>Explore</Button><Button onClick={() => navigate('login')}>Sign in <span className="hide-mobile">to portal</span></Button></div>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span /> INTELLIGENT URBAN INFRASTRUCTURE</p>
        <h1><span className="reveal-word">LUMINA.</span><br/><span className="reveal-word delay-one">Saves Power.</span></h1>
        <p className="hero-subtitle">Lumina is a privacy-first adaptive street-lighting platform that makes every road safer, every watt accountable, and every city brighter by design.</p>
        <div className="hero-actions"><Button onClick={() => navigate('dashboard')} icon="arrow">Explore platform</Button><a className="play-link" href="#solution"><span className="play"><Icon name="arrow" size={14} /></span> See how it works</a></div>
        <div className="hero-trust"><div className="avatar-stack"><span>CE</span><span>IN</span><span>01</span></div><p>Designed for India's<br/><b>public infrastructure.</b></p></div>
      </div>
      <StreetlightScene />
      <div className="hero-bottom"><span>SCROLL TO EXPERIENCE</span><i /><span>01 - 04</span></div>
    </section>

    <section className="intro-section" id="solution">
      <p className="eyebrow">A BETTER STANDARD FOR NIGHT</p>
      <h2>Infrastructure that <em>thinks</em><br/>before it shines.</h2>
      <div className="intro-answer"><p>Fixed schedules waste energy. Blind darkness compromises safety. Lumina puts intelligence at the edge of every pole, giving cities illumination that moves with life itself.</p><a href="#architecture">Discover the system <Icon name="arrow" size={17}/></a></div>
    </section>

    <section className="benefit-section" id="impact">
      <SectionHeading eyebrow="PURPOSE-BUILT FOR PUBLIC GOOD" title="Quietly intelligent. Radically accountable." copy="A complete operating system for the street - engineered around people, policy and measurable impact." />
      <div className="benefit-grid">{benefits.map(({ icon, title, copy }, i) => <article className="benefit-card" key={title}><span className="benefit-no">0{i + 1}</span><div className="benefit-icon"><Icon name={icon} size={23} /></div><h3>{title}</h3><p>{copy}</p><span className="line-arrow"><Icon name="arrow" size={17}/></span></article>)}</div>
    </section>

    <section className="impact-band">
      <div className="impact-title"><p className="eyebrow">MEASURABLE BY DESIGN</p><h2>One city.<br/><em>A thousand</em><br/>better nights.</h2></div>
      <div className="impact-numbers"><Metric value="40%" label="potential energy reduction"/><Metric value="0" label="identity data collected"/><Metric value="24/7" label="asset health visibility"/><Metric value="100%" label="local safety fallback"/></div>
    </section>

    <section className="flow-section" id="architecture">
      <SectionHeading eyebrow="THE LUMINA FLOW" title="A brighter decision, every second." />
      <div className="flow-grid">{workflow.map(([no, title, copy], index) => <article className="flow-step" key={title}><span>{no}</span><div className="flow-icon"><Icon name={['activity','spark','sun','layers'][index]} size={22}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="flow-connector"><i/><i/><i/></div>
    </section>

    <section className="cta-section"><p className="eyebrow">THE CITY DESERVES BETTER LIGHT</p><h2>Ready to see your<br/><em>night, intelligently?</em></h2><Button onClick={() => navigate('login')} icon="arrow">Enter control centre</Button><div className="cta-rays" /></section>
    <footer><Brand/><p>© 2026 Lumina. An intelligent infrastructure initiative.</p><div><a href="#">Privacy</a><a href="#">Contact</a></div></footer>
  </main>
}

function Metric({ value, label }) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div> }
