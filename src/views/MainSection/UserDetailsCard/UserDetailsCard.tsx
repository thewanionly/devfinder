import styled from 'styled-components'
import { GithubUser } from 'types/githubUser'
import { formatDate } from './UserDetailsCard.utils'
import { EMPTY_BIO_TEXT } from './UserDetailsCard.constants'

const S = {
  UserDetailsCard: styled.article`
    display: grid;
    grid-template-areas:
      'avatar main'
      'bio bio'
      'numbers numbers'
      'social social';
    grid-template-columns: max-content 1fr;
    column-gap: 1.95rem;
    padding: 3.2rem 2.4rem;
    background-color: ${({ theme: { colors } }) => colors.userDetailsCardBg};
    box-shadow: 0px 16px 30px -10px ${({ theme: { colors } }) => colors.userDetailsCardBoxShadow};
    border-radius: 1.5rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 4rem;
      column-gap: 4.1rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      grid-template-areas:
        'avatar main'
        'avatar bio'
        'avatar numbers'
        'avatar social';
      column-gap: 3.7 rem;
    }
  `,
  UserDetailsAvatarContainer: styled.div`
    grid-area: avatar;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      width: 11.7rem;
      height: 11.7rem;
    }
  `,
  UserDetailsAvatar: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `,
  UserDetailsMainDetails: styled.div`
    grid-area: main;
    align-self: center;
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
  UserDetailsBio: styled.p<UserDetailsBioStyleProps>`
    grid-area: bio;
    margin-top: 3.3rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 2.5rem;
    color: ${({ theme: { colors } }) => colors.bodyText};
    opacity: ${({ isEmpty }) => (isEmpty ? 0.75 : 1)};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 2.4rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      margin-top: 2rem;
    }
  `,
}

interface UserDetailsBioStyleProps {
  isEmpty: boolean
}

interface UserDetailsCardProps {
  data: GithubUser
}

export const UserDetailsCard = ({ data }: UserDetailsCardProps) => {
  const { avatar_url, name, login, created_at, bio } = data

  return (
    <S.UserDetailsCard>
      <S.UserDetailsAvatarContainer>
        <S.UserDetailsAvatar src={avatar_url} alt={name} />
      </S.UserDetailsAvatarContainer>
      <S.UserDetailsMainDetails>
        <S.UserDetailsNameContainer>
          <S.UserDetailsName>{name}</S.UserDetailsName>
          {login && <S.UserDetailsUserName>{`@${login}`}</S.UserDetailsUserName>}
        </S.UserDetailsNameContainer>
        {created_at && (
          <S.UserDetailsJoinedDate>{`Joined ${formatDate(created_at)}`}</S.UserDetailsJoinedDate>
        )}
      </S.UserDetailsMainDetails>
      <S.UserDetailsBio isEmpty={!bio}>{bio || EMPTY_BIO_TEXT}</S.UserDetailsBio>
    </S.UserDetailsCard>
  )
}
