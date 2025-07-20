# 🚀 Vercel Deployment Guide for tRPC Monorepo

This guide will walk you through deploying your tRPC monorepo to Vercel with proper configuration for both the API and frontend.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Node.js**: Version 18 or higher
4. **pnpm**: Package manager (already configured)

## 🔧 Configuration Files Created

The following files have been created/modified for Vercel deployment:

- `vercel.json` - Main Vercel configuration
- `packages/api/api/index.ts` - Serverless function entry point
- `packages/web/src/utils/trpc-client.ts` - Production-ready tRPC client
- `.vercelignore` - Files to exclude from deployment
- Updated Vite config for better production builds

## 🚀 Deployment Steps

### Step 1: Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### Step 2: Connect Repository to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `packages/web/dist`
   - **Install Command**: `pnpm install`

#### Option B: Via CLI

```bash
cd /path/to/your/project
vercel
```

### Step 3: Environment Variables

Set these in your Vercel dashboard (Project Settings → Environment Variables):

| Variable       | Value        | Environment |
| -------------- | ------------ | ----------- |
| `NODE_ENV`     | `production` | Production  |
| `PNPM_VERSION` | `10.13.1`    | All         |

### Step 4: Update Domain Configuration

1. After deployment, note your Vercel domain (e.g., `your-app-abc123.vercel.app`)
2. Update the domain in these files:
   - `packages/api/api/index.ts` (CORS origin)
   - `packages/web/src/utils/trpc-client.ts` (production URL)

Replace `your-domain.vercel.app` with your actual Vercel domain.

### Step 5: Deploy

#### Automatic Deployment

- Push to your main branch
- Vercel will automatically deploy

#### Manual Deployment (CLI)

```bash
vercel --prod
```

## 🔍 Verification

After deployment, verify your setup:

1. **Frontend**: Visit your Vercel domain
2. **API Health**: Visit `https://your-domain.vercel.app/api/health`
3. **tRPC Endpoint**: Visit `https://your-domain.vercel.app/api/greeting`

## 📁 Project Structure

```
trpc-project/
├── vercel.json                     # Vercel configuration
├── packages/
│   ├── api/
│   │   ├── api/
│   │   │   └── index.ts           # Serverless function entry
│   │   └── src/
│   │       ├── index.ts           # Development server
│   │       └── router.ts          # tRPC router
│   └── web/
│       ├── src/
│       │   ├── utils/
│       │   │   └── trpc-client.ts # Production tRPC client
│       │   └── trpc.ts            # Re-exports
│       └── dist/                  # Build output
└── .vercelignore                  # Deployment exclusions
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Test builds locally
   pnpm run build
   ```

2. **API Not Working**

   - Check that `/api` routes are accessible
   - Verify CORS configuration
   - Check Vercel function logs

3. **tRPC Connection Issues**

   - Verify the base URL in `trpc-client.ts`
   - Check browser network tab for failed requests
   - Ensure API endpoints are responding

4. **Environment Variables**
   - Verify all required env vars are set in Vercel dashboard
   - Redeploy after adding new environment variables

### Debug Commands

```bash
# Local development
pnpm run dev

# Test production build locally
pnpm run build
pnpm run preview

# Check Vercel deployment status
vercel ls
vercel logs [deployment-url]
```

## 🔄 Development Workflow

1. **Local Development**: `pnpm run dev`
2. **Test Changes**: Make sure both API and frontend work locally
3. **Push to GitHub**: Automatic deployment triggers
4. **Verify Production**: Test the deployed version

## 📈 Scaling Considerations

- **Serverless Functions**: Vercel automatically scales your API
- **Edge Caching**: Static assets are cached globally
- **Database**: Consider adding a database service (PlanetScale, Supabase)
- **Monitoring**: Add error tracking (Sentry) and analytics

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit secrets to git
2. **CORS**: Configure proper origins for production
3. **Rate Limiting**: Consider adding rate limiting to your API
4. **Input Validation**: Use Zod schemas for all inputs

## 📚 Next Steps

- [ ] Add custom domain
- [ ] Set up database integration
- [ ] Configure error monitoring
- [ ] Add authentication
- [ ] Set up staging environment
- [ ] Add automated testing

## 🆘 Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [tRPC Documentation](https://trpc.io/docs)
3. Check Vercel function logs in dashboard
