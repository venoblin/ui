import '../../styles/globals.css'
import './Link.css'
import { Link as ReactLink } from 'react-router-dom'
import type { LinkProps, LinkVariant } from './Link'
import { classConcat } from '../../utils'

export const Link = ({
  className,
  target,
  variant,
  children,
  to,
  ...rest
}: LinkProps) => {
  const classes = 'Link'
  const variantClass: LinkVariant = variant ? variant : 'default'

  const fullClass = classConcat(classes, className, variantClass)

  if (target && target === '_blank') {
    return (
      <a href={to} target={target} {...rest}>
        {children}
      </a>
    )
  }

  return <ReactLink to={to} className={fullClass} {...rest} />
}
