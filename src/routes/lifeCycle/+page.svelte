<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
    let name = "yang";

    /** 변수 값 변경 이전 실행 */
    /** 최초 화면 로드시  onMount 보다 먼저 실행 */
    beforeUpdate(() => {
        const h1 = document.querySelector("h1");

        if (h1 !== null) {
            console.log(`before update : ${h1.innerText}`);
        } else {
            console.log("before mount");
        }
    });

    /** 변수 값 변경 이후 실행*/
    /** 최초 화면 로드시 onMount 이후 실행 */
    afterUpdate(() => {
        const h1 = document.querySelector("h1");
        console.log(`after update : ${h1.innerText}`);
    });

    /** 컴포넌트 html 렌더링 된 이후 실행 */
    /** 반환 함수를 넣으면 onDestroy와 같은 (onDestroy가 먼저 실행되고 반환 함수 실행 됨) */
    /** onDestroy와 return 함수 둘중 하나만 만들어 사용해야 함 */
    onMount(() => {
        console.log("Mounted");

        // onMount에서 비동기 함수 로직을(async/await)을 넣을 경우
        // async 함수의 리턴은 promise이므로 return 익명 함수가 무시된다.
        // 그래서 비동기 함수가 있는 경우에는 onDestroy 훅을 이용해야 한다.
        // return () => {console.log('destroy')}
    });

    /** 컴포넌트가 제거 될때 실행 */
    onDestroy(() => {
        console.log("destroy");
    });
</script>

<a href="/">HOME</a>
<a href="/lifeCycle/tick">tick</a>

<h1>Hello {name}</h1>
<button
    on:click={() => {
        name = "franciscus";
    }}>setName</button
>
