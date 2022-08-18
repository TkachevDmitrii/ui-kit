import React from 'react'
import styled from 'styled-components'
import { GlobalFonts, GlobalStyles } from '../src/shared'

const Center = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const decorators = [
  Story => (
    <Center>
      <GlobalFonts />
      <GlobalStyles />
      <Story />
    </Center>
  ),
]
