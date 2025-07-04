import matter from 'gray-matter';

export type PostMeta = {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
};

export type Post = PostMeta & {
	content: string;
};

const files = import.meta.glob('/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function getAllPosts(): PostMeta[] {
	return Object.entries(files).map(([path, rawContent]) => {
		const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';
		const { data } = matter(rawContent as string);
		return {
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			tags: data.tags || []
		};
	});
}

export function getPostBySlug(slug: string): Post {
	const match = Object.entries(files).find(([path]) => path.endsWith(`${slug}.md`));
	if (!match) throw new Error(`Article ${slug} non trouvé`);

	const [, rawContent] = match;
	const { data, content } = matter(rawContent as string);

	return {
		slug,
		title: data.title,
		description: data.description,
		date: data.date,
		tags: data.tags || [],
		content
	};
}
