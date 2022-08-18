import React from 'react'
import { Modal as AntdModal, ModalProps } from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'

interface ExtendedModalProps extends ModalProps {
  onClose?: () => void
  children: React.ReactChild | React.ReactChild[]
  closable?: boolean
  border?: boolean
}

const StyledAntdModal = styled(AntdModal)<{ border?: boolean }>`
  .ant-modal-content {
    border: ${({ border }) => border && `1px solid ${palette.WHITE_SMOKE}`};
    box-shadow: ${({ border }) => border && '2px 2px 6px rgba(24, 35, 61, 0.08)'};
    border-radius: ${({ border }) => border && '7px'};
  }
`

const maskStyles = {
  background: palette.BACKDROP_DARK,
  backdropFilter: 'blur(1px)',
}

export const Modal: React.FC<ExtendedModalProps> = ({
  children,
  visible,
  onClose,
  closable = false,
  border = false,
  ...props
}) => {
  return (
    <StyledAntdModal
      border={border}
      centered={true}
      closable={closable}
      footer={null}
      maskClosable={false}
      maskStyle={maskStyles}
      visible={visible}
      zIndex={20}
      onCancel={onClose}
      {...props}
    >
      {children}
    </StyledAntdModal>
  )
}
