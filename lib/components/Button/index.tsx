import type { ButtonProps } from './Button'
import './Button.css'

export const Button = (props: ButtonProps) => {
  return <button className="Button">{props.children}</button>
}
