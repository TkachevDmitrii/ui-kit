import React from 'react'
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs'
import { Button, ButtonTypes, ButtonSize } from '../Button'

const buttonType: ButtonTypes[] = [
  'primary',
  'transparent',
  'gray',
  'error',
  'transparentError',
  'unbordered',
]

const buttonSize: ButtonSize[] = ['S', 'M', 'L']

const ButtonStories = () => (
  <Button
    block={boolean('block', false)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    size={select('size', buttonSize, 'M')}
    type={select('type', buttonType, 'primary')}
  >
    {text('value', 'Button')}
  </Button>
)

export default {
  title: 'Components/Button',
  decorators: [withKnobs],
}

export { ButtonStories as Button }
