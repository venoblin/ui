import type { ButtonProps } from './Button'

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>
}
