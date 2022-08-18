import React from 'react'
import { Radio, RadioGroupProps } from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'

export interface RadioButtonGroupProps extends RadioGroupProps {
  spacing?: number
  row?: boolean
}

const StyledRadioGroup = styled(Radio.Group)<
  Pick<RadioButtonGroupProps, 'spacing' | 'row'>
>`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};

  .ant-radio-button-wrapper-checked {

    :not(.ant-radio-button-wrapper-disabled) {
      background-color: ${palette.LIGHT_BLUE};
      border: 1px solid ${palette.LIGHT_BLUE_5};
      color: ${palette.DARK};

      :first-child {
        border-right: 1px solid ${palette.LIGHT_BLUE_5};
      }

      :hover {
        background:${palette.LIGHT_BLUE_5};
        border: 1px solid ${palette.LIGHT_BLUE_5};
      }

      :focus-within {
        box-shadow: none;
      }
    }
  }
  
  .ant-radio-button-wrapper {
    border: 1px solid ${palette.LIGHT_BLUE_5};
    border-radius: 7px;
    font-weight: 500;

    :hover {
      color: ${palette.LIGHT_BLUE_5};
    }

    :before {
      content: none;
    }
  }
`

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  defaultValue,
  options,
  onChange,
  spacing,
  row,
  ...props
}) => (
  <StyledRadioGroup
    buttonStyle='solid'
    defaultValue={defaultValue}
    options={options}
    row={row}
    spacing={spacing}
    onChange={onChange}
    {...props}
  />
)
