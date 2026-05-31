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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
          ></path>
        </svg>
      </a>
    )
  }

  return <ReactLink to={to} className={fullClass} {...rest} />
}
