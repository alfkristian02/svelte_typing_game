<script>

    import { onMount, onDestroy } from 'svelte';

    import Word from '$lib/components/Word.svelte';

    let up_time = 0;
    let clientWidth;
    let interval ;

    onMount(() =>{
        let mount_time = Date.now();

        interval = setInterval(() => {
            up_time = Math.floor((Date.now() - mount_time) / 1000);
        })
    });

    onDestroy(() => {
        clearInterval(interval)
        up_time = 0;
    });

    // This is probably going to be a list of words later, imported from some file. 
    let words = ["yoo", "yoo", "yoo", "yoo", "yoo", "yoo", "yoo"]
</script>


<div id="container" bind:clientWidth>
    {#each words as word, i}
        {#if i <= up_time}
            <Word {word} availableWidth={clientWidth} />
        {/if}
    {/each}
</div>

<style>
    #container {
        display: flex;
        width: auto;
    }
</style>