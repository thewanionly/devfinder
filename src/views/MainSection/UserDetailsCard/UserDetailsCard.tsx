import styled from 'styled-components'
import { GithubUser } from 'types/githubUser'
import { formatDate } from './UserDetailsCard.utils'

const S = {
  UserDetailsCard: styled.article`
    display: grid;
    grid-template-areas:
      'avatar' 'main'
      'bio' 'bio'
      'numbers' 'numbers'
      'social' 'social';
    padding: 3.2rem 2.4rem;
    background-color: ${({ theme: { colors } }) => colors.userDetailsCardBg};
    box-shadow: 0px 16px 30px -10px ${({ theme: { colors } }) => colors.userDetailsCardBoxShadow};
    border-radius: 1.5rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 4rem;
    }
  `,
  UserDetailsMainDetails: styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  UserDetailsNameContainer: styled.div``,
  UserDetailsName: styled.h2`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 2.4rem;
    color: ${({ theme: { colors } }) => colors.userDetailsHeaderText};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
      line-height: 3.9rem;
    }
  `,
  UserDetailsUserName: styled.span`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 1.9rem;
    color: ${({ theme: { colors } }) => colors.userDetailsUsername};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 0.2rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
      line-height: 2.4rem;
    }
  `,
  UserDetailsJoinedDate: styled.span`
    margin-top: 0.6rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 1.9rem;
    color: ${({ theme: { colors } }) => colors.userDetailsJoinedDate};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 0.4rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
      line-height: 2.2rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      margin-top: 0.8rem;
    }
  `,
}

interface UserDetailsCardProps {
  data: GithubUser
}

export const UserDetailsCard = ({ data }: UserDetailsCardProps) => {
  const { name, login, created_at } = data

  return (
    <S.UserDetailsCard>
      <S.UserDetailsMainDetails>
        <S.UserDetailsNameContainer>
          <S.UserDetailsName>{name}</S.UserDetailsName>
          <S.UserDetailsUserName>{`@${login}`}</S.UserDetailsUserName>
        </S.UserDetailsNameContainer>
        <S.UserDetailsJoinedDate>{`Joined ${formatDate(created_at)}`}</S.UserDetailsJoinedDate>
      </S.UserDetailsMainDetails>
    </S.UserDetailsCard>
  )
}
