import React from 'react'
import { text, boolean, withKnobs, number, select } from '@storybook/addon-knobs'
import { RadioButton } from '../RadioButton'
import { RadioButtonGroup } from '../RadioButtonGroup'

const radioGroupOptions = [
  { label: 'one', value: 1 },
  { label: 'checked', value: 2 },
  { label: 'three', value: 3 },
]

const radioButtonGroupOptions = [
  { label: 'На подписание', value: 1 },
  { label: 'Подписанные', value: 2 },
  { label: 'Аннулированные', value: 3 },
]

const RadioButtonStories = () => (
  <RadioButton disabled={boolean('disabled', false)} type={select('type', ['button', 'radio'], 'radio')}>
    {text('value', 'Текст')}
  </RadioButton>
)

const RadioGroupStories = () => (
  <RadioButtonGroup
    defaultValue={number('defaultValue', 1)}
    disabled={boolean('disabled', false)}
    options={radioGroupOptions}
    row={boolean('row', false)}
    spacing={number('spacing', 20)}
  />
)

const RadioButtonGroupStories = () => (
  <RadioButtonGroup
    defaultValue={number('defaultValue', 1)}
    disabled={boolean('disabled', false)}
    row
  >
    {radioButtonGroupOptions.map(option => (
      <RadioButton 
        key={option.value}
        type='button'
        value={option.value}
      >
        {option.label}
      </RadioButton>
    ))}
  </RadioButtonGroup>
)

export default {
  title: 'Components/RadioButton',
  subcomponents: { RadioButtonGroup },
  decorators: [withKnobs],
}

export { RadioButtonStories as RadioButton }
export { RadioGroupStories as RadioGroup }
export { RadioButtonGroupStories as RadioButtonGroup }

