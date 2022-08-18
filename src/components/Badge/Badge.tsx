import React from 'react'
import { Badge as AntBadge, BadgeProps } from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'

interface IBadgeProps extends BadgeProps {
  textColor?: string
}

const StyledBadge = styled(AntBadge)<Pick<IBadgeProps, 'color' | 'textColor'>>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;

  .ant-scroll-number-only-unit {
    color: ${({ textColor }) => textColor};
  }
`

export const Badge: React.FC<IBadgeProps> = ({
  count,
  color = palette.BLUE,
  textColor = palette.WHITE,
  children,
  ...props
}) => (
  <StyledBadge
    color={color}
    count={!!count ? count : undefined}
    textColor={textColor}
    {...props}
  >
    {children}
  </StyledBadge>
)
