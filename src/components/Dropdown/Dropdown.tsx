import React from 'react'
import { Dropdown as AntdDropdown, DropDownProps, Menu } from 'antd'
import styled from 'styled-components'
import { Icon } from '../../components'

type OverlayMenuType = { title: string, onClick: () => void }

interface ExtendedDropdownProps extends Omit<DropDownProps, 'overlay'> {
  children?: React.ReactChild,
  isDefaultIcon?: boolean
  overlayMenu: OverlayMenuType[]
}

const MenuText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`

export const Dropdown: React.FC<ExtendedDropdownProps>= ({
  children,
  trigger = ['click'],
  placement = 'bottomRight',
  isDefaultIcon = true,
  overlayMenu,
  ...props
}) => {
  const overlay = (
    <Menu>
      {overlayMenu.map((item, index: number) => (
        <Menu.Item key={index} onClick={item.onClick}>
          <MenuText>{item.title}</MenuText>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <>
      <AntdDropdown
        overlay={overlay}
        placement={placement}
        trigger={trigger}
        {...props}
      >
        <a onClick={e => e.preventDefault()}>
          {isDefaultIcon ? <Icon type='verticalDots' /> : children}
        </a>
      </AntdDropdown>
    </>
  )
}
