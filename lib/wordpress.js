import { GraphQLClient } from 'graphql-request';

// Replace with your WordPress site URL
const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://radionyra.com/graphql';

const client = new GraphQLClient(WORDPRESS_URL);

/**
 * Fetch all posts from WordPress
 */
export async function getPosts() {
    const query = `
    query GetPosts {
      posts(first: 100) {
        nodes {
          id
          title
          slug
          excerpt
          content
          date
          modified
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

    try {
        const data = await client.request(query);
        return data.posts.nodes;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug) {
    const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        content
        date
        modified
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

    try {
        const data = await client.request(query, { slug });
        return data.post;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}

/**
 * Fetch all pages from WordPress
 */
export async function getPages() {
    const query = `
    query GetPages {
      pages(first: 100) {
        nodes {
          id
          title
          slug
          content
          date
          modified
        }
      }
    }
  `;

    try {
        const data = await client.request(query);
        return data.pages.nodes;
    } catch (error) {
        console.error('Error fetching pages:', error);
        return [];
    }
}

/**
 * Fetch a single page by slug
 */
export async function getPageBySlug(slug) {
    const query = `
    query GetPageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        slug
        content
        date
        modified
      }
    }
  `;

    try {
        const data = await client.request(query, { slug });
        return data.page;
    } catch (error) {
        console.error(`Error fetching page ${slug}:`, error);
        return null;
    }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs() {
    const query = `
    query GetAllPostSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

    try {
        const data = await client.request(query);
        return data.posts.nodes.map(post => post.slug);
    } catch (error) {
        console.error('Error fetching post slugs:', error);
        return [];
    }
}
