import React, { FormEvent } from 'react'
import styled from 'styled-components'
import { palette } from '../../../utils'
import { Icon } from '../../../components/Icon'
import { computeBorderColor } from '../utils'
import { heights } from '../Input'

const Wrapper = styled.form`
  display: flex;
  width: 100%;
`
const SearchInput = styled.input<StyledSearchProps>`
  outline: none;
  border: 1px solid
    ${({ $outline, $isFocused }) => computeBorderColor($outline, $isFocused)};
  border-radius: 0 7px 7px 0;
  border-left: none;
  width: 100%;
  height: ${({ height }) => heights[height || 'S']};
  padding-left: ${({ paddingText }) => paddingText};
  caret-color: ${palette.BLUE};
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ height }) => (height === 'S' ? '14px' : '18px')};

  &::placeholder {
    color: ${palette.DARK_BLUE_3};
  }
`
const SearchButton = styled.div<StyledSearchProps>`
  border-radius: 7px 0 0 7px;
  border: 1px solid
    ${({ $outline, $isFocused }) => computeBorderColor($outline, $isFocused)};
  border-right: none;
  height: ${({ height }) => heights[height || 'S']};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.WHITE};
  padding-left: 12px;
  padding-right: 5px;
`

export const Search: React.FC<SearchProps> = ({
  placeholder,
  value,
  height,
  name,
  isFocused,
  outline,
  onBlur,
  onChange,
  onFocus,
  onSearch,
}) => {
  const SearchHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSearch && onSearch()
  }

  const small = height === 'S'

  return (
    <Wrapper onSubmit={SearchHandler}>
      <SearchButton
        $isFocused={isFocused}
        $outline={outline}
        height={height}
        onClick={onSearch}
      >
        <Icon height={small ? 12 : 16} type='lens' width={small ? 12 : 16} />
      </SearchButton>
      <SearchInput
        $isFocused={isFocused}
        $outline={outline}
        height={height}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
      />
    </Wrapper>
  )
}
