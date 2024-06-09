<script>
    import { count, name } from "./stores";

    const reset = () => {
        $count = 0;
        $name = "ballboy";
    };
</script>

<button on:click={reset}>reset</button>
