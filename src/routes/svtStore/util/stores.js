import { writable, readable } from "svelte/store";

/** 쓰기 전용 */
export const count = writable(0, () => {
    console.log('count 변수 구독')

    return () => {
        console.log('count 변수 구독 해제')
    }
})

export const name = writable('yang', () => {
    console.log('name 변수 구독')

    return () => {
        console.log('name 변수 구독 해제')
    }
})

/** 읽기 전용 */
export let user = readable({
    name: 'yang',
    age: 30
}, (set) => {
    console.log('user 변수 구독')

    return () => {
        console.log('user 변수 구독 해제')
    }
})

// svelte store에는 스토어 객체의 변경을 감지하는 구독이라는 기능이 존재 한다.
// svelte에는 이 구독을 설정할 수 있는 방법이 수동 구독과 자동 구독이 있다.