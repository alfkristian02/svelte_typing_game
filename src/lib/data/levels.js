export const levels = [
	{
		title: 'test',
		route: 'test',
		word_drop_interval: 100,
		words: ['test']
	},
	{
		title: 'Level 1 — Introduction',
		route: 'level1',
		word_drop_interval: 2500,
		words: ['props', 'npm init svelte', 'javascript', 'css', 'html', 'component', 'kit', 'svelte']
	},

	{
		title: 'Level 2 — Runes',
		route: 'level2',
		word_drop_interval: 2200,
		words: ['signal', 'rune', '$host', '$effect', '$inspect', '$props', '$derived', '$state']
	},

	{
		title: 'Level 3 — Template Syntax',
		route: 'level3',
		word_drop_interval: 1800,
		words: [
			'{/await}',
			'{:catch}',
			'{:then}',
			'{#await}',
			'{/each}',
			'{#each}',
			'{/if}',
			'{:else}',
			'{#if}'
		]
	},

	{
		title: 'Level 4 — Styling',
		route: 'level4',
		word_drop_interval: 1600,
		words: [
			'tailwind',
			'scoped css',
			'--var',
			'.dark-mode',
			':root',
			':global()',
			'style=',
			'class='
		]
	},

	{
		title: 'Level 5 — Special Elements',
		route: 'level5',
		word_drop_interval: 1400,
		words: [
			'<svelte:component>',
			'<svelte:self>',
			'<svelte:fragment>',
			'<svelte:window>',
			'<svelte:element>',
			'<svelte:body>',
			'<svelte:head>',
			'<slot name="header">',
			'<slot>'
		]
	},

	{
		title: 'Level 6 — Runtime',
		route: 'level6',
		word_drop_interval: 1200,
		words: [
			'hasContext()',
			'setContext()',
			'getContext()',
			'createEventDispatcher()',
			'tick()',
			'afterUpdate()',
			'beforeUpdate()',
			'onDestroy()',
			'onMount()'
		]
	},

	{
		title: 'Level 7 — Reference',
		route: 'level7',
		word_drop_interval: 1000,
		words: [
			'pnpm install svelte',
			'hydration mismatch',
			'immutable data',
			'crossfade()',
			'animate:flip',
			'transition:fly',
			'derived()',
			'writable()',
			'readable()'
		]
	},

	{
		title: 'Level 8 — Legacy APIs',
		route: 'level8',
		word_drop_interval: 800,
		words: [
			'vercel deploy --prod',
			'deprecated',
			'legacy api',
			'bind:this={el}',
			'unsubscribe()',
			'store.subscribe()',
			'sapper',
			'context="module"'
		]
	}
];
