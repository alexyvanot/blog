<style>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}

	p {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	onMount(() => {
		goto(`${base}/blogs`);
	});
</script>

<p>Redirecting to the blog...</p>