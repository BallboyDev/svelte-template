# svelte

## $env 정리
1. $env/dynamic/private
    - 서버에서만 접근 가능한 동적 비공걔 환경 변수
    - `import { DB_PASSWORD } from '$env/dynamic/private'`


2. $env/dynamic/public
    - 브라우저에서 접근 가능한 동적 공개 환경 변수
    - `import { PUBLIC_API_URL } from '$env/dynamic/public'`


3. $env/static/private
    - 서버에서만 접근 가능한 정적 비공개 환경 변수
    - `import { DB_PASSWORD } from '$env/static/private'`


4. $env/static/public
    - 브라우저에서 접근 가능한 정적 공개 환경 변수
    - `import { PUBLIC_API_URL } from '$env/static/public'`


### 요약
|모듈|접근 가능 위치|평가 시점|민감한 정보 포함 가능|PUBLIC_접두사 필수|
|:--|:--|:--|:--|:--|
|$env/dynamic/private|클라이언트, 서버|실행 시점|❌|✅|
|$env/dynamic/public|서버만|실행 시점|✅|❌|
|$env/static/private|클라이언트, 서버|빌드 시점|❌|✅|
|$env/static/public|서버만|빌드 시점|✅|❌|


## nestJS with svelte