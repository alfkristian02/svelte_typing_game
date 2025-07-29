<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Word = {
		display_word: string;
		match: string;
		style: number;
	};

	let { word_list, reset } = $props();

	let end_game: boolean = $state(false);

	let value: string = $state('');

	function handle_change() {
		const index = word_list.findIndex((wordObj: Word) => wordObj.match === value.trim());

		if (index !== -1) {
			word_list.splice(index, 1);
			value = '';
			if (word_list.length === 0){
                end_game = true;
            }
		}
	}

    onMount(()=>{
        if (word_list.length === 0){
            end_game = true;
        }
    });

</script>

<div class="falling_words">
	{#if end_game}
		<div class="game_end" transition:fly={{ y: '100vh' }}>
			<h2 class="game_end_text">
				You win!
				<br />
				<button onclick={reset}>Back to levels</button>
			</h2>
		</div>
	{/if}
	{#each word_list as word}
		<h1>{word.display_word}</h1>
	{/each}
</div>

<div class="input">
	<!-- svelte-ignore a11y_autofocus -->
	<input autofocus disabled={end_game} type="text" bind:value oninput={handle_change} />
</div>

<style>
	.falling_words {
		width: 1000px;
		border: solid;
		border-width: 1px;
		height: 600px;
		margin: auto;
	}

	.input {
		text-align: center;
		margin-top: 5%;
	}

	input {
		scale: 3;
		user-select: all;
	}

	.game_end {
		position: absolute;
		width: 1000px;
		height: 600px;
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
