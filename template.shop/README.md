# svelte - shop version

## API 명세
### 로그인 관련

### 물품 관련
1. 물품 리스트 - 물품 리스트 전체 조회
    - `GET /list`
    - 인증: X
    - 파라미터
        |이름|타입|필수|형식|설명|
        |:-:|:-:|:-:|:--|:--|
    - 응답
        - 200: [{id: int, title: string, price: int}]

1. 물품 디테일 - 물품의 상세 정보
    - `GET /detail/{id}`
    - 인증: X
    - 파라미터 
        |이름|타입|필수|형식|설명|
        |:-:|:-:|:-:|:--|:--|
        |id|int|O|PathValue|상세 조회 물품 ID|
    - 응답
        - 200: {id: int, title: string, price: int}

1. 물품 등록 - 물품 등록
    - `POST /add`
    - 인증: X
    - 파라미터
        |이름|타입|필수|형식|설명|
        |:-:|:-:|:-:|:--|:--|
        |title|string|O|Body|등록 물품 타이틀|
        |price|int|O|Body|등록 물품 가격|
    - 응답
        - 200: {id: int}

1. 물품 수정 - 물품 정보 수정
    - `POST /modify`
    - 인증: X
    - 파라미터
        |이름|타입|필수|형식|설명|
        |:-:|:-:|:-:|:--|:--|
        |id|int|O|Body|수정 물품 ID|
        |title|string|O|Body|수정 물품 타이틀|
        |price|int|O|Body|수정 물품 가격|
    - 응답
        - 200: {id: int}

1. 물품 삭제 - 물품 삭제
    - `POST /delete`
    - 인증: X
    - 파라미터
        |이름|타입|필수|형식|설명|
        |:-:|:-:|:-:|:--|:--|
        |id|int|O|Bocy|삭제 물품 ID|
    - 응답
        - 200

