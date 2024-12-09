<!-- <script>
    import { onDestroy, onMount } from "svelte";

    let state = $state({ value: 0 });
    let derived = $derived({ value: state.value * 2 });

    onMount(() => {
        console.log("onMount()");
    });

    onDestroy(() => {
        console.log("onDetroy()");
    });

    $effect(() => {
        console.log("change state");
        state;
    });
    $effect(() => {
        console.log("change state.value");
        state.value;
    });
    $effect(() => {
        console.log("change derived");
        derived;
    });

    $effect.pre(() => {
        console.log("pre change state.value");
        state.value;
    });
</script>

<button onclick={() => (state.value += 1)}>
    {state.value}
</button>

<p>{state.value} doubled is {derived.value}</p> -->

<script>
    let state = $state(0);

    $effect(() => {
        state;
        console.log("effect");
    });

    $effect.pre(() => {
        state;
        console.log("effect.pre");
    });
</script>

<button
    onclick={() => {
        state++;
    }}>{state}</button
>
