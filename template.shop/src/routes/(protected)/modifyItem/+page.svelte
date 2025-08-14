<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { callApi } from "$lib/api";
    import Navbar from "$lib/components/Navbar.svelte";
    import axios from "axios";
    import { onMount } from "svelte";

    // props, state value
    let id = $state($page.url.searchParams.get("id"));
    let title = $state("");
    let price = $state(0);

    onMount(() => {
        // callApi.detail();

        callApi.get(`/detail/${id}`).then((res) => {
            title = res.data.title;
            price = res.data.price;
        });
    });

    const handle = {
        modify: () => {
            callApi.post("/modify", { id, title, price }).then((res) => {
                if (res.status === 200 && !!res.data?.id) {
                    goto("/list", { replaceState: true });
                }
            });
        },
    };
</script>

<div class="modify_item">
    <h3>Modify Item</h3>

    <input type="number" bind:value={id} hidden />
    <p>제품명</p>
    <input type="text" bind:value={title} />
    <p>가격</p>
    <input type="number" bind:value={price} />

    <button onclick={handle.modify}>수정</button>
</div>

<style lang="scss">
    .modify_item {
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
