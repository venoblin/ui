import '../../styles/globals.css'
import './Button.css'
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button'
import { classConcat } from '../../utils'

export const Button = ({ className, variant, size, ...rest }: ButtonProps) => {
  const classes = 'Button'
  const variantClass: ButtonVariant = variant ? variant : 'primary'
  const sizeClass: ButtonSize = size ? size : 'md'

  const fullClass = classConcat(classes, className, variantClass, sizeClass)

  return <button className={fullClass} {...rest} />
}
