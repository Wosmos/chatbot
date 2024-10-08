'use client';

import { Message, useChat } from 'ai/react';
import { Messages } from './Messages';
import { ChatInput } from './ChatInput';
import { ThemeToggle } from './ThemeToggle';
import { MessageSkeleton } from './MessageSkeleton';
import { ChevronLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { theme } = useTheme();
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    setInput,
    isLoading,
  } = useChat({
    api: '/api/chat-stream',
    body: { sessionId },
    initialMessages,
  });

  return (
    <div className='relative min-h-screen bg-gray-50 dark:bg-zinc-900 flex flex-col'>
      <div className='flex-1 flex flex-col max-w-4xl mx-auto w-full'>
        <header className='sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 p-4 flex items-center justify-between'>
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

        <div className='flex-1 overflow-y-auto'>
          <Messages messages={messages} />
          {isLoading && (
            <div className='px-4 py-6'>
              <MessageSkeleton />
            </div>
          )}
        </div>

        <div className='sticky bottom-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-4'>
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
