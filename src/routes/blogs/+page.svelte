<script lang="ts">
	import { base } from "$app/paths";
	export let data;
</script>

<style>
	.blog-list {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	h1 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.article {
		margin-bottom: 2rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		transition: background-color 0.2s;
	}

	.article:hover {
		background-color: #f8fafc;
	}

	.article a {
		color: inherit;
		text-decoration: none;
		display: block;
	}

	.article h2 {
		font-size: 1.5rem;
		color: #0f766e;
		margin-bottom: 0.5rem;
	}

	.article p {
		margin: 0.25rem 0;
	}
</style>

<div class="blog-list">
	<h1>Articles du Blog</h1>

	{#each data.posts as post}
		<article class="article">
			<a href={`${base}/blogs/${post.slug}`}>
				<h2>{post.title}</h2>
				<p><small>{post.date}</small></p>
				<p>{post.description}</p>
			</a>
		</article>
	{/each}
</div>