import '../../styles/globals.css'
import './RadioInput.css'
import type { RadioInputProps } from './RadioInput'
import { classConcat, generateUniqueId } from '../../utils'

export const RadioInput = ({
  className,
  name,
  values,
  ...rest
}: RadioInputProps) => {
  const fullClass = classConcat('RadioInput', className)

  return (
    <div className={fullClass} {...rest}>
      {values.length > 0 &&
        values.map((value) => (
          <div key={generateUniqueId(value, 'RadioInput')}>
            <input
              type="radio"
              name={name}
              id={generateUniqueId(value, 'RadioInput')}
              value={value}
            />
            <label htmlFor={generateUniqueId(value, 'RadioInput')}>
              {value}
            </label>
          </div>
        ))}
    </div>
  )
}
