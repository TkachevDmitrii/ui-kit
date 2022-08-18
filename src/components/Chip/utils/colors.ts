import { palette } from '../../../utils'

export interface IColors {
  background: string
  color: string
  border: string
}

interface ITypes {
  primary: IColors
  transparent: IColors
}

export const DISABLED: ITypes = {
  primary: {
    background: palette.GRAY_3,
    color: palette.WHITE,
    border: palette.GRAY_3,
  },
  transparent: {
    background: 'transparent',
    color: palette.LIGHT_BLUE_2,
    border: palette.LIGHT_BLUE_2,
  },
}

export const ACTIVE: ITypes = {
  primary: {
    background: palette.BLUE,
    color: palette.WHITE,
    border: palette.BLUE,
  },
  transparent: {
    background: 'transparent',
    color: palette.BLUE,
    border: palette.BLUE,
  },
}

export const HOVERED: ITypes = {
  primary: {
    background: palette.LIGHT_BLUE_2,
    color: palette.WHITE,
    border: palette.LIGHT_BLUE_2,
  },
  transparent: {
    background: palette.LIGHT_BLUE_2,
    color: palette.WHITE,
    border: palette.LIGHT_BLUE_2,
  },
}
