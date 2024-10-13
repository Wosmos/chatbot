// ChatWrapper.tsx
'use client';
import { Message, useChat } from 'ai/react';
import { Messages } from './Messages';
import { ChatInput } from './ChatInput';
import ChatNavbar from './ChatNavbar';
import { ChatWrapperSkeleton } from './ChatWrapperSkeleton';
import { useState, useEffect } from 'react';
import { MessageSkeleton } from './MessageSkeleton';

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: '/api/chat-stream',
      body: { sessionId },
      initialMessages,
    });

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ChatWrapperSkeleton />;
  }

  return (
    <div className='relative min-h-screen bg-gray-50 dark:bg-zinc-900 flex flex-col items-center justify-center w-full mx-auto px-4 py-8 p-4'>
      <div className='flex-1 flex flex-col max-w-4xl mx-auto w-full'>
        <ChatNavbar
          backBtn={true}
          themeToggler={true}
          heading='Wizmo 2.0'
          isLoggedIn={false}
          onLoginClick={() => {
            console.log('Login/Logout clicked');
          }}
        />

        <div className='flex-1 overflow-y-auto'>
          <Messages messages={messages} isLoading={isLoading} />
        </div>

        <div className='sticky bottom-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-4'>
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
};