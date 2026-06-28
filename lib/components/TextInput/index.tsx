import '../../styles/globals.css'
import './TextInput.css'
import type { TextInputProps } from './TextInput'
import { classConcat } from '../../utils'

export const TextInput = ({ className, type, ...rest }: TextInputProps) => {
  const fullClass = classConcat('TextInput', className)

  return <input type={type ? type : 'text'} className={fullClass} {...rest} />
}
