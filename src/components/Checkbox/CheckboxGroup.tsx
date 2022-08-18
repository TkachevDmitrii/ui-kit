import React from 'react'
import styled, { css } from 'styled-components'
import { Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { palette } from '../../utils'

export type CheckboxGroupProps = React.ComponentProps<typeof Checkbox.Group> & {
  row?: boolean
  spacing?: number
  value?: CheckboxValueType[]
}

type StyledCheckboxGroupProps = Omit<CheckboxGroupProps, 'row'> & {
  $row?: boolean
}

const StyledAntdCheckbox = styled(Checkbox.Group)<StyledCheckboxGroupProps>`
  display: flex;
  flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};

  ${({ disabled }) =>
    !disabled &&
    css`
      .ant-checkbox {
        top: 0;
      }
      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${palette.LIGHT_BLUE_2};
        border-color: ${palette.LIGHT_BLUE_2};
      }
      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: ${palette.LIGHT_BLUE_2};
      }
    `}

  ${({ $row, spacing }) =>
    $row
      ? css`
          .ant-checkbox-group-item {
            margin-right: ${spacing}px;
            display: flex;
            align-items: center;
            span {
              :last-child {
                line-height: 15px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            }
          }
          & :last-child {
            margin-right: 0;
          }
        `
      : css`
          .ant-checkbox-group-item {
            margin-bottom: ${spacing}px;
            display: flex;
            align-items: center;
            span {
              :last-child {
                line-height: 15px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            }
          }
          & :last-child {
            margin-bottom: 0;
          }
        `}
`

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  onChange,
  disabled = false,
  name,
  options,
  defaultValue,
  value,
  className,
  row = false,
  spacing = 0,
  ...props
}) => {
  return (
    <StyledAntdCheckbox
      $row={row}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      options={options}
      spacing={spacing}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}
