import { Position } from './Alert'

interface ICoords {
  top: string
  bottom: string
  left: string
  right: string
}

interface IPosition {
  visible: ICoords
  invisible: ICoords
}

type ComputeCoords = (position: Position, visible: boolean) => ICoords

type GetTranslate = (position: Position) => string

const TOP_RIGHT: IPosition = {
  visible: {
    top: '20px',
    bottom: '',
    left: '',
    right: '27px',
  },
  invisible: {
    top: '20px',
    bottom: '',
    left: '',
    right: '-100%',
  },
}

const TOP_LEFT: IPosition = {
  visible: { top: '20px', bottom: '', left: '27px', right: '' },
  invisible: {
    top: '20px',
    bottom: '',
    left: '-100%',
    right: '',
  },
}

const TOP: IPosition = {
  visible: { top: '20px', bottom: '', left: '', right: '50%' },
  invisible: { top: '20px', bottom: '', left: '', right: '-100%' },
}

const BOTTOM: IPosition = {
  visible: { top: '', bottom: '20px', left: '', right: '50%' },
  invisible: { top: '', bottom: '20px', left: '', right: '-100%' },
}

const CENTER: IPosition = {
  visible: { top: '50%', bottom: '', left: '', right: '50%' },
  invisible: { top: '50%', bottom: '', left: '', right: '-100%' },
}

export const computeCoords: ComputeCoords = (position, visible) => {
  switch (position) {
    case 'topRight':
      return visible ? TOP_RIGHT.visible : TOP_RIGHT.invisible
    case 'topLeft':
      return visible ? TOP_LEFT.visible : TOP_LEFT.invisible
    case 'top':
      return visible ? TOP.visible : TOP.invisible
    case 'center':
      return visible ? CENTER.visible : CENTER.invisible
    case 'bottom':
      return visible ? BOTTOM.visible : BOTTOM.invisible
    default:
      return visible ? TOP_RIGHT.visible : TOP_RIGHT.invisible
  }
}

export const getTranslate: GetTranslate = position => {
  const horizontalCentered =
    position === 'bottom' || position === 'top' || position === 'center'

  const verticalCentered = position === 'center'

  if (verticalCentered && horizontalCentered)
    return 'translateX(50%) translateY(-50%)'
  if (horizontalCentered) return 'translateX(50%)'
  if (verticalCentered) return 'translateY(-50%)'

  return ''
}
