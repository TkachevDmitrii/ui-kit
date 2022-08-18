import React from 'react'
import styled from 'styled-components'
import { Chip, ChipTypes } from './Chip'

interface IChipGroupProps {
  data: Item[]
  closable?: boolean
  onChange?: (e: TabValue) => void
  type?: ChipTypes
  countVisible?: number
}

const ChipGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ChipWrapper = styled.div`
  margin-top: 10px;
`

export const ChipGroup: React.FC<IChipGroupProps> = ({
  data,
  closable,
  onChange,
  type = 'transparent',
  countVisible,
}) => {
  const handleClick = (value: TabValue) => {
    onChange && onChange(value)
  }

  const items = Boolean(countVisible) ? data.slice(0, countVisible) : data

  return (
    <ChipGroupWrapper>
      {items.map(({ label, value }) => (
        <ChipWrapper key={value}>
          <Chip
            closable={closable}
            type={type}
            onClose={() => handleClick(value)}
          >
            {label}
          </Chip>
        </ChipWrapper>
      ))}
    </ChipGroupWrapper>
  )
}
