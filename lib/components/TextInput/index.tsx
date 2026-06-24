import '../../styles/globals.css'
import './TextInput.css'
import type { TextInputProps } from './TextInput'
import { classConcat } from '../../utils'

export const TextInput = ({ className, ...rest }: TextInputProps) => {
  const fullClass = classConcat('TextInput', className)

  return <input className={fullClass} type="text" {...rest} />
}
