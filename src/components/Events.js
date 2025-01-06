import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

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
    rgba(44, 30, 12, 0.95),
    rgba(77, 55, 25, 0.90)
  );
  border: 2px solid;
  border-image: linear-gradient(
    45deg,
    #FFD700,
    rgba(255, 215, 0, 0.2),
    #DAA520
  ) 1;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 215, 0, 0.15),
      transparent 70%
    );
    opacity: 0;
    animation: glowPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    pointer-events: none;
    z-index: 1;
    will-change: opacity, transform;
  }

  .card-content {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    z-index: 2;
  }

  h2 {
    color: #FFD700;
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    margin-bottom: clamp(1rem, 3vw, 1.5rem);
    font-family: 'Cinzel', serif;
    letter-spacing: 0.15em;
    position: relative;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    transform-style: preserve-3d;
    
    background: linear-gradient(
      45deg,
      #FFD700,
      #DAA520,
      #FFD700
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
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
        #FFD700,
        transparent
      );
      opacity: 0.8;
    }
  }
  
  p {
    color: rgba(255, 223, 0, 0.9);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    line-height: 1.8;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
    transform-style: preserve-3d;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
    transition: none !important;
    
    * {
      transform: none !important;
      transition: none !important;
    }
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

const TiltCard = ({ event }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    // Update CSS variables for the glow effect
    const mouseXPercent = ((e.clientX - rect.left) / width) * 100;
    const mouseYPercent = ((e.clientY - rect.top) / height) * 100;
    ref.current.style.setProperty('--mouse-x', `${mouseXPercent}%`);
    ref.current.style.setProperty('--mouse-y', `${mouseYPercent}%`);

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <EventCard
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-content" style={{ transform: "translateZ(50px)" }}>
        <ImageWrapper style={{ transform: "translateZ(75px)" }}>
          <img src={event.image} alt={event.name} />
          <ShineEffect />
        </ImageWrapper>
        <h2 style={{ transform: "translateZ(60px)" }}>{event.name}</h2>
        <p style={{ transform: "translateZ(40px)" }}>{event.description}</p>
      </div>
    </EventCard>
  );
};

function Events() {
  return (
    <EventsContainer>
      <Title>Ancient Trials</Title>
      <EventsGrid>
        {events.map((event, index) => (
          <TiltCard key={index} event={event} />
        ))}
      </EventsGrid>
    </EventsContainer>
  );
}

export default Events;
