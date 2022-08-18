import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Dropdown } from '../Dropdown'
import { Modal } from '../../../components'
import { useVisible } from '../../../utils'

const DropdownStories = () => {
  const { visible, show, hide } = useVisible()
  const overlayMenu = [
    {
      title: 'Показать модальное окно',
      onClick: visible ? hide : show,
    },
    {
      title: 'Изменить',
      onClick: () => {},
    }
  ]

  return (
    <>
      <Dropdown overlayMenu={overlayMenu} />

      <Modal closable visible={visible} onClose={hide}>
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
  title: 'Components/Dropdown',
  decorators: [withKnobs],
}

export { DropdownStories as Dropdown }
