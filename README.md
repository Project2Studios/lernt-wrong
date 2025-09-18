# What Did You Learn That Isn't True?

A React web application that reveals outdated "facts" people learned in school based on their graduation year. Discover how scientific knowledge has evolved and vote on which outdated facts you find most interesting.

![App Screenshot](mainpage.png)

## 🔬 Features

- **Era-Based Facts**: Enter your graduation year to see facts that were taught as true but have since been debunked
- **Interactive Voting**: Vote on which facts you find most helpful or surprising
- **Rich Database**: 171+ curated facts across 53 categories including Science, Medicine, Technology, and History
- **Real-time Updates**: Database-driven with vote tracking and session management
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling with shadcn/ui components
- **React Router** for navigation
- **React Query** for server state management
- **Vite** for fast development and building

### Backend
- **Vercel Serverless Functions** for API endpoints
- **Neon PostgreSQL** for database (serverless)
- **Session-based voting** with abuse prevention
- **Materialized views** for performance optimization

### Key Components
- `FactCard.tsx` - Interactive fact display with voting
- `api/facts.js` - Facts retrieval endpoint
- `api/votes.js` - Voting system with rate limiting
- `api/session.js` - Anonymous session management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (we recommend [Neon](https://neon.tech))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Project2Studios/lernt-wrong.git
   cd lernt-wrong
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Set up the database**
   ```bash
   npm run db:schema    # Create tables
   npm run db:migrate   # Import all 171 facts
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:5173` to see the app in action!

## 📊 Database Migration

The app includes a complete migration system to transfer facts from TypeScript files to the database:

```bash
npm run db:migrate
```

This script:
- Extracts all 171 unique facts from `src/data/outdatedFacts.ts`
- Handles field name conversion (camelCase → snake_case)
- Deduplicates facts that appear in multiple decades
- Updates materialized views for vote counting

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run db:schema` | Apply database schema |
| `npm run db:migrate` | Migrate facts to database |

## 🌍 Deployment

### Deploy to Vercel

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   ```
   DATABASE_URL=postgresql://username:password@host/database
   SESSION_SECRET=your-secret-key
   NODE_ENV=production
   ```
3. **Deploy** - Vercel will automatically build and deploy

The app includes:
- Automatic fallback to TypeScript data if database is unavailable
- CORS headers configured for API endpoints
- Production-ready error handling

## 📚 Data Structure

Facts are categorized across 53 domains:

- **Top Categories**: Nutrition (21), Technology (16), Medicine (14), Psychology (13)
- **Fields Include**: Physics, Biology, History, Climate Science, Neuroscience
- **Metadata**: Debunked year, when it stopped being taught, whether still taught today

### Example Fact Structure
```typescript
{
  id: "pluto_planet",
  fact: "Pluto is the 9th planet in our solar system",
  correction: "Pluto was reclassified as a dwarf planet in 2006...",
  explanation: "Detailed explanation of the reclassification...",
  category: "Astronomy",
  debunkedYear: 2006,
  taughtUntilYear: 2006,
  stillTaught: false
}
```

## 🎯 Voting System

- **Anonymous sessions** with browser fingerprinting
- **Rate limiting**: 50 votes/day, 20 votes/hour per session
- **Duplicate prevention**: One vote per fact per session
- **Real-time updates** via materialized views

## 🔐 Security Features

- Environment variables for sensitive data
- SQL injection prevention with parameterized queries
- Rate limiting and abuse prevention
- Session token validation
- CORS protection

## 📁 Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── _lib/database.js   # Database utilities
│   ├── facts.js           # Facts API endpoint
│   ├── session.js         # Session management
│   └── votes.js           # Voting system
├── database/              # Database schema and setup
│   ├── schema.sql         # PostgreSQL schema
│   └── sample-data.sql    # Migration status
├── scripts/               # Database utilities
│   └── migrate-facts.js   # Migration script
├── src/
│   ├── components/        # React components
│   ├── data/             # Static data (fallback)
│   ├── lib/              # API services and utilities
│   ├── pages/            # Route components
│   └── types/            # TypeScript definitions
└── public/               # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit changes: `git commit -m "Add feature"`
6. Push to branch: `git push origin feature-name`
7. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 Educational Purpose

This app serves as both entertainment and education, helping people understand:
- How scientific knowledge evolves over time
- The importance of critical thinking
- Why updating educational content matters
- The difference between what was taught and what we know now

Perfect for educators, students, and anyone curious about the evolution of human knowledge!

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

🎉 *Generated with [Claude Code](https://claude.ai/code)*