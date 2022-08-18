import React from 'react'
import {
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs'
import styled from 'styled-components'
import { palette } from '../../../utils'
import { Icon } from '../Icon'

const typeOptions: IconType[] = [
  'success',
  'home',
  'personnel',
  'question',
  'shield',
  'coins',
  'person',
  'lens',
  'menu',
  'cross',
  'arrow',
  'hint',
  'filter',
  'calendar',
  'hdd',
  'plus',
  'chevron',
  'trash',
  'back',
  'avatar',
  'pencil',
  'triangle',
  'people',
  'location',
  'aim',
  'camera',
  'phone',
  'mail',
  'download',
  'star',
  'metro',
  'marker',
  'vacancies',
  'briefcase',
  'buildings',
  'curve',
  'legalPerson',
  'notification',
  'verticalDots',
  'error',
  'upload',
  'wait',
  'restore',
  'clip',
  'negative',
  'fileSearch',
  'assignment',
  'copy',
  'logout',
  'check',
  'lock',
  'off',
  'roundedCross',
  'pickLeft',
  'messageIsRead',
  'warning',
  'contentCopy',
  'documents',
  'support',
  'staff',
  'customers',
  'sendMessage',
  'ballot',
  'personPin',
]

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IconWrapper = styled.div`
  padding: 15px;
  margin: 5px;
  border: 1px solid black;
`

const IconStories = () => (
  <Wrapper>
    {typeOptions.map(type => (
      <IconWrapper key={type}>
        <Icon
          color={text('color', palette.LIGHT_BLUE_2)}
          height={number('height', 64)}
          hoveredColor={text('hoveredColor', '')}
          interactive={boolean('interactive', false)}
          type={type}
          width={number('width', 64)}
        />
        <p style={{textAlign: 'center'}}>{type}</p>
      </IconWrapper>
    ))}
  </Wrapper>
  )

export default {
  title: 'Components/Icon',
  decorators: [withKnobs],
}

export { IconStories as Icon }
