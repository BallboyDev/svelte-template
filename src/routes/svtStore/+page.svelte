<script>
    import { count, name, user } from "./util/stores";
    import IncrementStore from "./util/IncrementStore.svelte";
    import DecrementStore from "./util/DecrementStore.svelte";
    import ResetStore from "./util/ResetStore.svelte";
</script>

<a href="/">HOME</a>

<h1>name: {$name}</h1>
<p>count: {$count}</p>

<IncrementStore />
<DecrementStore />
{#if $name === "yang"}
    <ResetStore />
{/if}
