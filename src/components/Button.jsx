import { Icon } from './Icons'

export default function Button({ children, variant = 'primary', icon, className = '', ...props }) {
  return <button className={`button button-${variant} ${className}`} {...props}>
    {children}{icon && <Icon name={icon} size={17} />}
  </button>
}
