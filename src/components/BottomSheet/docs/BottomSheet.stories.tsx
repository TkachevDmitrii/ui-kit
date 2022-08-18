import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { BottomSheet } from '../BottomSheet'
import { useVisible } from '../../../utils'

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
`

const BottomSheetStories = () => {
  const { visible, show, hide } = useVisible()

  return (
    <>
      <Buttons>
        {!visible && (
          <button
            style={{ width: '200px', cursor: 'pointer' }}
            onClick={visible ? hide : show}
          >
            Show Bottom Sheet
          </button>
        )}
      </Buttons>
      <BottomSheet
        hideOnOverlayClick={boolean('hideOnOverlayClick', true)}
        visible={visible}
        onClose={hide}
      >
        Any children
      </BottomSheet>
    </>
  )
}

export default {
  title: 'Components/BottomSheet',
  decorators: [withKnobs],
}

export { BottomSheetStories as BottomSheet }
