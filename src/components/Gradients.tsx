import React from 'react';

type GradientType =
  | 'bluePink'
  | 'bluePurple'
  | 'lightDark'
  | 'darkLight'
  | 'lightPurple'
  | 'bluePinkDiagonal';

type Position = 'top' | 'bottom';
type Side = 'left' | 'right';

interface GradientBackgroundProps {
  type: GradientType;
  position?: Position;
  side?: Side;
}

const gradientClasses: Record<GradientType, string> = {
  bluePink:
    'bg-gradient-to-tl from-blue-300 via-purple-200 to-pink-300 dark:from-blue-100 dark:via-purple-900 dark:to-blue-900',
  bluePurple:
    'bg-gradient-to-tl from-blue-300 via-purple-200 to-pink-300 dark:from-blue-100 dark:via-purple-900 dark:to-blue-900',
  lightDark: 'bg-[#e2e2fb] dark:bg-[#280364]',
  darkLight: 'bg-[#e2e2fb] dark:bg-[#a7037e]',
  lightPurple: 'bg-[#8989f9d4] dark:bg-[#460556]',
  bluePinkDiagonal:
    'bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 dark:bg-gradient-to-bl dark:from-blue-100 dark:via-purple-900 dark:to-blue-900',
};

const positionClasses: Record<Position, string> = {
  top: 'top-[-6rem]',
  bottom: 'bottom-0',
};

const sideClasses: Record<Side, string> = {
  left: 'left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
  right: 'right-[11rem]',
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  type,
  position = 'top',
  side = 'left',
}) => {
  const baseClasses =
    'absolute -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem]';

  return (
    <div
      className={`
      ${baseClasses}
      ${gradientClasses[type]}
      ${positionClasses[position]}
      ${sideClasses[side]}
    `}
    ></div>
  );
};

export default GradientBackground;

// Usage examples:
export const BluePinkGradient = () => <GradientBackground type='bluePink' />;
export const BluePurpleGradient = () => (
  <GradientBackground type='bluePurple' />
);
export const LightDarkGradient = () => (
  <GradientBackground type='lightDark' side='right' />
);
export const DarkLightGradient = () => (
  <GradientBackground type='darkLight' side='right' />
);
export const LightPurpleGradient = () => (
  <GradientBackground type='lightPurple' position='bottom' side='right' />
);
export const BluePinkDiagonalGradient = () => (
  <GradientBackground type='bluePinkDiagonal' position='bottom' />
);
