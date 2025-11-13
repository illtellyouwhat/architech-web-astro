import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${siteConfig.title} Blog`,
    description: 'Automation Architech blog feed',
    site: context.site ?? new URL(siteConfig.url),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.date
    }))
  });
}
