import React from 'react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { Toggler } from '../Toggler'

const items: ToggleItem[] = [
  {
    label: 'Пункт 1',
    value: 1,
  },
  { label: 'Пункт 2', disabled: true, count: 2, value: 2 },
  { label: 'Пункт 3', count: 4, value: 3 },
]

const values = items.map(item => item.value)

const TogglerStories = () => {
  return <Toggler options={items} value={select('value', values, values[0])} />
}

export default {
  title: 'Components/Toggler',
  decorators: [withKnobs],
}

export { TogglerStories as Toggler }
