import React, { useState } from 'react'
import styled from 'styled-components'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { Accordion } from '../Accordion'
import { Button } from '../../Button'
import { palette } from '../../../utils'

interface IMockComponent {
  background?: string
  height?: string
}

const MockComponent = styled.div<IMockComponent>`
  height: ${({ height }) => height || '100px'};
  width: 100%;
  background: ${({ background }) => background || palette.RED_2};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${palette.WHITE};
`

const Container = styled.div`
  margin: 0 auto;
  width: 300px;
`

const HeaderComponent = styled.div`
  width: 100%;
  height: 50px;
  background: orange;
  color: #fff;
  text-align: center;
`

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

const mockComponent1 = (
  <MockComponent height='150px'>First component</MockComponent>
)

const headerComponent = <HeaderComponent>Header</HeaderComponent>

const mockComponent2 = (
  <MockComponent background={palette.LIGHT_BLUE_2}>
    Second component
  </MockComponent>
)

const mockComponent3 = (
  <MockComponent background={palette.DARK} height='30px'>
    Third component
  </MockComponent>
)

const items = [
  { title: 'First', component: mockComponent1, count: 9 },
  { title: 'Second', component: mockComponent2 },
  { title: 'Third', component: mockComponent3, count: 1 },
]

const customItems = [
  { customItem: headerComponent, component: mockComponent1 },
  { customItem: headerComponent, component: mockComponent2 },
  { customItem: headerComponent, component: mockComponent3 },
]

const AccordionStories = () => {
  const [isDefault, setIsDefault] = useState<boolean>(true)

  const accordionItems = isDefault ? items : customItems

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setIsDefault(!isDefault)}>Toggle type</Button>
      </ButtonContainer>
      <Accordion
        items={accordionItems}
        multiple={boolean('multiple', false)}
        openByDefault={[number('openByDefault', 0)]}
        withIcon={boolean('withIcon', false)}
      />
    </Container>
  )
}

export default {
  title: 'Components/Accordion',
  decorators: [withKnobs],
}

export { AccordionStories as Accordion }
