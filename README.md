# Wanted Coding Test

## 개선 / 문제

### 문제 1

- CORS error: api호출시 CORS 문제 발생

해결: CRA package.json 에 proxy 설정으로 CORS 문제 해결

### 문제 2

- Proxy : react-router-dom 사용하여 url의 query-string 을 파싱하여 api 호출의 params로 사용할시 api 호출시 proxy 설정이 작동하지 않음

해결: react-router-dom 사용하여 url의 query-string 이 문제의 원인이 아니라 파라미터로 넘겨야 할 값을 잘못 설정한 탓 ㅜㅜ

### 문제 3

- 차분히 설계하고 만들다보니 많은 시행착오가 생겼음, 현재 filter와 job api를 동시에 호출하는데서 뷰를 보여주는데 문제가 있음
  먼저 filter API 를 호출하여 상태를 세팅한 후에 filter 에 따라 job api 를 호출하는 쪽으로 가닥을 잡아보려 함.

  해결: filter API 를 호출하여 상태를 세팅한 후에 filter 에 따라 job api 를 호출

### 문제 4

- filter API 호출 후 응답값을 바탕으로 params를 설정하여 jobs API를 호출하여 상태에 넣고난뒤 라우터를 어떻게 이동시켜야 할지 모르겠는 문제 발생.

해결: react-router의 redirect와 호출 성공시의 상태를 연동하여 일단 해결, 궁극적인 해결책은 아닌듯

## 회고

번성

- 제대로 설계하지 않고 코딩부터 시작
- 기간을 연장했음에도, 요구 스펙을 제대로 구현하지 못함
- 아직 익숙하지 않은 redux-saga, hooks 를 어떻게든 활용해보려 했던 욕심이 지나쳤던것 같음

생각

- 구조를 설계하는 것의 중요성을 다시한번 깨달음
- 아직 redux, redux-saga 의 흐름에 데한 이해가 부족한 것을 깨달음
- 오로지 개발에 집중할 수 없었던 환경을 핑계로 위로해봄
- react 에서의 proxy 문제 발생시 해결 방법, redux, redux-saga의 흐름을 더 공부해야겠다는 생각
- 아주 좋은 경험이었다고 생각함
