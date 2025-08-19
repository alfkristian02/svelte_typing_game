<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	type Word = {
		display_word: string;
		match: string;
		style: number;
	};

	let { word_list, reset, word_drop_interval } = $props();
	
	let active_words: Array<Word> = $state([]);

	let game_won: boolean = $state(false);
	let game_over: boolean = $state(false)

	let value: string = $state('');

	function handle_change() {
		const index = active_words.findIndex((wordObj: Word) => wordObj.match === value.trim());

		if (index !== -1) {
			active_words.splice(index, 1);
			value = '';
			if (active_words.length === 0 && word_list.length === 0){
                game_won = true;
            }
		}
	}

	function send_word_falling() {
		active_words.push(word_list.pop());

		if (word_list.length === 0) return clearInterval(interval);
	}

	let interval: ReturnType<typeof setInterval>;

    onMount(()=>{
		// show countdown before words start falling
		// but that should be implemented after the logic is in order

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
				<button onclick={reset}>Back to levels</button>
			</h2>
		</div>
	{:else if game_over}
		<div class="game_end" transition:fly={{ y: '100vh' }}>
			<h2 class="game_end_text">
				Game over...
				<br />
				<button onclick={reset}>Back to levels</button>
			</h2>
		</div>
	{/if}
	{#each active_words as word (word.match)}
		<p
			style="right: {Math.random() * 95}%;"
			in:fly={{ delay: 0, duration: 20000, easing: linear, opacity: 1, y: '-70vh'}}
			onintroend={() => {
					if (active_words.includes(word)) {
						clearInterval(interval)
						game_over = true
					}
				}
			}
			>{word.display_word}</p>
	{/each}
</div>

<div class="input">
	<!-- svelte-ignore a11y_autofocus -->
	<input autofocus disabled={game_won || game_over} type="text" bind:value oninput={handle_change} />
</div>

<style>
	p {
		position: absolute;
		bottom: 0;
	}

	.falling_words {
		width: 70vw;
		border-bottom: solid;
		border-width: 5px;
		height: 70vh;
		margin: auto;
		position: relative;
	}

	.input {
		text-align: center;
		margin-top: 50px;
	}

	input {
		scale: 3;
		user-select: all;
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

	button {
		scale: 3;
		margin-top: 50px;
	}
</style>
