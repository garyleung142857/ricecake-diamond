import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { escapeSymbol } from '/src/escapeSymbol'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Rice Cake Diamond',
            sidebar: [
                {
                    label: 'Introduction',
                    autogenerate: {directory: 'introduction'},
                },
                {
                    label: 'Modules',
                    autogenerate: {directory: 'modules'},
                },
            ],
            customCss: ['./src/styles/global.css']
        }),
    ],
    markdown: {
        rehypePlugins: [escapeSymbol]
    }
});
