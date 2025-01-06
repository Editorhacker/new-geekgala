import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EventsContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 1rem;
  background: #000000;
  color: #C0A080;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23614E1A' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
      radial-gradient(circle at center, #3a1c71 0%, #000000 100%);
    opacity: 0.9;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 4rem;
  color: #C0A080;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.2em;
  position: relative;
  text-shadow: 0 0 20px rgba(192, 160, 128, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    letter-spacing: 0.15em;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      #C0A080,
      transparent
    );

    @media (max-width: 768px) {
      width: 150px;
      bottom: -15px;
    }

    @media (max-width: 480px) {
      width: 100px;
      bottom: -10px;
    }
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid rgba(192, 160, 128, 0.3);
  transform: translateZ(30px);
  transition: transform 0.3s ease;
  background: linear-gradient(
    135deg,
    rgba(192, 160, 128, 0.2),
    rgba(97, 78, 26, 0.2)
  );

  @media (max-width: 768px) {
    height: 180px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    height: 160px;
    margin-bottom: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ShineEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(192, 160, 128, 0.1) 45%,
    rgba(192, 160, 128, 0.3) 50%,
    rgba(192, 160, 128, 0.1) 55%,
    transparent 100%
  );
  transform: translateX(-100%);
  animation: shine 3s infinite;
  pointer-events: none;
  z-index: 2;

  @keyframes shine {
    0% {
      transform: translateX(-100%) skewX(-15deg);
    }
    50% {
      transform: translateX(100%) skewX(-15deg);
    }
    100% {
      transform: translateX(100%) skewX(-15deg);
    }
  }
`;

const EventCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(30, 20, 10, 0.95),
    rgba(60, 40, 20, 0.85)
  );
  border: 2px solid;
  border-image: linear-gradient(
    45deg,
    rgba(192, 160, 128, 0.8),
    rgba(192, 160, 128, 0.2),
    rgba(97, 78, 26, 0.8)
  ) 1;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
  animation: cardGlow 3s ease-in-out infinite alternate;

  @keyframes cardGlow {
    from {
      box-shadow: 
        0 0 30px rgba(192, 160, 128, 0.3),
        inset 0 0 30px rgba(192, 160, 128, 0.2),
        0 0 50px rgba(192, 160, 128, 0.1),
        0 0 70px rgba(97, 78, 26, 0.1);
    }
    to {
      box-shadow: 
        0 0 40px rgba(192, 160, 128, 0.4),
        inset 0 0 40px rgba(192, 160, 128, 0.3),
        0 0 60px rgba(192, 160, 128, 0.2),
        0 0 80px rgba(97, 78, 26, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C0A080' fill-opacity='0.05'%3E%3Cpath d='M20 0L0 20h5l15-15 15 15h5M40 20L20 40v-5l15-15-15-15v-5'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.15;
    z-index: 0;
  }

  h2 {
    color: #C0A080;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.15em;
    position: relative;
    text-shadow: 
      0 0 30px rgba(192, 160, 128, 0.4),
      0 0 60px rgba(192, 160, 128, 0.3),
      0 0 90px rgba(192, 160, 128, 0.2);
    transform: translateZ(20px);
    background: linear-gradient(
      45deg,
      #C0A080,
      #614E1A,
      #C0A080
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: shine-text 3s linear infinite;

    @keyframes shine-text {
      to {
        background-position: 200% center;
      }
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        #C0A080,
        transparent
      );
      animation: borderGlow 3s ease-in-out infinite alternate;

      @keyframes borderGlow {
        from {
          opacity: 0.5;
          width: 50%;
        }
        to {
          opacity: 1;
          width: 70%;
        }
      }
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  
  p {
    color: rgba(192, 160, 128, 0.9);
    font-size: 1.1rem;
    line-height: 1.8;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 1;
    transform: translateZ(10px);
    text-shadow: 0 0 20px rgba(192, 160, 128, 0.2);

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    animation: cardGlowMobile 3s ease-in-out infinite alternate;

    @keyframes cardGlowMobile {
      from {
        box-shadow: 
          0 0 20px rgba(192, 160, 128, 0.2),
          inset 0 0 20px rgba(192, 160, 128, 0.1),
          0 0 30px rgba(192, 160, 128, 0.1);
      }
      to {
        box-shadow: 
          0 0 25px rgba(192, 160, 128, 0.3),
          inset 0 0 25px rgba(192, 160, 128, 0.2),
          0 0 35px rgba(192, 160, 128, 0.15);
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const events = [
  {
    id: 1,
    name: "BGMI",
    description: "Enter the sacred battlegrounds where warriors clash in epic combat. Prove your worth in the ancient arena.",
    image: "/bgmi.jpg"
  },
  {
    id: 2,
    name: "TECH QUIZ",
    description: "Unravel the mysteries of technology through riddles and challenges. Test your wisdom in this mystical trial.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "HACKATHON",
    description: "Channel the power of ancient knowledge to forge new creations. 48 hours of mystical innovation awaits.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "TECH SHARK",
    description: "Present your visions to the Council of Tech Elders. Let your ideas illuminate the path to the future.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: (i) => ({ 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      damping: 12
    }
  })
};

function Events() {
  const handleMouseMove = (e, card) => {
    // Disable tilt effect on mobile devices
    if (window.innerWidth <= 768) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (card) => {
    if (window.innerWidth <= 768) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <EventsContainer>
      <Title>Ancient Trials</Title>
      <EventsGrid>
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.02 }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <ImageWrapper>
              <img src={event.image} alt={event.name} />
              <ShineEffect />
            </ImageWrapper>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </EventCard>
        ))}
      </EventsGrid>
    </EventsContainer>
  );
}

export default Events;
