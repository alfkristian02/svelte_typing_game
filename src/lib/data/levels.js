export const levels = [
	{
		title: 'Level 1 — Introduction',
		route: 'level1',
		word_drop_interval: 2500,
		words: [
			{ word: 'props' },
			{ word: 'npm init svelte' },
			{ word: 'javascript' },
			{ word: 'css' },
			{ word: 'html' },
			{ word: 'component' },
			{ word: 'kit' },
			{ word: 'svelte' }
		]
	},

	{
		title: 'Level 2 — Runes',
		route: 'level2',
		word_drop_interval: 2200,
		words: [
			{ word: 'signal' },
			{ word: 'rune' },
			{ word: '$host' },
			{ word: '$effect' },
			{ word: '$inspect' },
			{ word: '$props' },
			{ word: '$derived' },
			{ word: '$state' }
		]
	},

	{
		title: 'Level 3 — Template Syntax',
		route: 'level3',
		word_drop_interval: 1800,
		words: [
			{ word: '{/await}' },
			{ word: '{:catch}' },
			{ word: '{:then}' },
			{ word: '{#await}' },
			{ word: '{/each}' },
			{ word: '{#each}' },
			{ word: '{/if}' },
			{ word: '{:else}' },
			{ word: '{#if}' }
		]
	},

	{
		title: 'Level 4 — Styling',
		route: 'level4',
		word_drop_interval: 1600,
		words: [
			{ word: 'tailwind' },
			{ word: 'scoped css' },
			{ word: '--var' },
			{ word: '.dark-mode' },
			{ word: ':root' },
			{ word: ':global()' },
			{ word: 'style=' },
			{ word: 'class=' }
		]
	},

	{
		title: 'Level 5 — Special Elements',
		route: 'level5',
		word_drop_interval: 1400,
		words: [
			{ word: '<svelte:component>' },
			{ word: '<svelte:self>' },
			{ word: '<svelte:fragment>' },
			{ word: '<svelte:window>' },
			{ word: '<svelte:element>' },
			{ word: '<svelte:body>' },
			{ word: '<svelte:head>' },
			{ word: '<slot name="header">' },
			{ word: '<slot>' }
		]
	},

	{
		title: 'Level 6 — Runtime',
		route: 'level6',
		word_drop_interval: 1200,
		words: [
			{ word: 'hasContext()' },
			{ word: 'setContext()' },
			{ word: 'getContext()' },
			{ word: 'createEventDispatcher()' },
			{ word: 'tick()' },
			{ word: 'afterUpdate()' },
			{ word: 'beforeUpdate()' },
			{ word: 'onDestroy()' },
			{ word: 'onMount()' }
		]
	},

	{
		title: 'Level 7 — Reference',
		route: 'level7',
		word_drop_interval: 1000,
		words: [
			{ word: 'pnpm install svelte' },
			{ word: 'hydration mismatch' },
			{ word: 'immutable data' },
			{ word: 'crossfade()' },
			{ word: 'animate:flip' },
			{ word: 'transition:fly' },
			{ word: 'derived()' },
			{ word: 'writable()' },
			{ word: 'readable()' }
		]
	},

	{
		title: 'Level 8 — Legacy APIs',
		route: 'level8',
		word_drop_interval: 800,
		words: [
			{ word: 'vercel deploy --prod' },
			{ word: 'deprecated' },
			{ word: 'legacy api' },
			{ word: 'bind:this={el}' },
			{ word: 'unsubscribe()' },
			{ word: 'store.subscribe()' },
			{ word: 'sapper' },
			{ word: 'context="module"' }
		]
	}
];
