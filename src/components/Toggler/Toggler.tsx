import React, { useState } from 'react'
import styled from 'styled-components'
import { ToggleItem } from './components'

interface TogglerProps {
  options: ToggleItem[]
  value?: TabValue
  className?: string
  onChange?: (value: TabValue) => void
}

const Wrapper = styled.div`
  display: flex;
`

export const Toggler: React.FC<TogglerProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  const [selected, setSelected] = useState<TabValue>(value || options[0].value)

  const handleClick = ({
    disabled,
    value,
  }: Pick<ToggleItem, 'disabled' | 'value'>): void => {
    if (disabled) return
    onChange && onChange(value)
    setSelected(value)
  }

  return (
    <Wrapper className={className}>
      {options.map((item, index) => (
        <ToggleItem
          key={index}
          active={item.value === selected}
          disabled={item.disabled}
          item={item}
          onClick={() => handleClick(item)}
        />
      ))}
    </Wrapper>
  )
}
