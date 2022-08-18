import React from 'react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Alert, Position } from '../Alert'
import { useVisible } from '../../../utils'

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
`

const positionOptions: Position[] = [
  'topRight',
  'topLeft',
  'center',
  'bottom',
  'top',
]

const AlertStories = () => {
  const { visible, show, hide } = useVisible()

  return (
    <>
      <Buttons>
        <button
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={visible ? hide : show}
        >
          {visible ? 'Hide Alert' : 'Show Alert'}
        </button>
      </Buttons>
      <Alert
        confirmation={boolean('confirmation', false)}
        exitAlert={boolean('exitAlert', false)}
        position={select('position', positionOptions, positionOptions[0])}
        visible={visible}
      >
        <p style={{ fontSize: '16px' }}>Simple text inside alert</p>
      </Alert>
      <p>Just some background text...</p>
    </>
  )
}

export default {
  title: 'Components/Alert',
  decorators: [withKnobs],
}

export { AlertStories as Alert }
