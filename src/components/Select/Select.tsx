import React, { useState } from 'react'
import {
  Select as AntdSelect,
  SelectProps as AntDSelectProps,
  Form,
} from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'
import { Icon, Label } from '../../components'
import { InputLabel } from '../../components/styles'
import { NotFound, Loader } from './components'

export type SelectValue = number | string
export interface SelectOption<Value extends SelectValue> {
  label: string;
  value: Value;
  marker?: React.ReactNode;
  tag?: React.ReactNode;
}

export type SelectProps<Value extends SelectValue> = Omit<
  AntDSelectProps<Value | Value[]>,
  'onFocus' | 'onBlur' | 'onChange' | 'onSelect' | 'options' | 'value' | 'mode'
> & {
  value?: Value[] | Value;
  isValid?: boolean;
  hasInitialValue?: boolean
  error?: boolean;
  mode?: boolean | string;
  errorMessage?: string;
  label?: string;
  options: SelectOption<Value>[];
  onSelect?: (e: Value, option: SelectOption<Value>) => void;
  onChange?: (e: Value[], option?: SelectOption<Value>[]) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const { Option } = AntdSelect
const { Item: FormItem } = Form

const Wrapper = styled.div<
  Pick<SelectProps<SelectValue>, 'error' | 'disabled'>
>`
  line-height: 1.5;
  .ant-select {
    outline: none;
    border: ${({ error }) =>
      `1px solid ${error ? palette.RED : palette.DARK_BLUE_3}`};
    border-radius: 7px;
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 48px;
    caret-color: ${palette.BLUE};
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    background: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
    display: block;

    &:focus-within {
      border: 1px solid ${palette.LIGHT_BLUE_2};
    }
    &:hover {
      border: 1px solid ${palette.LIGHT_BLUE_2};
    }
  }
  .ant-select-selector {
    border: none !important;
    color: #fffff;
  }
  .ant-select-selection-item {
    font-weight: 500;
    color: ${({ disabled }) => disabled && palette.GRAY_DARK}
  }
  .ant-select-clear {
    font-size: 14px; 
    margin-top: -6.8px;
  }
`
const CustomAntdSelect = styled(({ className, ...props }) => (
  <AntdSelect dropdownClassName={className} {...props} />
))`
  .ant-select-item-option-selected: not(.ant-select-item-option-disabled)
    .ant-select-item-option-state {
    color: ${palette.BLUE};
    position: absolute;
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.85);
    background-color: ${palette.LIGHT_BLUE};
  }

  .ant-select-multiple .ant-select-selection-item {
    background: ${palette.GRAY_3};
  }

  .ant-select-item-option-content {
    margin-left: ${({ mode }) => mode === 'multiple' && '20px'};
  }

  .rc-virtual-list {
    margin-top: ${({ mode, searchValue }) => mode === 'multiple' && !searchValue && '35px'};
  }
`
const ErrorMessage = styled.p`
  color: ${palette.RED};
  font-weight: 500;
  font-size: 12px;
  margin-top: -20px;
  text-align: left;
`
const OptionContainer = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`
const MarkerWrapper = styled.div`
  margin-left: 10px;
  flex-shrink: 0;
`
const TagWrapper = styled.div`
`
const TabWrapper = styled.div`
  position: absolute;
  top: 0;
`
const Tab = styled.a`
  flex: none;
  padding: 8px;
  display: block;
  cursor: pointer;
  color: ${palette.BLUE};
`

function CustomSelect<Value extends SelectValue>({
  options,
  isValid,
  value,
  error,
  errorMessage,
  label,
  loading,
  onClear,
  onFocus,
  onBlur,
  onSearch,
  disabled,
  mode,
  onChange,
  onSelect,
  hasInitialValue,
  ...props
}: SelectProps<Value>) {
  const [searchText, setSearchText] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const getValidateStatus = () => {
    if (isFocused) return
    if (isValid && !error) return 'success'
    if (error) return 'error'
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (onBlur) onBlur()
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (onFocus) onFocus()
  }

  const handleRef = (element: HTMLSpanElement) => {
    if (element !== null) {
      if (element.scrollWidth > element.offsetWidth) {
        element.title = element?.textContent ? element?.textContent : ''
      }
    }
  }

  const currentValue = options.find(option => option.value === value) !== undefined ? value : undefined

  return (
    <Wrapper disabled={disabled} error={error}>
      {label && <InputLabel>{label}</InputLabel>}
      <FormItem hasFeedback validateStatus={getValidateStatus()}>
        <CustomAntdSelect
          {...props}
          allowClear
          autoClearSearchValue={true}
          bordered={false}
          disabled={disabled}
          dropdownRender={
            mode === 'multiple' && !searchText 
              ? (menu: SelectValue[]) => (
                <>
                  {menu}
                  <TabWrapper>
                    <Tab
                      onClick={() => {
                          typeof value !== 'number' && value?.length === 0
                            ? onChange &&
                              onChange(options.map(option => option.value))
                            : onChange && onChange([])
                        }}
                    >
                      {typeof value !== 'number' &&
                          value !== undefined &&
                          value?.length > 0
                            ? 'Очистить выбор'
                            : 'Выбрать все'}
                    </Tab>
                  </TabWrapper>
                </>
                )
              : null
          }
          filterOption={(inputValue?: string, option?: SelectOption<Value>) => {
            if (!inputValue) return true

            return option?.label
              ?.toLowerCase()
              .includes(inputValue.toLowerCase())
          }}
          maxTagCount='responsive'
          mode={mode}
          notFoundContent={loading || !searchText ? <Loader /> : <NotFound />}
          optionFilterProp='children'
          searchValue={searchText}
          showArrow={true}
          showSearch={true}
          suffixIcon={<Icon type='caretDown' />}
          value={hasInitialValue ? currentValue : value}
          onBlur={handleBlur}
          onChange={onChange}
          onClear={onClear}
          onFocus={handleFocus}
          onSearch={(e: string) => {
            setSearchText(e)
            if (onSearch) onSearch(e)
          }}
          onSelect={onSelect}
        >
          {loading || options?.map(option => (
            <Option
              key={option.value}
              label={option.label}
              value={option.value}
            >
              <OptionContainer>
                {mode === 'single' && <TagWrapper>{option.tag}</TagWrapper>}
                <Label
                  ref={handleRef}
                  searchText={searchText}
                  style={{
                    minWidth: '0',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  text={option.label}
                />
                <MarkerWrapper>{option.marker}</MarkerWrapper>
              </OptionContainer>
            </Option>
          ))}
        </CustomAntdSelect>
      </FormItem>
      {errorMessage && error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

export { CustomSelect as Select }
