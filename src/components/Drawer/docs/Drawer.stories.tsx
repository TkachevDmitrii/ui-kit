import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Drawer } from '../Drawer'
import { useVisible } from '../../../utils'

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
`

const DrawerStories = () => {
  const { visible, show, hide } = useVisible()

  return (
    <>
      <Buttons>
        <button
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={visible ? hide : show}
        >
          {visible ? 'Hide Drawer' : 'Show Drawer'}
        </button>
      </Buttons>
      <p>Just some background text...</p>
      <Drawer
        closable={boolean('closable', true)}
        closableOnBackdropClick={boolean('closableOnBackdropClick', false)}
        fixedHeader={boolean('fixedHeader', false)}
        visible={visible}
        width={text('width', '35%')}
        onClose={hide}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero
          nihil blanditiis nam? Tempore eius quod obcaecati est cum quae fugiat
          officiis, laudantium ab aperiam autem consequuntur esse dolorem natus
          placeat quas recusandae vero, culpa vel eos ipsam? Aliquid deleniti
          nulla sunt. Voluptatum ut sunt animi accusantium quis? Sint, soluta
          eaque quas saepe incidunt quae pariatur facilis optio illum temporibus
          blanditiis, dolores numquam ratione! Voluptate numquam assumenda rem
          perspiciatis, eveniet voluptatum blanditiis. Vero quia cum ab ex ad
          quam excepturi omnis, corporis fugiat temporibus accusamus dolores
          nobis illum? Quos, aspernatur facere. Ullam odio labore consequuntur.
          Fugiat vitae est quisquam consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero
          nihil blanditiis nam? Tempore eius quod obcaecati est cum quae fugiat
          officiis, laudantium ab aperiam autem consequuntur esse dolorem natus
          placeat quas recusandae vero, culpa vel eos ipsam? Aliquid deleniti
          nulla sunt. Voluptatum ut sunt animi accusantium quis? Sint, soluta
          eaque quas saepe incidunt quae pariatur facilis optio illum temporibus
          blanditiis, dolores numquam ratione! Voluptate numquam assumenda rem
          perspiciatis, eveniet voluptatum blanditiis. Vero quia cum ab ex ad
          quam excepturi omnis, corporis fugiat temporibus accusamus dolores
          nobis illum? Quos, aspernatur facere. Ullam odio labore consequuntur.
          Fugiat vitae est quisquam consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero
          nihil blanditiis nam? Tempore eius quod obcaecati est cum quae fugiat
          officiis, laudantium ab aperiam autem consequuntur esse dolorem natus
          placeat quas recusandae vero, culpa vel eos ipsam? Aliquid deleniti
          nulla sunt. Voluptatum ut sunt animi accusantium quis? Sint, soluta
          eaque quas saepe incidunt quae pariatur facilis optio illum temporibus
          blanditiis, dolores numquam ratione! Voluptate numquam assumenda rem
          perspiciatis, eveniet voluptatum blanditiis. Vero quia cum ab ex ad
          quam excepturi omnis, corporis fugiat temporibus accusamus dolores
          nobis illum? Quos, aspernatur facere. Ullam odio labore consequuntur.
          Fugiat vitae est quisquam consectetur.
        </p>
      </Drawer>
    </>
  )
}

export default {
  title: 'Components/Drawer',
  decorators: [withKnobs],
}

export { DrawerStories as Drawer }
