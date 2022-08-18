import React from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { palette } from '../../utils'

type RenderPasswordEye = (visible: boolean) => React.ReactNode

type ComputeBorderColor = (
  outline?: boolean,
  focused?: boolean,
  error?: boolean,
) => string

export const renderPasswordEye: RenderPasswordEye = visible => {
  return visible ? (
    <EyeOutlined style={{ color: palette.LIGHT_BLUE }} />
  ) : (
    <EyeInvisibleOutlined style={{ color: palette.LIGHT_BLUE }} />
  )
}

export const computeBorderColor: ComputeBorderColor = (
  outline,
  focused,
  error,
) => {
  if (error) return palette.RED
  if (outline && focused) return palette.LIGHT_BLUE_2

  return palette.DARK_BLUE_3
}

export const capitalizeFirstLetter = (
  string: string,
  capitalize?: boolean,
): string =>
  capitalize ? `${string.charAt(0).toUpperCase()}${string.slice(1)}` : string
