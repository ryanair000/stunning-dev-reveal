# Socio - AI-Powered Social Media Caption Generator

**🚀 An intelligent social media caption generation platform built with Next.js, Supabase, and OpenAI**

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Authentication & User Management](#authentication--user-management)
- [Pricing Plans](#pricing-plans)
- [AI Integration](#ai-integration)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Usage Limits & Billing](#usage-limits--billing)
- [Contributing](#contributing)

## 🌟 Overview

Socio is a comprehensive AI-powered platform designed to help content creators, marketers, and businesses generate engaging social media captions. The application leverages advanced AI models to create platform-specific content optimized for various social media channels including Instagram, Twitter, Facebook, LinkedIn, and TikTok.

### Key Value Propositions
- **Cost-Efficient AI**: Utilizes optimized models like GPT-4o for high-quality output at reasonable costs
- **Platform-Specific**: Tailored caption generation for different social media platforms
- **Flexible Pricing**: Multiple tiers from free to enterprise with pay-as-you-go options
- **User-Friendly**: Intuitive interface with real-time generation and usage tracking

## ✨ Features

### Core Functionality
- **AI Caption Generation**: Text and image-based caption creation
- **Multi-Platform Support**: Instagram, Twitter, Facebook, LinkedIn, TikTok, YouTube, Pinterest
- **Tone Customization**: Professional, Casual, Energetic, Friendly, Humorous tones
- **Image Analysis**: AI-powered image caption generation using vision models
- **Trial System**: Ungated trial access for new users (5 text + 5 image generations)

### User Experience
- **Real-time Generation**: Instant caption creation with loading states
- **Caption History**: Storage and retrieval of generated content
- **Usage Tracking**: Real-time credit monitoring and usage statistics
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion

### Account Management
- **Authentication**: Email/password and OAuth (Google, GitHub) support
- **Profile Management**: User plans, usage limits, and billing information
- **Credit System**: Monthly reset cycles with clear limit tracking
- **Upgrade Prompts**: Smart notifications for plan upgrades

## 🛠 Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Next.js 14 (App Router) | React-based framework with server-side rendering |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Animation** | Framer Motion | Smooth transitions and micro-interactions |
| **Database** | Supabase PostgreSQL | User management and data storage |
| **Authentication** | Supabase Auth | Email, OAuth, and session management |
| **AI Engine** | OpenAI GPT-4o | Text and image caption generation |
| **Icons** | Heroicons | Consistent SVG icon library |
| **Payments** | M-Pesa Integration | Local payment processing for Kenya |
| **Hosting** | Vercel (recommended) | Serverless deployment platform |

## 📁 Project Structure

```
/
├── app/                          # Next.js app directory
│   ├── api/
│   │   └── generate/
│   │       └── route.js         # AI caption generation endpoint
│   ├── auth/
│   │   ├── callback/
│   │   │   └── route.js         # OAuth callback handler
│   │   └── page.jsx             # Authentication page
│   ├── checkout/
│   │   └── [planId]/
│   │       └── page.jsx         # Plan checkout page
│   ├── payment/
│   │   └── success/
│   │       └── page.jsx         # Payment success page
│   ├── pricing/
│   │   └── page.jsx             # Pricing plans page
│   ├── support/                 # Support pages
│   ├── layout.jsx               # Root layout
│   └── page.jsx                 # Main application page
├── components/
│   ├── Header.jsx               # Navigation header
│   ├── CreditTopUpPopup.jsx     # Upgrade prompt modal
│   └── RedeemKeyDialog.jsx      # Key redemption component
├── lib/
│   └── supabase/
│       ├── client.js            # Client-side Supabase config
│       └── server.js            # Server-side Supabase config
├── public/                      # Static assets
├── styles/
│   └── globals.css              # Global styles and Tailwind directives
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
└── netlify.toml                 # Netlify deployment config
```

## 🔐 Authentication & User Management

### Authentication Methods
1. **Email/Password**: Traditional signup with email confirmation
2. **OAuth Providers**: Google and GitHub integration
3. **Phone Authentication**: SMS OTP (implemented but disabled)

### User States
- **Anonymous Users**: Trial access (5 text + 5 image generations)
- **Registered Users**: Enhanced limits based on selected plan
- **Authenticated Sessions**: Persistent login with Supabase Auth

### Profile Management
- User plan tracking (free, pro, business, enterprise)
- Monthly usage counters with automatic reset
- Usage history and analytics
- Account upgrade prompts

## 💰 Pricing Plans

### Subscription Tiers

#### **Free Plan**
- **Price**: $0/month
- **Limits**: 10 text + 5 image generations/month
- **Features**: 
  - Standard caption quality
  - Basic themes & tone control
  - Community support

#### **Pro Plan** ⭐ Most Popular
- **Price**: 1,500 KSH/month (~$11 USD)
- **Limits**: Unlimited text + 200 image generations/month
- **Features**:
  - Premium themes & tone control
  - Priority support
  - Hashtag generator
  - Higher quality models (GPT-4 Vision)
  - 2 months free with annual plan

#### **Business Plan**
- **Price**: 5,000 KSH/month (~$37 USD)
- **Limits**: Unlimited text + 500 image generations/month
- **Features**:
  - Team collaboration features
  - Custom themes/branding options
  - Analytics dashboard
  - Highest priority support

#### **Enterprise Plan**
- **Price**: Starting at 20,000 KSH/month (~$150 USD)
- **Features**:
  - Unlimited generations
  - Dedicated/Fine-tuned AI models
  - API access
  - 24/7 support & SLA guarantees
  - Custom integrations

### Pay-As-You-Go Options
- **Text Captions**: 10 KSH per generation
- **Image Captions**: 20 KSH per generation
- **Bulk Credits**: 200 KSH for 50 text + 20 image credits (20% discount)

## 🤖 AI Integration

### Models Used
- **Primary**: OpenAI GPT-4o for text generation
- **Backup**: OpenAI GPT-4 Turbo for cost optimization
- **Image Analysis**: GPT-4 Vision for image-based captions

### Generation Process
1. **Input Validation**: Verify user inputs and authentication
2. **Usage Check**: Validate against plan limits
3. **Prompt Engineering**: Platform-specific prompt optimization
4. **AI Generation**: API call to OpenAI with error handling
5. **Post-Processing**: Output cleaning and formatting
6. **Usage Tracking**: Update user generation counters

### Cost Optimization
- **Request Caching**: Redis/Vercel KV for duplicate prompts
- **Model Selection**: Dynamic model switching based on plan
- **Payload Compression**: Optimized request/response sizes

## 💾 Database Schema

### Core Tables (Supabase)

#### `profiles`
```sql
- id (UUID, Primary Key, references auth.users)
- plan (TEXT) - 'free', 'pro', 'business', 'enterprise'
- monthly_text_generations_used (INTEGER)
- monthly_image_generations_used (INTEGER)
- usage_reset_date (DATE)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### `captions` (Implied)
```sql
- id (UUID, Primary Key)
- user_id (UUID, Foreign Key to profiles.id)
- type (TEXT) - 'text' or 'image'
- prompt (JSONB) - Original request data
- generated_content (TEXT)
- platform (TEXT)
- tone (TEXT)
- created_at (TIMESTAMP)
```

## 🛠 API Endpoints

### `/api/generate` (POST)
**Primary caption generation endpoint**

#### Request Body
```json
{
  "type": "text" | "image",
  "prompt": {
    "topic": "string",
    "platform": "instagram" | "twitter" | "facebook" | "linkedin" | "tiktok",
    "tone": "casual" | "professional" | "energetic" | "friendly" | "humorous"
  },
  "imageData": "base64_string" // Required for image type
}
```

#### Response
```json
{
  "caption": "Generated caption text",
  "usage": {
    "remaining_text": 10,
    "remaining_image": 5
  }
}
```

#### Error Responses
- `400`: Invalid request body
- `429`: Usage limit exceeded
- `500`: AI generation failed

### `/auth/callback` (GET)
**OAuth callback handler for Google/GitHub authentication**

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Supabase account and project
- OpenAI API account
- Vercel account (for deployment)

### Environment Variables
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key

# Optional: For Vercel KV caching
KV_URL=your_vercel_kv_url
KV_REST_API_URL=your_kv_rest_api_url
KV_REST_API_TOKEN=your_kv_token
KV_REST_API_READ_ONLY_TOKEN=your_kv_readonly_token
```

### Local Development
```bash
# Clone the repository
git clone git@github.com:ryanair000/socio.git
cd socio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Supabase Setup
1. Create a new Supabase project
2. Enable email authentication
3. Configure OAuth providers (Google, GitHub)
4. Set up Row Level Security policies
5. Create the profiles table

#### RLS Policies
```sql
-- User access policy
CREATE POLICY "User access" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- User insert policy  
CREATE POLICY "User insert" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Enable Vercel KV for caching (optional)
4. Deploy with automatic builds on push

### Environment Configuration
- Set all required environment variables
- Configure domain and SSL
- Set up monitoring and analytics

### Performance Optimization
- Enable Vercel Edge Functions for faster response times
- Configure caching headers for static assets
- Implement request caching with Vercel KV

## 📊 Usage Limits & Billing

### Limit Enforcement
- **Real-time Tracking**: Usage counters updated on each generation
- **Monthly Reset**: Automatic limit reset every 30 days
- **Soft Limits**: Warning notifications before hitting limits
- **Hard Limits**: Generation blocking when limits exceeded

### Cost Structure
- **Text Generation**: ~$0.0004 per request (GPT-4o)
- **Image Generation**: ~$0.01 per request (GPT-4 Vision)
- **Storage**: $0.023/GB/month (Supabase)

### Billing Integration
- M-Pesa payment integration for Kenyan market
- Plan upgrade/downgrade functionality
- Usage-based billing for pay-as-you-go
- Automatic renewal and proration

## 🤝 Contributing

### Development Guidelines
1. Follow existing code structure and conventions
2. Use TypeScript for new components
3. Implement proper error handling
4. Add appropriate loading states
5. Test on multiple platforms and devices

### Key Areas for Contribution
- Additional social media platform support
- Enhanced AI prompt engineering
- Performance optimizations
- UI/UX improvements
- Internationalization

---

## 📞 Support & Contact

For questions, feature requests, or support:
- **Email**: support@socio.app
- **Documentation**: Available in `/context.md`
- **Issues**: GitHub Issues for bug reports

---

**Built with ❤️ for content creators worldwide**

*Last updated: January 2025*
