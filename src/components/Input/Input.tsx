import React, { ChangeEvent, useState } from 'react'
import { Input as AntdInput, Form, FormItemProps } from 'antd'
import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'
import { palette } from '../../utils'
import { InputLabel } from '../../components/styles'
import {
  computeBorderColor,
  renderPasswordEye,
  capitalizeFirstLetter,
} from './utils'
import { Search } from './components'

type ValidateStatusType = 'error' | 'success' | undefined

type ValidateStatus = () => ValidateStatusType

type ExpandedForm = FormItemProps<any> & {
  onMouseEnter: () => void
  onMouseLeave: () => void
  margin?: string
}

const { Password } = AntdInput
const { Item } = Form

export const heights = {
  L: '46px',
  S: '32px',
}

const Wrapper = styled.div`
  width: 100%;
  line-height: 1.5;

  .ant-input[disabled] {
    color: #8b919e;
  }
  .ant-input-clear-icon {
    display: flex;
  }
  .anticon-close-circle{
    font-size: 14px;
  }
  .ant-input-affix-wrapper-disabled {
    .ant-input-suffix {
      display: none;
    }
  }
`
const inputStyles = css<StyledInputProps>`
  outline: none;
  border: 1px solid
    ${({ $outline, $isFocused, $error }) =>
      computeBorderColor($outline, $isFocused, $error)};
  border-radius: 7px;
  width: 100%;
  height: ${({ height }) => heights[height]};
  box-sizing: border-box;
  padding-left: ${({ paddingText }) => paddingText || '12px'};
  caret-color: ${palette.BLUE};
  font-family: Montserrat;

  &:hover {
    border-color: ${palette.LIGHT_BLUE_2} !important;
  }
  &:focus-within {
    border: 1px solid ${palette.LIGHT_BLUE_2};
    box-shadow: none;
  }

  input.ant-input {
    font-weight: 500;
    font-size: ${({ height }) => (height === 'S' ? '14px' : '18px')};
    color: ${palette.DARK};
  }
  .ant-input[disabled] {
    color: ${palette.DARK};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
const PasswordInput = styled(Password)<StyledInputProps>`
  ${inputStyles}
`
const StyledInput = styled(AntdInput)<StyledInputProps>`
  ${inputStyles}
`
const Label = styled(InputLabel)<Pick<InputProps, 'clearable'>>``
const ErrorMessage = styled.p`
  color: ${palette.RED};
  font-weight: 500;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 10px;
  text-align: left;
`
const Hint = styled.p`
  color: ${palette.BLUE};
  font-weight: 500;
  font-size: 12px;
  margin-top: -24px;
  margin-bottom: 14px;
  text-align: left;
`
const FormItem = styled(Item)<ExpandedForm>`
  &.ant-form-item {
    margin-bottom: ${({ margin }) => margin || '24px'};
  }
`

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = true,
  isValid,
  placeholder,
  label,
  error,
  errorMessage,
  height = 'L',
  hint,
  outline = false,
  name,
  value: inputValue,
  paddingText,
  capitalize = false,
  pattern,
  disabled,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
  onSearch = () => {},
  margin,
  withDefaultValue = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value)
    setValue(e.currentTarget.value)
  }

  const validateStatus: ValidateStatus = () => {
    if (isFocused) return
    if (isValid && !error) return 'success'
    if (error) return 'error'
  }

  const handleBlur = () => {
    onBlur()
    !isHovered && setIsFocused(false)
  }

  const handleFocus = () => {
    onFocus()
    setIsFocused(true)
  }

  const HIDE_HINT = !hint || (error && errorMessage)

  const getMask = () => {
    if (pattern) return pattern

    switch (type) {
      case 'date':
        return '99.99.9999'
      case 'phone':
        return '+7 (999) 999-99-99'
      default:
        return ''
    }
  }

  const getLabel = (label?: InputProps['label']) => {
    if (label) {
      if (typeof label === 'string') {
        return <Label clearable={clearable}>{label}</Label>
      } else return label()
    }
  }

  const specialInputType = type === 'phone' || type === 'date'

  return (
    <Wrapper>
      {getLabel(label)}
      <FormItem
        hasFeedback
        margin={margin}
        validateStatus={validateStatus()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(type === 'text' || type === 'number') && !pattern && (
          <StyledInput
            $error={error}
            $isFocused={isFocused}
            $outline={outline}
            allowClear={clearable}
            disabled={disabled}
            height={height}
            name={name}
            paddingText={paddingText}
            placeholder={placeholder}
            type={type === 'number' ? 'number' : 'text'}
            value={capitalizeFirstLetter(inputValue || value, capitalize)}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
            {...props}
          />
        )}

        {type === 'password' && !pattern && (
          <PasswordInput
            $error={error}
            $isFocused={isFocused}
            $outline={outline}
            disabled={disabled}
            height={height}
            iconRender={renderPasswordEye}
            name={name}
            placeholder={placeholder}
            value={capitalizeFirstLetter(inputValue || value, capitalize)}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
            {...props}
          />
        )}

        {type === 'search' && !pattern && (
          <Search
            height={height}
            isFocused={isFocused}
            outline={outline}
            paddingText={paddingText}
            placeholder={placeholder}
            value={capitalizeFirstLetter(inputValue || (withDefaultValue ? value : ''), capitalize)}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onSearch={onSearch}
            {...props}
          />
        )}

        {(specialInputType || pattern) && (
          <InputMask
            disabled={disabled}
            mask={getMask()}
            maskPlaceholder=''
            value={capitalizeFirstLetter(inputValue || value, capitalize)}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          >
            <StyledInput
              $error={error}
              $isFocused={isFocused}
              $outline={outline}
              allowClear={clearable}
              height={height}
              name={name}
              paddingText={paddingText}
              placeholder={placeholder}
              onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
              {...props}
            />
          </InputMask>
        )}
      </FormItem>
      {errorMessage && error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!HIDE_HINT && isFocused && <Hint>{hint}</Hint>}
    </Wrapper>
  )
}
