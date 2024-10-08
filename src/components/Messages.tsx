// import { type Message as TMessage } from "ai/react";
// import { Message } from "./Message";
// import { MessageSquare } from "lucide-react";

// interface MessagesProps {
//   messages: TMessage[];
// }

// export const Messages = ({ messages }: MessagesProps) => {
//   return (
//     <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
//       {messages.length ? (
//         messages.map((message, i) => (
//           <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
//         ))
//       ) : (
//         <div className="flex-1 flex flex-col items-center justify-center gap-2">
//           <MessageSquare className="size-8 text-blue-500" />
//           <h3 className="font-semibold text-xl text-white">You&apos;re all set!</h3>
//           <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
//         </div>
//       )}
//     </div>
//   );
// };



import { Message } from 'ai';
import { Copy, Check, Bot, User } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function Messages({ messages }: { messages: Message[] }) {
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
      className={`flex gap-3 ${
        message.role === 'assistant'
          ? 'bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg'
          : ''
      }`}
    >
      {message.role === 'assistant' ? (
        <Bot className='h-6 w-6 text-blue-500' />
      ) : (
        <User className='h-6 w-6 text-gray-500' />
      )}
      <div className='flex-1'>
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
  );
}