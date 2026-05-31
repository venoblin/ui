import '../../styles/globals.css'
import './Link.css'
import type { LinkProps, LinkVariant } from './Link'
import { classConcat } from '../../utils'

const Link = (props: LinkProps) => {
  const classes = 'Link'
  const variant: LinkVariant = props.variant ? props.variant : 'default'

  const fullClass = classConcat(classes, props.className, variant)

  return <div className={fullClass}>{props.children}</div>
}

export default Link
