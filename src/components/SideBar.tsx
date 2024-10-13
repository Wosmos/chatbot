'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarItems = [
  { title: 'Overview', href: '#overview' },
  { title: 'Tech Stack', href: '#tech-stack' },
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Project Structure', href: '#project-structure' },
  { title: 'Key Features', href: '#key-features' },
  { title: 'Contributing', href: '#contributing' },
  { title: 'License', href: '#license' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarOpen &&
        (event.target as HTMLElement).closest('aside') === null
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sidebarOpen]);
  return (
    <div className='flex min-h-screen dark:border-neutral-800 dark:bg-zinc-800/30'>
      {/* Sidebar for mobile */}
      <aside
        className={`dark:border-neutral-800 fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } `}
        style={{
          backdropFilter: 'blur(15px)',
        }}
      >
        <div className='flex h-full flex-col border-r border-border px-3 py-4'>
          <div className='mb-5 flex items-center justify-between'>
            <Link href='/' className='text-2xl font-bold'>
              Wizmo 2.0
            </Link>
            <button onClick={() => setSidebarOpen(false)} className='lg:hidden'>
              <X className='h-6 w-6' />
            </button>
          </div>
          <nav className='space-y-1'>
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-200/80 hover:text-white'
                style={{
                  backdropFilter: 'blur(15px)',
                }}
                onClick={() => setSidebarOpen(false)}
              >
                <ChevronRight className='mr-2 h-4 w-4' />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Sidebar for desktop */}
      <aside className='hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:overflow-y-auto lg:bg-background lg:border-r lg:border-border'>
        <div className='flex h-full flex-col px-3 py-4'>
          <div className='mb-5'>
            <Link href='/' className='text-2xl font-bold'>
              Wizmo 2.0
            </Link>
          </div>
          <nav className='space-y-1'>
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
              >
                <ChevronRight className='mr-2 h-4 w-4' />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
