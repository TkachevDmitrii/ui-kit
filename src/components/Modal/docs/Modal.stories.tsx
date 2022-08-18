import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Modal } from '../Modal'
import { useVisible } from '../../../utils'

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
`

const ModalStories = () => {
  const { visible, show, hide } = useVisible()

  return (
    <>
      <Buttons>
        <button
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={visible ? hide : show}
        >
          {visible ? 'Hide Modal' : 'Show Modal'}
        </button>
      </Buttons>
      <p>Just some background text...</p>
      <Modal 
        border={boolean('border', false)}
        closable={boolean('closable', false)}
        visible={visible}
        onClose={hide}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          laboriosam reiciendis alias sapiente earum est, debitis quidem libero
          iure sequi labore laudantium cumque autem ipsa, minima deleniti
          placeat culpa repellendus adipisci consequatur aperiam maiores
          officiis ut. Culpa, omnis nemo? Beatae incidunt cumque vero, autem
          explicabo nihil perferendis itaque rerum cum, rem laudantium
          blanditiis dignissimos voluptatem tempore perspiciatis aperiam ratione
          commodi! Fugiat doloribus, nobis ad aliquam iste provident voluptatem
          asperiores in, sed ab fuga saepe quasi minima reprehenderit, quas
          rerum quia! Maxime iure neque, architecto rerum sapiente asperiores
          officia reiciendis expedita nulla deserunt! Totam iure, accusamus
          reiciendis debitis fugiat nesciunt repudiandae.
        </p>
      </Modal>
    </>
  )
}

export default {
  title: 'Components/Modal',
  decorators: [withKnobs],
}

export { ModalStories as Modal }
