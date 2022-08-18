import { Tag, TagProps } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { getColors } from './utils'

export type ChipTypes = 'primary' | 'transparent'

interface IChipProps {
  type?: ChipTypes
}

type ChipProps = TagProps & IChipProps

const StyledTag = styled(Tag)<{ type: ChipTypes; size?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ type }) => getColors(type).background};
  border-color: ${({ type }) => getColors(type).border};
  border-radius: 10px;
  color: ${({ type }) => getColors(type).color};
  font-size: 14px;
  font-weight: 500;
  padding: 4px 7px;
  .ant-tag-close-icon {
    color: ${({ type }) => getColors(type).color};
    font-weight: 500;
    font-size: 14px;
    margin-left: 8px;
  }
`

export const Chip: React.FC<ChipProps> = ({
  children,
  closable = true,
  onClose,
  onClick,
  type = 'transparent',
  ...props
}) => (
  <StyledTag
    closable={closable}
    type={type}
    onClick={onClick}
    onClose={onClose}
    {...props}
  >
    {children}
  </StyledTag>
)
