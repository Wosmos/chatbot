// import { ragChat } from "@/lib/rag-chat";
// import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
// import { NextRequest } from "next/server";

// export const POST = async (req: NextRequest) => {
//   const { messages, sessionId } = await req.json();

//   const lastMessage = messages[messages.length - 1].content;

//   const response = await ragChat.chat(lastMessage, { streaming: true, sessionId });

//   return aiUseChatAdapter(response);
// };


import { ragChat } from '@/lib/rag-chat';
import { aiUseChatAdapter } from '@upstash/rag-chat/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const { messages, sessionId } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = await ragChat.chat(lastMessage, {
      streaming: true,
      sessionId,
    });

    return aiUseChatAdapter(response);
  } catch (error) {
    console.error('Error in chat stream:', error);
    return NextResponse.json(
      { error: 'An error occurred during processing' },
      { status: 500 }
    );
  }
};