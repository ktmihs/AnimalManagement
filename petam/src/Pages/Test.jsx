import React, { useEffect } from "react";
import Content from "../Components/Content";
import "../Components/Content.css";
// import MainHospitalContent from "./MainHospitalContent";

import { useSelector } from "react-redux";
import { render } from "react-dom";

        

function Main() {
const user = useSelector((state) => state);
  useEffect(async () => {
    
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


export default Main;
