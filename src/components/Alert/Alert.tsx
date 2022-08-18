import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { palette } from '../../utils'
import { computeCoords, getTranslate } from './utils'

export type Position = 'topRight' | 'topLeft' | 'center' | 'bottom' | 'top'

interface AlertProps {
  children: React.ReactChild | React.ReactChild[]
  visible: boolean
  confirmation?: boolean
  yesHandler?: () => void
  noHandler?: () => void
  position?: Position
  exitAlert?: boolean
}

type ModaStylesType = Pick<AlertProps, 'visible'> & { position: Position }

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  backdrop-filter: blur(3px);
`

const Modal = styled.div<ModaStylesType>`
  position: fixed;
  width: max-content;
  z-index: 40;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  background: ${palette.WHITE};
  top: ${({ position, visible }) => computeCoords(position, visible).top};
  bottom: ${({ position, visible }) => computeCoords(position, visible).bottom};
  left: ${({ position, visible }) => computeCoords(position, visible).left};
  right: ${({ position, visible }) => computeCoords(position, visible).right};
  border-radius: 7px;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s linear;
  transform: ${({ position }) => getTranslate(position)};

  @media screen and (max-width: 632px) {
    right: 50%;
    top: ${({ position, visible }) => computeCoords(position, visible).top};
    bottom: ${({ position, visible }) =>
      computeCoords(position, visible).bottom};
    transform: ${({ position }) =>
      position === 'center'
        ? 'translateX(50%) translateY(-50%)'
        : 'translateX(50%)'};
    display: ${({ visible }) => (visible ? 'block' : 'none')};
  }
`

const Buttons = styled.div`
  display: flex;
`

const ButtonContainer = styled.div<{ width: string; margin?: boolean }>`
  width: ${({ width }) => width};
  margin-left: ${({ margin }) => (margin ? '8px' : 0)};
`

export const Alert: React.FC<AlertProps> = ({
  visible,
  children,
  confirmation,
  yesHandler,
  noHandler,
  position = 'topRight',
  exitAlert = false,
}) =>
  ReactDOM.createPortal(
    <>
      {visible && <Backdrop />}
      <Modal position={position} visible={visible}>
        {children}
        {confirmation && (
          <Buttons>
            <ButtonContainer width='113px'>
              <Button size='S' type='primary' onClick={yesHandler}>
                {exitAlert ? 'Выйти' : 'Да'}
              </Button>
            </ButtonContainer>
            <ButtonContainer margin width='113px'>
              <Button size='S' type='unbordered' onClick={noHandler}>
                {exitAlert ? 'Отмена' : 'Нет'}
              </Button>
            </ButtonContainer>
          </Buttons>
        )}
      </Modal>
    </>,
    document.body,
  )
