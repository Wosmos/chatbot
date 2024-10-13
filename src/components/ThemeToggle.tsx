import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className=' flex items-center justify-center  gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300 text-lg'
      aria-label='Toggle theme '
    >
      {theme === 'dark' ? (
        <>
          <Moon className='h-5 w-5 text-yellow-500 transition-all' />
          <p className='text-yellow-500 md:hidden'>Dark Mode</p>
        </>
      ) : (
        <>
          <Sun className='h-5 w-5 text-blue-500 transition-all' />
          <p className='text-blue-500 md:hidden'>Light Mode</p>
        </>
      )}
    </button>
  );
}
