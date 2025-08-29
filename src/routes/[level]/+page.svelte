<script>
	import Level from '$lib/components/Level.svelte';

    let { data } = $props();
</script>

<Level word_list={data.level?.words} word_drop_interval={data.level?.word_drop_interval}/>