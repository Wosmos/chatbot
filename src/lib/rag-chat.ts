import { upstash, RAGChat } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
});


// import { upstash, RAGChat } from '@upstash/rag-chat';
// import lillaLibunsaData from './data/lillaLibunsaData.json';


// export type Message = {
//   id: string;
//   role: 'user' | 'assistant';
//   content: string;
// };

// export const ragChat = new RAGChat({
//   model: upstash('meta-llama/Meta-Llama-3-8B-Instruct'),
// });

// // Add Lilla Libunsa data to the context
// // ragChat.context.add({
// //   type: 'json',
// //   content: JSON.stringify(lillaLibunsaData),
// //   config: { chunkOverlap: 50, chunkSize: 200 },
// // });


// // ragChat.context.add({
// //   type: 'text',
// //   data: JSON.stringify(lillaLibunsaData),
// //   config: { chunkOverlap: 50, chunkSize: 200 },
// // });