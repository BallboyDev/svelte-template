# svelte
## create project
- `npx sv create`

## svelte4 vs svelte5

## svelte vs react


## svelte 특징
- 상태 관리를 특별한 기법이나 함수를 사용하지 않고도 가능하다.
    - svelte5에서 일부 변경
- 스벨트는 런타임 없이 빌드 타입에서 실행 하능한 형태로 변환되어 로딩 된다.
    - 스벨트는 컴파일러
- 가상 DOM의 미사용

## vite를 사용한 svelte 환경 설정
- `npm create vite@latest my-project -- --template [svelte | svelte-ts]`

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

### 속성
- 속성 생성, 전달, default
    - 속성을 사용하기 위해서는 속성을 전달받는 측인, 자식 컴포넌트에서 속성을 생성해야 한다.
    ```html
    <!-- Button.svelte -->
    <script>
        // svelte4 props 선언
        export let label
        export let disabled = false;

        // svelte5 props 선언
        let { label, disabled = false } = $props();

        // svelte5 버전의 runes 문법 추가로 인해 사용하지 않는 문법
        console.log($$props)
    </script>

    <button {disabled}>
        {label}
    </button>

    <!-- App.svelte -->
    <script>
        import Button from './Button.svelte'
        let buttonLabel = '전송'
    </script>

    <Button label={buttonLabel} />
    ```

### 슬롯 - legacy APIs
- 부모 컴포넌트에서 자식 템플릿의 일부를 자유롭게 다룰 수 있는 기능
- 슬롯에서는 html태그 뿐만 아니라 컴포넌트나 블록 등 템플릿에서 사용할 수 있는 문법 모두 사용 가능하다.

- 대체 콘텐츠
    - 슬롯에 콘텐츠가 삽입되지 않을 때는 기본값으로 표시할 대체 콘텐츠를 지정할 수 있다.
    - 대체 콘텐츠는 <slot>과 </slot> 사이에 작성한다.

- 이름을 가지는 슬롯
    - 이름을 가지는 슬롯은 슬롯에 이름을 지정하여 슬롯을 구별할 수 있으며 이를 통해 여러 슬롯을 배치할 수 있다.
    - slot 속성은 html 태그 뿐만 아니라 컴포넌트에도 붙일 수 있다.

- $$slots
    - $$slots은 미리 정의된 변수로, 해당 컨포넌트에서 정의된 슬롯 이름을 키로 갖는 객체 변수이다.

- 슬롯 속성
    - 슬롯에 삽압된 요소에 대해 자식 컴포넌트 측에서 값을 전달하고 싶을 때는 슬롯의 속성을 사용한다.
    - `<slot>` 태그에 `속성명 = {값}`과 같이 작성하면 부모 컴포넌트 측에 값을 전달할 수 있다.
    - `let:속성명 = {변수}`와 같이 작성하면 `<slot>`의 슬롯 속성을 변수로 받을 수 있다.

```html
<!-- Box.svelte -->
<div class="box">
    <slot>
        <div>대체 콘텐츠 - not found content</div>
    </slot>
</div>

<style>
    .box {
        border: 1px solid lightgray;
        padding: 1rem;
    }
</style>

<!-- Card.svelte -->
<div class="card">
    {#if $$slots.title}
        <div class="title">
            <slot name="title" />
        </div>
    {/if}

    <div class="body">
        <slot name="body" />
    </div>
</div>

<style>
    .card {
        border: 1px solid lightgray;
    }
    .title {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem 1rem;
    }

    .body {
        padding: 0.5rem 1rem;
    }
</style>

<!-- List.svelte -->
<script>
    let array = ["Svelte", "React", "Vue", "Angular"];
</script>

{#each array as item}
    <slot {item} />
{/each}


<!-- App.svelte -->
<script>
    import Box from "./Box.svelte";

    import Card from "./Card.svelte";
</script>

<Box>
    <h3>Svelte</h3>
    {#if true}
        <p>Svelte is very good</p>
    {:else}
        <p>Svelte is very shit</p>
    {/if}
</Box>

<Card>
    <h3 slot="title">Svelte</h3>
    <svelte:fragment slot="body">
        <p>svelte is very good</p>
    </svelte:fragment>
</Card>

<List let:item={text}>
    <div style="color: blue;">{text}</div>
</List>
```

### 이벤트 -> 가장 기본 기능만 사용 추천
- DOM 이벤트
    - 스벨트에는 이벤트 핸들러를 템플릿에서 `on:이벤트명 = {함수}`와 같이 작성하여 지정할 수 있다.

- 이벤트 수식자
    - 이벤트 수식자는 `on:이벤트명` 뒤에 파이프(|) 기호고 구분하여 작성한다.
    - `on:click|preventDefault={handleClick}`
    
- 컴포넌트 이벤트
    - 스벨트의 컴포넌트는 DOM이벤트와는 별도로 자체 이벤트를 발생시킨다.
    - 하지만 svelte5의 문법에서는 컴포넌트 이벤트 기능을 이벤트 코드를 props로 전달 받아 처리하는 방식으로 변경되었다.

- 이벤트 전송
    - 자식 요소의 컴포넌트 이벤트를 직접 처리하지 않고 부모 컴포넌트에 그대로 전달하고 싶을때 on:click만 작성하면 click이벤트를 CustomButton에러 처리하지 않고 그대로 부모 컴포넌트로 전달한다.

### 라이프 사이클
- .svelte 파일로 작성된 컴포넌트는 최종적으로 자바스크립트 파일로 변환되어 브라우저에서 실행된다. 이 실행(런타임) 처리의 흐름을 컴포넌트의 라이프 사이클 이라고 한다.
- svelte5의 라이프 사이클은 생성과 파괴라는 두 가지 주요 과정으로 구성됩니다.
- 생성/마운트은(는) 컴포넌트가 초기화되며 DOM에 렌더링되는 시점입니다. 컴포넌트가 필요한 렌더링 효과를 설정하며, 초기 상태와 UI가 준비됩니다.
- 파괴/언마운트는 컴포넌트가 DOM에서 제거되기 전, 리소스를 정리하고 이벤트 리스너나 구독을 해제해야 할 때 호출됩니다.

- 라이프 사이클 함수
    - 스벨트는 라이프 사이클 과정에서 특정 타이밍에 실행할 작업을 지정할 수 있는 onMount, onDestory와 상태가 반영될 때 까지 기다리는 tick을 제공하며 이들을 라이프 사이클 함수라고 한다.
    - svelte5 이후 로는 사용되지 않는 beforeUpdate, afterUpdate 함수가 있었다.

- onMount
    - onMount는 컴포넌트가 작성되고 최초 렌더링이 완료된 직후에 호출되는 처리를 설정하는 함수이다.

- onDestory
    - onDestory는 onMount와 반대로, 컴포넌트가 삭제되기 직전에 호출되는 처리를 설정하는 함수다

- tick
    - tick은 스벨트가 제공하는 특수한 함수로, 컴포넌트 내부에 보류 상태의 DOM 업데이트가 있으면 업데이터가 끝날 떄까지 기다리는 Promise를 반환한다.

```html
<script>
    import { onMount, onDestory } from 'svelte'

    onMount(() => {
        console.log('the component has mounted')

        // onMount에서 비동기 함수 로직(async/await)을 넣을 경우 async 함수의 리턴은 promise이므로 return 익명 함수가 무시된다. 그래서 비동기 함수가 있는 경우에는 onDestory 함수를 사용해야 된다.
        // return () => { console.log('the component is being destoryed') }
    })

    onDestory(() => {
        console.log('the component is being destoryed')
    })
</script>
```