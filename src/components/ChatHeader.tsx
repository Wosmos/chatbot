'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare } from 'lucide-react';

export default function ChatHeader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Remove http:// or https:// if present
    const cleanUrl = url.replace(/^https?:\/\//, '');

    // Redirect to the chat page with the URL
    router.push(`/${cleanUrl}`);
  };

  return (
    <div className='w-full max-w-3xl mx-auto px-4 py-8 '>
      <div className='text-center mb-8'>
        <div className='flex justify-center mb-4'>
          <MessageSquare className='h-12 w-12 text-blue-500' />
        </div>
        <h1 className='text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
          Website Chat Assistant
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-300'>
          Enter any website URL to start an intelligent conversation about its
          content
        </p>
      </div>

      <form onSubmit={handleSubmit} className='relative'>
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Enter website URL (e.g., example.com)'
          className='w-full  px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all   dark:focus:ring-yellow-500 '
        />
        <button
          type='submit'
          disabled={!url || isLoading}
          className={`mt-4 w-full px-4 py-3 rounded-lg  border-yellow-500 dark:hover:bg-blue-500 border-2 dark:border-blue-500 text-gray-600 dark:text-gray-300 font-medium 
            ${
              isLoading
                ? 'opacity-50 cursor-not-allowed'
                : 'dark:hover:bg-blue-600 hover:bg-yellow-500 hover:text-white'
            } 
            transition-all duration-200 ease-in-out transform cursor-pointer`}
        >
          {isLoading ? (
            <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
              <span className='ml-2'>Loading...</span>
            </div>
          ) : (
            'Start Chat'
          )}
        </button>
      </form>
    </div>
  );
}
