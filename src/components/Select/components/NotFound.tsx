import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
`

export const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <p>Ничего не найдено</p>
    </Wrapper>
  )
}
