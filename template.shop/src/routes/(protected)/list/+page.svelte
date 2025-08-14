<script lang="ts">
    import { goto } from "$app/navigation";
    import { callApi } from "$lib/api";

    import Navbar from "$lib/components/Navbar.svelte";
    import axios from "axios";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    // props, state value
    let itemList: { id: number; title: string; price: number }[] = $state([]);

    onMount(() => {
        // handle.list();
    });

    const handle = {
        list: async () => {
            const res = await callApi.get("/list");
            itemList = res.data;
        },
        modify: (id: number) => {
            goto(`/modifyItem?id=${id}`);
        },
        delete: async (id: number) => {
            const res = await callApi.post("/delete", { id });

            console.log(res);
            if (res.status === 200) {
                console.log("callApi");
                handle.list();
            }
        },
    };
</script>

<div class="list">
    {#each itemList as { id, title, price }}
        <div class="item">
            <img src="https://placehold.co/300" alt="" srcset="" />
            <div class="item_info">
                <a href={`/detail?id=${id}`}>
                    <h4>{title}</h4>
                </a>
                <p>{price}</p>
                <div class="item_btn">
                    <button
                        onclick={() => {
                            handle.modify(id);
                        }}>수정</button
                    >
                    <button
                        onclick={() => {
                            handle.delete(id);
                        }}>삭제</button
                    >
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .list {
        display: flex;
        flex-wrap: wrap;

        & > .item {
            border: 1px solid black;

            display: flex;
            max-width: 33%;
            margin: 1rem;

            & > .item_info {
                padding: 0.5rem;
                width: 5rem;

                & > a {
                    text-decoration: none;
                }

                & > .item_btn {
                    display: flex;
                }
            }
        }
    }
</style>
