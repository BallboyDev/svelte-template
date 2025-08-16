## svelte component

### .svelte 파일 구조
- 스벨트 컴포넌트는 .svelte 확장자를 사용한다.

```html
<!-- component.svelte -->

<script>
    // script code
    // 타입 스크립트 문법을 사용할때는 <script lang="ts">로 블럭을 시작한다.
</script>

template code

<style>
    /* style code */
</style>
```


### template 기초 문법
- html 태그
    - 보통 html 태그는 .svelte 파일의 템플릿에서 그대로 사용한다.

- 동적 컨텐츠
    - 템플릿 내부에서 `{ code }` 와 같이 사용하면 식의 결과가 표시된다,
    - `<div>현재 시간은 {new Date()} 입니다.</div>`
    - 동적 속성
        - DOM 요소의 속성명과 변수 명이 동일할 때는 다음과 같이 생략 할 수 있다.
            ```html
            <script>
                let href = 'https://svelte.dev/'
            </sciprt>

            <a {href}>svelte 공식 사이트</a>
            ```
        - {...object} 와 같이 스프레드 문법의 스프레드 속성도 사용 가능하다.

### style
- 스타일 문법
    - `<style>` 블록에는 일반적인 CSS 문법을 사용한다.
    - `<style>` 블록에 작성한 스타일은 .svelte 파일에 스코프 범위를 갖는다.
    - 스코프 범위를 벗어나서 전역으로 스타일을 적용하시 싶을 때는 :global 수식자를 사용한다.
        ```html
        <style>
            /** 이 스타일은 <body>에 적용됨 */
            :global(body) {
                background-color: red;
            }

            /** .class 내부의 모든 <img> 에 이 스타일을 적용(자식/손자 컴포넌트)*/
            .class :global(img) {

            }
        </style>
        ```
    
- class 속성을 생략하는 문법
    - 클래스 속성은 boolean 값에 따른 속성 변경이 일어나는 경우가 잦아 스벨트는 이를 위해 생략 문법을 제공한다.
    - `class:클래스명={boolean}` 과 같이 사용하면 값이 true d일 때면 클래스명을 class 속성에 추가한다.
        ```html
        <li class={active ? 'className' : ''}>TOP</li>
        <li class:className={active}>TOP</li>

        <!-- 변구명과 클래서명이 동일할 때는 다음과 같이 추가 생략도 가능하다. -->
        <li class:active>TOP</li>
        ```

- style 속성 생략 문법
    ```html
    <div style="color: red">빨간색</div>
    <div style:color="red">빨간색</div>

    <div style:color={color}>{color}</div>
    <div style:color>{color}</div>
    ```

### block
- 스벨트의 템플릿에서는 조건 분기나 반복문과 같은 문법을 제공한다.
- 블록 문법은 모두 `{#xxx...}`에서 시작해 `{/xxx}`로 끝나는 구조를 가진다.
    1. `{#if}` 블록 - 조건에 따라 표시하는 부분을 변경할 수 있다
        ```html
        {#if 조건문1}
            <!-- HTML 코드1 -->
        {:else if 조건문2}
            <!-- HTML 코드2 -->
        {:else}
            <!-- HTML 코드3 -->
        {/if}
        ```

    2. `{#each}` 블록 - 배열 요소를 반복문으로 표현할 수 있다
        ```html
        {#each item as items, index}
            <!-- HTML 코드 -->
        {/each}
        ```

    3. `{#await}` 블록 - Promise를 사용할 수 있는 블록
        ```html
        {#await promise}
            <!-- HTML 코드 - waiting code -->
        {:then res}
            <!-- HTML 코드 - resolve data -->
        {:catch error}
            <!-- HTML 코드 - reject data -->
        {/await}
        ```
        ```html
        <!-- then 블록만 사용 -->
        {#await promise then res}
            <!-- HTML 코드 - resolve data -->
        {/await}

        <!-- catch 블록만 사용 -->
        {#await promise catch error}
            <!-- HTML 코드 - reject data -->
        {/await}
        ```

    4. `{#key}` 블록

### component 사용
```html
<!-- SvelteLogo.svelte -->
<img
    src="https://cdn.jsdelivr.net/gh/sveltejs/branding/svelte-logo.png"
    alt="Svelte Logo"
/>

<!-- App.svelte -->
<script>
    import SvelteLogo from "./component/SvelteLogo.svelte";
</script>

<div>Svelte Logo 이미지 삽입</div>
<SvelteLogo />
```