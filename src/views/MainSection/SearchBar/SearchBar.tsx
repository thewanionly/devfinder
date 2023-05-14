import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, Icon, IconName } from 'components'
import { LoadingDots } from './LoadingDots'

const S = {
  SearchBar: styled.form`
    padding: 0.7rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme: { colors } }) => colors.searchBarBg};
    box-shadow: 0px 16px 30px -10px ${({ theme: { colors } }) => colors.searchBarBoxShadow};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 0.95rem 1rem;
    }
  `,
  SearchIcon: styled(Icon)`
    flex-shrink: 0;
    margin-left: 0.9rem;
    transform: scale(0.84);
    color: ${({ theme: { colors } }) => colors.searchIcon};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-left: 2.2rem;
    }
  `,
  SearchInput: styled.input`
    margin-left: 0.9rem;
    width: 100%;
    border: 0;
    outline: none;
    background-color: transparent;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 2.5rem;
    color: ${({ theme: { colors } }) => colors.bodyText};

    &::placeholder {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
      color: ${({ theme: { colors } }) => colors.bodyText};
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.med};
      margin-left: 2.4rem;
    }
  `,
  SearchErrorMessage: styled.span`
    margin-left: 0.8rem;
    flex-shrink: 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 2.2rem;
    color: ${({ theme: { colors } }) => colors.searchError};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
      margin-left: 2rem;
    }
  `,
  SearchButton: styled(Button)`
    flex-shrink: 0;
    margin-left: 0.8rem;
    width: 8.4rem;
    height: 4.6rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-left: 2.4rem;
      width: 10.6rem;
      height: 5rem;
    }
  `,
}

type SearchBarProps = {
  className?: string
  defaultValue?: string
  placeholder?: string
  isLoading?: boolean
  errorMessage?: string
  onSearch?: (value: string) => void
}

export const SearchBar = ({
  className = '',
  defaultValue = '',
  placeholder = '',
  isLoading = false,
  errorMessage = '',
  onSearch,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue)

  const handleSetSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement

    setSearchTerm(element.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchTerm) {
      onSearch?.(searchTerm)
    }
  }

  return (
    <S.SearchBar className={className} onSubmit={handleSearch}>
      <S.SearchIcon name={IconName.Search} />
      <S.SearchInput placeholder={placeholder} value={searchTerm} onChange={handleSetSearchTerm} />
      {errorMessage && <S.SearchErrorMessage>{errorMessage}</S.SearchErrorMessage>}
      <S.SearchButton type="submit" isLoading={isLoading}>
        {!isLoading ? 'Search' : <LoadingDots role="status" label="searching user" />}
      </S.SearchButton>
    </S.SearchBar>
  )
}
