import { notification } from 'antd'
import styled from 'styled-components'
import { Icon } from '../../components'
import { palette } from '../../utils'

type Notification = {
  successMessage?: string
  errorMessage?: string
  successDescription?: string | JSX.Element
  errorDescription?: string | JSX.Element
  isSuccess?: boolean
  duration?: number
  withIcon?: boolean
  styles?: React.CSSProperties
}

const SuccessIconContainer = styled.div`
  margin-top: 2px;
`
const ErrorIconContainer = styled.div`
  margin-top: 1px;
`
const Message = styled.p`
  font-size: 16px;
  font-weight: 500;
`

export const openNotification = ({ 
  successMessage, 
  successDescription, 
  errorMessage,
  errorDescription,
  duration,
  withIcon = true,
  styles,
  isSuccess }: Notification) => {
  const notificationIcon = (withIcon: boolean, isSuccess?: boolean) => {
    if (!withIcon) return <></>

    return isSuccess ? 
      (
        <SuccessIconContainer>      
          <Icon color={palette.GREEN_2} height={18} type='success' width={18} /> 
        </SuccessIconContainer>
      )
      : 
      (
        <ErrorIconContainer>      
          <Icon color={palette.RED} height={20} type='hint' width={20} />
        </ErrorIconContainer>
      )
  }
    
  notification.info({
    message: <Message>{successMessage || errorMessage}</Message>,
    description: successDescription ?? errorDescription,
    icon: notificationIcon(withIcon, isSuccess),
    placement: 'top',
    style: { 
      border: `1px solid ${palette.WHITE_SMOKE}`,
      boxShadow: `1px 1px 10px ${palette.GRAY}`,
      borderRadius: '7px',
      ...styles,
    },
    closeIcon: <></>,
    duration: duration || 3,
  })
}
