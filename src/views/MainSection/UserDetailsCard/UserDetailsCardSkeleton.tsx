import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { IconName } from 'components'
import { UserDetailCardStyles } from './UserDetailsCard.styles'

const skeletonBg = css`
  background-color: ${({ theme: { colors } }) => colors.skeletonBg};
`

const skeletonText = css`
  ${skeletonBg}
  border-radius: 0.3rem;
`

const skeletonAvatar = css`
  ${skeletonBg}
  border-radius: 50%;
`

const S = {
  UserDetailsCard: UserDetailCardStyles.UserDetailsCard,
  UserDetailsAvatarContainer: styled(motion.div)`
    grid-area: avatar;
    width: 7rem;
    height: 7rem;
    ${skeletonAvatar}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      width: 11.7rem;
      height: 11.7rem;
    }
  `,
  UserDetailsMainDetails: UserDetailCardStyles.UserDetailsMainDetails,
  UserDetailsNameContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      width: 50%;
    }
  `,
  UserDetailsName: styled(motion.div)`
    height: 2.2rem;
    width: 60%;
    ${skeletonText}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      height: 3.6rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      width: 90%;
    }
  `,
  UserDetailsUserName: styled(motion.div)`
    height: 1.6rem;
    width: 25%;
    ${skeletonText}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      height: 2.2rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      width: 50%;
    }
  `,
  UserDetailsJoinedDate: styled(motion.div)`
    margin-top: 0.6rem;
    height: 1.6rem;
    width: 65%;
    ${skeletonText}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 0.4rem;
      height: 2rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      margin-top: 0.8rem;
      width: 40%;
    }
  `,
  UserDetailsBioContainer: styled.div`
    grid-area: bio;
    margin-top: 3.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 2.4rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      margin-top: 2rem;
    }
  `,
  UserDetailsBio: styled(motion.div)`
    height: 2rem;
    ${skeletonText}
  `,
  UserDetailsBioShort: styled(motion.div)`
    height: 2rem;
    ${skeletonText}
    width: 30%;
  `,
  UserDetailsStats: UserDetailCardStyles.UserDetailsStats,
  UserDetailsStatItem: UserDetailCardStyles.UserDetailsStatItem,
  UserDetailsStatLabel: UserDetailCardStyles.UserDetailsStatLabel,
  UserDetailsStatValue: styled(motion.dd)`
    height: 2.2rem;
    width: 80%;
    ${skeletonText}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      height: 3rem;
      width: 40%;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      width: 50%;
    }
  `,
  UserDetailsSocialsList: UserDetailCardStyles.UserDetailsSocialsList,
  UserDetailsSocialItem: UserDetailCardStyles.UserDetailsSocialItem,
  UserDetailsSocialIcon: UserDetailCardStyles.UserDetailsSocialIcon,
  UserDetailsSocialText: styled(motion.div)`
    height: 1.8rem;
    width: 70%;
    ${skeletonText}

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      height: 2rem;
      width: 100%;
    }
  `,
}

const SkeletonVariants = {
  start: { opacity: 0.4 },
  animate: { opacity: 0.8 },
}

const SkeletonTransition = {
  duration: 0.8,
  repeat: Infinity, // Loop animation infinitely
  repeatType: 'reverse', // Reverse the animation after each loop
  ease: 'easeInOut',
} as const

const SkeletonProps = {
  variants: SkeletonVariants,
  initial: 'start',
  animate: 'animate',
  transition: SkeletonTransition,
}

const statItems = ['Repos', 'Followers', 'Following']
const socialItems = [IconName.Location, IconName.Website, IconName.Twitter, IconName.Company]

export const UserDetailsCardSkeleton = () => {
  return (
    <S.UserDetailsCard>
      <S.UserDetailsAvatarContainer {...SkeletonProps} />
      <S.UserDetailsMainDetails>
        <S.UserDetailsNameContainer>
          <S.UserDetailsName {...SkeletonProps} />
          <S.UserDetailsUserName {...SkeletonProps} />
        </S.UserDetailsNameContainer>
        <S.UserDetailsJoinedDate {...SkeletonProps} />
      </S.UserDetailsMainDetails>
      <S.UserDetailsBioContainer>
        <S.UserDetailsBio {...SkeletonProps} />
        <S.UserDetailsBio {...SkeletonProps} />
        <S.UserDetailsBioShort {...SkeletonProps} />
      </S.UserDetailsBioContainer>
      <S.UserDetailsStats>
        {statItems.map((label) => (
          <S.UserDetailsStatItem key={label}>
            <S.UserDetailsStatLabel>{label}</S.UserDetailsStatLabel>
            <S.UserDetailsStatValue {...SkeletonProps} />
          </S.UserDetailsStatItem>
        ))}
      </S.UserDetailsStats>
      <S.UserDetailsSocialsList>
        {socialItems.map((icon) => (
          <S.UserDetailsSocialItem key={icon}>
            <S.UserDetailsSocialIcon name={icon} />
            <S.UserDetailsSocialText {...SkeletonProps} />
          </S.UserDetailsSocialItem>
        ))}
      </S.UserDetailsSocialsList>
    </S.UserDetailsCard>
  )
}
