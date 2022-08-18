import React, { useState } from 'react'
import styled from 'styled-components'
import { AccordionItem, CustomItem } from './components'

interface IItem {
  title?: string
  component: React.ReactNode
  customItem?: React.ReactNode
  count?: number
}

interface IAccordionProps {
  items: IItem[]
  multiple?: boolean
  openByDefault?: number[]
  withIcon?: boolean
}

const Wrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
`

const CustomWrapper = styled.div<Pick<IAccordionProps, 'withIcon'>>`
  border-top: ${({ withIcon }) => (withIcon ? '1px solid #f0f0f0' : '0')};
  align-items: baseline;
`

export const Accordion: React.FC<IAccordionProps> = ({
  items,
  multiple,
  openByDefault,
  withIcon,
}) => {
  const [active, setActive] = useState<number[]>(openByDefault || [])
  const ITEM_HEIGHT = 24

  const height = ITEM_HEIGHT * items.length

  return (
    <Wrapper height={height}>
      {items.map((item, index) => {
        const isActive = active.includes(index)
        const setActiveHandler = () =>
          isActive ? setActive([]) : setActive([index])

        const setMultipleActiveHandler = () => {
          const idx = active.findIndex(value => value === index)

          if (idx !== -1) {
            const newActive = active.filter(elem => elem !== active[idx])
            setActive(newActive)
          } else {
            setActive(arr => [...arr, index])
          }
        }

        return item.customItem ? (
          <CustomWrapper withIcon={withIcon}>
            <CustomItem
              key={index}
              active={isActive}
              component={item.component}
              setActive={multiple ? setMultipleActiveHandler : setActiveHandler}
              withIcon={withIcon}
            >
              {item.customItem}
            </CustomItem>
          </CustomWrapper>
        ) : (
          <AccordionItem
            key={index}
            active={isActive}
            component={item.component}
            count={item.count}
            setActive={multiple ? setMultipleActiveHandler : setActiveHandler}
            title={item.title}
          />
        )
      })}
    </Wrapper>
  )
}
