# Node.js 설치 확인

```bash
$ node --version
```

<br/>

---

# 프로젝트 생성

```bash
cd petam-server
yarn init-y
```
<br/>

### Koa 웹 프레임워크 설치

```shell
// 현위치 : petam-server
yarn add koa
```
<br/>

---


# ESLint와 Prettier 설정

VS code 마켓플레이스에서 Prettier-Code formatter, ESLint 확장 프로그램 설치

```bash
yarn add --dev eslint
# --dev : 개발용 의존 모듈로 설치한다는 의미.
#         package.json에서 devDependencies쪽에 모듈의 버전 정보가 입력됨.

yarn run eslint --init
```
<br/>

### petam-server 디렉토리 내에 .prettierrc 파일 생성

```json
{
	"singleQuote": true,
	"semi": true,
	"useTabs": false,
	"tabWidth": 2,
	"trailingComma": "all",
	"printWidth": 80
}
```
<br/>

### Prettier에서 관리하는 코드 스타일을 ESLint에서 관리하지 않도록 eslint-config-prettier 설치

```bash
yarn add eslint-config-prettier
```
<br/>
<br/>

---

# nodemon 사용하기

- 코드를 변경할 때마다 서버를 자동으로 재시작.

<br/>

### nodemon 설치

```jsx
yarn add --dev nodemon
```
<br/>

```jsx
yarn start  // 재시작이 필요 없을 떄
yarn start:dev  // 재시작이 필요할 때
```

참고 : https://joo-ju.github.io/node-js/koa-setting
