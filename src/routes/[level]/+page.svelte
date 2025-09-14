<script>
	import Level from '$lib/components/Level.svelte';
	import { fisher_yates_shuffle } from '$lib/utils/fisher-yates_shuffle';
	import { onMount } from 'svelte';

    let { data } = $props();

    let word_list = data.level?.words

    onMount(() => {
        fisher_yates_shuffle(word_list);
    })
</script>

<Level {word_list} word_drop_interval={data.level?.word_drop_interval}/>