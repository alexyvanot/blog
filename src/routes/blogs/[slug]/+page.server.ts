import type { PageServerLoad, EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';
import { getPostBySlug, getAllPosts } from '$lib/posts';
import { marked } from 'marked';


export const prerender = true;

export const entries: EntryGenerator = async () => {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const post = getPostBySlug(slug);

	if (!post) throw error(404, 'Article non trouvé');

	return {
		title: post.title,
		date: post.date,
		content: marked(post.content)
	};
};
