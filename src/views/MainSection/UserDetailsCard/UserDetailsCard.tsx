import styled from 'styled-components'

const S = {
  UserDetailsCard: styled.article`
    padding: 3.2rem 2.4rem;
    background-color: ${({ theme: { colors } }) => colors.userDetailsCardBg};
    box-shadow: 0px 16px 30px -10px ${({ theme: { colors } }) => colors.userDetailsCardBoxShadow};
    border-radius: 1.5rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 4rem;
    }
  `,
}

export const UserDetailsCard = () => {
  return <S.UserDetailsCard></S.UserDetailsCard>
}
