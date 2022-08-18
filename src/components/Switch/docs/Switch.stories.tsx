import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Switch } from '../Switch'

const SwitchStories = () => {
  return (
    <Switch
      defaultChecked={boolean('defaultChecked', false)}
      disabled={boolean('disabled', false)}
    />
  )
}

export default {
  title: 'Components/Switch',
  decorators: [withKnobs],
}

export { SwitchStories as Switch }
