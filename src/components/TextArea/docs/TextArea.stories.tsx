import React, { useState } from 'react'
import styled from 'styled-components'
import { text, boolean, withKnobs, number } from '@storybook/addon-knobs'
import { TextArea } from '../TextArea'

const Container = styled.div`
  width: 35%;
  margin: 0 auto;
`

const TextAreaStories = () => {
  const [value, setValue] = useState<string>('')

  return (
    <Container>
      <TextArea
        capitalize={boolean('capitalize', false)}
        clearable={boolean('clearable', true)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', 'Enter something correct')}
        isValid={boolean('isValid', false)}
        label={text('label', 'Enter something')}
        maxLength={number('maxLength', 100)}
        outline={boolean('outline', false)}
        placeholder={text('placeholder', 'Текст')}
        rows={number('rows', 3)}
        smallLabel={boolean('smallLabel', false)}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

export default {
  title: 'Components/TextArea',
  decorators: [withKnobs],
}

export { TextAreaStories as TextArea }
