<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";

    // props, state value
    let displayName = $state("");
    let username = $state("");
    let password = $state("");

    onMount(() => {});

    const handle = {
        join: () => {
            callApi.join();
        },
    };
    const callApi = {
        join: () => {
            axios
                .post("http://localhost:8080/join", {
                    displayName,
                    username,
                    password,
                })
                .then((res) => {
                    console.log(res);
                });
        },
    };
</script>

<div class="join">
    <h3>Join</h3>
    <input type="text" placeholder="이름" bind:value={displayName} />
    <input type="text" placeholder="아이디" bind:value={username} />
    <input type="password" placeholder="비밀번호" bind:value={password} />
    <div class="btn">
        <button type="button" onclick={handle.join}>회원가입</button>
    </div>
</div>

<style lang="scss">
    .join {
        width: 25rem;
        margin: 1rem auto;
        padding: 1rem;
        text-align: center;
        border: 1px solid black;
        display: flex;
        flex-direction: column;

        & button,
        input {
            height: 2rem;
        }

        & > input {
            margin: 0.5rem 0;
        }

        & > .btn {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        }
    }
</style>
