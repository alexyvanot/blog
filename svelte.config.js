import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		paths: {
			base: { relative: false }
		},

		alias: {
			$lib: path.resolve('src/lib'),
			$routes: path.resolve('src/routes'),
			$components: path.resolve('src/lib/components')
		},

		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
