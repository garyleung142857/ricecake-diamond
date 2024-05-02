import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { escapeSymbol } from '/src/escapeSymbol'

// https://astro.build/config
export default defineConfig({
    site: 'https://garyleung142857.github.io/ricecake-starlight/',
    integrations: [
        starlight({
            title: 'Rice Cake ♦',
            description: 'Comnpetitive Bridge Bidding System',
            sidebar: [
                {
                    label: 'Introduction',
                    autogenerate: {directory: 'introduction'},
                },
                {
                    label: 'Modules',
                    autogenerate: {directory: 'modules'},
                },
                {
                    label: 'Defence',
                    autogenerate: {directory: 'defence'},
                }
            ],
            customCss: [
                '@fontsource/noto-sans-tc/400.css',
                '@fontsource/noto-sans-tc/600.css',
                './src/styles/global.css',
                './src/styles/markdown.css',
            ]
        }),
    ],
    markdown: {
        rehypePlugins: [escapeSymbol]
    }
});
