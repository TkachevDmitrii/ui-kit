import React from 'react'
import styled from 'styled-components'
import { palette } from '../../utils'

interface StepperProps {
  steps: number
  currentStep: number
  stepWidth?: number
}

type StepStyledProps = Pick<StepperProps, 'stepWidth'> & { current: boolean }

const Title = styled.p`
  user-select: none;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 20px;
  margin-bottom: 0;
  text-align: center;
`

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Step = styled.div<StepStyledProps>`
  width: ${({ stepWidth }) => (stepWidth ? `${stepWidth}%` : '60px')};
  height: 3px;
  background: ${({ current }) =>
    current ? palette.LIGHT_BLUE_2 : palette.BLUE_OPACITY_2};
  border-radius: 1.5px;
`

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const width = 90 / steps
  const stepsArray = Array(steps).fill(true)

  return (
    <>
      <Title>
        Шаг {currentStep} из {steps}
      </Title>
      <Steps>
        {stepsArray.map((step, index) => (
          <Step
            key={index}
            current={currentStep === index + 1}
            stepWidth={width}
          />
        ))}
      </Steps>
    </>
  )
}
