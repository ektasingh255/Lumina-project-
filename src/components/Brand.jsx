import { Icon } from './Icons'

export default function Brand({ light = false, compact = false }) {
  return <div className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`}>
    <span className="brand-mark"><Icon name="bolt" size={compact ? 15 : 18} stroke={2.5} /></span>
    <span>LUMINA</span>
  </div>
}
