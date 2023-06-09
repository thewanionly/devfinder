import styled, { css } from 'styled-components'

import { Icon } from 'components'
import { UserDetailsIsEmpty } from './UserDetailsCard'

const socialItemText = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  line-height: 1.9rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    line-height: 2.2rem;
  }
`

export const UserDetailCardStyles = {
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
  UserDetailsNameContainer: styled.div`
    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
  `,
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
  UserDetailsUserName: styled.a`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
    line-height: 1.9rem;
    color: ${({ theme: { colors } }) => colors.userDetailsUsername};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

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
      text-align: right;
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
    gap: 1.3rem;
    opacity: ${({ isEmpty }) => (isEmpty ? 0.5 : 1)};
    min-width: 50%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      gap: 1.6rem;
    }
  `,
  UserDetailsSocialIcon: styled(Icon)`
    width: 2rem;
    flex-shrink: 0;
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
