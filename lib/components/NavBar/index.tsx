import './NavBar.css'
import type { NavBarProps } from './NavBar'
import { classConcat } from '../../utils'

export const NavBar = ({ isFloating, className, ...rest }: NavBarProps) => {
  const fullClass = classConcat(
    'NavBar',
    className,
    isFloating ? 'floating' : null
  )

  return <nav className={fullClass} {...rest} />
}
