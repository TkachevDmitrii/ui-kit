import React from 'react'
import styled from 'styled-components'
import {
  CheckCircleFilled,
  DeleteOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'
import { palette } from '../../../utils'

interface StatusItemProps {
  status?: string
  handleRemoveFile: () => void
}

const StyledDeleteOutlined = styled(DeleteOutlined)`
  padding-left: 10px;
  font-size: 15px;
  padding-bottom: 1px;
`

export const StatusItem: React.FC<StatusItemProps> = ({
  status,
  handleRemoveFile,
}) => (
  <>
    {status === 'done' && (
      <CheckCircleFilled style={{ color: palette.GREEN }} />
    )}
    {status === 'error' && (
      <ExclamationCircleFilled style={{ color: palette.RED }} />
    )}
    <StyledDeleteOutlined onClick={handleRemoveFile} />
  </>
)
