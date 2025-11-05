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

### Step 1: Configure Git (First Time Only)

If you haven't configured git yet, set your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Or for this repository only:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., `coffee-house` or `delhi-darbar`)
   - Choose public or private
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect and push your code**:
   ```bash
   # Make sure you're in the project directory
   cd coffee-house
   
   # Commit all files (if not already committed)
   git add .
   git commit -m "Initial commit: Coffee House website with Vercel deployment configuration"
   
   # Rename branch to main (if needed)
   git branch -M main
   
   # Add your GitHub repository as remote (replace with your actual repo URL)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git push -u origin main
   ```

   **Note**: Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 3: Deploying to Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (or create an account)
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository from the list
   - Click "Import"

2. **Configure Project Settings**:
   Vercel should automatically detect:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm build` (already configured)
   - **Output Directory**: `dist/public` (already configured)
   - **Install Command**: `pnpm install` (already configured)

   If not, manually set:
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: `dist/public`
   - Install Command: `pnpm install`

3. **Configure Environment Variables**:
   Before deploying, add all required environment variables:
   
   - Go to "Environment Variables" section in the project settings
   - Add each variable:
   
   **Required Variables**:
   ```
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=production
   VERCEL=1
   ```
   
   **Optional Variables** (add if you're using these features):
   ```
   VITE_APP_ID=your_oauth_app_id
   OAUTH_SERVER_URL=your_oauth_server_url
   OWNER_OPEN_ID=your_owner_open_id
   BUILT_IN_FORGE_API_URL=your_forge_api_url
   BUILT_IN_FORGE_API_KEY=your_forge_api_key
   VITE_APP_TITLE=Delhi Darbar
   VITE_APP_LOGO=/logo.png
   VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
   VITE_ANALYTICS_WEBSITE_ID=your_analytics_website_id
   ```
   
   **Important**: 
   - Make sure to set `NODE_ENV=production` and `VERCEL=1`
   - For `DATABASE_URL`, use a production database (not localhost)
   - For `JWT_SECRET`, use a strong random string (you can generate one online)

4. **Deploy**:
   - Click "Deploy" button
   - Vercel will build and deploy your application
   - Wait for the build to complete (usually 2-5 minutes)
   - Once deployed, you'll get a URL like `https://your-project.vercel.app`

5. **Verify Deployment**:
   - Visit your deployment URL
   - Check that the website loads correctly
   - Test API endpoints if applicable
   - Check the Vercel dashboard for any build errors

### Step 4: Database Setup

For production, you'll need a hosted database:

**Option 1: Vercel Postgres** (Recommended for Vercel)
- Go to your Vercel project → Storage tab
- Click "Create Database" → "Postgres"
- Follow the setup wizard
- Copy the connection string to `DATABASE_URL`

**Option 2: Other Database Providers**:
- **PlanetScale** (MySQL): [planetscale.com](https://planetscale.com)
- **Supabase** (PostgreSQL): [supabase.com](https://supabase.com)
- **Railway** (MySQL/PostgreSQL): [railway.app](https://railway.app)
- **Neon** (PostgreSQL): [neon.tech](https://neon.tech)

After setting up the database, update the `DATABASE_URL` environment variable in Vercel.

### Troubleshooting

**Build Fails**:
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is correct: `pnpm build`

**API Routes Not Working**:
- Verify `api/index.js` exists in your repository
- Check that `vercel.json` is configured correctly
- Ensure environment variables are set

**Database Connection Issues**:
- Verify `DATABASE_URL` is set correctly
- Check database allows connections from Vercel IPs
- Ensure database is accessible (not localhost)

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

---

*Last updated: Deployment ready*

#   j b d d 
 
 