'use client';
import ChatHeader from '@/components/ChatHeader';
import { ChatInput } from '@/components/ChatInput';
import Link from 'next/link';
import { JSX } from 'react/jsx-runtime';

export default function Home(): JSX.Element {
  return (
    <main className='flex min-h-screen justify-center items-center  dark:border-neutral-800 dark:bg-zinc-800/30'>
      <ChatHeader />
    </main>
  );
}
