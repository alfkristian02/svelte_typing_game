<script>

    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';

    let up_time = 0;

    let clientWidth = 0;

    onMount(() =>{
        let mount_time = Date.now();

        setInterval(() => {
            up_time = Math.floor((Date.now() - mount_time) / 1000);
        })
    });

    onDestroy(() => {
        up_time = 0;
    });

    // This is probably going to be a list of words later, imported from some file. 
    let words = ["one", "two", "three", "four"]
</script>


<div id="container" bind:clientWidth>
    {#each words as word, i}
        {#if i <= up_time}
            <p style="left: {Math.floor(Math.random() * clientWidth)}px;">{word}</p>
            <!-- {console.log(clientWidth)} -->
        {/if}
    {/each}
</div>

<style>
    #container {
        display: flex;
        width: auto;
    }

    p {
        position: absolute;
    }
</style>