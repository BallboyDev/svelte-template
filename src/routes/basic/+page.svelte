<script>
    let name = "ballboy";
    let names = ["franciscus", "ballboy", "seung", "woo", "yang"];
</script>

<a href="/">HOME</a>

<button
    on:click={() => {
        name = "yang";
    }}>yang</button
>
<button
    on:click={() => {
        name = "seung";
    }}>seung</button
>

<!-- 조건문 -->
{#if name === "ballboy"}
    <h1>name = {name}</h1>
{:else if name === "yang"}
    <h1>name = {name}</h1>
{:else}
    <h1>name = {name}</h1>
{/if}

<!-- 반복문 -->
<button
    on:click={() => {
        names = names.reverse();
    }}>reverse</button
>
<ul>
    {#each names as name, index}
        <li>{index}. {name}</li>
    {/each}
</ul>
