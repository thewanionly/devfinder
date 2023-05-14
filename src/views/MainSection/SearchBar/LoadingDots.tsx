import { motion } from 'framer-motion'
import styled from 'styled-components'

const S = {
  LoadingDotsContainer: styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    height: 1.3rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      height: 1.6rem;
    }
  `,
  LoadingDot: styled(motion.span)`
    display: block;
    width: 0.65rem;
    height: 0.65rem;
    background-color: ${({ theme: { colors } }) => colors.loadingDot};
    border-radius: 50%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      width: 0.8rem;
      height: 0.8rem;
    }
  `,
}

const ContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const DotVariants = {
  start: {
    y: '-50%',
  },
  end: {
    y: '50%',
  },
}

const DotTransition = {
  duration: 0.5,
  repeat: Infinity, // Loop animation infinitely
  repeatType: 'reverse', // Reverse the animation after each loop
  ease: 'easeInOut',
} as const

type LoadingDotsProps = {
  role?: string
  label?: string
}

export const LoadingDots = ({ role, label }: LoadingDotsProps) => (
  <S.LoadingDotsContainer
    variants={ContainerVariants}
    initial="start"
    animate="end"
    role={role}
    aria-label={label}
  >
    <S.LoadingDot variants={DotVariants} transition={DotTransition} />
    <S.LoadingDot variants={DotVariants} transition={DotTransition} />
    <S.LoadingDot variants={DotVariants} transition={DotTransition} />
  </S.LoadingDotsContainer>
)
