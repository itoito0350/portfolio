import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Animación que cambia el color en tonos violetas
const colorShift = keyframes`
  0%, 100% {
    color: rgba(180, 140, 255, 0.3);  /* tono violeta pálido */
  }
  50% {
    color: rgba(150, 50, 250, 1); /* violeta intenso */
  }
`;

const TickerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: transparent;
  pointer-events: none;
  position: fixed;
  bottom: 5rem; 
  left: 0;
  z-index: 1000;
  height: 6rem; 
  display: flex;
  align-items: center;
`;

const TickerContent = styled.div`
  display: inline-block;
  padding-right: 100%;
  font-size: 5rem;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: ${scroll} 40s linear infinite;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
`;

const SkillSpan = styled.span`
  user-select: none;

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.6),   /* blanco semitransparente */
    rgba(158, 188, 175, 0.7),   /* verde muy claro */
    rgba(117, 155, 144, 0.6),   /* verde pastel medio */
    rgba(90, 130, 121, 0.5),    /* verde medio */
    rgba(78, 132, 119, 0.7),    /* verde #4e8477 */
    rgba(90, 130, 121, 0.5),    /* verde medio */
    rgba(117, 155, 144, 0.6),   /* verde pastel medio */
    rgba(158, 188, 175, 0.7),   /* verde muy claro */
    rgba(255, 255, 255, 0.6)    /* blanco semitransparente */
  );
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 12s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Dot = styled.span`
  color: rgba(255, 255, 255, 0.2);
  margin: 0 0.8rem;
  user-select: none;
`;

const skills = [
  'HTML5', 'CSS', 'REACT', 'NODE.JS', 'DJANGO', 'JAVA', 'PYTHON',
  'MYSQL', 'POSTGRESQL', 'DOCKER', 'GIT', 'FIGMA', 'REACT-NATIVE',
  '3DMAX', 'ANDROID STUDIO', 'UNITY', 'BOOTSTRAP',
];

const SkillsTicker = () => {
  const fullSkills = [...skills, ...skills];
  return (
    <TickerWrapper>
      <TickerContent>
        {fullSkills.map((skill, i) => (
          <React.Fragment key={i}>
            <SkillSpan index={i}>{skill}</SkillSpan>
            {i !== fullSkills.length - 1 && <Dot>.</Dot>}
          </React.Fragment>
        ))}
      </TickerContent>
    </TickerWrapper>
  );
};

export default SkillsTicker;
