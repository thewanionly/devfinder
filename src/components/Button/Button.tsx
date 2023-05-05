import { forwardRef } from 'react'
import styled from 'styled-components'

const S = {
  Button: styled.button`
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    padding: 1.25rem 1.6rem;
    line-height: 2.1rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    background-color: ${({ theme: { colors } }) => colors.buttonBg};
    color: ${({ theme: { colors } }) => colors.buttonText};
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.buttonBgHover};
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 1.25rem 2.4rem;
    }
  `,
}

interface CommonProps {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type ConditionalProps =
  | {
      label: string
      children?: never
    }
  | {
      label?: never
      children: React.ReactNode
    }

type ButtonProps = CommonProps & ConditionalProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', label, children, onClick },
  ref
) {
  return (
    <S.Button className={className} ref={ref} type="button" onClick={onClick}>
      {label || children}
    </S.Button>
  )
})
