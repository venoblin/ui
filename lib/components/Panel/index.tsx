import './Panel.css'
import type { PanelProps } from './Panel'
import { classConcat } from '../../utils'

export const Panel = ({ className, ...rest }: PanelProps) => {
  const fullClass = classConcat('Panel', className)

  return <div className={fullClass} {...rest} />
}
