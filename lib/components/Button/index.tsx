import type { ButtonProps } from './Button'
import { classConcat } from '../../utils'
import '../../styles/globals.css'
import './Button.css'

export const Button = (props: ButtonProps) => {
  const classes = classConcat(
    'Button',
    props.className,
    props.variant,
    props.variant
  )

  return <button className={classes}>{props.children}</button>
}
