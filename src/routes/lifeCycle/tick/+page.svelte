<script>
    import { tick } from "svelte";
    let name = "yang";

    const change = async () => {
        const h1 = document.querySelector("h1");
        name = "franciscus";
        console.log(h1.innerText);

        await tick();

        console.log(h1.innerText);
    };
</script>

<a href="/">HOME</a>

<h1>Hello {name}</h1>
<button on:click={change}>tick test</button>

<!-- 
svelte의 lifeCycle 메소드 실행의 결과를 보면 변수의 갱신과 화면 DOM에 대한 갱신은 별개이다.
svelte의 화면이 갱신되기 위해서는 하나의 함수(테스크)가 모두 끝나야 갱신이 이루어 진다.
즉, 버튼을 클릭하여 변수를 바꾼다면 그 이벤트의 함수가 모두 종료 되어야 화면의 갱신으로 이어진다.
이 처럼 화면의 갱신을 보장 받기 위해서는 tick함수를 사용하는 것이다.
-->
