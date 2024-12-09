<script>
    import State from "./State.svelte";
    import Derived from "./Derived.svelte";
    import Effect from "./Effect.svelte";
    import Props from "./Props.svelte";
    import Bindable from "./Bindable.svelte";
    import Inspect from "./Inspect.svelte";

    let items = $state([
        "state",
        "derived",
        "effect",
        "props",
        "bindable",
        "inspect",
    ]);
    let runes = $state("inspect");
</script>

<h3>{runes}</h3>

{#each items as item}
    <button
        onclick={() => {
            runes = item;
        }}>{item}</button
    >
{/each}

<hr />

{#if runes === "state"}
    <State />
{:else if runes === "derived"}
    <Derived />
{:else if runes === "effect"}
    <Effect />
{:else if runes === "props"}
    <Props first="first" second="second" third="third" />
    <!-- <Props first="first" /> -->
{:else if runes === "bindable"}
    <Bindable bind:value={runes} />
    <p>{runes}</p>
{:else if runes === "inspect"}
    <Inspect />
{/if}
