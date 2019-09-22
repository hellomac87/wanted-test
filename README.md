# Wanted Coding Test

## 개선 / 문제

### 문제 1

- CORS error: api호출시 CORS 문제 발생

해결: CRA package.json 에 proxy 설정으로 CORS 문제 해결

### 문제 2

- Proxy : react-router-dom 사용하여 url의 query-string 을 파싱하여 api 호출의 params로 사용할시 api 호출시 proxy 설정이 작동하지 않음

해결: react-router-dom 사용하여 url의 query-string 이 문제의 원인이 아니라 파라미터로 넘겨야 할 값을 잘못 설정한 탓 ㅜㅜ
