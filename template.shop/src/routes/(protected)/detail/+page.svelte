<script>
    import { page } from "$app/stores";
    import Navbar from "$lib/components/Navbar.svelte";
    import axios from "axios";
    import { onMount } from "svelte";
    import { callApi } from "$lib/api";

    // props, state value
    let id = $state($page.url.searchParams.get("id"));
    let title = $state("");
    let price = $state(0);

    onMount(() => {
        handle.detail();
    });

    const handle = {
        detail: async () => {
            const res = await callApi.get(`/detail/${id}`);
            console.log(res);
            title = res.data.title;
            price = res.data.price;
        },
    };
</script>

<div class="detail">
    <h4>Detail</h4>
    <img src="https://placehold.co/300" alt="" srcset="" />
    <h3>{title}</h3>
    <p>{price}</p>
</div>

<style lang="scss">
    .detail {
        margin: 1rem auto;
        padding: 1rem;
        width: 25rem;
        text-align: center;
        border: 1px solid black;

        & > * {
            margin-bottom: 1rem;
        }
    }
</style>
