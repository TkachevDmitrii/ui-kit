import { palette } from '../../utils'

export const computeColor = (active?: boolean, disabled?: boolean): string => {
  if (active) return palette.WHITE

  return disabled ? palette.DARK_BLUE_3 : palette.LIGHT_BLUE_2
}
