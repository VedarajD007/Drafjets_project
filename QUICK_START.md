# ⚡ DrafJets - Quick Start (5 Minutes)

## 1️⃣ Set Environment Variables

Create `.env.local`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/drafjets
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=drafjet2026
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=drafjet2026
```

## 2️⃣ Install & Run

```bash
npm install
npm run seed
npm run dev
```

## 3️⃣ Access Your Site

| Page | URL | Purpose |
|------|-----|---------|
| Home | http://localhost:3000 | Main landing page |
| Projects | http://localhost:3000/projects | Browse projects |
| About | http://localhost:3000/about | Info about the company |
| Contact | http://localhost:3000/contact | Contact form |
| Admin | http://localhost:3000/admin | Manage projects |

## 4️⃣ Admin Credentials

- **Username:** admin
- **Password:** drafjet2026

⚠️ Change in production!

## ✅ What's Included

✅ **10 Sample Projects** (pre-loaded via seeding)
✅ **Neon Cyberpunk Theme** (dark mode included)
✅ **Admin Dashboard** (add/delete projects)
✅ **Contact Form** (stores in MongoDB)
✅ **Responsive Design** (mobile + desktop)
✅ **Search & Filter** (find projects easily)
✅ **SEO Optimized** (social media ready)

## 🎨 Customize

### Change Logo/Images
- Add to `public/` folder
- Update `components/layout/Navbar.tsx`

### Change Colors
- Edit `tailwind.config.ts`
- Update primary/secondary colors

### Change Contact Info
- Edit `lib/constants.ts`
- Update phone numbers and email

### Add Your Projects
**Option A: Via Admin**
1. Go to `/admin`
2. Login with credentials
3. Add projects using the form

**Option B: Via Seeding**
1. Edit `lib/seed-data.ts`
2. Add projects to array
3. Run `npm run seed`

## 📱 Update Contact Information

In `lib/constants.ts`:
```typescript
export const CONTACT_INFO = {
  phones: ['7411061639', '8073028732', '8088128508'],
  email: 'drafjet.solutions@gmail.com',
  whatsappNumber: '7411061639',
};
```

## 🌐 Deploy in 3 Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "DrafJets App"
git push origin main
```

2. **Go to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repo
- Add `MONGODB_URI` environment variable

3. **Deploy**
- Click "Deploy"
- Your site goes live! 🎉

## 📊 Add from Excel to Admin

1. Prepare Excel file with columns:
   - Project ID, Project Name, Category (Mini/Major)
   - Domain, Technology Stack, Branch
   - Difficulty Level, Description

2. In Admin Dashboard (`/admin`):
   - Fill the form manually or
   - Bulk import feature (coming soon)

3. Edit `lib/seed-data.ts` to add all projects at once:
```typescript
export const SAMPLE_PROJECTS = [
  {
    projectId: 'YOUR_ID',
    projectName: 'Your Project',
    category: 'Mini',
    domain: 'Web Development',
    technologyStack: ['React', 'Node.js'],
    branch: 'CSE',
    difficultyLevel: 'Beginner',
    description: 'Description here',
  },
  // Add more...
];
```

Then run: `npm run seed`

## 🆘 Common Issues

**Q: "Cannot find MongoDB URI"**
A: Add `MONGODB_URI` to `.env.local`

**Q: "Projects not loading"**
A: Run `npm run seed` to populate database

**Q: "Admin login not working"**
A: Verify username/password in `.env.local`

**Q: "Styles look broken"**
A: Run `rm -rf .next && npm run dev`

## 📚 Project Structure

```
src/
├── app/
│   ├── api/           # API routes
│   ├── admin/         # Admin dashboard (/admin)
│   ├── projects/      # Projects page (/projects)
│   ├── about/         # About page (/about)
│   ├── contact/       # Contact page (/contact)
│   ├── page.tsx       # Home page (/)
│   └── layout.tsx     # Main layout
├── components/        # React components
└── lib/              # Utilities & config
```

## 🚀 Next Steps

1. ✅ Set up locally (npm install, npm run dev)
2. ✅ Update `.env.local` with your MongoDB URI
3. ✅ Seed sample data (npm run seed) OR add via admin
4. ✅ Customize colors and contact info
5. ✅ Deploy to Vercel
6. 🎉 Share with the world!

## 📞 Support

- Email: drafjet.solutions@gmail.com
- Phone: 7411061639
- WhatsApp: +91 7411061639

---

🎉 **Built with ❤️ for IT Students**

Ready to launch? `npm run dev` → http://localhost:3000
