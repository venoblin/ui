import { LinkProps as RouterLinkProps } from 'react-router-dom'

export type LinkVariant = 'default' | 'inline' | 'muted'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, RouterLinkProps {
  variant?: LinkVariant
}
