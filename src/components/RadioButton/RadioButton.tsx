import React from 'react'
import { Radio } from 'antd'
import styled from 'styled-components'
import { RadioButtonProps } from 'antd/lib/radio/radioButton'
import { palette } from '../../utils'

interface IRadioButtonProps extends RadioButtonProps {
  type?: 'radio' | 'button'
}

const StyledRadio = styled(Radio)`
  & .ant-radio-checked .ant-radio-inner {
    border-color: ${palette.BLUE};
  }
  & .ant-radio-inner::after {
    background: ${palette.BLUE};
  }
`

const StyledRadioButton = styled(Radio.Button)`
  margin-right: 8px;
  height: 32px;
`

export const RadioButton: React.FC<IRadioButtonProps> = ({ type = 'radio', ...props }) => (
  <>
    {type === 'button' ? <StyledRadioButton {...props} /> : <StyledRadio {...props} />}
  </>
)
