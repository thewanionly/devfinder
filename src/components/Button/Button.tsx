import { forwardRef } from 'react'
import styled from 'styled-components'

const S = {
  Button: styled.button`
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    padding: 1.25rem 1.6rem;
    line-height: 2.1rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    background-color: ${({ theme: { colors } }) => colors.buttonBg};
    color: ${({ theme: { colors } }) => colors.buttonText};
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.buttonBgHover};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme: { colors } }) => colors.buttonBg};
      }
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
      line-height: 2.4rem;
      padding: 1.25rem 2.4rem;
    }
  `,
}

interface CommonProps {
  className?: string
  type?: 'submit' | 'button'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
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
  { className = '', type, label, disabled, children, onClick },
  ref
) {
  return (
    <S.Button
      className={className}
      ref={ref}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </S.Button>
  )
})
