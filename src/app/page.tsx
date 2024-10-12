'use client';

import ChatHeader from '@/components/ChatHeader';

import { JSX } from 'react/jsx-runtime';
import SplashScreen from '@/components/SplashScreen';
import { useState } from 'react';
export default function Home(): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)}  />}
      <main className='flex flex-col w-full min-h-screen justify-center items-center  dark:border-neutral-800 dark:bg-zinc-800/30'>
        <ChatHeader /> 
      </main>
    </>
  );
}
