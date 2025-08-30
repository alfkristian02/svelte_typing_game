<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	type Words = {
		word: string;
	};

	let { word_list, word_drop_interval } = $props();

	let active_words: Array<Words> = $state([]);

	let game_won: boolean = $state(false);
	let game_over: boolean = $state(false);

	let value: string = $state('');

	function handle_change(newValue: string) {
		value = newValue;

		const index = active_words.findIndex(
			(words: Words) => words.word === value.trim().toLowerCase()
		);

		if (index !== -1) {
			active_words.splice(index, 1);
			value = '';
			if (active_words.length === 0 && word_list.length === 0) {
				game_won = true;
			}
		}
	}

	function send_word_falling() {
		active_words.push(word_list.pop());

		if (word_list.length === 0) return clearInterval(interval);
	}

	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		interval = setInterval(send_word_falling, word_drop_interval);

		return () => clearInterval(interval);
	});
</script>

<a
	class="back"
	href="/"
	onclick={(e) => {
		clearInterval(interval); // stop falling words
		active_words = [];
		game_won = false;
		game_over = false;
		value = '';
	}}>&larr;</a
>

<div class="falling_words">
	{#if game_won}
		<div class="game_end" transition:fly={{ y: '100dvh' }}>
			<h2 class="game_end_text">You win!</h2>
		</div>
	{:else if game_over}
		<div class="game_end" transition:fly={{ y: '100dvh' }}>
			<h2 class="game_end_text">Game over...</h2>
		</div>
	{/if}

	{#each active_words as word (word)}
		<p
			style="right: {Math.random() * 90}%;"
			in:fly={{ delay: 0, duration: 20000, easing: linear, opacity: 1, y: '-70dvh' }}
			onintroend={() => {
				if (active_words.includes(word)) {
					clearInterval(interval);
					game_over = true;
				}
			}}
		>
			{word.word}
		</p>
	{/each}
	<div class="hide-overflow">
		<img src="/images/flames.png" alt="Flames, meaning end of falling words display" />
	</div>
</div>

<!-- svelte-ignore a11y_autofocus -->
<input
	autofocus
	disabled={game_won || game_over}
	type="text"
	{value}
	oninput={(e) => handle_change((e.target as HTMLInputElement).value)}
/>

<style>
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
		font-family: 'woffwoff';
		src: url('/fonts/falling_words.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	.falling_words {
		width: 70vw;
		height: 70dvh;
		margin: auto;
		position: relative;
		font-family: 'woffwoff';
	}

	p,
	img,
	.hide-overflow {
		position: absolute;
		bottom: 0;
	}

	.hide-overflow {
		width: 100%;
		height: 50px;
		overflow: hidden;
	}

	img {
		height: 50px;
	}

	p {
		white-space: nowrap;
	}

	input {
		display: block;
		margin: auto;
		margin-top: 42px;
		user-select: all;
	}

	@media (min-width: 480px) {
		input {
			scale: 1.3;
		}
	}
	@media (min-width: 1024px) {
		input {
			scale: 2;
		}
	}

	.game_end {
		position: absolute;
		width: 70vw;
		height: 60vh;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	.game_end_text {
		color: #ff3e00;
		opacity: 0.6;
		letter-spacing: 15px;
		font-size: 40px;
	}
</style>
