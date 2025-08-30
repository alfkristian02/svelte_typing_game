<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let { word_list, word_drop_interval } = $props();

	let active_words: Array<string> = $state([]);
	let game_end: boolean = $state(false);
	let value: string = $state('');

	let send_word_falling_interval: ReturnType<typeof setInterval>;

	// fix window resizes when keyboard is opened on phone (ios)
	let view_height = $state(window.innerHeight);
	function updateVh() {
		view_height = window.innerHeight;
	}

	$effect(() => {
		const index = active_words.findIndex((word: string) => word === value.trim().toLowerCase());

		if (index !== -1) {
			active_words.splice(index, 1);
			value = '';
			if (active_words.length === 0 && word_list.length === 0) {
				game_end = true;
			}
		}
	});

	function send_word_falling() {
		active_words.push(word_list.pop());
		if (word_list.length === 0) {
			clearInterval(send_word_falling_interval);
		}
	}

	onMount(() => {
		// fix window resizes when keyboard is opened on phone (ios)
		window.addEventListener('resize', updateVh);

		send_word_falling_interval = setInterval(send_word_falling, word_drop_interval);

		return () => {
			clearInterval(send_word_falling_interval); // called when component is unmounted, e.g. when a new page is navigated to. also something I checked, clearInterval() is idempotent.

			// fix window resizes when keyboard is opened on phone (ios)
			window.removeEventListener('resize', updateVh);
		};
	});
</script>

<div class="scale-wrapper" style="--vh: {view_height}px;">
	<a class="back" href="/">&larr;</a>

	<div class="falling_words">
		{#if game_end}
			<h2 class="game_end_text" transition:fly>
				{active_words.length === 0 ? 'You win!' : 'Game over...'}
			</h2>
		{/if}

		{#each active_words as word (word)}
			<p
				style="right: {Math.random() * 90}%;"
				in:fly={{ delay: 0, duration: 20000, easing: linear, opacity: 1, y: '-70dvh' }}
				onintroend={() => {
					clearInterval(send_word_falling_interval); // stop new words form falling
					game_end = true;
				}}
			>
				{word}
			</p>
		{/each}

		<div class="flames-container">
			<img
				src="/images/flames.png"
				alt="Flames, meaning that the game ends if a words falls to here"
			/>
		</div>
	</div>

	<!-- svelte-ignore a11y_autofocus -->
	<input autofocus disabled={game_end} type="text" bind:value />
</div>

<style>
	.scale-wrapper {
		--base-height: 800; /* design height in px */
		height: var(--vh);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform-origin: top;
		transform: scale(calc(var(--vh) / var(--base-height)));
		transition: transform 0.2s ease-out;
	}

	.back {
		position: absolute;
		text-decoration: none;
		left: 5vw;
		top: 5vw;
		padding: 10px;
		border-radius: 5px;
		border: 2px solid #999;
		background-color: #f0f0f0;
		transition: all 0.15s ease-in-out;
		z-index: 100;
	}

	.back:hover,
	.back:focus {
		transform: scale(1.05);
		background-color: #e0e0e0;
	}

	@font-face {
		font-family: 'level_font';
		src: url('/fonts/falling_words.woff2') format('woff2');
	}

	.falling_words {
		font-family: 'level_font';
		width: 70vw;
		height: 70dvh;
		margin: auto;
		position: relative;
		display: grid; /* to vertically align the game_end text*/
	}

	.flames-container {
		position: absolute;
		bottom: 0;
		width: 100%;
		overflow: hidden; /* hide the parts of the picture that does not fit */
		text-align: center;
	}

	img {
		height: 10vh;
	}

	p {
		white-space: nowrap; /* a word should never appear over more than one line */
		position: absolute;
		bottom: 0;
	}

	input {
		user-select: all;

		display: block;
		margin: auto;

		margin-top: 4vh;
		scale: 1.5;
		font-size: 16px;
	}

	@media (min-width: 800px) {
		input {
			scale: 2;
		}
	}
	@media (min-width: 1200px) {
		input {
			scale: 2.5;
		}
	}

	.game_end_text {
		color: #ff3e00;
		opacity: 0.6;
		letter-spacing: 15px;
		font-size: 40px;
		text-align: center;
		align-self: center;
	}
</style>
