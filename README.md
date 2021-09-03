# 🐱 petAm - 반려동물 관리 웹 페이지 🐶 <a name="top"></a>
✔ 반려동물을 등록하여 동물병원 예약을 할 수 있고, 병원 판매 제품 확인 및 진료받은 병원 후기를 작성할 수 있다.

<br/>

## MOVE LOCATION

<a href="#history">📂 FOLDER HISTORY </a><br/>
<a href="#preview">📸 PAGE PREVIEW </a><br/>
<a href="#erd">📄 ERD CHART </a><br/>
<a href="#flow">📄 WORK FLOW CHART </a><br/>
<a href="#server_start">💻 PETAM-SERVER START</a>

<hr/>
<br/>

## 📂 FOLDER HISTORY <a name="history"></a>
### 👉 [Front] petam
- component 기반 react project
- react-router(route, switch)로 dom 관리
- redux, redux-saga를 사용한 register, login 구현
- useState, useEffect, useRef, useHistory, useLoaction 등 hook 사용
- axios로 server api 사용

### 👉 [Server] petam-server
- node.js framework koa 사용
- mongoose로 mongoDB 연결 
- joi, bodyparser로 front로부터 받은 json 데이터 파싱
- jwt(jsonwebtoken) 발급으로 register, login

### 👉 [Docs] Docs
- 설계
  - DB
  - UI
  - 기능차트
  - 메뉴 구성도
  - 서비스 구성도
  - 업무흐름도
  - 유저스토리
  - 테이블 정의서
  - 화면 설계서
- Back-end
  - Koa 작업 환경 준비
- Meeting Notes
  - 회의마다 작성한 회의록

<hr/>
<br/>

## 📸 PAGE PREVIEW <a name="preview"></a>
👉 Main page
: 메인 페이지

![image](https://user-images.githubusercontent.com/63227474/131956522-0f70a523-60ae-463a-b4e8-7c03f79e8eab.png)

👉 Search page
: 검색 및 병원 조회가 가능한 페이지

![image](https://user-images.githubusercontent.com/63227474/131957935-ff771523-d080-4dca-8d9d-5147eec8e7f3.png)

👉 Hospital page
: 특정 병원 상세 정보 및 판매 제품 조회, 예약/후기로 이동 가능한 페이지

![image](https://user-images.githubusercontent.com/63227474/131958062-4fb16c03-d0cb-41fc-8ee0-c81077f25355.png)

👉 My reservation page
: 내 예약내역을 볼 수 있는 페이지. 진료 완료 여부로 구분됨.

![image](https://user-images.githubusercontent.com/63227474/131958728-fc59923c-8193-4096-a075-7acf14ddfe95.png)

<a href="http://ec2-52-78-128-252.ap-northeast-2.compute.amazonaws.com/">If you want to see another page, click here.</a>

<hr/>
<br/>

## 📄 ERD CHART <a name="erd"></a>

![erd_v2_Full_0414](https://user-images.githubusercontent.com/63227474/131958424-1a014db4-2a9a-497a-9fef-829fad57066e.png)

<hr/>
<br/>

## 📄 WORK FLOW CHART <a name="flow"></a>
![업무흐름도_v2_210813_최종](https://user-images.githubusercontent.com/63227474/131955483-a9f80da3-3a47-4212-a929-032a6d727c5b.PNG)

<hr/>
<br/>


## 💻 PETAM-SERVER START <a name="server_start"></a>
#### package.json 설치
```shell
npm update
```
#### nodemon 실행
```shell
yarn start
```

<a href="#top">TOP</a>
