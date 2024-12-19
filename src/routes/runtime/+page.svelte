<script>
    import Store from "./Store.svelte";

    let items = $state(["store"]);
    let runtime = $state("store");
</script>

<h3>{runtime}</h3>

{#each items as item}
    <button
        onclick={() => {
            runtime = item;
        }}>{item}</button
    >
{/each}

<hr />

{#if runtime === "store"}
    <Store />
{/if}
