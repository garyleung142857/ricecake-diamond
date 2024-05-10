import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { escapeSymbol } from '/src/escapeSymbol'

// https://astro.build/config
export default defineConfig({
    site: 'https://garyleung142857.github.io/',
    base: 'ricecake-diamond',
    integrations: [
        starlight({
            title: 'Rice Cake ♦',
            description: 'Comnpetitive Bridge Bidding System',
            social: {
				github: 'https://github.com/garyleung142857/ricecake-diamond',
			},
            favicon: '/favicon.ico',
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
                },
                {
                    label: 'Reference',
                    autogenerate: {directory: 'reference'},
                }
            ],
            customCss: [
                '@fontsource/noto-sans/400.css',
                '@fontsource/noto-sans/600.css',
                './src/styles/global.css',
                './src/styles/markdown.css',
            ]
        }),
    ],
    markdown: {
        rehypePlugins: [escapeSymbol]
    }
});
