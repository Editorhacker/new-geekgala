import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23614E1A' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
      radial-gradient(circle at center, #3a1c71 0%, #000000 100%);
    opacity: 0.9;
  }
`;

const MysticalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(97, 78, 26, 0.1) 10px,
    rgba(97, 78, 26, 0.1) 20px
  );
  animation: shimmer 30s linear infinite;
  
  @keyframes shimmer {
    0% {
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
  }
`;

const AncientSymbols = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C0A080' fill-rule='evenodd'%3E%3Ccircle cx='25' cy='25' r='12'/%3E%3Cpath d='M25 0v50M0 25h50M8 8l34 34M42 8L8 42'/%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s linear infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(20px) rotate(180deg);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
`;

const AnimatedTitle = styled(motion.div)`
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #C0A080;
  text-shadow: 
    0 0 10px rgba(192, 160, 128, 0.5),
    0 0 20px rgba(192, 160, 128, 0.3),
    0 0 30px rgba(192, 160, 128, 0.2);
  font-family: 'Cinzel', serif;
  letter-spacing: 0.2em;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #C0A080;
  margin-bottom: 3rem;
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.6;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.1em;
`;

const ExploreButton = styled(motion.button)`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  background: transparent;
  color: #C0A080;
  border: 2px solid #C0A080;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.2em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(192, 160, 128, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(192, 160, 128, 0.1);
    text-shadow: 0 0 10px rgba(192, 160, 128, 0.5);
    box-shadow: 
      0 0 20px rgba(192, 160, 128, 0.2),
      inset 0 0 20px rgba(192, 160, 128, 0.2);
  }
`;

const AncientSymbol = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(192, 160, 128, 0.3);
  transform: rotate(45deg);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(192, 160, 128, 0.3);
  }

  &::before {
    transform: rotate(30deg);
  }

  &::after {
    transform: rotate(60deg);
  }
`;

const letterVariants = {
  initial: { 
    opacity: 0,
    y: 50,
    rotateY: 90
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 1,
      delay: i * 0.1,
      type: "spring",
      damping: 12
    },
  }),
};

function Home() {
  const navigate = useNavigate();
  const title = "Geeks  Gala";
  
  const symbols = [
    { size: 80, left: '10%', top: '20%', delay: 0 },
    { size: 120, left: '85%', top: '15%', delay: 0.3 },
    { size: 100, left: '15%', top: '75%', delay: 0.6 },
    { size: 90, left: '80%', top: '70%', delay: 0.9 },
  ];

  return (
    <HomeContainer>
      <MysticalOverlay />
      <AncientSymbols />
      {symbols.map((symbol, index) => (
        <AncientSymbol
          key={index}
          size={symbol.size}
          style={{
            left: symbol.left,
            top: symbol.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            rotate: [45, 405]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: symbol.delay,
          }}
        />
      ))}
      <ContentWrapper>
        <div style={{ overflow: 'hidden' }}>
          {title.split('').map((char, i) => (
            <AnimatedTitle
              key={i}
              style={{ display: 'inline-block' }}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={i}
            >
              {char === ' ' ? '\u00A0' : char}
            </AnimatedTitle>
          ))}
        </div>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Unlock the Ancient Secrets of Technology
        </Subtitle>
        <ExploreButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/events')}
        >
          Begin Journey
        </ExploreButton>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;
