<!-- 수동 구독 -->
<script>
    import { count } from "./stores";

    let countValue;

    count.subscribe((value) => {
        countValue = value;
    });

    console.log(countValue);
</script>
