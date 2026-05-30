import type { ButtonProps } from './Button'
import type { Size, Variant } from '../../types/shared'
import { classConcat } from '../../utils'
import '../../styles/globals.css'
import './Button.css'

export const Button = (props: ButtonProps) => {
  const classes = 'Button'
  const variant: Variant = props.variant ? props.variant : 'primary'
  const size: Size = props.size ? props.size : 'md'

  const fullClass = classConcat(classes, props.className, variant, size)

  return <button className={fullClass}>{props.children}</button>
}
