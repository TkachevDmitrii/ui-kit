import { palette } from '../../../utils'

export interface IColors {
  background: string
  color: string
  border: string
}

interface ITypes {
  primary: IColors
  transparent: IColors
  gray: IColors
  error: IColors
  transparentError: IColors
  unbordered: IColors
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
  gray: {
    background: palette.GRAY_3,
    color: palette.WHITE,
    border: 'transparent',
  },
  error: {
    background: palette.GRAY_3,
    color: palette.WHITE,
    border: 'transparent',
  },
  transparentError: {
    background: 'transparent',
    color: palette.RED_2,
    border: 'transparent',
  },
  unbordered: {
    background: 'transparent',
    color: palette.LIGHT_BLUE_2,
    border: 'transparent',
  },
}

export const ACTIVE: ITypes = {
  primary: {
    background: palette.LIGHT_BLUE_2,
    color: palette.WHITE,
    border: palette.LIGHT_BLUE_2,
  },
  transparent: {
    background: 'transparent',
    color: palette.LIGHT_BLUE_2,
    border: palette.LIGHT_BLUE_2,
  },
  gray: {
    background: 'transparent',
    color: palette.DARK,
    border: palette.GRAY_3,
  },
  error: {
    background: palette.RED,
    color: palette.WHITE,
    border: palette.RED,
  },
  transparentError: {
    background: 'transparent',
    color: palette.RED,
    border: palette.RED,
  },
  unbordered: {
    background: 'transparent',
    color: palette.LIGHT_BLUE_2,
    border: 'transparent',
  },
}

export const HOVERED: ITypes = {
  primary: {
    background: palette.HOVERED_BLUE_2,
    color: palette.WHITE,
    border: palette.HOVERED_BLUE_2,
  },
  transparent: {
    background: palette.HOVERED_BLUE_2,
    color: palette.WHITE,
    border: palette.HOVERED_BLUE_2,
  },
  gray: {
    background: 'transparent',
    color: palette.DARK,
    border: palette.GRAY_3,
  },
  error: {
    background: palette.RED_2,
    color: palette.WHITE,
    border: palette.RED_2,
  },
  transparentError: {
    background: palette.RED_2,
    color: palette.WHITE,
    border: palette.RED_2,
  },
  unbordered: {
    background: 'transparent',
    color: palette.HOVERED_BLUE_2,
    border: 'transparent',
  },
}
