<script>

    export let availableWidth;
    export let word;

</script>

<p style="left: {Math.floor(Math.random() * availableWidth)}px;">{word}</p>

<style>
    p{
        position: absolute;
        font-size: 30px;
    }
</style>