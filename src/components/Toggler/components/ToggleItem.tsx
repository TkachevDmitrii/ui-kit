import React from 'react'
import styled from 'styled-components'
import { palette } from '../../../utils'
import { computeColor } from '../utils'

interface ToggleItemProps {
  item: ToggleItem
  active: boolean
  disabled?: boolean
  onClick?: () => void
}

const Item = styled.div<StyledItem>`
  padding: 1px 8px;
  background: ${({ active }) => (active ? palette.LIGHT_BLUE_2 : 'transparent')};
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: ${({ active, disabled }) => computeColor(active, disabled)};
  cursor: pointer;
  margin-right: 7px;
  border-radius: 7px;
  user-select: none;
`

export const ToggleItem: React.FC<ToggleItemProps> = ({
  item,
  active,
  disabled,
  onClick,
}) => {
  return (
    <Item active={active} disabled={disabled} onClick={onClick}>
      {item.label}
      {item.count !== undefined && item.count > 0 && ` (${item.count})`}
    </Item>
  )
}
