import React, { useState } from 'react'
import styled from 'styled-components'
import { Switch as AntdSwitch, SwitchProps } from 'antd'
import { SwitchChangeEventHandler } from 'antd/lib/switch'
import { palette } from '../../utils'

type SpecifiedSwitchProps = Pick<
  SwitchProps,
  'disabled' | 'defaultChecked' | 'onChange'
>

const StyledSwitch = styled(AntdSwitch)`
  &.ant-switch-checked {
    background-color: ${palette.LIGHT_BLUE_2};
  }
`

export const Switch: React.FC<SpecifiedSwitchProps> = ({
  disabled = false,
  defaultChecked = false,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(false || defaultChecked)
  const handeChange = (e: MouseEvent, onChange?: SwitchChangeEventHandler) => {
    onChange && e && onChange(checked, e)
    setChecked(!checked)
  }

  return (
    <StyledSwitch
      checked={checked}
      disabled={disabled}
      onChange={(checked, e: MouseEvent) => handeChange(e, onChange)}
      {...props}
    />
  )
}
