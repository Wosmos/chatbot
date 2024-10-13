import React from 'react';
import Image from 'next/image';
import img from '../app/api/sampleDocsHomePageImg.png';

const MainContent: React.FC = () => {
  return (
    <main className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='mb-6 text-4xl font-bold'>Web Chat AI Assistant</h1>

      <p className='mb-4'>
        Web chat AI Assistant is an intelligent chatbot that can analyze and
        discuss the content of any website. Simply enter a URL, and start a
        conversation about the webpage's content.
      </p>

      <h2 id='overview' className='mb-4 mt-8 text-3xl font-semibold'>
        🌟 Overview
      </h2>
      <p className='mb-4'>This application allows users to:</p>
      <ul className='list-inside list-disc space-y-2'>
        <li>Chat with an AI about any website's content</li>
        <li>Copy and share AI responses</li>
        <li>Toggle between light and dark themes</li>
        <li>Engage in natural, context-aware conversations</li>
      </ul>

      <div className='my-8'>
        <Image
          src={img} // Directly use the imported image
          alt='App Screenshot Placeholder'
          layout='responsive' // Automatically adjusts layout
          className='rounded-lg shadow-lg'
        />
      </div>

      <h2 id='tech-stack' className='mb-4 mt-8 text-3xl font-semibold'>
        🛠️ Tech Stack
      </h2>
      <ul className='list-inside list-disc space-y-2'>
        <li>
          <strong>Frontend Framework</strong>: Next.js 14 (App Router)
        </li>
        <li>
          <strong>Styling</strong>: Tailwind CSS
        </li>
        <li>
          <strong>UI Components</strong>: Custom components with shadcn/ui
          inspiration
        </li>
        <li>
          <strong>Database</strong>: Upstash Redis
        </li>
        <li>
          <strong>AI Integration</strong>: Anthropic's Claude API
        </li>
        <li>
          <strong>State Management</strong>: React Hooks
        </li>
        <li>
          <strong>Theme Management</strong>: next-themes
        </li>
      </ul>

      <h3 className='mb-2 mt-4 text-2xl font-semibold'>Key Libraries</h3>
      <ul className='list-inside list-disc space-y-2'>
        <li>
          <code className='bg-muted px-1 py-0.5 rounded'>ai</code> - For
          handling AI chat functionality
        </li>
        <li>
          <code className='bg-muted px-1 py-0.5 rounded'>react-markdown</code> -
          Rendering markdown responses
        </li>
        <li>
          <code className='bg-muted px-1 py-0.5 rounded'>lucide-react</code> -
          Beautiful icons
        </li>
        <li>
          <code className='bg-muted px-1 py-0.5 rounded'>
            react-textarea-autosize
          </code>{' '}
          - Auto-expanding input field
        </li>
      </ul>

      <h2 id='getting-started' className='mb-4 mt-8 text-3xl font-semibold'>
        🚀 Getting Started
      </h2>

      <h3 className='mb-2 mt-4 text-2xl font-semibold'>Prerequisites</h3>
      <ul className='list-inside list-disc space-y-2'>
        <li>Node.js 18 or higher</li>
        <li>npm or yarn</li>
        <li>An Upstash Redis database</li>
        <li>Anthropic API key</li>
      </ul>

      <h3 className='mb-2 mt-4 text-2xl font-semibold'>Installation</h3>
      <ol className='list-inside list-decimal space-y-4'>
        <li>
          Clone the repository
          <pre className='bg-muted mt-2 p-2 rounded'>
            <code>
              git clone https://github.com/Wosmos/chatbot
              <br />
              cd webchat-ai-assistant
            </code>
          </pre>
        </li>
        <li>
          Install dependencies
          <pre className='bg-muted mt-2 p-2 rounded'>
            <code>npm install # or yarn install</code>
          </pre>
        </li>
        <li>
          Set up environment variables
          <p className='mt-2'>
            Create a{' '}
            <code className='bg-muted px-1 py-0.5 rounded'>.env.local</code>{' '}
            file in the root directory:
          </p>
          <pre className='bg-muted mt-2 p-2 rounded'>
            <code>
              ANTHROPIC_API_KEY=*******************
              <br />
              UPSTASH_REDIS_REST_URL=****************
              <br />
              UPSTASH_REDIS_REST_TOKEN=*****************
              <br />
            </code>
          </pre>
        </li>
        <li>
          Run the development server
          <pre className='bg-muted mt-2 p-2 rounded'>
            <code>npm run dev # or yarn dev</code>
          </pre>
        </li>
      </ol>
      <p className='mt-4'>
        Open{' '}
        <a
          href='http://localhost:3000'
          className='text-primary hover:underline'
        >
          http://localhost:3000
        </a>{' '}
        in your browser to see the application.
      </p>

      <h2 id='project-structure' className='mb-4 mt-8 text-3xl font-semibold'>
        📦 Project Structure
      </h2>
      <pre className='bg-muted p-4 rounded'>
        <code>
          webchat-ai-assistant/
          <br />
          ├── app/
          <br />
          │ ├── [...url]/
          <br />
          │ │ └── page.tsx # Dynamic route for chat <br />
          │ ├── api/
          <br />
          │ │ └── chat-stream/
          <br />
          │ │ └── route.ts # API route for chat
          <br />
          │ ├── layout.tsx
          <br />
          │ └── page.tsx # Home page
          <br />
          ├── components/
          <br />
          │ ├── ChatNavbar.tsx
          <br />
          │ ├── ChatHeader.tsx
          <br />
          │ ├── ChatInput.tsx
          <br />
          │ ├── ChatWrapper.tsx
          <br />
          │ ├── Gradient.tsx
          <br />
          │ ├── Messages.tsx
          <br />
          │ ├── MessageSkeleton.tsx
          <br />
          │ ├── Providers.tsx
          <br />
          │ ├── SplashScreen.tsx
          <br />
          │ └── ThemeToggle.tsx
          <br />
          ├── lib/ │ ├── rag-chat.ts # RAGChat config
          <br />
          │ ├── redis.ts # Redis client
          <br />
          │ └── utils.ts # Utility functions
          <br />
          └── public/
          <br />
          └── ...
          <br />
        </code>
      </pre>

      <h2 id='key-features' className='mb-4 mt-8 text-3xl font-semibold'>
        🔑 Key Features
      </h2>
      <ul className='list-inside list-disc space-y-2'>
        <li>
          <strong>Website Content Analysis</strong>: Instantly chat about any
          website's content
        </li>
        <li>
          <strong>Responsive Design</strong>: Works seamlessly on desktop and
          mobile
        </li>
        <li>
          <strong>Dark Mode</strong>: Toggle between light and dark themes
        </li>
        <li>
          <strong>Copy Functionality</strong>: Easily copy AI responses
        </li>
        <li>
          <strong>Loading States</strong>: Visual feedback during API calls
        </li>
        <li>
          <strong>Auto-expanding Input</strong>: Comfortable text input
          experience
        </li>
      </ul>

      <h2 id='contributing' className='mb-4 mt-8 text-3xl font-semibold'>
        🤝 Contributing
      </h2>
      <p>
        Contributions are welcome! Please feel free to submit a Pull Request.
      </p>

      <h2 id='license' className='mb-4 mt-8 text-3xl font-semibold'>
        📄 License
      </h2>
      <p>
        This project is licensed under the MIT License - see the{' '}
        <button
          className='text-primary hover:underline'
          onClick={() => {
            alert(
              `Just kidding lol 😁 , \ni am just a student duh \ni just made this for fun \nif you liked it you can give me ⭐ on my github repo \nor contact me for your projects \ntill then keep awesome ✌️`
            );
          }}
        >
          LICENSE
        </button>{' '}
        file for details.
      </p>
    </main>
  );
};

export default MainContent;
