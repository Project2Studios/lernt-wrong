# Voting System Setup Guide

This guide will help you set up the voting system infrastructure for the "What Did You Learn That Isn't True?" app.

## Phase 1: Basic Infrastructure Setup

### Prerequisites

1. **Neon Database Account**
   - Sign up at [neon.tech](https://neon.tech)
   - Create a new project
   - Copy the connection string

2. **Vercel Account** (for deployment)
   - Sign up at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`

### Local Development Setup

1. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit .env and add your Neon database URL
   DATABASE_URL="postgresql://username:password@hostname/dbname"
   SESSION_SECRET="your-random-secret-key-here"
   ```

2. **Database Setup**
   ```bash
   # Install dependencies (if not already done)
   npm install

   # Set up database schema and sample data
   npm run db:setup
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Testing the Voting System

The app now includes a **smart fallback system** that lets you test with your full TypeScript facts dataset even without a database!

1. **Fallback Mode (No Database Required)**
   - Just run `npm run dev` without setting up the database
   - The app will automatically use your TypeScript facts from `src/data/outdatedFacts.ts`
   - Shows "🔄 Demo Mode - Using Local Facts" badge
   - Voting works with local state (votes persist during session)
   - Perfect for testing the UI/UX with your complete facts dataset

2. **Database Mode (Full Functionality)**
   - Set up your Neon database with the setup guide above
   - App will automatically detect and use database facts
   - Real voting with abuse prevention and persistence
   - No fallback badge shown

3. **Test Voting**
   - Each fact card shows thumbs up/down buttons with counts
   - Click a vote button - counts update immediately
   - Try voting again - shows "Already voted" message
   - In fallback mode: votes show "Vote recorded! (Demo mode)"
   - In database mode: votes are permanently stored

4. **Check Database** (Database mode only)
   - Log into your Neon dashboard
   - Verify tables: `facts`, `votes`, `vote_sessions`, `vote_counts`
   - Check that votes are being recorded

### API Endpoints

The system creates these API endpoints:

- `GET /api/facts` - Fetch all facts with vote counts
- `POST /api/session` - Create a new voting session
- `POST /api/votes` - Submit a vote

### Development Features

- **Optimistic UI Updates**: Votes appear instantly before server confirmation
- **Session Management**: Anonymous voting with 24-hour sessions
- **Rate Limiting**: 50 votes per day per session
- **Abuse Prevention**: IP hashing and browser fingerprinting
- **Real-time Counts**: Vote counts update immediately

### Database Schema

Key tables created:

- **facts**: Stores fact content with metadata
- **votes**: Individual vote records with session tracking
- **vote_sessions**: Session management for rate limiting
- **vote_counts**: Materialized view for performance

### Deployment to Vercel

1. **Connect Repository**
   ```bash
   vercel
   # Follow prompts to connect your GitHub repo
   ```

2. **Environment Variables**
   - Add `DATABASE_URL` in Vercel dashboard
   - Add `SESSION_SECRET` in Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Next Steps (Future Phases)

- **Phase 2**: Enhanced voting UI and vote management
- **Phase 3**: Advanced abuse prevention with CAPTCHA
- **Phase 4**: User authentication system
- **Phase 5**: Full fact migration from TypeScript to database

### Troubleshooting

**Common Issues:**

1. **Database Connection Error**
   - Verify DATABASE_URL in .env
   - Check Neon dashboard for connection string
   - Ensure IP is whitelisted in Neon

2. **API Errors in Development**
   - Ensure all dependencies are installed
   - Check that database schema is set up
   - Verify environment variables are loaded

3. **Voting Not Working**
   - Check browser console for errors
   - Verify session creation is working
   - Check network tab for API responses

**Getting Help:**
- Check the browser console for error messages
- Verify database tables exist in Neon dashboard
- Test API endpoints directly using curl or Postman

### Security Features

- **Privacy-Friendly**: No personal data collection
- **IP Hashing**: IPs are hashed, not stored in plain text
- **Session Expiration**: 24-hour session limits
- **Rate Limiting**: Prevents spam and abuse
- **Duplicate Prevention**: One vote per fact per session