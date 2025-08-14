<script lang="ts">
    import { goto } from "$app/navigation";
    import { callApi } from "$lib/api";
    import axios from "axios";
    import { onMount } from "svelte";

    // props, state value
    let username = $state("ballboy");
    let password = $state("1234");

    onMount(() => {});

    const handle = {
        join: () => {
            goto("/join");
        },
        login: () => {
            callApi.login({ username, password }).then((res) => {
                console.log(res);
            });
        },
    };
</script>

<div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="아이디" bind:value={username} />
    <input type="password" placeholder="비밀번호" bind:value={password} />
    <div class="btn">
        <button type="button" onclick={handle.login}>로그인</button>
        <div class="join">
            <button type="button" onclick={handle.join}>회원가입</button>
            <button type="button">비밀번호 찾기</button>
        </div>
    </div>
</div>

<style lang="scss">
    .login {
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

            & > .join {
                margin: 1rem 0;
                display: flex;
                justify-content: space-between;

                & > button {
                    width: 10rem;
                }
            }
        }
    }
</style>
