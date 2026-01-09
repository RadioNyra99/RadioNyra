# Headless WordPress Setup for Radio Nyra

This project uses WordPress as a headless CMS, fetching content via GraphQL API.

## Prerequisites

1. **WordPress Installation** with WPGraphQL plugin
2. **Environment Variables** configured

## Step 1: WordPress Setup

### Install Required WordPress Plugins

1. Log into your WordPress admin panel at `https://radionyra.com/wp-admin`
2. Go to **Plugins > Add New**
3. Install and activate these plugins:
   - **WPGraphQL** (required) - Exposes WordPress data via GraphQL
   - **WPGraphQL for Advanced Custom Fields** (optional) - If using ACF
   - **Headless Mode** (optional) - Disables the frontend WordPress theme

### Verify GraphQL Endpoint

After installing WPGraphQL, your GraphQL endpoint will be available at:
```
https://radionyra.com/graphql
```

Test it by visiting `https://radionyra.com/graphql` in your browser - you should see the GraphiQL IDE.

## Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_WORDPRESS_URL=https://radionyra.com/graphql
```

**Important:** Never commit `.env.local` to Git. It's already in `.gitignore`.

## Step 3: Using WordPress Data in Next.js

### Fetch Posts

```javascript
import { getPosts } from '@/lib/wordpress';

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))}
    </div>
  );
}
```

### Fetch Single Post

```javascript
import { getPostBySlug } from '@/lib/wordpress';

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

## Step 4: Enable Incremental Static Regeneration (ISR)

For pages that need to update when WordPress content changes:

```javascript
// Rebuild this page every 60 seconds if there's a request
export const revalidate = 60;
```

## Step 5: Generate Static Paths for Dynamic Routes

For blog post pages with dynamic routes:

```javascript
import { getAllPostSlugs } from '@/lib/wordpress';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}
```

## Available Helper Functions

Located in `lib/wordpress.js`:

- `getPosts()` - Fetch all blog posts
- `getPostBySlug(slug)` - Fetch a single post by slug
- `getPages()` - Fetch all pages
- `getPageBySlug(slug)` - Fetch a single page by slug
- `getAllPostSlugs()` - Get all post slugs for static generation

## Deployment Notes

### Vercel Deployment

1. Add environment variable in Vercel dashboard:
   - Key: `NEXT_PUBLIC_WORDPRESS_URL`
   - Value: `https://radionyra.com/graphql`

2. Redeploy your site after adding the variable

### Webhook for Auto-Rebuilds (Optional)

To automatically rebuild your Next.js site when WordPress content changes:

1. In Vercel, go to **Settings > Git > Deploy Hooks**
2. Create a new hook (e.g., "WordPress Content Update")
3. Copy the webhook URL
4. In WordPress, install "**WPGraphQL Smart Cache**" or "**Vercel Deploy Hooks**" plugin
5. Configure the plugin with your Vercel webhook URL

Now your site will auto-rebuild when you publish/update content in WordPress!

## Troubleshooting

### GraphQL endpoint not found
- Ensure WPGraphQL plugin is activated
- Check WordPress permalink settings (Settings > Permalinks) - try re-saving

### CORS errors
- WPGraphQL should handle CORS automatically
- If issues persist, add CORS headers in WordPress `functions.php` or use a CORS plugin

### Empty data returned
- Check if posts exist in WordPress
- Verify the GraphQL query in GraphiQL IDE at `/graphql`
- Check browser console for errors

## Example GraphQL Queries

You can test these in the GraphiQL IDE at `https://radionyra.com/graphql`:

### Get All Posts
```graphql
query {
  posts {
    nodes {
      title
      slug
      excerpt
      content
    }
  }
}
```

### Get Single Post
```graphql
query {
  post(id: "hello-world", idType: SLUG) {
    title
    content
  }
}
```
