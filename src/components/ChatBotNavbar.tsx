import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ChevronLeft } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ChatBotNavbar() {
  const { theme } = useTheme();

  return (
    <header className='sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 p-4 flex items-center justify-between w-full'>
      {' '}
      <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2'>
        <button
          onClick={() => {
            window.history.back();
          }}
          className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? (
            <ChevronLeft className='h-5 w-5 text-blue-500 transition-all' />
          ) : (
            <ChevronLeft className='h-5 w-5 text-yellow-500 transition-all' />
          )}
        </button>
        Wizmo 2.0
      </h1>
      <ThemeToggle />
    </header>
  );
}
