<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    // props, state value

    onMount(() => {});

    const handle = {
        logout: () => {
            localStorage.removeItem("accessToken");
            goto("/login");
        },
    };
    const callApi = {};
</script>

<div class="navbar">
    <a href="/" class="logo">Spring Mall</a>
    <a href="/list">List</a>
    <a href="/addItem">Add</a>

    <button class="logout" type="button" onclick={handle.logout}>Logout</button>
</div>

<style lang="scss">
    .navbar {
        display: flex;
        margin: 1rem;
        align-items: center;

        & > .logout {
            position: absolute;
            right: 0;
        }

        & > * {
            margin-right: 1rem;
            font-weight: 400;

            text-decoration: none;
        }
    }
</style>
