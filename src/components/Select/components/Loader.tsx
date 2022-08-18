import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`

export const Loader = () => (
  <Wrapper>
    <Spin size='default' />
  </Wrapper>
)
