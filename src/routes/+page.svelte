<script lang="ts">
	type Word = {
		display_word: string;
		match: string;
		style: number;
	};

	import Level from '$lib/components/Level.svelte';
	import { levels } from '$lib/data/levels';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let show_start_screen: boolean = $state(true);

	let level_selected: boolean = $state(false);

	let word_list: Array<Word> = $state([]);

	function handle_button(words: Array<Word>) {
		word_list = words;
		level_selected = true;
		return null;
	}

	function reset() {
		level_selected = false;
	}

	onMount(() => {
		function handleKeyPress(event: KeyboardEvent) {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				show_start_screen = false;

				window.removeEventListener('keydown', handleKeyPress);
			}
		}

		window.addEventListener('keydown', handleKeyPress);
	});
</script>

<div class="container">
	<div class="content">
		{#if show_start_screen}
			<button
				class="overlay"
				transition:fly={{ duration: 600, y: '-100vh' }}
				onclick={() => (show_start_screen = false)}
			>
				<h1 class="landing">Press to start:)</h1>
			</button>
		{/if}

		{#if !level_selected}
			<h1 class="title">Select level:</h1>
			<div class="grid-container">
				{#each levels as level}
					<button class="level-button" onclick={() => handle_button(level.words)}
						>{level.title}</button
					>
				{/each}
			</div>
		{:else}
			<Level {word_list} {reset} />
		{/if}
	</div>
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
	.container {
		display: flex;
		height: 95vh;
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

	.content {
		margin: auto;
		width: 90%;
		height: 90%;
	}

	.grid-container {
		margin-top: 100px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
	}

	.level-button {
		width: 70%;
		height: 60px;
		margin: auto;
		border-radius: 5px;
	}

	.level-button:hover,
	.level-button:focus {
		background-color: #ffd1a6;
		transform: scale(1.05);
		outline: none;
	}
</style>
