<script>
    export let name = "yang";
    export let age = 30;
</script>

<h2>
    name: {name}<br />
    age: {age}
</h2>

<button
    on:click={() => {
        age = 100;
    }}>setAge</button
>
