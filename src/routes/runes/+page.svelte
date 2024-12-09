<script>
    import State from "./State.svelte";
    import Derived from "./Derived.svelte";
    import Effect from "./Effect.svelte";

    let items = $state(["state", "derived", "effect"]);
    let runes = $state("effect");
</script>

<h3>{runes}</h3>

{#each items as item}
    <button
        onclick={() => {
            runes = item;
        }}>{item}</button
    >
{/each}

{#if runes === "state"}
    <State />
{:else if runes === "derived"}
    <Derived />
{:else if runes === "effect"}
    <Effect />
{/if}
