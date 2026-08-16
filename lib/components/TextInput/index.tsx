import '../../styles/globals.css'
import './TextInput.css'
import type { TextInputProps } from './TextInput'
import { classConcat } from '../../utils'

export const TextInput = ({
  className,
  type,
  name,
  ...rest
}: TextInputProps) => {
  const fullClass = classConcat('TextInput', className)

  return (
    <div>
      <label className="hide" htmlFor={`${name}_id`}>
        {name}
      </label>
      <input
        type={type}
        id={`${name}_id`}
        name={name}
        className={fullClass}
        {...rest}
      />
    </div>
  )
}
