import React, { KeyboardEvent } from 'react';
import { SendHorizontal } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

interface ChatInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setInput: (input: string) => void;
  isLoading?: boolean;
}

export function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  setInput,
  isLoading,
}: ChatInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && input.trim().length > 0) {
        handleSubmit(e as any);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <TextareaAutosize
        tabIndex={0}
        rows={1}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Ask something...'
        spellCheck={false}
        className='w-full focus:outline-none bg-white dark:bg-zinc-800 border border-gray-200 rounded-lg px-4 py-3 pr-12 resize-none text-gray-800 dark:text-gray-200 dark:border-neutral-800 dark:bg-zinc-800/30'
      />
      <button
        type='submit'
        disabled={isLoading || input.trim().length === 0}
        className={`absolute right-2 top-2.5 p-1 rounded-md text-gray-500 dark:text-gray-400 
          ${
            isLoading || input.trim().length === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700'
          }`}
      >
        <SendHorizontal className='h-5 w-5' />
      </button>
    </form>
  );
}
