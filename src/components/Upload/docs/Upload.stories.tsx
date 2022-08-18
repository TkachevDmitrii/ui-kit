import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { UploadFile } from 'antd/lib/upload/interface'
import { Upload } from '../Upload'

const UploadStories: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  return (
    <Upload
      accept={text('accept', '.xlsx,.xls')}
      disabled={boolean('disabled', false)}
      fileList={fileList}
      imageWidth={number('imageWidth', 223)}
      loading={boolean('loading', false)}
      maxCount={number('maxCount', 1)}
      multiple={boolean('multiple', true)}
      onlyImageUpload={boolean('onlyImage', false)}
      setFileList={setFileList}
      textUpload={text('textUpload', 'Загрузить')}
    />
  )
}

export default {
  title: 'Components/Upload',
  decorators: [withKnobs],
}

export { UploadStories as Upload }
