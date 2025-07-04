import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/posts';
import { marked } from 'marked';

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
