import '../../styles/globals.css'
import './TextInput.css'
import type { TextInputProps } from './TextInput'
import { classConcat, generateUniqueId } from '../../utils'
import { v4 as uuid } from 'uuid'

export const TextInput = ({
  className,
  type,
  name,
  ...rest
}: TextInputProps) => {
  const fullClass = classConcat('TextInput', className)
  const randomId = uuid()

  return (
    <div>
      <label
        className="hide"
        htmlFor={generateUniqueId(name || randomId, 'TextInput')}
      >
        {name}
      </label>
      <input
        type={type}
        id={generateUniqueId(name || randomId, 'TextInput')}
        name={name}
        className={fullClass}
        {...rest}
      />
    </div>
  )
}
