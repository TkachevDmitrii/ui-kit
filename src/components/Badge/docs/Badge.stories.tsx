import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Badge } from '../Badge'
import { palette } from '../../../utils'

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${palette.RED};
`

const BadgeStories: React.FC = () => (
  <Badge
    color={text('color', palette.BLUE)}
    count={2}
    textColor={text('textColor', palette.WHITE)}
  >
    <Square />
  </Badge>
)

export default {
  title: 'Components/Badge',
  decorators: [withKnobs],
}

export { BadgeStories as Badge }
