# WebChat AI Assistant

WebChat AI Assistant is an intelligent chatbot that can analyze and discuss the content of any website. Simply enter a URL, and start a conversation about the webpage's content.

## 🌟 Overview

This application allows users to:
- Chat with an AI about any website's content
- Copy and share AI responses
- Toggle between light and dark themes
- Engage in natural, context-aware conversations

![App Screenshot Placeholder](/api/placeholder/800/400)

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui inspiration
- **Database**: Upstash Redis
- **AI Integration**: Anthropic's Claude API
- **State Management**: React Hooks
- **Theme Management**: next-themes

### Key Libraries
- `ai` - For handling AI chat functionality
- `react-markdown` - Rendering markdown responses
- `lucide-react` - Beautiful icons
- `react-textarea-autosize` - Auto-expanding input field

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- An Upstash Redis database
- Anthropic API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/webchat-ai-assistant.git
cd webchat-ai-assistant
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
ANTHROPIC_API_KEY=your_api_key_here
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Project Structure

```
webchat-ai-assistant/
├── app/
│   ├── [...url]/
│   │   └── page.tsx    # Dynamic route for chat pages
│   ├── api/
│   │   └── chat-stream/
│   │       └── route.ts # API route for chat
│   ├── layout.tsx
│   └── page.tsx        # Landing page
├── components/
│   ├── ChatHeader.tsx
│   ├── ChatInput.tsx
│   ├── ChatWrapper.tsx
│   ├── Messages.tsx
│   ├── Providers.tsx
│   └── ThemeToggle.tsx
├── lib/
│   ├── rag-chat.ts     # RAG implementation
│   ├── redis.ts        # Redis client
│   └── utils.ts        # Utility functions
└── public/
    └── ...
```

## 🔑 Key Features

- **Website Content Analysis**: Instantly chat about any website's content
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Copy Functionality**: Easily copy AI responses
- **Loading States**: Visual feedback during API calls
- **Auto-expanding Input**: Comfortable text input experience

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.