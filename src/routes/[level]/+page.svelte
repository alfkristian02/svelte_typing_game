<script>
	import Level from '$lib/components/Level.svelte';
	import { fisher_yates_shuffle } from '$lib/utils/fisher-yates_shuffle';

    let { data } = $props();

</script>

<Level word_list={fisher_yates_shuffle(data.level?.words)} word_drop_interval={data.level?.word_drop_interval}/>