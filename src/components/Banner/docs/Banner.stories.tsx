import React from 'react'
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs'
import { AlertProps } from 'antd'
import { Banner } from '../Banner'

const bannerTypes = ['success', 'info', 'warning', 'error']

const BannerStories = () => (
  <Banner
    description={text('description', 'Description')}
    message={text('message', 'Message')}
    showIcon={boolean('showIcon', true)}
    type={select('type', bannerTypes, 'info') as AlertProps['type']}
  />
)

export default {
  title: 'Components/Banner',
  decorators: [withKnobs],
}

export { BannerStories as Banner }
