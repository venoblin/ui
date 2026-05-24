import type { ButtonProps } from './Button'
import type { Size, Variant } from '../../types/shared'
import { classConcat } from '../../utils'
import '../../styles/master.css'
import '../../styles/globals.css'
import './Button.css'

export const Button = (props: ButtonProps) => {
  const variant: Variant = props.variant ? props.variant : 'primary'
  const size: Size = props.size ? props.size : 'md'

  const classes = classConcat('Button', props.className, variant, size)

  return <button className={classes}>{props.children}</button>
}
