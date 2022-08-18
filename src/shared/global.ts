import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    font-weight: 400;
    src: url(../fonts/Montserrat-Regular.ttf) format('truetype');
  }

  @font-face {
      font-family: Montserrat;
      font-weight: 500;
      src: url(../fonts/Montserrat-Medium.ttf) format('truetype');
  }

  @font-face {
      font-family: Montserrat;
      font-weight: 600;
      src: url(../fonts/Montserrat-SemiBold.ttf) format('truetype');
  }

  @font-face {
      font-family: Montserrat;
      font-weight: 700;
      src: url(../fonts/Montserrat-Bold.ttf) format('truetype');
  }
`

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
  }
`
