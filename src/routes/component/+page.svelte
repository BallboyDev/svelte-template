<script>
    import Child from "./Child.svelte";
    let age;
</script>

<a href="/">HOME</a>

<div>age: {age}</div>
<Child />
<Child bind:age />
<Child name="franciscus" />
