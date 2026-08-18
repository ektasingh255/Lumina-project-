import { useEffect, useRef, useState } from 'react'
import cityStreetlights from '../assets/lumina-indian-city-hero.png'

export default function StreetlightScene() {
  const sceneRef = useRef(null)
  const [intensity, setIntensity] = useState(14)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => setIntensity(Math.min(100, 18 + window.scrollY / 5.7))
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMove = (event) => {
    const rect = sceneRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    const nearHeroLight = Math.abs(x - 79) < 14 && y < 56
    setActive(nearHeroLight)
    setIntensity(nearHeroLight ? 100 : Math.max(18, Math.min(80, 90 - Math.abs(x - 79) * 2.5)))
  }

  const glowProgress = intensity / 100
  return <div className="scene city-scene" style={{ '--city-street': `url(${cityStreetlights})`, '--light-opacity': .18 + glowProgress * .72, '--light-scale': 1 + glowProgress * .2, '--light-blur': `${10 - glowProgress * 8}px` }} ref={sceneRef} onPointerMove={handleMove} onPointerLeave={() => { setActive(false); setIntensity(Math.max(18, Math.min(100, 18 + window.scrollY / 5.7))) }}>
    <div className="scene-grid" />
    <div className="city-tint" />
    <div className={`interactive-light ${active ? 'is-active' : ''}`} />
    <div className="scene-label"><span className="pulse-dot" /> Live adaptive response</div>
    <div className="brightness-readout"><span>Adaptive luminosity</span><strong>{Math.round(intensity)}%</strong><i><b style={{ width: `${intensity}%` }} /></i></div>
    <p className="scene-hint">Move across the light to activate it</p>
  </div>
}
