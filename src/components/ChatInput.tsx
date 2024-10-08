// "use client";

// import { Button, Textarea } from "@nextui-org/react";
// import { Send } from "lucide-react";
// import { type useChat } from "ai/react";

// type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
// type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
// type SetInput = ReturnType<typeof useChat>["setInput"];

// interface ChatInputProps {
//   input: string;
//   handleInputChange: HandleInputChange;
//   handleSubmit: HandleSubmit;
//   setInput: SetInput;
// }

// export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
//   return (
//     <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
//       <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
//         <div className="relative flex h-full flex-1 items-stretch md:flex-col">
//           <div className="relative flex flex-col w-full flex-grow p-4">
//             <form onSubmit={handleSubmit} className="relative">
//               <Textarea
//                 minRows={4}
//                 autoFocus
//                 onChange={handleInputChange}
//                 value={input}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault();
//                     handleSubmit();
//                     setInput("");
//                   }
//                 }}
//                 placeholder="Enter your question..."
//                 className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
//               />

//               <Button
//                 size="sm"
//                 type="submit"
//                 className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
//               >
//                 <Send className="size-4" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import { SendHorizonal } from 'lucide-react';
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
  isLoading,
}: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className='relative'>
      <TextareaAutosize
        tabIndex={0}
        rows={1}
        value={input}
        onChange={handleInputChange}
        placeholder='Ask something...'
        spellCheck={false}
        className='w-full focus:outline-none bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-4 py-3 pr-12 resize-none text-gray-800 dark:text-gray-200'
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
        <SendHorizonal className='h-5 w-5' />
      </button>
    </form>
  );
}