import React, { useState } from 'react'
import styled from 'styled-components'
import {
  text,
  boolean,
  select,
  withKnobs,
  number,
} from '@storybook/addon-knobs'
import { Input } from '../Input'

const inputType: InputType[] = [
  'text',
  'password',
  'search',
  'phone',
  'date',
  'number',
]
const inputHeight: InputHeight[] = ['L', 'S']

const Container = styled.div`
  width: 35%;
  margin: 0 auto;
`

const InputStories = () => {
  const [value, setValue] = useState<string>('')

  return (
    <Container>
      <Input
        capitalize={boolean('capitalize', false)}
        clearable={boolean('clearable', true)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', 'Enter something correct')}
        height={select('height', inputHeight, inputHeight[0])}
        hint={text('hint', '')}
        isValid={boolean('isValid', false)}
        label={text('label', 'Enter something')}
        maxLength={number('maxLength', 100)}
        outline={boolean('outline', false)}
        pattern={text('pattern', '')}
        placeholder={text('placeholder', 'Текст')}
        type={select('type', inputType, inputType[0])}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

export default {
  title: 'Components/Input',
  decorators: [withKnobs],
}

export { InputStories as Input }
