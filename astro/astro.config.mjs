import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math"
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://brianhanley.dev',
	integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false })],
	markdown: {
		rehypePlugins: [rehypeKatex],
		remarkPlugins: [remarkMath],
	},
});
