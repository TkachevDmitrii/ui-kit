import React from 'react'
import {
  BottomSheet as SpringBottomSheet,
  BottomSheetProps as IBottomSheetProps,
} from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

type BottomSheetProps = Omit<IBottomSheetProps, 'open'>

interface IBSProps extends BottomSheetProps {
  visible: boolean
  children: React.ReactChild | React.ReactChild[]
  hideOnOverlayClick?: boolean
  onClose?: () => void
}

export const BottomSheet: React.FC<IBSProps> = ({
  visible,
  children,
  hideOnOverlayClick = true,
  onClose = () => {},
  ...props
}) => (
  <SpringBottomSheet
    open={visible}
    onDismiss={hideOnOverlayClick ? onClose : undefined}
    {...props}
  >
    {children}
  </SpringBottomSheet>
)
