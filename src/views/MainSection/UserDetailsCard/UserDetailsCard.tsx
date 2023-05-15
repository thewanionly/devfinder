import { GithubUser } from 'types/githubUser'
import { IconName } from 'components'

import {
  formatDate,
  formatUsername,
  getGithubLink,
  getTwitterLink,
  getUsername,
  getValidWebsiteLink,
} from './UserDetailsCard.utils'
import { EMPTY_BIO_TEXT, EMPTY_SOCIALS_TEXT } from './UserDetailsCard.constants'
import { UserDetailCardStyles as S } from './UserDetailsCard.styles'
import { UserDetailsCardSkeleton } from './UserDetailsCardSkeleton'
import { UserDetailsCardNotFound } from './UserDetailsCardNotFound'

export interface UserDetailsIsEmpty {
  isEmpty?: boolean
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
          <S.UserDetailsUserName href={getGithubLink(getUsername(login))} target="_blank">
            {formatUsername(login)}
          </S.UserDetailsUserName>
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

UserDetailsCard.Loading = UserDetailsCardSkeleton
UserDetailsCard.Error = UserDetailsCardNotFound
