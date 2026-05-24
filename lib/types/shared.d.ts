export type Variant = 'primary' | 'secondary' | 'ghost'
export type Size = 'sm' | 'md' | 'lg'

export interface VariantProps {
  variant?: Variant
  size?: Size
}
