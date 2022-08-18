import React, { useState } from 'react'
import { Upload as UploadAntd, UploadProps, List, Spin, Image } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { Icon } from '../../components'
import { palette } from '../../utils'
import { StatusItem, TextItem } from './components'

interface ExtendedUploadProps extends UploadProps {
  setFileList: (value: UploadFile[]) => void
  loading?: boolean
  onlyImageUpload?: boolean
  textUpload?: string
  imageWidth?: number
  // disabled?: boolean
  customItemRender?: (fileList: UploadFile, index: number) => React.ReactElement
}

const loader = (
  <LoadingOutlined
    spin
    style={{
      fontSize: 24,
      color: palette.BLUE,
    }}
  />
)

const { Dragger } = UploadAntd

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const StyledDragger = styled(Dragger)<{ checkImage: boolean, disabled?: boolean }>`
  ${({ checkImage }) => !checkImage && `display: none`}
  &.ant-upload.ant-upload-drag .ant-upload {
    padding: 9px 0;
  }
  &.ant-upload.ant-upload-drag {
    border: 1px dashed ${({ disabled }) => disabled ? palette.DARK_BLUE_3 : palette.LIGHT_BLUE_2};
    border-radius: 7px;
  }
  &.ant-upload.ant-upload-drag:hover {
    ${({ disabled }) => !disabled && `border: 1px solid ${palette.HOVERED_BLUE_2};`}
  }
`
const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextStyle = styled.p<{ disabled?: boolean }>`
  color: ${({ disabled }) => disabled ? palette.DARK_BLUE_3 : palette.LIGHT_BLUE_2};
  padding-right: 24px;
  word-break: break-word;
`
const StyledListItem = styled(List.Item)<{ error?: boolean }>`
  border: 1px solid ${({ error }) => error ? palette.RED : palette.LIGHT_BLUE_2};
  border-radius: 7px;
  padding: 4px 24px;
  margin-top: 8px;

  .anticon[tabindex] {
    color: ${palette.GRAY_DARK};
  }
`
const IconWrapper = styled.div`
  margin-left: 24px;
  margin-right: 8px;
`
const FileContainer = styled.div<{ error?: boolean }>`
  border: 1px solid ${palette.LIGHT_BLUE_2};
  border-radius: 7px;
  padding: 4px 24px;
  margin-top: 8px;
`

export const Upload: React.FC<ExtendedUploadProps> = ({
  accept,
  multiple,
  setFileList,
  fileList,
  onChange,
  loading,
  onlyImageUpload = false,
  textUpload = 'Загрузить',
  imageWidth,
  disabled,
  customItemRender,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState('')

  const handleChange = async (
    event: UploadChangeParam,
    noSetImage?: boolean,
  ) => {
    setFileList([...event.fileList])

    if (onlyImageUpload) {
      const imageSrc = await getBase64(event?.file?.originFileObj)
      //@ts-ignore
      !noSetImage && setImageSrc(imageSrc)
    }

    if (onChange) {
      onChange(event)
    }
  }

  const handleRemoveFile = (item: UploadFile, index: number) => {
    fileList?.splice(index, 1)

    handleChange({ file: item, fileList: fileList || [] }, true)
    onlyImageUpload && setImageSrc('')
  }

  const checkImage =
    (onlyImageUpload && fileList && fileList.length === 0) || !onlyImageUpload

  return (
    <div>
      <StyledDragger
        accept={accept}
        checkImage={checkImage}
        disabled={disabled}
        fileList={fileList}
        multiple={multiple}
        showUploadList={false}
        onChange={handleChange}
        {...props}
      >
        {loading ? (
          <Spin indicator={loader} />
        ) : (
          <UploadContainer>
            <IconWrapper>
              <Icon color={disabled ? palette.DARK_BLUE_3 : palette.LIGHT_BLUE_2} height={12} type='upload' width={12} />
            </IconWrapper>
            <TextStyle disabled={disabled}>{textUpload}</TextStyle>
          </UploadContainer>          
        )}
        
      </StyledDragger>

      {customItemRender && fileList?.map(customItemRender)}

      {!customItemRender && fileList && fileList.length > 0 && (
        <>
          {onlyImageUpload && (
            <Image preview={false} src={imageSrc} width={imageWidth} />
          )}
          <List
            dataSource={fileList}
            renderItem={(item: UploadFile, index) => (
              <StyledListItem
                key={index}
                error={item.error}
                extra={
                  <StatusItem
                    handleRemoveFile={() => handleRemoveFile(item, index)}
                    status={item.status}
                  />
                }
              >
                <List.Item.Meta
                  title={<TextItem name={item.name} status={item.status} />}
                />
              </StyledListItem>
            )}
            split={false}
          />
        </>
      )}
    </div>
  )
}
