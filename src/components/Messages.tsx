import { Message } from 'ai';
import { Copy, Check, Bot, User } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageSkeleton } from './MessageSkeleton';

export function Messages({
  messages,
  isLoading,
}: {
  messages: Message[];
  isLoading: boolean;
}) {

  if (isLoading) {
    return <MessageSkeleton />;
  }
  return (
    <div className='space-y-4 px-4 py-6'>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

function MessageItem({ message }: { message: Message }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex ${
        message.role === 'assistant' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`flex gap-3 max-w-[80%] ${
          message.role === 'assistant'
            ? 'bg-gray-100 dark:bg-zinc-800 rounded-t-lg rounded-r-lg'
            : 'bg-blue-100 dark:bg-zinc-800 rounded-t-lg rounded-l-lg flex-row-reverse'
        } p-4 shadow-md shadow-black/10 dark:border-1 dark:border-white/20`}
      >
        <div className='flex-shrink-0'>
          {message.role === 'assistant' ? (
            <Bot className='h-6 w-6 text-blue-500' />
          ) : (
            <User className='h-6 w-6 text-gray-500' />
          )}
        </div>

        <div
          className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}
        >
          <div className='prose dark:prose-invert max-w-none'>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>

        {message.role === 'assistant' && (
          <button
            onClick={copyToClipboard}
            className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          >
            {copied ? (
              <Check className='h-4 w-4' />
            ) : (
              <Copy className='h-4 w-4' />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
