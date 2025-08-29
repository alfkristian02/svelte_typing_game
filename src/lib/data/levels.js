export const levels = [
	{
		title: 'Level 1 — Introduction',
		route: 'level1',
		word_drop_interval: 2500,
		words: [
			{ display_word: 'props', match: 'props', style: 0 },
			{ display_word: 'npm init svelte', match: 'npm init svelte', style: 1 },
			{ display_word: 'javascript', match: 'javascript', style: 0 },
			{ display_word: 'css', match: 'css', style: 0 },
			{ display_word: 'html', match: 'html', style: 0 },
			{ display_word: 'component', match: 'component', style: 0 },
			{ display_word: 'kit', match: 'kit', style: 0 },
			{ display_word: 'svelte', match: 'svelte', style: 0 }
		]
	},

	{
		title: 'Level 2 — Runes',
		route: 'level2',
		word_drop_interval: 2200,
		words: [
			{ display_word: 'signal', match: 'signal', style: 0 },
			{ display_word: 'rune', match: 'rune', style: 0 },
			{ display_word: '$host', match: '$host', style: 0 },
			{ display_word: '$effect', match: '$effect', style: 0 },
			{ display_word: '$inspect', match: '$inspect', style: 0 },
			{ display_word: '$props', match: '$props', style: 0 },
			{ display_word: '$derived', match: '$derived', style: 0 },
			{ display_word: '$state', match: '$state', style: 0 }
		]
	},

	{
		title: 'Level 3 — Template Syntax',
		route: 'level3',
		word_drop_interval: 1800,
		words: [
			{ display_word: '{/await}', match: '{/await}', style: 0 },
			{ display_word: '{:catch}', match: '{:catch}', style: 0 },
			{ display_word: '{:then}', match: '{:then}', style: 0 },
			{ display_word: '{#await}', match: '{#await}', style: 0 },
			{ display_word: '{/each}', match: '{/each}', style: 0 },
			{ display_word: '{#each}', match: '{#each}', style: 0 },
			{ display_word: '{/if}', match: '{/if}', style: 0 },
			{ display_word: '{:else}', match: '{:else}', style: 0 },
			{ display_word: '{#if}', match: '{#if}', style: 0 }
		]
	},

	{
		title: 'Level 4 — Styling',
		route: 'level4',
		word_drop_interval: 1600,
		words: [
			{ display_word: 'tailwind', match: 'tailwind', style: 0 },
			{ display_word: 'scoped css', match: 'scoped css', style: 0 },
			{ display_word: '--var', match: '--var', style: 0 },
			{ display_word: '.dark-mode', match: '.dark-mode', style: 0 },
			{ display_word: ':root', match: ':root', style: 0 },
			{ display_word: ':global()', match: ':global()', style: 0 },
			{ display_word: 'style=', match: 'style=', style: 0 },
			{ display_word: 'class=', match: 'class=', style: 0 }
		]
	},

	{
		title: 'Level 5 — Special Elements',
		route: 'level5',
		word_drop_interval: 1400,
		words: [
			{ display_word: '<svelte:component>', match: '<svelte:component>', style: 1 },
			{ display_word: '<svelte:self>', match: '<svelte:self>', style: 0 },
			{ display_word: '<svelte:fragment>', match: '<svelte:fragment>', style: 0 },
			{ display_word: '<svelte:window>', match: '<svelte:window>', style: 0 },
			{ display_word: '<svelte:element>', match: '<svelte:element>', style: 0 },
			{ display_word: '<svelte:body>', match: '<svelte:body>', style: 0 },
			{ display_word: '<svelte:head>', match: '<svelte:head>', style: 0 },
			{ display_word: '<slot name="header">', match: '<slot name="header">', style: 1 },
			{ display_word: '<slot>', match: '<slot>', style: 0 }
		]
	},

	{
		title: 'Level 6 — Runtime',
		route: 'level6',
		word_drop_interval: 1200,
		words: [
			{ display_word: 'hasContext()', match: 'hasContext()', style: 0 },
			{ display_word: 'setContext()', match: 'setContext()', style: 0 },
			{ display_word: 'getContext()', match: 'getContext()', style: 0 },
			{ display_word: 'createEventDispatcher()', match: 'createEventDispatcher()', style: 1 },
			{ display_word: 'tick()', match: 'tick()', style: 0 },
			{ display_word: 'afterUpdate()', match: 'afterUpdate()', style: 0 },
			{ display_word: 'beforeUpdate()', match: 'beforeUpdate()', style: 0 },
			{ display_word: 'onDestroy()', match: 'onDestroy()', style: 0 },
			{ display_word: 'onMount()', match: 'onMount()', style: 0 }
		]
	},

	{
		title: 'Level 7 — Reference',
		route: 'level7',
		word_drop_interval: 1000,
		words: [
			{ display_word: 'pnpm install svelte', match: 'pnpm install svelte', style: 1 },
			{ display_word: 'hydration mismatch', match: 'hydration mismatch', style: 0 },
			{ display_word: 'immutable data', match: 'immutable data', style: 0 },
			{ display_word: 'crossfade()', match: 'crossfade()', style: 0 },
			{ display_word: 'animate:flip', match: 'animate:flip', style: 0 },
			{ display_word: 'transition:fly', match: 'transition:fly', style: 0 },
			{ display_word: 'derived()', match: 'derived()', style: 0 },
			{ display_word: 'writable()', match: 'writable()', style: 0 },
			{ display_word: 'readable()', match: 'readable()', style: 0 }
		]
	},

	{
		title: 'Level 8 — Legacy APIs',
		route: 'level8',
		word_drop_interval: 800,
		words: [
			{ display_word: 'vercel deploy --prod', match: 'vercel deploy --prod', style: 1 },
			{ display_word: 'deprecated', match: 'deprecated', style: 0 },
			{ display_word: 'legacy api', match: 'legacy api', style: 0 },
			{ display_word: 'bind:this={el}', match: 'bind:this={el}', style: 0 },
			{ display_word: 'unsubscribe()', match: 'unsubscribe()', style: 0 },
			{ display_word: 'store.subscribe()', match: 'store.subscribe()', style: 0 },
			{ display_word: 'sapper', match: 'sapper', style: 0 },
			{ display_word: 'context="module"', match: 'context="module"', style: 0 }
		]
	}
];
