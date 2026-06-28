export type TextInputType = 'text' | 'email' | 'password'

export interface TextInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  type: TextInputType
}
