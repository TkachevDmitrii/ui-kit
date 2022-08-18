/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-extraneous-dependencies */
import { Dayjs } from 'dayjs'
import locale from 'antd/es/date-picker/locale/ru_RU'
import 'dayjs/locale/ru'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker'
import generateRangePicker from 'antd/es/date-picker/generatePicker/generateRangePicker'
import styled from 'styled-components'
import { palette } from '../../utils'

// @ts-ignore
const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)
const AntRangeDatePicker = generateRangePicker<Dayjs>(dayjsGenerateConfig)

const DatePicker = styled(AntDatePicker).attrs(() => ({
  popupStyle: { fontFamily: 'Montserrat' },
  locale,
}))`
  border-radius: 7px;
  font-family: Montserrat;
  &:hover {
    border-color: ${palette.LIGHT_BLUE_2} !important;
  }
  &&.ant-picker-focused {
    border-color: ${palette.LIGHT_BLUE_2};
    box-shadow: none;
  }
`

const RangeDatePicker = styled(AntRangeDatePicker).attrs(() => ({
  popupStyle: { fontFamily: 'Montserrat' },
  locale,
}))`
  border-radius: 7px;
  font-family: Montserrat;
  &:hover {
    border-color: ${palette.LIGHT_BLUE_2} !important;
  }
  &&.ant-picker-focused {
    border-color: ${palette.LIGHT_BLUE_2};
    box-shadow: none;
  }
`

export { DatePicker, RangeDatePicker }