import React from 'react'
import styled, { css } from 'styled-components'
import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd'
import { palette } from '../../utils'

export type { CheckboxProps } from 'antd'

interface ExtendedCheckboxProps extends CheckboxProps {
  isSingleCheckbox?: boolean
}

const StyledAntdCheckbox = styled(AntdCheckbox)<ExtendedCheckboxProps>`
  ${({ disabled, isSingleCheckbox }) =>
    !disabled &&
    css`
      display: flex;
      align-items: ${isSingleCheckbox ? `baseline` : `center`};

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${palette.LIGHT_BLUE_2};
        border-color: ${palette.LIGHT_BLUE_2};
      }
      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: ${palette.LIGHT_BLUE_2};
      }
      span {
      :last-child {
        line-height: 15px;
        ${
          !isSingleCheckbox &&
          `
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          `
        }
    }
    `}
`

export const Checkbox: React.FC<ExtendedCheckboxProps> = ({
  children,
  onChange,
  disabled = false,
  indeterminate = false,
  isSingleCheckbox = false,
  ...props
}) => {
  return (
    <StyledAntdCheckbox
      disabled={disabled}
      indeterminate={indeterminate}
      isSingleCheckbox={isSingleCheckbox}
      onChange={onChange}
      {...props}
    >
      {children}
    </StyledAntdCheckbox>
  )
}
