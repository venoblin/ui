import '../../styles/globals.css'
import './RadioInput.css'
import type { RadioInputProps } from './RadioInput'
import { classConcat } from '../../utils'

export const RadioInput = ({ className }: RadioInputProps) => {
  const fullClass = classConcat('RadioInput', className)

  return (
    <div className={fullClass}>
      <input type="radio" />
    </div>
  )
}
