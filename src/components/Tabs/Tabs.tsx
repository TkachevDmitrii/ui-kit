import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { palette } from '../../utils'
import { Icon } from '../Icon'

interface TabsProps {
  options: TabElement[]
  value?: TabValue
  onChange?: (e: TabValue) => void
  className?: string
  type?: TabsType
  error?: boolean
}

export const getActiveTextColor = (type?: TabsType): string => {
  switch (type) {
    case 'basic':
      return palette.BLUE
    case 'card':
      return palette.WHITE
    default:
      return palette.BLUE
  }
}

export const getActiveFontWeight = (type?: TabsType): number => {
  switch (type) {
    case 'basic':
      return 600
    case 'card':
      return 400
    default:
      return 600
  }
}

export const getFontWeight = (type?: TabsType): number => {
  switch (type) {
    case 'basic':
      return 600
    case 'card':
      return 400
    default:
      return 600
  }
}

export const getCardTextPaddingTop = (active?: boolean): string => {
  switch (active) {
    case true:
      return '3px'
    default:
      return '2px'
  }
}

const Wrapper = styled.div<{ type?: TabsType }>`
  display: flex;
  height: ${({ type }) => (type === 'basic' ? '100%' : '30px')};
  border-radius: ${({ type }) => (type === 'basic' ? 0 : '7px')};
  overflow-x: auto;
  overflow-y: hidden;
  user-select: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

const MenuItemText = styled.p<{
  active?: boolean
  type?: TabsType
  hasMarker?: boolean
}>`
  background: ${({ active, type }) =>
    active && type === 'card' ? palette.BLUE : 'transparent'};
  border: ${({ type, active }) =>
    !active && type === 'card' ? '1px solid #d9d9d9' : 'none'};
  color: ${({ active, type }) =>
    active ? getActiveTextColor(type) : palette.DARK};
  font-weight: ${({ active, type }) =>
    active ? getActiveFontWeight(type) : getFontWeight(type)};
  position: relative;
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  padding-right: ${({ type }) => (type === 'basic' ? '8px' : '25px')};
  padding-left: ${({ type }) => (type === 'basic' ? '8px' : '25px')};
  padding-top: ${({ type, active }) =>
    type === 'basic' ? 0 : getCardTextPaddingTop(active)};
  display: ${({ type }) => type === 'card' ? 'inline-flex' : 'inline'};
  white-space: nowrap;
  height: ${({ type }) => (type === 'basic' ? '36px' : '30px')};
  text-decoration: ${({ active, type }) =>
    active && type === 'basic' ? 'underline' : 'none'};
  text-underline-offset: 10px;
  text-decoration-thickness: 2px;

  &:first-child {
    border-top-left-radius: ${({ type }) => (type === 'basic' ? 0 : '7px')};
    border-bottom-left-radius: ${({ type }) => (type === 'basic' ? 0 : '7px')};
  }
  &:last-child {
    border-top-right-radius: ${({ type }) => (type === 'basic' ? 0 : '7px')};
    border-bottom-right-radius: ${({ type }) => (type === 'basic' ? 0 : '7px')};
  }
  &:hover {
    color: ${({ type }) =>
      type === 'card' ? undefined : palette.LIGHT_BLUE_4};
  }
  &:active {
    color: ${({ type }) => (type === 'card' ? undefined : palette.DARK_BLUE_4)};
  }
  &:after {
    content: '•';
    font-size: 27px;
    display: ${({ type, hasMarker }) => {
      if (type === 'card' || !hasMarker) return 'none'

      return 'inline-block'
    }};
    position: absolute;
    bottom: 23px;
    color: ${palette.RED};
  }
`

const IconWrapper = styled.div`
  margin-right: -20px;
  margin-left: 10px;
`

export const Tabs: React.FC<TabsProps> = ({
  options,
  value,
  onChange,
  className,
  type = 'basic',
  error = false,
}) => {
  const [active, setActive] = useState<TabValue>(value || options[0].value)
  const currentRef = useRef<HTMLParagraphElement | null>(null)

  const handleClick = (e: TabValue) => {
    onChange && onChange(e)

    if (value !== undefined) setActive(value)
    else setActive(e || options[0].value)
  }

  useEffect(() => {
    if (value !== undefined) setActive(value)
  }, [value])

  useEffect(() => {
    currentRef?.current?.scrollIntoView()
  }, [])

  return (
    <Wrapper className={className} type={type}>
      {options.map((item, index) => (
        <MenuItemText
          key={index}
          ref={item.value === active ? currentRef : null}
          active={item.value === active}
          hasMarker={item.hasMarker}
          type={type}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
          {
            error && 
              <IconWrapper>
                {item.value === 0 && type === 'card' && <Icon color={palette.RED} height={12} isTransparent={true} type='error' width={12} />}
              </IconWrapper>
          }
        </MenuItemText>
      ))}
    </Wrapper>
  )
}
