import { ChipTypes } from '../Chip'
import { DISABLED, ACTIVE, HOVERED, IColors } from './colors'

export const getColors = (
  type: ChipTypes,
  disabled?: boolean,
  hovered?: boolean,
): IColors => {
  if (disabled) return DISABLED[type]
  if (hovered) return HOVERED[type]

  return ACTIVE[type]
}
