import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Card } from '../Card'

const CardStories = () => (
  <Card color={text('color', '')}>
    <p style={{ margin: 0 }}>Card content</p>
  </Card>
)

export default {
  title: 'Components/Card',
  decorators: [withKnobs],
}

export { CardStories as Card }
