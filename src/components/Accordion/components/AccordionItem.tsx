import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../components'
import { palette } from '../../../utils'

interface IAccordionItemProps {
  title?: string
  active: boolean
  setActive: () => void
  component: React.ReactNode
  count?: number
}

const Wrapper = styled.div<Pick<IAccordionItemProps, 'active'>>`
  padding-bottom: ${({ active }) => (active ? '0' : '15px')};
`

const Title = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;
  user-select: none;
`

const Arrow = styled.div<Pick<IAccordionItemProps, 'active'>>`
  transform: ${({ active }) => (active ? 'rotate(90deg)' : 'none')};
  transition: all 0.2s linear;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-left: 16px;
  margin-bottom: 15px;
`

const Content = styled.div<Pick<IAccordionItemProps, 'active'>>`
  transition: all 0.2s linear;
  display: ${({ active }) => (active ? 'block' : 'none')};
  padding-bottom: 33px;
`

const Badge = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${palette.BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.WHITE};
  font-weight: 500;
  font-size: 12px;
  margin-left: 8px;
`

export const AccordionItem: React.FC<IAccordionItemProps> = ({
  title,
  active,
  setActive,
  component,
  count,
}) => (
  <Wrapper active={active}>
    <Title onClick={setActive}>
      <Arrow active={active}>
        <Icon type='triangle' />
      </Arrow>
      <Text>{title}</Text>
      {!active && Boolean(count) && <Badge>{count}</Badge>}
    </Title>
    <Content active={active}>{component}</Content>
  </Wrapper>
)
