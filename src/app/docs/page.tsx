'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Github, PanelRightOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../api/sampleDocsHomePageImg.png';
import ChatNavbar from '@/components/ChatNavbar';
import { useTheme } from 'next-themes';
interface SidebarItem {
  title: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { title: 'Overview', href: '#overview' },
  { title: 'Tech Stack', href: '#tech-stack' },
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Project Structure', href: '#project-structure' },
  { title: 'Key Features', href: '#key-features' },
  { title: 'Contributing', href: '#contributing' },
  { title: 'License', href: '#license' },
];

const DocsPage: React.FC = () => {
  const { theme } = useTheme();
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

  // Close sidebar when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <nav className='space-y-1 mt-10'>
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

      {/* Main content */}
      <div className='container mx-auto px-4 py-8 max-w-3xl'>
        <header className='sticky top-0 z-40 w-full justify-center'>
          <div className='flex h-16 items-center justify-between px-4 '>
            <button
              onClick={() => setSidebarOpen(true)}
              className='lg:hidden absolute z-[99]   md:hidden block p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all duration-300'
            >
              {/* <Menu className='h-6 w-6' /> */}
              <PanelRightOpen
                className={`h-6 w-6 ${
                  theme === 'dark' ? 'text-yellow-500' : 'text-blue-500'
                }`}
              />
            </button>
            <div className='flex items-center space-x-4 w-full max-w-3xl '>
              <ChatNavbar
                heading={'Wizmo 2.0'}
                isLoggedIn={false}
                themeToggler={true}
                backBtn={true}
                navItems={[
                  { label: 'About', href: '/about' },
                  { label: 'Docs', href: '/docs' },
                  { label: 'Contact Us', href: '/contact' },
                ]}
              />
            </div>
          </div>
        </header>

        <main className='container mx-auto px-4 py-8 max-w-3xl'>
          <h1 className='mb-6 text-4xl font-bold'>Web Chat Ai Assistant</h1>

          <p className='mb-4'>
            Web chat ai Assistant is an intelligent chatbot that can analyze and
            discuss the content of any website. Simply enter a URL, and start a
            conversation about the webpage's content.
          </p>

          <h2 id='overview' className='mb-4 mt-8 text-3xl font-semibold'>
            🌟 Overview
          </h2>
          <p className='mb-4'>This application allows users to:</p>
          <ul className='list-inside list-disc space-y-2'>
            <li>Chat with an AI about any website's content</li>
            <li>Copy and share AI responses</li>
            <li>Toggle between light and dark themes</li>
            <li>Engage in natural, context-aware conversations</li>
          </ul>

          <div className='my-8'>
            <Image
              src={img} // Directly use the imported image
              alt='App Screenshot Placeholder'
              layout='responsive' // Automatically adjusts layout
              className='rounded-lg shadow-lg'
            />
          </div>

          <h2 id='tech-stack' className='mb-4 mt-8 text-3xl font-semibold'>
            🛠️ Tech Stack
          </h2>
          <ul className='list-inside list-disc space-y-2'>
            <li>
              <strong>Frontend Framework</strong>: Next.js 14 (App Router)
            </li>
            <li>
              <strong>Styling</strong>: Tailwind CSS
            </li>
            <li>
              <strong>UI Components</strong>: Custom components with shadcn/ui
              inspiration
            </li>
            <li>
              <strong>Database</strong>: Upstash Redis
            </li>
            <li>
              <strong>AI Integration</strong>: Anthropic's Claude API
            </li>
            <li>
              <strong>State Management</strong>: React Hooks
            </li>
            <li>
              <strong>Theme Management</strong>: next-themes
            </li>
          </ul>

          <h3 className='mb-2 mt-4 text-2xl font-semibold'>Key Libraries</h3>
          <ul className='list-inside list-disc space-y-2'>
            <li>
              <code className='bg-muted px-1 py-0.5 rounded'>ai</code> - For
              handling AI chat functionality
            </li>
            <li>
              <code className='bg-muted px-1 py-0.5 rounded'>
                react-markdown
              </code>{' '}
              - Rendering markdown responses
            </li>
            <li>
              <code className='bg-muted px-1 py-0.5 rounded'>lucide-react</code>{' '}
              - Beautiful icons
            </li>
            <li>
              <code className='bg-muted px-1 py-0.5 rounded'>
                react-textarea-autosize
              </code>{' '}
              - Auto-expanding input field
            </li>
          </ul>

          <h2 id='getting-started' className='mb-4 mt-8 text-3xl font-semibold'>
            🚀 Getting Started
          </h2>

          <h3 className='mb-2 mt-4 text-2xl font-semibold'>Prerequisites</h3>
          <ul className='list-inside list-disc space-y-2'>
            <li>Node.js 18 or higher</li>
            <li>npm or yarn</li>
            <li>An Upstash Redis database</li>
            <li>Anthropic API key</li>
          </ul>

          <h3 className='mb-2 mt-4 text-2xl font-semibold'>Installation</h3>
          <ol className='list-inside list-decimal space-y-4'>
            <li>
              Clone the repository
              <pre className='bg-muted mt-2 p-2 rounded'>
                <code>
                  git clone https://github.com/Wosmos/chatbot
                  <br />
                  cd webchat-ai-assistant
                </code>
              </pre>
            </li>
            <li>
              Install dependencies
              <pre className='bg-muted mt-2 p-2 rounded'>
                <code>npm install # or yarn install</code>
              </pre>
            </li>
            <li>
              Set up environment variables
              <p className='mt-2'>
                Create a{' '}
                <code className='bg-muted px-1 py-0.5 rounded'>.env.local</code>{' '}
                file in the root directory:
              </p>
              <pre className='bg-muted mt-2 p-2 rounded'>
                <code>
                  ANTHROPIC_API_KEY=*******************
                  <br />
                  UPSTASH_REDIS_REST_URL=****************
                  <br />
                  UPSTASH_REDIS_REST_TOKEN=*****************
                  <br />
                </code>
              </pre>
            </li>
            <li>
              Run the development server
              <pre className='bg-muted mt-2 p-2 rounded'>
                <code>npm run dev # or yarn dev</code>
              </pre>
            </li>
          </ol>
          <p className='mt-4'>
            Open{' '}
            <a
              href='http://localhost:3000'
              className='text-primary hover:underline'
            >
              http://localhost:3000
            </a>{' '}
            in your browser to see the application.
          </p>

          <h2
            id='project-structure'
            className='mb-4 mt-8 text-3xl font-semibold'
          >
            📦 Project Structure
          </h2>
          <pre className='bg-muted p-4 rounded'>
            <code>
              webchat-ai-assistant/
              <br />
              ├── app/
              <br />
              │ ├── [...url]/
              <br />
              │ │ └── page.tsx # Dynamic route for chat <br />
              │ ├── api/
              <br />
              │ │ └── chat-stream/
              <br />
              │ │ └── route.ts # API route for chat
              <br />
              │ ├── layout.tsx
              <br />
              │ └── page.tsx # Home page
              <br />
              ├── components/
              <br />
              │ ├── ChatNavbar.tsx
              <br />
              │ ├── ChatHeader.tsx
              <br />
              │ ├── ChatInput.tsx
              <br />
              │ ├── ChatWrapper.tsx
              <br />
              │ ├── Gradient.tsx
              <br />
              │ ├── Messages.tsx
              <br />
              │ ├── MessageSkeleton.tsx
              <br />
              │ ├── Providers.tsx
              <br />
              │ ├── SplashScreen.tsx
              <br />
              │ └── ThemeToggle.tsx
              <br />
              ├── lib/ │ ├── rag-chat.ts # RAGChat config
              <br />
              │ ├── redis.ts # Redis client
              <br />
              │ └── utils.ts # Utility functions
              <br />
              └── public/
              <br />
              └── ...
              <br />
            </code>
          </pre>

          <h2 id='key-features' className='mb-4 mt-8 text-3xl font-semibold'>
            🔑 Key Features
          </h2>
          <ul className='list-inside list-disc space-y-2'>
            <li>
              <strong>Website Content Analysis</strong>: Instantly chat about
              any website's content
            </li>
            <li>
              <strong>Responsive Design</strong>: Works seamlessly on desktop
              and mobile
            </li>
            <li>
              <strong>Dark Mode</strong>: Toggle between light and dark themes
            </li>
            <li>
              <strong>Copy Functionality</strong>: Easily copy AI responses
            </li>
            <li>
              <strong>Loading States</strong>: Visual feedback during API calls
            </li>
            <li>
              <strong>Auto-expanding Input</strong>: Comfortable text input
              experience
            </li>
          </ul>

          <h2 id='contributing' className='mb-4 mt-8 text-3xl font-semibold'>
            🤝 Contributing
          </h2>
          <p>
            Contributions are welcome! Please feel free to submit a Pull
            Request.
          </p>

          <h2 id='license' className='mb-4 mt-8 text-3xl font-semibold'>
            📄 License
          </h2>
          <p>
            This project is licensed under the MIT License - see the{' '}
            <button
              className='text-primary hover:underline'
              onClick={() => {
                alert(
                  `Just kidding lol 😁 , \ni am just a student duh \ni just made this for fun \nif you liked it you can give me ⭐ on my github repo \nor contant me for your projects \ntill then keep awesome ✌️`
                );
              }}
            >
              LICENSE
            </button>{' '}
            file for details.
          </p>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;
