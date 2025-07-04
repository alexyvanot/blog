<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<style>
	.article {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.date {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 2rem;
	}

	.content :global(p) {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.content :global(h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		color: #0f766e;
	}

	.content :global(pre) {
		background: #f1f5f9;
		padding: 1rem;
		overflow-x: auto;
		border-radius: 0.5rem;
	}
</style>

<div class="article">
    <a class="back" href="/blog">← Retour au blog</a>
	<h1>{data.title}</h1>
	<p class="date">{data.date}</p>

<div class="content">{@html data.content}</div>
</div>
