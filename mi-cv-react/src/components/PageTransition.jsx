import { AnimatePresence } from 'framer-motion';
import { Overlay } from '../styles/PageTransitionStyles';

const PageTransition = ({ stage }) => {
  const isAnimating = stage === 'closing' || stage === 'opening';
  const isClosing = stage === 'closing';

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <Overlay
          key="page-transition"
          initial={{
            height: isClosing ? '0%' : '100%',
            top: '50%',
            bottom: '50%',
          }}
          animate={{ height: '100%', top: '0%', bottom: '0%' }}
          exit={{ height: '0%', top: '50%', bottom: '50%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  );
};

export default PageTransition;







