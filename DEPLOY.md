# Radio Nyra - Deployment Guide

## 🚀 Complete Deployment to Vercel & WordPress Setup

### Quick Links
- **Live Site**: Will be at `https://nyra-phi.vercel.app/` (or custom domain)
- **WordPress Admin**: https://radionyra.com/wp-admin
- **GraphQL Endpoint**: https://radionyra.com/graphql

---

## Part 1: WordPress Setup (Required for Blog)

### 1.1 Install WordPress Plugins

1. Log into WordPress admin at https://radionyra.com/wp-admin
   - Username: `thepranab.it@gmail.com`
   - Password: `7TiIXD&yw3qG62^yfv5HBRWX`

2. Go to **Plugins → Add New**

3. Search and install these plugins:
   - **WPGraphQL** (required) - enables GraphQL API
   - **Headless Mode** (optional) - disables WordPress frontend

4. Activate all plugins

5. Verify GraphQL endpoint works:
   - Visit https://radionyra.com/graphql
   - You should see GraphiQL IDE interface

### 1.2 Create Sample Content

1. Create a few test blog posts in WordPress
2. Add featured images to posts
3. Assign categories

---

## Part 2: Deploy to Vercel

### 2.1 Push to GitHub

```bash
# Make sure you're in the project directory
cd e:\Nyra\Nyra-

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Complete headless WordPress integration"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/radio-nyra.git

# Push
git push -u origin main
```

### 2.2 Deploy on Vercel

1. Go to https://vercel.com/
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

5. Add Environment Variable:
   - **Name**: `NEXT_PUBLIC_WORDPRESS_URL`
   - **Value**: `https://radionyra.com/graphql`

6. Click "Deploy"

### 2.3 Custom Domain (Optional)

1. In Vercel project settings → Domains
2. Add: `radionyra.com` or `www.radionyra.com`
3. Update DNS records as instructed by Vercel

---

## Part 3: Auto-Rebuild on WordPress Updates (Optional)

### 3.1 Create Deploy Hook in Vercel

1. In Vercel: Settings → Git → Deploy Hooks
2. Create hook named "WordPress Update"
3. Branch: main
4. Copy the webhook URL

### 3.2 Install Webhook Plugin in WordPress

1. Install "Vercel Deploy Hooks" plugin in WordPress
2. Paste the Vercel webhook URL
3. Configure to trigger on:
   - Post published
   - Post updated
   - Post deleted

Now your Next.js site auto-rebuilds when you publish/update WordPress content!

---

## Part 4: Verification Checklist

### ✅ Next.js Site
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Audio player functions
- [ ] All pages load (About, Services, etc.)
- [ ] Blog page shows WordPress posts
- [ ] Individual blog posts load
- [ ] Images display correctly
- [ ] Site is responsive on mobile

### ✅ WordPress Setup  
- [ ] Can log into /wp-admin
- [ ] WPGraphQL plugin activated
- [ ] GraphQL endpoint accessible at /graphql
- [ ] Sample posts created with images

### ✅ Vercel Deployment
- [ ] Site deployed successfully
- [ ] Environment variable configured
- [ ] Custom domain connected (if applicable)
- [ ] Deploy hooks configured (optional)

---

## Troubleshooting

### Blog shows "No posts found"
- Check WordPress has published posts (not drafts)
- Verify GraphQL endpoint at https://radionyra.com/graphql
- Check browser console for errors
- Verify environment variable in Vercel

### Images not loading
- Make sure WordPress uploads directory is accessible
- Check image URLs in GraphQL response
- Enable CORS in WordPress if needed

### GraphQL errors
- Re-save WordPress permalinks (Settings → Permalinks)
- Check if WPGraphQL is activated
- Test queries in GraphiQL IDE

---

## Files Modified

### New Files Created:
- `lib/wordpress.js` - WordPress GraphQL client
- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Individual post page
- `app/blog/[slug]/not-found.tsx` - Custom 404 for blog
- `.env.local` - Local environment config
- `WORDPRESS_SETUP.md` - Detailed WordPress guide
- `DEPLOY.md` - This deployment guide

### Modified Files:
- `components/navigation.tsx` - Added Blog link
- `package.json` - Added graphql-request dependency

---

## Next Steps After Deployment

1. **Content**: Start creating real blog posts in WordPress
2. **SEO**: Add meta descriptions to WordPress posts
3. **Analytics**: Already configured (Vercel Analytics)
4. **Performance**: Monitor Core Web Vitals in Vercel dashboard
5. **Social**: Share your new blog on social media!

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **WPGraphQL**: https://www.wpgraphql.com/docs/introduction
- **Next.js**: https://nextjs.org/docs

🎉 **Your headless WordPress + Next.js setup is complete!**
