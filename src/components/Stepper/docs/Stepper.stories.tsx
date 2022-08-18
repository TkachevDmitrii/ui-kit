import React from 'react'
import { number, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Stepper } from '../Stepper'

const Container = styled.div`
  width: 40%;
`

const StepperStories = () => (
  <Container>
    <Stepper currentStep={number('current', 1)} steps={number('steps', 6)} />
  </Container>
)

export default {
  title: 'Components/Stepper',
  decorators: [withKnobs],
}

export { StepperStories as Stepper }
