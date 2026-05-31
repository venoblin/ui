import '../../styles/globals.css'
import './Button.css'
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button'
import { classConcat } from '../../utils'

export const Button = (props: ButtonProps) => {
  const classes = 'Button'
  const variant: ButtonVariant = props.variant ? props.variant : 'primary'
  const size: ButtonSize = props.size ? props.size : 'md'

  const fullClass = classConcat(classes, props.className, variant, size)

  return <button className={fullClass}>{props.children}</button>
}
