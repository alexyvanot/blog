// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = 'posts';

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

export function getAllPosts(): PostMeta[] {
	const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

    return files.map((file: string): PostMeta => {
        const slug: string = file.replace(/\.md$/, '');
        const raw: string = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
        const { data }: matter.GrayMatterFile<string> = matter(raw);

        interface FrontMatter {
            title: string;
            description: string;
            date: string;
            tags?: string[];
        }

        const frontMatter: FrontMatter = data as FrontMatter;

        return {
            slug,
            title: frontMatter.title,
            description: frontMatter.description,
            date: frontMatter.date,
            tags: frontMatter.tags || []
        };
    });
}

export function getPostBySlug(slug: string): Post {
	const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf-8');
	const { data, content } = matter(raw);

	return {
		slug,
		title: data.title,
		description: data.description,
		date: data.date,
		tags: data.tags || [],
		content
	};
}
