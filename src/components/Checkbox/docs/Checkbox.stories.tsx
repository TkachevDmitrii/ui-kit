import React from 'react'
import { text, boolean, withKnobs, number } from '@storybook/addon-knobs'
import { Checkbox } from '../Checkbox'
import { CheckboxGroup } from '../CheckboxGroup'

const options = [
  { label: 'one', value: 1 },
  { label: 'checked', value: 2 },
  { label: 'three', value: 3 },
]

const CheckboxStories = () => (
  <Checkbox
    disabled={boolean('disabled', false)}
    indeterminate={boolean('indeterminate', false)}
    isSingleCheckbox={boolean('isSingleCheckbox', false)}
  >
    {text('value', 'Текст')}
  </Checkbox>
)

const CheckboxGroupStories = () => (
  <CheckboxGroup
    defaultValue={[2]}
    disabled={boolean('disabled', false)}
    options={options}
    row={boolean('row', false)}
    spacing={number('spacing', 20)}
  />
)

export default {
  title: 'Components/Checkbox',
  subcomponents: { CheckboxGroup },
  decorators: [withKnobs],
}

export { CheckboxStories as Checkbox }
export { CheckboxGroupStories as CheckboxGroup }
