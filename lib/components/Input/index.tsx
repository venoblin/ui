import '../../styles/globals.css'
import './Input.css'
import type { InputProps } from './Input'
import { classConcat } from '../../utils'

export const Input = ({ className, ...rest }: InputProps) => {
  const fullClass = classConcat('Input', className)

  return <input className={fullClass} {...rest} />
}
