import { Dropdown, Menu } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Label } from '../../components'
import { SelectValue, SelectOption } from '../Select/Select'

interface IAutoCompleteProps<Value extends SelectValue>
  extends Omit<InputProps, 'type' | 'pattern' | 'rows'> {
  options: SelectOption<Value>[]
  onSelect?: (e?: SelectOption<Value>) => void
}

interface IMenuProps<Value extends SelectValue> {
  options: IAutoCompleteProps<Value>['options']
  onSelect: IAutoCompleteProps<Value>['onSelect']
  setValue: (e: string) => void
  value: string
}

const RoundedMenu = styled(Menu)`
  border-radius: 7px;
  margin-top: 5px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`
const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
`
const InputWrapper = styled.div`
  position: relative;
  background: transparent;
`
const MarkerMenuWrapper = styled.div`
  margin-left: 10px;
`
const MarkerWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 12px;
  z-index: 100;
  height: 60%;
  top: 22px;
  left: 0;
`

function handleItemSelect<Value extends SelectValue>(
  onSelect: IAutoCompleteProps<Value>['onSelect'],
  e: SelectOption<Value>,
  setValue: (e: string) => void,
) {
  if (onSelect) {
    onSelect(e)
    setValue(e.label)
  } else {
    setValue(e.label)
  }
}

const menu = <Value extends SelectValue>({
  options,
  value,
  setValue,
  onSelect,
}: IMenuProps<Value>) =>
  options.length ? (
    <RoundedMenu>
      {options.map(option => (
        <Menu.Item
          key={option.value}
          onClick={() => {
            handleItemSelect(onSelect, option, setValue)
          }}
        >
          <MenuItemWrapper>
            <Label searchText={value} text={option.label} />
            {option.marker && (
              <MarkerMenuWrapper>{option.marker}</MarkerMenuWrapper>
            )}
          </MenuItemWrapper>
        </Menu.Item>
      ))}
    </RoundedMenu>
  ) : (
    <></>
  )

export function AutoComplete<Value extends SelectValue>({
  options,
  disabled,
  value: controlledValue,
  height = 'S',
  outline = true,
  onChange,
  onSelect,
  ...props
}: IAutoCompleteProps<Value>) {
  const [value, setValue] = useState<string>(controlledValue || '')

  const withMarker = options.filter(option => option.label === value)
  const marker = withMarker[0]?.marker

  const filteredOptions = useMemo(
    () => options.filter(e => e.label.includes(value)),
    [options, value],
  )

  const handleChange = (e: string) => {
    onChange && onChange(e)
    setValue(e)
  }

  useEffect(() => {
    setValue(controlledValue || '')
  }, [controlledValue])

  return (
    <Dropdown
      disabled={disabled}
      overlay={menu({
        options: filteredOptions,
        value: value,
        setValue: handleChange,
        onSelect,
      })}
      trigger={['click']}
    >
      <InputWrapper>
        {marker && <MarkerWrapper>{marker}</MarkerWrapper>}
        <Input
          disabled={disabled}
          height={height}
          outline={outline}
          paddingText={marker ? '24px' : undefined}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </InputWrapper>
    </Dropdown>
  )
}
