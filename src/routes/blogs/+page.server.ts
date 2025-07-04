import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/posts';

export const prerender = true;

export async function entries() {
	const posts = getAllPosts();
	return posts.map((post) => {
		return { 
			params: { slug: post.slug },
		}
	});
}

export const load: PageServerLoad = async () => {
	const posts = getAllPosts();

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
};
