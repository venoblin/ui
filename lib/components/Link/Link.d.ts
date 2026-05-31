export type LinkVariant = 'default' | 'inline' | 'muted'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
}
