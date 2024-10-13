// ChatWrapperSkeleton.tsx
import React from 'react';
import { MessageSkeleton } from './MessageSkeleton';
import ChatNavbar from './ChatNavbar';

export const ChatWrapperSkeleton: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-gray-50 dark:bg-zinc-900 flex flex-col'>
      <div className='flex-1 flex flex-col max-w-4xl mx-auto w-full'>
        <ChatNavbar
          backBtn={true}
          isLoggedIn={false}
          themeToggler={true}
          heading='Wizmo 2.0'
        />

        <div className='flex-1 overflow-y-auto p-4 space-y-4'>
          {/* Generate multiple message skeletons */}
          {[...Array(3)].map((_, index) => (
            <MessageSkeleton key={index} />
          ))}
        </div>

        {/* Input skeleton */}
        <div className='sticky bottom-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-4'>
          <div className='flex items-center'>
            <div className='flex-grow h-10 bg-gray-200 dark:bg-gray-700 rounded-l-lg animate-pulse'></div>

            <div className='h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-r-lg animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
