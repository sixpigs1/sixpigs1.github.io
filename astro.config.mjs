import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://ZeweiYePage.github.io',
    integrations: [mdx()],
});