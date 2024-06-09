<script>
    import { count } from "./stores";

    const decrement = () => {
        // count.update(n => n - 1)
        $count--;
    };
</script>

<button on:click={decrement}>-</button>
