import styled from 'styled-components'

import { ReactComponent as NotFoundImage } from 'assets/images/not_found.svg'

const S = {
  UserDetailsCardNotFound: styled.article`
    background-color: ${({ theme: { colors } }) => colors.userDetailsCardBg};
    box-shadow: 0px 16px 30px -10px ${({ theme: { colors } }) => colors.userDetailsCardBoxShadow};
    border-radius: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rem;
  `,
  UserDetailsCardNotFoundImage: styled.div`
    width: 65%;
    height: 65%;
    color: ${({ theme: { colors } }) => colors.bodyText};
  `,
}

export const UserDetailsCardNotFound = () => (
  <S.UserDetailsCardNotFound>
    <S.UserDetailsCardNotFoundImage as={NotFoundImage} />
  </S.UserDetailsCardNotFound>
)
