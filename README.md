# Delhi Darbar - Coffee House Website

A modern full-stack web application for Delhi Darbar restaurant, featuring React frontend, Express backend, and tRPC API.

## Features

- 🍽️ Modern restaurant website with menu browsing
- 🛒 Shopping cart functionality
- 🎁 Rewards program
- 📍 Location finder
- 💬 AI chat integration
- 🎨 Beautiful, responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, tRPC
- **Database**: MySQL/PostgreSQL (via Drizzle ORM)
- **UI Components**: Radix UI, shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (package manager)
- MySQL or PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd coffee-house
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:

```env
# Required
DATABASE_URL=mysql://user:password@host:port/database
JWT_SECRET=your-secret-key-here

# Optional - OAuth
VITE_APP_ID=
OAUTH_SERVER_URL=
OWNER_OPEN_ID=

# Optional - Forge API
BUILT_IN_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=

# Optional - App Configuration
VITE_APP_TITLE=Delhi Darbar
VITE_APP_LOGO=/logo.png

# Optional - Analytics
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=

# Server
PORT=3000
NODE_ENV=development
```

4. Run database migrations (if needed):
```bash
pnpm db:push
```

5. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Building for Production

```bash
pnpm build
```

This will:
- Build the React frontend to `dist/public`
- Bundle the Express server to `dist/index.js`

## Deployment

### Deploying to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Configure Environment Variables**:
   In the Vercel project settings, add all your environment variables:
   - `DATABASE_URL` (Required)
   - `JWT_SECRET` (Required)
   - `NODE_ENV=production`
   - `VERCEL=1`
   - Any other variables from your `.env` file

4. **Deploy**:
   - Vercel will automatically build and deploy your application
   - The build command is already configured: `pnpm build`
   - Output directory: `dist/public`

### Vercel Configuration

The project includes a `vercel.json` configuration file that:
- Sets up the serverless function for the Express backend
- Configures routing for API endpoints
- Serves static files from the build output

The API routes (`/api/*`) are handled by the serverless function in `api/index.js`, which wraps the Express app for Vercel's serverless environment.

## Project Structure

```
coffee-house/
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── ...
│   └── public/          # Static assets
├── server/              # Express backend
│   ├── _core/           # Core server utilities
│   ├── routers.ts       # tRPC routers
│   └── ...
├── shared/              # Shared types and utilities
├── api/                 # Vercel serverless function
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Type check TypeScript
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests
- `pnpm db:push` - Push database schema changes

## Environment Variables

### Required
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - Secret key for JWT token signing

### Optional
- `VITE_APP_ID` - OAuth application ID
- `OAUTH_SERVER_URL` - OAuth server URL
- `OWNER_OPEN_ID` - Owner OpenID for OAuth
- `BUILT_IN_FORGE_API_URL` - Forge API endpoint
- `BUILT_IN_FORGE_API_KEY` - Forge API key
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Path to logo image
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.

