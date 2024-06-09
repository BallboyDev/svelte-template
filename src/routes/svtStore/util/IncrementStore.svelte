<script>
    import { count } from "./stores";

    const increment = () => {
        // count.update(n => n + 1)
        $count++;
    };
</script>

<button on:click={increment}>+</button>
