import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
import { sveltePreprocess } from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess({ postcss: true }),
		mdsvex({ extensions: ['.md'] })
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),

		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},

		alias: {
			$lib: path.resolve('src/lib'),
			$routes: path.resolve('src/routes'),
			$components: path.resolve('src/lib/components')
		},

		prerender: {
			handleHttpError: 'warn'
		},

		trailingSlash: 'always'
	}
};

export default config;
