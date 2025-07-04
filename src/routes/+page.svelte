<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function handleClick() {
		goto(`${base}/blogs`);
	}
</script>

<style>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		background-color: #0d9488;
		color: white;
		transition: background-color 0.2s ease-in-out;
	}

	button:hover {
		background-color: #0f766e;
	}
</style>

<div class="home">
	<h1>Bienvenue sur le Blog</h1>
	<button on:click={handleClick}>Accéder au blog</button>
</div>
