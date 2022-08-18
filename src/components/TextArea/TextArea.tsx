import React, { useState } from 'react'
import { Input as AntdInput, Form, FormItemProps } from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'
import { capitalizeFirstLetter, computeBorderColor } from '../Input/utils'

type ValidateStatusType = 'error' | 'success' | undefined

type ValidateStatus = () => ValidateStatusType

type ExpandedForm = FormItemProps<any> & {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type LabelProps = Pick<InputProps, 'clearable'> & { small?: boolean }

type TextAreaProps = InputProps & { smallLabel?: boolean }

const { TextArea: AntdTextArea } = AntdInput
const { Item } = Form

const Wrapper = styled.div`
  width: 100%;
`
const StyledTextArea = styled(AntdTextArea)<Omit<StyledInputProps, 'height'>>`
  outline: none;
  resize: none;
  border-color:
    ${({ $outline, $isFocused, $error }) =>
      computeBorderColor($outline, $isFocused, $error)};
  border-radius: 7px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
  caret-color: ${palette.BLUE};
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? palette.DARK_BLUE_3 : palette.DARK)};

  &:hover {
    border-color:
      ${({ $outline, $isFocused, $error }) =>
        computeBorderColor($outline, $isFocused, $error)};
  }
`
const Label = styled.p<LabelProps>`
  font-size: ${({ small }) => (small ? '12px' : '14px')};
  font-family: Montserrat;
  font-weight: 500;
  color: ${palette.DARK};
  margin: 0;
  text-align: left;
`
const ErrorMessage = styled.p`
  color: ${palette.RED};
  font-weight: 500;
  font-size: 12px;
  margin-top: -20px;
  text-align: left;
`
const FormItem = styled(Item)<ExpandedForm>`
  margin-top: 4px;
`

export const TextArea: React.FC<TextAreaProps> = ({
  clearable = false,
  isValid,
  placeholder,
  label,
  error,
  errorMessage,
  outline = false,
  name,
  value: inputValue,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
  capitalize = false,
  rows = 3,
  disabled,
  smallLabel,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleChange = (e: any) => {
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

  const getLabel = (label?: InputProps['label'], small?: boolean) => {
    if (!label) return

    if (typeof label === 'string')
      return (
        <Label clearable={clearable} small={small}>
          {label}
        </Label>
      )
    else return label()
  }

  return (
    <Wrapper>
      {getLabel(label, smallLabel)}
      <FormItem
        hasFeedback
        validateStatus={validateStatus()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledTextArea
          $error={error}
          $isFocused={isFocused}
          $outline={outline}
          allowClear={clearable}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={capitalizeFirstLetter(inputValue || value, capitalize)}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          {...props}
        />
      </FormItem>
      {errorMessage && error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}
