import styled from 'styled-components'

import { Button, Icon, IconName } from 'components'
import React, { useState } from 'react'

const S = {
  SearchBar: styled.form`
    max-width: 73rem;
    min-width: 32.7rem;
    margin: 0 auto;
    padding: 0.7rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme: { colors } }) => colors.searchBarBg};
  `,
  SearchIcon: styled(Icon)`
    flex-shrink: 0;
    margin-left: 0.9rem;
    transform: scale(0.84);
    color: ${({ theme: { colors } }) => colors.searchIcon};
  `,
  SearchInput: styled.input`
    margin-left: 0.9rem;
    width: 100%;
    border: 0;
    outline: none;
    background-color: transparent;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 2.5rem;
    color: ${({ theme: { colors } }) => colors.bodyText};

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.bodyText};
    }
  `,
  SearchButton: styled(Button)``,
}

type SearchBarProps = {
  className?: string
  defaultValue?: string
  placeholder?: string
  onSearch?: (value: string) => void
}

export const SearchBar = ({
  className = '',
  defaultValue = '',
  placeholder = '',
  onSearch,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue)

  const handleSetSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement

    setSearchTerm(element.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSearch?.(searchTerm)
  }

  return (
    <S.SearchBar className={className} onSubmit={handleSearch}>
      <S.SearchIcon name={IconName.Search} />
      <S.SearchInput placeholder={placeholder} value={searchTerm} onChange={handleSetSearchTerm} />
      <S.SearchButton type="submit">Search</S.SearchButton>
    </S.SearchBar>
  )
}
