<!-- 자동 구독 -->
<script>
    // 자동 구독의 경우  import 한 변수의 앞에 $만 붙이면 구독 사용이 가능하다
    // svelte에서도 이 방법을 권장하며 svelte컴포넌트가 아닌 경우(.js, .ts) 자동 구독을 사용할 수 없기 때문에 수동 구독 기능을 활용하야 한다.
    import { count } from "./stores";

    console.log($count);
</script>
