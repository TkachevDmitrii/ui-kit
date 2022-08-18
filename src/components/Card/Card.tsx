import React from 'react'
import styled from 'styled-components'
import { palette } from '../../utils'

interface CardProps {
  children: React.ReactChild | React.ReactChild[]
  color?: string
  onClick?: () => void
}

const Wrapper = styled.div<Pick<CardProps, 'color'>>`
  box-shadow: inset 0px 1px 1px rgba(47, 46, 65, 0.2);
  padding: 8px 16px;
  background-color: ${({ color }) => color || palette.WHITE};
`

export const Card: React.FC<CardProps> = ({ children, color, onClick }) => (
  <Wrapper color={color} onClick={onClick}>
    {children}
  </Wrapper>
)
