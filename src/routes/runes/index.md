## Runes
- 룬은 svelte 컴파일러를 제어하기 위해 `.svelte` 및 `.svelte.ts` 파일에서 사용하는 기호 입니다. Svelte를 하나의 언어로 생각한다면, 룬은 그 문법의 일부로, 키워드에 해당합니다.

### 특징
1. 컴파일러 지시문
    - 룬은 svelte 컴파일러가 코드를 분석하고 변환하는 방식을 제어합니다.
2. 반응성 강화 
    - 반응성 관리, 상태 변경, 그리고 의존성 추적 등을 명확하게 정의 할 수 있습니다.
3. 가독성 향상
    - 복잡한 동작을 간결하게 표현하며, 코드의 의도를 명확히 전달합니다.
4. 주로 `$`로 시작
    - 룬은 `$`로 시작하며, 기존 svelte의 반응성 모델을 확장하는 요소를 제공합니다.

### $state
- $state 룬을 사용하면 반응 상태를 만들수 있습니다.
- 다른 프레임워크와 달리 상태를 변경하기 위한 API가 존재하지 않습니다. 일반적인 변수를 업데이트 하는 것과 같이 값을 변경할 수 있습니다.

- __디테일한 부분은 더 공부가 필요함__

```html
<script>
    let count = $state(0)
</script>

<button onclick={() => count++}>
    clicks : {count}
</button>
```

### $derived / $derived.by
- $derived 룬은 state에서 파생된 state를 만들 수 있습니다. derived state는 직접적인 값의 변경이 불가능 합니다.
- `$derived(...)` 내부의 표현에서는 내부의 상태 변경 문법을 허용하지 않습니다. (ex. count++)
- `$derived(...)`의 표현식으로는 작성하기 부족한 복잡한 식을 작성해야 할 경우 `$derived.by(...)`를 사용한다.
- `$derived(expr)` => `$derived.by(() => expr)`

```html
<script>
    let count = $state(0);
    let doubled = $derived(count + 1);
    let doubledouble = $derived.by(() => {
        return (doubled * 2) ** 2;
    });
</script>

<button onclick={() => count++}> click!! </button>

<p>{count}</p>
<p>{doubled}</p>
<p>{doubledouble}</p>
```

### $effect
- $effect 룬은 state 또는 derived state값을 추적하고 상태가 변경되었을 경우 함수를 실행합니다.
- 리액트와 달리 추척을 위한 값을 따로 선언할 필요가 없이 `$effect(expr)` 내부에 값을 사용하면 된다.

```html
<script>
    let state = $state(0);

    $effect(() => {
        state;
        console.log("effect");
    });
</script>

<button
    onclick={() => {
        state++;
    }}>{state}</button
>
```
### $effect.pre
- $effect.pre 룬은 상태 값이 변경된 후 DOM 업데이트 전에 코드를 실행하기 위해 사용됩니다.
- $effect.pre룬은 $effect룬과 타이밍을 제외한 모든 것이 동일하게 작동합니다.

### $effect.tracking
- 

### $props
### $bindable
### $inspect
### $host

### 기타 룬 (Runes)
1. $memo
1. $store
1. $action
1. $server
