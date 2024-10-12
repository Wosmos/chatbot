

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, Clipboard, ChevronRight } from 'lucide-react';

export default function ChatHeader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState('');
   const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [suggestions] = useState([
    'example.com',
    'wikipedia.org',
    'github.com',
    'wasiff.vercel.app',
  ]);
  const router = useRouter();

  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Please enter a website URL.');
      return;
    }
    if (url.length > 100) {
      setError(
        'URL is too long. Please enter a URL with less than 100 characters.'
      );
      return;
    }

    if (!isValidUrl(`http://${url}`)) {
      setError('Please enter a valid website URL.');
      return;
    }
    setIsLoading(true);

    const cleanUrl = url.replace(/^https?:\/\//, '');

    const updatedHistory = [cleanUrl, ...chatHistory.slice(0, 9)];
    setChatHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));

    router.push(`/${cleanUrl}`);
  };
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full max-w-3xl mx-auto px-4 py-8  p-4'>
      <div className='w-full max-w-3xl mx-auto px-4 py-8'>
        <div className='text-center mb-8'>
          <MessageSquare className='h-12 w-12 dark:text-blue-500 text-yellow-500 mx-auto mb-4' />
          <h1 className='text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
            Website Chat Assistant
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            Enter any website URL to start an intelligent conversation about its
            content
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex group focus-within:ring-2 dark:focus-within:ring-blue-500 focus-within:ring-yellow-500 rounded-lg transition-all'>
            <input
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Enter website URL (e.g., example.com)'
              className='flex-grow px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none transition-all'
            />
            <button
              type='button'
              onClick={handlePaste}
              className='px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all border border-gray-300 dark:border-gray-600 border-l-0'
            >
              <Clipboard className='h-5 w-5' />
            </button>
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className=' hover:bg-blue-600  focus:outline-none focus:ring-2 dark:focus:ring-blue-500 focus:ring-yellow-500 transition-all
            w-full px-4 py-3 rounded-lg  border-yellow-500 dark:hover:bg-blue-500 border-2 dark:border-blue-500 text-gray-600 dark:text-gray-300 font-medium'
            disabled={isLoading}
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
        <div className='my-8 '>
          <h2 className='text-center mb-4 text-lg font-semibold  text-gray-900 dark:text-gray-100'>
            Suggestions
          </h2>
          <div className='flex flex-wrap gap-2 justify-center items-center'>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setUrl(suggestion)}
                className='px-5 py-2 bg-gray-200 dark:bg-gray-700   text-gray-700 dark:text-gray-300 rounded-3xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all border-1 border-gray-300 dark:border-gray-600'
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-center my-8 text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100'>
            Recent Chats
          </h2>
          <div className='space-y-2'>
            {chatHistory.map((item, index) => (
              <button
                key={index}
                onClick={() => router.push(`/${item}`)}
                className='w-full text-left px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between  '
              >
                <span>{item}</span>
                <ChevronRight className='h-5 w-5 text-gray-400' />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
