import React, { useEffect } from "react";
import Content from "../Components/Content";
import "../Components/Content.css";
// import MainHospitalContent from "./MainHospitalContent";

import { useSelector } from "react-redux";
import { render } from "react-dom";

        

function Main() {
const user = useSelector((state) => state);


// const user = useSelector((state) => state);
//   // const a = reducer.user
//     console.log("user ==== ", user);
    
  // console.log(reducer.user)
  useEffect(async () => {
    
// const a = reducer.user
console.log("user ==== ", user.userData);
      if (!user.data) {
    console.log("유저 정보 없음!")
      } else {
          
console.log("user ==== ", user);
}
  }, []);
  return (
    // render(
    <Content>
      <h2 className="name">Main Page!!</h2>
      {/* <p> 로그인 정보 : {user}</p> */}
    </Content>
  );
}

{
  /*
function Main({location, history}) {
 
  return (
    <Components>
        <button onClick={()=> history.push('/SearchPage')}>검색 페이지</button>
        <button onClick={()=> history.push('/HospitalPage')}>병원 페이지</button>
        <button onClick={()=> history.push('/ReservationPage')}>예약하기</button>
        <button onClick={()=> history.push('/CheckReservationPage')}>예약 확인</button>
        <button onClick={()=> history.push('/MyReservationPage')}>내 예약 내역</button>
    </Components>
  )
}

*/
}

export default Main;
