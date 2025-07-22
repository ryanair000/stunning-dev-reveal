# ClutchScore: AI-Powered PlayStation Gaming Assistant

## 🎮 Overview

**ClutchScore** is an innovative web application that serves as your AI-powered gaming companion specifically designed for PlayStation enthusiasts. The app combines cutting-edge AI technology with a comprehensive gaming database to provide personalized insights, tips, and assistance for PlayStation games.

### 🎯 Mission Statement
*"AI-Powered Insights for the Ultimate Gamer"* - ClutchScore aims to enhance your PlayStation gaming experience through intelligent assistance and comprehensive game tracking.

## ✨ Key Features

### 🤖 AI Chat Assistant
- **Specialized PlayStation Knowledge**: AI assistant trained specifically for PlayStation games
- **Real-time Responses**: Powered by OpenAI's GPT-4 for intelligent, contextual conversations
- **Gamer-Friendly Tone**: Enthusiastic and engaging responses tailored for gaming enthusiasts
- **Well-Formatted Responses**: Step-by-step guides, bulleted lists, and structured information

### 🎮 Game Management
- **Recent Games Tracking**: Monitor your recently played PlayStation titles
- **Trophy Progress**: Track trophy completion across your game library
- **Platinum Trophy Showcase**: Dedicated section for platinum achievements
- **Game Information Cards**: Detailed game stats, ratings, and progress indicators

### 👤 User Experience
- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Authentication System**: Secure login/signup functionality via NextAuth.js
- **Profile Management**: Personalized user profiles and game preferences
- **Social Features**: Connect and share gaming achievements

### 📱 Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Chat**: Smooth, animated chat interface with loading states
- **Theme Support**: Light/dark theme switching capabilities
- **Progressive Web App**: Fast loading and offline-capable features

## 🛠 Technology Stack

### Frontend
- **Framework**: [Next.js 13.5.1](https://nextjs.org/) with App Router
- **Language**: TypeScript for type safety and better development experience
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components**: [Radix UI](https://radix-ui.com/) for accessible, unstyled components
- **Animations**: [Framer Motion](https://framer.com/motion/) for smooth animations
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography

### Backend & APIs
- **API Routes**: Next.js API routes for server-side functionality
- **AI Integration**: OpenAI GPT-4 for intelligent chat responses
- **Database**: [Supabase](https://supabase.com/) for user data and game information
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) for secure user management

### Development Tools
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React hooks and context for state management
- **Code Quality**: ESLint for code linting and consistency
- **Package Manager**: npm for dependency management

## 📁 Project Structure

```
ClutchScore/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── chat/                 # AI chat functionality
│   │   ├── games/                # Game data endpoints
│   │   └── signup/               # User registration
│   ├── login/                    # Login page
│   ├── signup/                   # Registration page
│   ├── profile/                  # User profile page
│   ├── socials/                  # Social features page
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── providers.tsx             # Context providers
├── components/                   # Reusable React components
│   ├── ui/                       # Base UI components (Radix UI)
│   ├── chat-interface.tsx        # Main chat component
│   ├── chat-message.tsx          # Individual message component
│   ├── recent-games.tsx          # Games tracking component
│   ├── game-info.tsx             # Detailed game information
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Site footer
│   └── theme-provider.tsx        # Theme management
├── lib/                          # Utility libraries
│   ├── openai.ts                 # OpenAI API integration
│   ├── supabase.ts               # Supabase client setup
│   └── utils.ts                  # Common utilities
├── types/                        # TypeScript type definitions
├── hooks/                        # Custom React hooks
├── public/                       # Static assets
├── functionalities.md            # Feature documentation
├── system_prompt.md              # AI system prompt guide
└── package.json                  # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- OpenAI API key
- Supabase account and project

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ryanair000/ClutchScore.git
   cd ClutchScore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys and configuration

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Chat Interface
- **Real-time AI conversations** with PlayStation game expertise
- **Message persistence** and conversation history
- **Loading states** with animated spinners
- **Suggestion prompts** for common gaming questions
- **Auto-scroll** to latest messages

### Game Tracking
- **Recent Games Tab**: Display recently played titles
- **Platinum Trophy Tab**: Showcase completed platinum trophies
- **Progress Bars**: Visual representation of trophy completion
- **Game Cards**: Rich information cards with ratings and metadata

### User Authentication
- **Secure login/registration** system
- **Session management** with NextAuth.js
- **Protected routes** for authenticated features
- **User profiles** with gaming preferences

## 🎯 AI Assistant Capabilities

The ClutchScore AI assistant specializes in:

- **Game Walkthroughs**: Step-by-step guides for challenging sections
- **Trophy Hunting**: Detailed trophy requirements and strategies
- **Game Recommendations**: Personalized suggestions based on preferences
- **Multiplayer Setup**: Instructions for online gaming features
- **Platform Knowledge**: Comprehensive PlayStation ecosystem information
- **Performance Tips**: Optimization advice for better gameplay

## 🔧 Configuration

### AI System Prompt
The AI assistant uses a specialized system prompt that:
- Focuses exclusively on PlayStation content
- Maintains an enthusiastic, gamer-friendly tone
- Provides well-formatted, structured responses
- Includes step-by-step explanations and lists
- Incorporates PlayStation-specific terminology

### Customization Options
- **Theme Settings**: Light/dark mode preferences
- **AI Persona**: Customizable assistant personality
- **Game Preferences**: Personalized gaming interests
- **Notification Settings**: Trophy and game update alerts

## 📊 Performance Features

- **Optimized Bundle**: Webpack configurations for smaller bundle sizes
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports for better performance
- **Caching Strategies**: Efficient API response caching
- **SEO Optimization**: Meta tags and structured data

## 🔒 Security & Privacy

- **Secure Authentication**: Industry-standard auth practices
- **API Key Protection**: Server-side API key management
- **Data Encryption**: Secure data transmission and storage
- **Privacy Controls**: User data management and deletion options

## 🌟 Future Roadmap

### Planned Features
- **PlayStation Network Integration**: Direct PSN account linking
- **Achievement Tracking**: Real-time trophy notifications
- **Social Gaming**: Friends lists and gaming communities
- **Game Reviews**: User-generated content and ratings
- **Mobile App**: Native iOS and Android applications
- **Voice Assistant**: Voice-activated gaming assistance

### Enhancements
- **Enhanced AI**: More sophisticated game knowledge base
- **Analytics Dashboard**: Detailed gaming statistics and insights
- **Streaming Integration**: Twitch and YouTube connectivity
- **Tournament Features**: Competitive gaming organization
- **VR Support**: PlayStation VR game assistance

## 🤝 Contributing

We welcome contributions to ClutchScore! Please see our contributing guidelines for more information on how to get started.

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Maintain test coverage for new features
- Follow the established code style and formatting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Contact the development team
- Check the documentation and FAQ

---

**ClutchScore** - *Elevating your PlayStation gaming experience through AI-powered insights and comprehensive game tracking.*
