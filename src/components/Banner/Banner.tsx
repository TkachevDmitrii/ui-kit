import React from 'react'
import { Alert, AlertProps } from 'antd'

type BannerProps = Pick<
  AlertProps,
  'message' | 'description' | 'type' | 'showIcon' | 'icon'
>

export const Banner: React.FC<BannerProps> = ({
  message,
  description,
  type,
  showIcon,
  ...props
}) => <Alert {...{ message, description, type, showIcon, ...props }} />
