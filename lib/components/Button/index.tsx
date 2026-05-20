import type { ButtonProps } from './Button'
import './Button.css'

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>
}
