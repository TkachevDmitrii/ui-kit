import React, { useEffect, useState } from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Tag } from 'antd'
import { Select } from '../Select'

const Wrapper = styled.div`
  width: 400px;
`
const Marker = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color};
`

const modeOptions: string[] = ['multiple', 'single']

const options = [
  { value: 1, label: '', marker: <Marker color='red' />, tag: <Tag color='blue'>Apple</Tag> },
  { value: 2, label: '', marker: <Marker color='orange' />, tag: <Tag>Banana</Tag>},
  { value: 3, label: '', tag: <Tag color='orange'>Pear</Tag> },
  { value: 4, label: 'shmear' },
  { value: 5, label: 'car' },
  { value: 6, label: 'bus', marker: <Marker color='blue' /> },
  { value: 7, label: 'plain', marker: <Marker color='yellow' /> },
  { value: 8, label: 'summer', marker: <Marker color='black' /> },
  { value: 9, label: 'spring' },
  { value: 10, label: 'winter' },
  { value: 11, label: 'autumn', marker: <Marker color='green' /> },
  { value: 12, label: 'monday', marker: <Marker color='pink' /> },
  { value: 13, label: 'tuesday', marker: <Marker color='gray' /> },
  { value: 14, label: 'wednesday' },
  { value: 15, label: 'thursday' },
  {
    value: 16,
    label: 'very long menu item name with marker',
    marker: <Marker color='red' />,
  },
  {
    value: 17,
    label:
      'very long menu item name with marker to test tooltip in Label component',
    marker: <Marker color='red' />,
  },
]

const SelectStories: React.FC = () => {
  const [value, setValue] = useState<TabValue[]>([])

  useEffect(() => {
    setTimeout(() => setValue([1]), 1000)
  }, [])

  return (
    <Wrapper>
      <Select
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', 'Some error message')}
        isValid={boolean('isValid', true)}
        label={text('label', 'Multiple select')}
        loading={boolean('loading', false)}
        mode={select('mode', modeOptions, modeOptions[0])}
        options={options}
        value={value}
        onChange={_e => {
          setValue(_e)
        }}
      />
    </Wrapper>
  )
}

export default {
  title: 'Components/Select',
  decorators: [withKnobs],
}

export { SelectStories as Select }
