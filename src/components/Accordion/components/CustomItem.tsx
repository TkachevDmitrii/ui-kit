import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../components'
import { palette } from '../../../utils'

interface ICustomItemProps {
  active: boolean
  withIcon?: boolean
  setActive: () => void
  component: React.ReactNode
}

const Wrapper = styled.div`
  background: ${palette.WHITE};
  padding: 12px 24px;
`

const Header = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;
  user-select: none;
`

const Content = styled.div<Pick<ICustomItemProps, 'active'>>`
  transition: all 0.2s linear;
  display: ${({ active }) => (active ? 'block' : 'none')};
  padding: 12px 0;
`

const Arrow = styled.div<Pick<ICustomItemProps, 'active'>>`
  transform: ${({ active }) => (active ? 'rotate(90deg)' : 'none')};
  transition: all 0.2s linear;
  margin-right: 21px;
`

export const CustomItem: React.FC<ICustomItemProps> = ({
  children,
  active,
  setActive,
  component,
  withIcon = false,
}) => (
  <Wrapper>
    <Header onClick={setActive}>
      {withIcon && (
        <Arrow active={active}>
          <Icon height={14} type='chevron' width={10} />
        </Arrow>
      )}
      {children}
    </Header>
    <Content active={active}>{component}</Content>
  </Wrapper>
)
