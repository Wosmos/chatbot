import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ChevronLeft, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
interface NavItem {
  label: string;
  href: string;
}

interface ChatBotNavbarProps {
  backBtn: boolean;
  themeToggler?: boolean;
  heading: string | { logoSrc: string; alt: string };
  isLoggedIn: boolean;
  onLoginClick?: () => void;
  navItems?: NavItem[];
}

export default function ChatNavbar({
  backBtn,
  themeToggler,
  heading,
  isLoggedIn,
  onLoginClick,
  navItems = [],
}: ChatBotNavbarProps) {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header
        className='sticky top-0 z-20 bg-white/55 dark:bg-zinc-900/55 border-b border-gray-200 dark:border-zinc-700 p-4 flex items-center justify-between w-full rounded-lg'
        style={{
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2'>
          {backBtn && (
            <button
              onClick={() => window.history.back()}
              className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300 md:block hidden'
              aria-label='Go back'
            >
              <ChevronLeft
                className={`h-5 w-5 ${
                  theme === 'dark' ? 'text-yellow-500' : 'text-blue-500'
                } transition-all`}
              />
            </button>
          )}
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2'>
            {typeof heading === 'string' ? (
              heading
            ) : (
              <Image
                width={40}
                height={40}
                src={heading.logoSrc}
                alt={heading.alt}
                className='h-8'
              />
            )}
          </h1>
        </div>
        <div className='md:flex hidden items-center gap-4'>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500'
            >
              {item.label}
            </a>
          ))}
          {themeToggler && <ThemeToggle />}
          <button
            onClick={onLoginClick}
            className='px-4 py-2 text-blue-500 dark:text-yellow-500 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
          >
            {isLoggedIn ? <div>Logout</div> : <div>Login</div>}
          </button>
        </div>
        <button
          onClick={toggleDrawer}
          className='md:hidden block p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
          aria-label='Toggle menu'
        >
          <Menu
            className={`h-6 w-6 ${
              theme === 'dark' ? 'text-yellow-500' : 'text-blue-500'
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-30 w-64 bg-white dark:bg-zinc-900 shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className='p-4'>
          <button
            onClick={toggleDrawer}
            className='mb-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
            aria-label='Close menu'
          >
            <X
              className={`h-6 w-6 ${
                theme === 'dark' ? 'text-yellow-500' : 'text-blue-500'
              }`}
            />
          </button>
          <div className='flex flex-col gap-4'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-500'
              >
                {item.label}
              </a>
            ))}
            {themeToggler && <ThemeToggle />}
            <button
              onClick={onLoginClick}
              className='px-4 py-2 text-blue-500 dark:text-yellow-500 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
