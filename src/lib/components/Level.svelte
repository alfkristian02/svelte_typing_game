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

		const index = active_words.findIndex((words: Words) => words.word === value.trim().toLowerCase());

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

<div class="falling_words">
	{#if game_won}
		<div class="game_end" transition:fly={{ y: '100vh' }}>
			<h2 class="game_end_text">
				You win!
				<br />
				<a href="/">Back to levels</a>
			</h2>
		</div>
	{:else if game_over}
		<div class="game_end" transition:fly={{ y: '100vh' }}>
			<h2 class="game_end_text">
				Game over...
				<br />
				<a href="/">Back to levels</a>
			</h2>
		</div>
	{/if}

	{#each active_words as word (word)}
		<p
			style="right: {Math.random() * 90}%;"
			in:fly={{ delay: 0, duration: 20000, easing: linear, opacity: 1, y: '-70vh' }}
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
	@font-face {
		font-family: 'woffwoff';
		src: url('/fonts/falling_words.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	.falling_words {
		width: 70vw;
		height: 70vh;
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

	a {
		display: inline-flex;
		justify-content: center;
		align-items: center;

		max-width: 400px; /* optional, keeps button reasonable on large screens */
		margin: 20px auto 0 auto; /* center horizontally with spacing */
		padding: 15px;

		border-radius: 5px;
		border: 2px solid #999; /* subtle border like a native button */
		background-color: #f0f0f0; /* light neutral background */
		color: #000; /* default text color */

		font-size: 25px;
		font-weight: bold;
		text-align: center;
		text-decoration: none;

		cursor: pointer;
		user-select: none;

		transition: all 0.15s ease-in-out;
	}

	a:hover,
	a:focus {
		transform: scale(1.05);
		background-color: #e0e0e0;
		outline: 2px solid #555;
	}
</style>
