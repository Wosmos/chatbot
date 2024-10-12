import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AINode = () => (
  <svg width='180' height='180' viewBox='0 0 120 120'>
    <motion.circle
      cx='60'
      cy='60'
      r='50'
      stroke='#4F46E5'
      strokeWidth='2'
      fill='none'
      initial={{ pathLength: 0, rotate: 0 }}
      animate={{ pathLength: 1, rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
    <motion.circle
      cx='60'
      cy='60'
      r='40'
      stroke='#818CF8'
      strokeWidth='2'
      fill='none'
      initial={{ pathLength: 0, rotate: 0 }}
      animate={{ pathLength: 1, rotate: -360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
    {[0, 1, 2].map((index) => (
      <motion.circle
        key={index}
        cx='60'
        cy='60'
        r='30'
        stroke='#C7D2FE'
        strokeWidth='2'
        fill='none'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 3,
          times: [0, 0.5, 1],
          repeat: Infinity,
          delay: index * 0.5,
        }}
      />
    ))}
    <motion.circle
      cx='60'
      cy='60'
      r='5'
      fill='#4F46E5'
      initial={{ scale: 0.5 }}
      animate={{ scale: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {[0, 1, 2, 3].map((index) => (
      <motion.circle
        key={index}
        cx='60'
        cy='60'
        r='2'
        fill='#C7D2FE'
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, 30 * Math.cos((index * Math.PI) / 2)],
          y: [0, 30 * Math.sin((index * Math.PI) / 2)],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      />
    ))}
  </svg>
);

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const [centerIcon, setCenterIcon] = useState(true);

  useEffect(() => {
    const centerTimer = setTimeout(() => {
      setCenterIcon(false);
    }, 500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => {
      clearTimeout(centerTimer);
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center overflow-hidden  bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black'
    >
      <div className='relative flex flex-col items-center z-10'>
        <div className='flex flex-col justify-center items-center w-full'>
          {/* AI-themed animated icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: centerIcon ? 0 : 0,
              y: centerIcon ? 0 : -100,
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            //   x: { duration: 0.5, delay: 0.5 },
              y: { duration: 0.5, delay: 0.5 },
            }}
            className='mt-10 -mb-16'
          >
            <AINode />
          </motion.div>
          {/* Animated Logo Text */}
          <motion.div
            className='relative flex space-x-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {['W', 'I', 'Z', 'M', 'O', '2', '.', '0'].map((letter, index) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 50 }}
                transition={{
                  duration: 0.6,
                  delay: showText ? index * 0.1 : 0,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className='inline-block font-black text-7xl tracking-wider'
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  WebkitTextStroke: '2px rgba(99,102,241,0.8)',
                  color: 'transparent',
                  textShadow: '0 0 20px rgba(99,102,241,0.5)',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* Enhanced Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='mt-6 text-xl font-light tracking-widest text-indigo-200'
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Chat Smarter, Learn Faster
        </motion.div>
      </div>
    </motion.div>
  );
}
