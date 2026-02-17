# 🚀 DrafJets Setup & Deployment Guide

## Complete Setup Instructions

### Step 1: Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/drafjets

# Public Configuration
NEXT_PUBLIC_SITE_NAME=DrafJets
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin Credentials (CHANGE IN PRODUCTION!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=drafjet2026
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=drafjet2026
```

### Step 2: MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Build a Cluster" → Choose Free Tier
5. Click "Connect"
6. Choose "Connect to your application"
7. Copy the connection string
8. Replace `<username>`, `<password>`, and it will auto-fill the cluster name
9. Paste in `MONGODB_URI`

**Important:** In MongoDB Atlas, go to Network Access and add IP `0.0.0.0/0` for development

### Step 3: Run Locally

```bash
# Install dependencies
npm install

# Seed sample data
npm run seed

# Start development server
npm run dev
```

Visit: http://localhost:3000

### Step 4: Access Admin Dashboard

- **URL:** http://localhost:3000/admin
- **Username:** admin
- **Password:** drafjet2026

## Add Your Excel Projects

### Method 1: Through Admin Panel

1. Go to `/admin`
2. Fill in the Add Project form
3. Technologies: comma-separated (e.g., "React, Node.js, MongoDB")
4. Click "Add Project"

### Method 2: Update Seed Data

1. Edit `lib/seed-data.ts`
2. Add your projects to the `SAMPLE_PROJECTS` array
3. Run `npm run seed`

### Project Structure for Excel Import

If importing from Excel, ensure these columns exist:

| Field | Type | Example |
|-------|------|---------|
| projectId | string | PROJ_001 |
| projectName | string | E-Commerce Platform |
| category | string | Mini or Major |
| domain | string | Web Development |
| technologyStack | string [] | ["React", "Node.js", "MongoDB"] |
| branch | string | CSE, ECE, ISE |
| difficultyLevel | string | Beginner, Intermediate, Advanced |
| description | string | Short description |

## File Structure

```
drafjet-saas/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── projects/           # Projects API
│   │   │   ├── contact/            # Contact form API
│   │   │   └── admin/              # Admin auth
│   │   ├── admin/
│   │   │   └── page.tsx            # Admin dashboard
│   │   ├── projects/
│   │   │   ├── page.tsx            # All projects
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Project details
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx              # Root layout with Navbar/Footer
│   │   ├── page.tsx                # Home page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   └── CTASection.tsx
│   └── lib/
│       ├── constants.ts            # Site config
│       ├── db.ts                  # MongoDB connection
│       ├── auth.ts                # Auth utilities
│       ├── types.ts               # TypeScript types
│       ├── seed-data.ts           # Sample projects
│       └── theme-provider.tsx     # Dark mode provider
├── models/
│   ├── Project.ts                 # Project schema
│   └── Contact.ts                 # Contact schema
├── scripts/
│   └── seed.ts                    # Seed script
├── .env.local                     # Environment variables
├── package.json
├── tailwind.config.ts             # Tailwind config with neon theme
└── tsconfig.json
```

## Page Details

### Home Page (`/`)
- Hero section with CTA buttons
- Services showcase (6 services)
- Why choose us section
- Call-to-action section
- Responsive design

### Projects Page (`/projects`)
- List all projects in table format
- Filter by category/domain
- Search functionality
- Project stats

### Project Details (`/projects/[id]`)
- Full project information
- Technologies used
- Download PDF option
- Contact button
- Related projects suggestion

### About Page (`/about`)
- Mission & Vision
- Why choose us (detailed)
- Company values
- Contact CTA

### Contact Page (`/contact`)
- Contact form with validation
- Contact information display
- WhatsApp integration
- QR code section

### Admin Dashboard (`/admin`)
- Simple login (username/password)
- Add new projects
- Delete projects
- View all projects
- Project management interface

## API Endpoints

### Projects
```
GET    /api/projects
POST   /api/projects
GET    /api/projects/[id]
PUT    /api/projects/[id]
DELETE /api/projects/[id]
```

### Contact
```
POST   /api/contact          (public)
GET    /api/contact          (admin only)
```

### Admin
```
POST   /api/admin/login
```

## Customize Your Site

### 1. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#00d9ff',      // Cyan
  secondary: '#ff1493',    // Pink
  success: '#00ff88',      // Green
  // ...
}
```

### 2. Change Contact Info

Edit `lib/constants.ts`:
```typescript
export const CONTACT_INFO = {
  phones: ['YOUR_PHONE_1', 'YOUR_PHONE_2', 'YOUR_PHONE_3'],
  email: 'your_email@example.com',
  whatsappNumber: 'YOUR_PHONE',
};
```

### 3. Change Services

Edit `SERVICES` array in `lib/constants.ts`

### 4. Change Admin Password

Update `.env.local`:
```env
ADMIN_USERNAME=your_admin
ADMIN_PASSWORD=your_secure_password
```

## Deploy to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "DrafJets Application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/drafjet-saas.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select GitHub and choose your repository
4. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - Other variables from `.env.local`
5. Click "Deploy"
6. Your site is live!

### Step 3: Domain Setup (Optional)

1. Go to Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Production Checklist

- [ ] Change admin password
- [ ] Update MongoDB URI (production database)
- [ ] Update contact information
- [ ] Add your logo/images
- [ ] Update site description in `tailwind.config.ts`
- [ ] Enable MongoDB IP whitelist properly
- [ ] Set up error logging
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check form submissions work
- [ ] Set up email notifications for contact forms
- [ ] Update favicon

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### MongoDB connection fails
- Check `MONGODB_URI` spelling
- Verify IP is whitelisted in MongoDB Atlas
- Make sure cluster is running

### Projects not loading
- Run `npm run seed`
- Check MongoDB connection
- Look at browser console for errors

### Admin login not working
- Verify credentials in `.env.local`
- Check console for error messages
- Try different browser/incognito mode

### Styles not loading
```bash
rm -rf .next
npm run dev
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

## Performance Tips

1. Use MongoDB Atlas (not local MongoDB)
2. Enable image optimization in Next.js
3. Use Vercel for hosting (best Next.js support)
4. Set up CDN for static assets
5. Monitor API response times

## Security Considerations

1. **Never commit `.env.local` to GitHub** - Use `.env.local` in `.gitignore`
2. **Change admin password** before production
3. **Use HTTPS** - Vercel provides this automatically
4. **Validate all inputs** - Especially in forms
5. **Rate limit API** - Consider adding rate limiting middleware
6. **Keep dependencies updated** - Run `npm update`

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## Next Steps

1. ✅ Set up locally
2. ✅ Add your projects
3. ✅ Customize branding
4. ✅ Deploy to Vercel
5. ✅ Monitor and maintain

---

**Happy Building! 🚀**

Got questions? Contact us at drafjet.solutions@gmail.com
