import React from 'react';

const GreenSmoke = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.15,
      }}
    >
      <defs>
        <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4e8477" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4e8477" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className="smoke-circle circle1" cx="200" cy="200" r="120" fill="url(#greenGlow)" />
      <circle className="smoke-circle circle2" cx="400" cy="400" r="100" fill="url(#greenGlow)" />
      <circle className="smoke-circle circle3" cx="600" cy="150" r="140" fill="url(#greenGlow)" />
      <circle className="smoke-circle circle4" cx="650" cy="450" r="90" fill="url(#greenGlow)" />

      <style>{`
        .smoke-circle {
          animation: drift 10s ease-in-out infinite alternate;
          transform-origin: center;
        }
        .circle1 {
          animation-duration: 12s;
          animation-delay: 0s;
        }
        .circle2 {
          animation-duration: 14s;
          animation-delay: 2s;
        }
        .circle3 {
          animation-duration: 16s;
          animation-delay: 4s;
        }
        .circle4 {
          animation-duration: 18s;
          animation-delay: 1s;
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translate(10px, 20px) scale(1.05);
            opacity: 0.25;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
        }
      `}</style>
    </svg>
  );
};

export default GreenSmoke;
