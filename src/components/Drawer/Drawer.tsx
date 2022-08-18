import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { Drawer as AntdDrawer, DrawerProps } from 'antd'
import { palette } from '../../utils'
import { Icon } from '../../components/Icon'

interface ExtendedDrawerProps extends DrawerProps {
  closableOnBackdropClick?: boolean
  fixedHeader?: boolean
  children: React.ReactChild | React.ReactChild[]
  bodyStyle?: CSSProperties
}

const StyledDrawer = styled(AntdDrawer)`
  background: ${palette.BACKDROP_LIGHT};
  backdrop-filter: blur(1px);

  .ant-drawer-body,
  .ant-drawer-content {
    overflow: visible;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-drawer-body {
    @media screen and (max-width: 632px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .ant-drawer-content-wrapper {
    max-width: 600px;
    min-width: 450px;
  }
`

const Close = styled.p<{ fixed?: boolean }>`
  font-weight: 500;
  font-size: 14px;
  color: ${palette.LIGHT_BLUE_2};
  cursor: pointer;
  width: 64px;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};

  @media screen and (max-width: 632px) {
    display: none;
  }
`

const CloseMobile = styled.div`
  display: none;
  @media screen and (max-width: 632px) {
    display: flex;
    justify-content: flex-end;
  }
`

const Container = styled.div`
  @media screen and (max-width: 632px) {
    padding-top: 25px;
  }
`

export const Drawer: React.FC<ExtendedDrawerProps> = ({
  children,
  placement,
  visible,
  width,
  onClose,
  closable,
  closableOnBackdropClick = true,
  zIndex,
  fixedHeader,
  bodyStyle,
  ...props
}) => {
  return (
    <StyledDrawer
      bodyStyle={{ ...bodyStyle, backgroundColor: palette.LIGHT_BLUE_3, overflow: 'scroll' }}
      closable={false}
      placement={placement}
      visible={visible}
      width={width}
      zIndex={zIndex || 10}
      onClose={closableOnBackdropClick ? onClose : () => {}}
      {...props}
    >
      {closable && (
        <>
          <Close fixed={fixedHeader} onClick={onClose}>
            Закрыть
          </Close>
          <CloseMobile>
            <div onClick={onClose}>
              <Icon height={24} type='cross' width={24} />
            </div>
          </CloseMobile>
        </>
      )}
      <Container>{children}</Container>
    </StyledDrawer>
  )
}
