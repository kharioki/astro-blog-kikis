import rss from '@astrojs/rss';

import { formatBlogPosts } from '../js/utils.js';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const get = () => rss({
  // use stylesheet from "public/rss/styles.xsl"
  stylesheet: '/rss/styles.xsl',
  title: 'Kiki’s Blog',
  description: 'The code is all out there, I just arrange it in a financially rewarding way.',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `
      <author>${post.frontmatter.author}</author>
    `
  }))
});