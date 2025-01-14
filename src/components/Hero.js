import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
`;

const Title = styled(motion.h1)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.accent};
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const CallToAction = styled(motion.a)`
  margin-top: 40px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background}; /* Dynamic button text color */
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hi, I'm <span>Ayham Hussien</span>
      </Title>
      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Junior Software Engineer specializing in Full-Stack and Cloud Development.
      </Subtitle>
      <CallToAction href="#projects" whileHover={{ scale: 1.05 }}>
        View My Work
      </CallToAction>
    </HeroSection>
  );
}

export default Hero;
