import styled, { css } from 'styled-components'
import { GithubUser } from 'types/githubUser'
import {
  formatDate,
  formatUsername,
  getGithubLink,
  getTwitterLink,
  getUsername,
  getValidWebsiteLink,
} from './UserDetailsCard.utils'
import { EMPTY_BIO_TEXT, EMPTY_SOCIALS_TEXT } from './UserDetailsCard.constants'
import { Icon, IconName } from 'components'

const socialItemText = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  line-height: 1.9rem;

  @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    line-height: 2.2rem;
  }
`

const S = {
  UserDetailsCard: styled.article`
    display: grid;
    grid-template-areas:
      'avatar main'
      'bio bio'
      'stats stats'
      'socials socials';
    grid-template-columns: max-content 1fr;
    column-gap: 1.95rem;
    padding: 3.2rem 2.4rem 4.8rem;
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
        'avatar stats'
        'avatar socials';
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
  UserDetailsBio: styled.p<UserDetailsIsEmpty>`
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
  UserDetailsStats: styled.dl`
    grid-area: stats;
    margin-top: 4.3rem;
    background-color: ${({ theme: { colors } }) => colors.userDetailsStats};
    border-radius: 1rem;
    padding: 1.9rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      padding: 1.6rem 3.2rem;
      justify-content: flex-start;
      gap: 5rem;
    }
  `,
  UserDetailsStatItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      align-items: flex-start;
      flex-basis: 30%;
    }
  `,
  UserDetailsStatLabel: styled.dt`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 1.6rem;
    color: ${({ theme: { colors } }) => colors.userDetailsStatLabel};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
      line-height: 1.9rem;
    }
  `,
  UserDetailsStatValue: styled.dd`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 2.4rem;
    color: ${({ theme: { colors } }) => colors.userDetailsStatValue};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
      line-height: 3.3rem;
    }
  `,
  UserDetailsSocialsList: styled.ul`
    grid-area: socials;
    list-style: none;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    color: ${({ theme: { colors } }) => colors.userDetailsSocials};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      row-gap: 1.5rem;
      column-gap: 6rem;
    }
  `,
  UserDetailsSocialItem: styled.li<UserDetailsIsEmpty>`
    display: flex;
    align-items: center;
    gap: 1.925rem;

    opacity: ${({ isEmpty }) => (isEmpty ? 0.5 : 1)};
  `,
  UserDetailsSocialIcon: styled(Icon)`
    width: 2rem;
  `,
  UserDetailsSocialText: styled.span`
    ${socialItemText}
  `,
  UserDetailsSocialLink: styled.a`
    ${socialItemText}
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
}

interface UserDetailsIsEmpty {
  isEmpty: boolean
}

interface UserDetailsCardProps {
  data: GithubUser
}

export const UserDetailsCard = ({ data }: UserDetailsCardProps) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = data

  const statFields = {
    repos: {
      label: 'Repos',
      value: public_repos,
      testId: 'repos',
    },
    followers: {
      label: 'Followers',
      value: followers,
      testId: 'followers',
    },
    following: {
      label: 'Following',
      value: following,
      testId: 'following',
    },
  }

  return (
    <S.UserDetailsCard>
      <S.UserDetailsAvatarContainer>
        <S.UserDetailsAvatar src={avatar_url} alt={name} />
      </S.UserDetailsAvatarContainer>
      <S.UserDetailsMainDetails>
        <S.UserDetailsNameContainer>
          <S.UserDetailsName>{name || login}</S.UserDetailsName>
          <S.UserDetailsUserName>{formatUsername(login)}</S.UserDetailsUserName>
        </S.UserDetailsNameContainer>
        {created_at && (
          <S.UserDetailsJoinedDate>{`Joined ${formatDate(created_at)}`}</S.UserDetailsJoinedDate>
        )}
      </S.UserDetailsMainDetails>
      <S.UserDetailsBio isEmpty={!bio}>{bio || EMPTY_BIO_TEXT}</S.UserDetailsBio>
      <S.UserDetailsStats>
        {Object.values(statFields).map(({ label, value, testId }) => (
          <S.UserDetailsStatItem key={testId}>
            <S.UserDetailsStatLabel>{label}</S.UserDetailsStatLabel>
            <S.UserDetailsStatValue data-testid={testId}>{value}</S.UserDetailsStatValue>
          </S.UserDetailsStatItem>
        ))}
      </S.UserDetailsStats>
      <S.UserDetailsSocialsList>
        <S.UserDetailsSocialItem isEmpty={!location}>
          <S.UserDetailsSocialIcon name={IconName.Location} />
          <S.UserDetailsSocialText data-testid="location">
            {location || EMPTY_SOCIALS_TEXT}
          </S.UserDetailsSocialText>
        </S.UserDetailsSocialItem>
        <S.UserDetailsSocialItem isEmpty={!blog}>
          <S.UserDetailsSocialIcon name={IconName.Website} />
          {blog ? (
            <S.UserDetailsSocialLink href={getValidWebsiteLink(blog)} target="_blank">
              {blog}
            </S.UserDetailsSocialLink>
          ) : (
            <S.UserDetailsSocialText data-testid="website">
              {EMPTY_SOCIALS_TEXT}
            </S.UserDetailsSocialText>
          )}
        </S.UserDetailsSocialItem>
        <S.UserDetailsSocialItem isEmpty={!twitter_username}>
          <S.UserDetailsSocialIcon name={IconName.Twitter} />
          {twitter_username ? (
            <S.UserDetailsSocialLink href={getTwitterLink(twitter_username)} target="_blank">
              {formatUsername(twitter_username)}
            </S.UserDetailsSocialLink>
          ) : (
            <S.UserDetailsSocialText data-testid="twitter">
              {EMPTY_SOCIALS_TEXT}
            </S.UserDetailsSocialText>
          )}
        </S.UserDetailsSocialItem>
        <S.UserDetailsSocialItem isEmpty={!company}>
          <S.UserDetailsSocialIcon name={IconName.Company} />
          {company ? (
            <S.UserDetailsSocialLink href={getGithubLink(getUsername(company))} target="_blank">
              {formatUsername(company)}
            </S.UserDetailsSocialLink>
          ) : (
            <S.UserDetailsSocialText data-testid="company">
              {EMPTY_SOCIALS_TEXT}
            </S.UserDetailsSocialText>
          )}
        </S.UserDetailsSocialItem>
      </S.UserDetailsSocialsList>
    </S.UserDetailsCard>
  )
}
