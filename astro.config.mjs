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
					label: 'Modes and Cornerstones',
					autogenerate: {directory: 'modes'},
				},
				{
					label: 'Developments',
					autogenerate: {directory: 'developments'},
				},
			],
			customCss: ['./src/styles/global.css']
		}),
	],
	markdown: {
		rehypePlugins: [escapeSymbol]
	}
});
