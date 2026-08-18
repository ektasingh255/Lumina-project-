import { Icon } from './Icons'
export default function StatCard({ icon, label, value, change, tone = 'green' }) {
 return <article className="stat-card"><div className={`stat-icon stat-${tone}`}><Icon name={icon} size={19}/></div><p>{label}</p><h3>{value}</h3><span className={tone === 'amber' ? 'warm' : ''}>{change}</span></article>
}
