import React from 'react'
import {
  text,
  boolean,
  withKnobs,
  select,
  number,
} from '@storybook/addon-knobs'
import { Chip, ChipTypes } from '../Chip'
import { ChipGroup } from '../ChipGroup'

const chipType: ChipTypes[] = ['primary', 'transparent']

const data = [
  { value: 1, label: 'example' },
  { value: 2, label: 'example' },
  { value: 3, label: 'example' },
]

const ChipStories = () => (
  <Chip
    closable={boolean('closable', true)}
    type={select('type', chipType, 'transparent')}
  >
    {text('value', 'Текст')}
  </Chip>
)

const ChipGroupStories = () => (
  <ChipGroup
    countVisible={number('countVisible', 3)}
    data={data}
    type={select('type', chipType, 'transparent')}
  />
)

export default {
  title: 'Components/Chip',
  subcomponents: { ChipGroup },
  decorators: [withKnobs],
}

export { ChipStories as Chip }
export { ChipGroupStories as ChipGroup }
