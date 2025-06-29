import { useEffect, useState } from 'react';
import { TransitionContainer, TopLayer, BottomLayer, GlitchLine } from "../styles/PageTransitionStyles";

const PageTransition = ({ isAnimating }) => {
  const [lines, setLines] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const generateRandomLine = () => {
      const randomDirection = Math.random() > 0.5 ? 'horizontal' : 'vertical';
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const minLength = randomDirection === 'horizontal' ? window.innerWidth * 0.5 : window.innerHeight * 0.5;
      const maxLength = randomDirection === 'horizontal' ? window.innerWidth * 1 : window.innerHeight * 1.5;
      const randomLength = Math.random() * (maxLength - minLength) + minLength;
      const randomOrigin = Math.random();

      setLines((prevLines) => [
        ...prevLines,
        { randomDirection, randomX, randomY, randomLength, randomOrigin },
      ]);
    };

    for (let i = 0; i < 30; i++) {
      generateRandomLine();
    }
  }, []);

  useEffect(() => {
    if (!isAnimating && firstLoad) {
      setFirstLoad(false);
    }
  }, [isAnimating, firstLoad]);

  return (
    <TransitionContainer>
      <TopLayer
        initial={firstLoad ? false : { y: '-100%' }}  // No initial anim on first load
        animate={isAnimating ? { y: '0%' } : { y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <BottomLayer
        initial={firstLoad ? false : { y: '100%' }} // No initial anim on first load
        animate={isAnimating ? { y: '0%' } : { y: '100%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {lines.map((line, index) => (
        <GlitchLine
          key={index}
          className={line.randomDirection}
          animate={{
            opacity: [0, 0.4, 1, 0.4, 0],
            width: line.randomDirection === 'horizontal'
              ? (line.randomOrigin > 0.5 ? ['0%', '100%'] : ['100%', '0%'])
              : undefined,
            height: line.randomDirection === 'vertical'
              ? (line.randomOrigin > 0.5 ? ['0%', '100%'] : ['100%', '0%'])
              : undefined,
          }}
          transition={{
            duration: 3 + Math.random(),
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 2,
          }}
          style={{
            left: line.randomDirection === 'vertical' ? `${line.randomX}px` : 0,
            top: line.randomDirection === 'horizontal' ? `${line.randomY}px` : 0,
            width: line.randomDirection === 'horizontal' ? `${line.randomLength}px` : '1px',
            height: line.randomDirection === 'vertical' ? `${line.randomLength}px` : '1px',
          }}
        />
      ))}
    </TransitionContainer>
  );
};

export default PageTransition;





