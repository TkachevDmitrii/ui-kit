import React from 'react'
import styled from 'styled-components'
import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons'
import { palette } from '../../../utils'

interface TextItemProps {
  status?: string
  name: string
}

const FileName = styled.span<{ error?: boolean }>`
  overflow: hidden;
  width: 100%;
  display: inline-block;
  padding-left: 8px;
  color: ${({ error }) => error ? palette.RED : palette.LIGHT_BLUE_2};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-top: 3px;
`

export const TextItem: React.FC<TextItemProps> = ({ status, name }) => (
  <Wrapper>
    {status === 'uploading' ? (
      <LoadingOutlined />
    ) : (
      <PaperClipOutlined style={{ color: palette.GRAY_DARK }} />
    )}
    <FileName error={status === 'error'}>{name}</FileName>
  </Wrapper>
)
