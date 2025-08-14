<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {});
</script>

<slot />

<style global>
    :global(body) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>
