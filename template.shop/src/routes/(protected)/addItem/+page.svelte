<script lang="ts">
    import { goto, replaceState } from "$app/navigation";
    import Navbar from "$lib/components/Navbar.svelte";
    import axios from "axios";
    import { onMount } from "svelte";
    import { callApi } from "$lib/api";

    // props, state value
    let title = $state("");
    let price = $state(0);

    onMount(() => {});

    const handle = {
        submit: async () => {
            const res = await callApi.post("/add", { title, price });

            console.log(res);
            if (res.status === 200 && !!res.data.id) {
                goto("/list", { replaceState: true });
            }
        },
    };
</script>

<div class="add_item">
    <h3>Add Item</h3>

    <p>제품명</p>
    <input type="text" bind:value={title} />
    <p>가격</p>
    <input type="number" bind:value={price} />

    <button onclick={handle.submit}>생성</button>
</div>

<style lang="scss">
    .add_item {
        margin: 2rem auto;
        padding: 1rem;
        border: 1px solid black;
        width: 10rem;
        display: flex;
        flex-direction: column;
        & > input {
            margin-bottom: 0.5rem;
        }
    }
</style>
