import React, { useState } from 'react'
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs'
import styled from 'styled-components'
import { AutoComplete } from '../AutoComplete'

const inputHeight: InputHeight[] = ['S', 'L']

const Wrapper = styled.div`
  width: 400px;
`
const Marker = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`

const options = [
  { value: 1, label: 'apple', marker: <Marker color='red' /> },
  { value: 2, label: 'banana', marker: <Marker color='orange' /> },
  { value: 3, label: 'pear' },
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
]

const AutoCompleteStories: React.FC = () => {
  const [value, setValue] = useState<string>('')

  return (
    <Wrapper>
      <AutoComplete
        capitalize={boolean('capitalize', false)}
        clearable={boolean('clearable', true)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', 'Error')}
        height={select('height', inputHeight, inputHeight[0])}
        hint={text('hint', '')}
        isValid={boolean('isValid', false)}
        label={text('label', 'Autocomplete')}
        maxLength={number('maxLength', 100)}
        options={options}
        outline={boolean('outline', true)}
        placeholder={text('placeholder', 'Текст')}
        value={value}
        onChange={setValue}
      />
    </Wrapper>
  )
}

export default {
  title: 'Components/AutoComplete',
  decorators: [withKnobs],
}

export { AutoCompleteStories as AutoComplete }
