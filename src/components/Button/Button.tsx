import React from 'react'
import styled from 'styled-components'
import { CircleSpinner } from 'react-spinners-kit'
import { getColors, HEIGHTS, PADDINGS } from './utils'

export type ButtonTypes =
  | 'primary'
  | 'transparent'
  | 'unbordered'
  | 'gray'
  | 'error'
  | 'transparentError'

export type ButtonSize = 'S' | 'M' | 'L'

export type ButtonProps = {
  children: React.ReactNode
  size?: ButtonSize
  type?: ButtonTypes
  disabled?: boolean
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  block?: boolean
  className?: string
}

type StyledButtonProps = {
  $loading?: boolean
  variant: ButtonTypes
  size: ButtonSize
  block?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  outline: none;
  border: ${({ disabled, variant }) =>
    `1px solid ${getColors(variant, disabled).border}`};
  width: ${({ block }) => (block ? '100%' : 'auto')};
  background-color: ${({ disabled, variant }) =>
    getColors(variant, disabled).background};
  border-radius: 7px;
  padding: ${({ size }) => `0 ${PADDINGS[size]}`};
  color: ${({ disabled, variant }) => getColors(variant, disabled).color};
  font-family: Montserrat;
  font-style: normal;
  font-weight: ${({ size }) => (size === 'S' ? 500 : 600)};
  height: ${({ size }) => HEIGHTS[size]};
  font-size: ${({ size }) => (size === 'L' ? '16px' : '14px')};
  line-height: 16px;
  justify-content: center;
  text-align: center;
  user-select: none;
  :hover {
    background-color: ${({ disabled, variant }) =>
      getColors(variant, disabled, true).background};
    cursor: pointer;
    color: ${({ disabled, variant }) =>
      getColors(variant, disabled, true).color};
    border-color: ${({ disabled, variant }) =>
      getColors(variant, disabled, true).border};
  }
`

const AlignedLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Button = ({
  children,
  type = 'primary',
  size = 'M',
  disabled = false,
  loading = false,
  onClick,
  block = true,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      $loading={loading}
      block={block}
      className={className}
      disabled={disabled}
      size={size}
      variant={type}
      onClick={disabled ? undefined : onClick}
    >
      {loading ? (
        <AlignedLoader>
          <CircleSpinner color={'white'} size={16} />
        </AlignedLoader>
      ) : (
        children
      )}
    </StyledButton>
  )
}
