<script lang="ts">
	import { levels } from '$lib/data/levels';
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let show_start_screen: boolean = $state(true);
	let handleKeyDown: (event: KeyboardEvent) => void;

	onMount(() => {
		handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === 'Enter' || event.code === 'Space' || event.key === ' ' || event.key == 'Spacebar') {
				event.preventDefault();
				show_start_screen = false;

				window.removeEventListener('keydown', handleKeyDown);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
	});

	onDestroy(() => {
		if (handleKeyDown) window.removeEventListener('keydown', handleKeyDown);
	});
</script>

<div class="container">
	{#if show_start_screen}
		<button
			class="overlay"
			transition:fly={{ duration: 600, y: '-100vh' }}
			onclick={() => (show_start_screen = false)}
		>
			<h1 class="landing">Press to start:)</h1>
		</button>
	{:else}
		<a in:fade href="https://github.com/alfkristian02/svelte_typing_game"
			><img class="github-logo" src="/images/github-mark.png" alt="GitHub Logo" /></a
		>
		<h1 class="title">Select level:</h1>
		{#each levels as level}
			<a class="level-button" tabindex={show_start_screen ? -1 : 0} href={'/'.concat(level.route)}
				>{level.title}</a
			>
		{/each}
	{/if}
</div>

<!-- :root {
    --bg: #E3DED9;
    --overlay-bg: #D1CCC6;
    --text: #2C2C2C;
    --muted: #6A6561;
    --btn: #F5A282;
    --btn-hover: #FFD1A6;
    --accent: #FF3E00;
} -->

<style>
	.github-logo {
		position: absolute;
		height: 3vh;
		left: 2vw;
		top: 2vw;
	}
	.landing {
		color: #ff3e00;
		justify-content: center;
		text-align: center;
		opacity: 0.6;
		letter-spacing: 20px;
		font-size: 60px;
	}

	.title {
		color: rgba(255, 62, 0, 0.75);
		text-align: center;
		font-size: 60px;
	}

	.overlay {
		all: unset;
		height: 90%;
		width: 95%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #d1ccc6;
		border-radius: 10px;
		justify-content: center;
		margin: auto;
		position: absolute;
	}

	.overlay:focus {
		border-style: solid;
	}

	.container {
		display: grid;
		margin: auto;
		width: 90%;
		height: 90%;
		gap: 20px;
	}

	.level-button {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #d1ccc6;
		border-radius: 5px;
		padding: 7px;
		width: 70%;
		height: 60px;
		margin: auto;
	}

	.level-button:hover,
	.level-button:focus {
		background-color: #ffd1a6;
		transform: scale(1.05);
	}
</style>
