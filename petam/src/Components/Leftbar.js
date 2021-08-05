import "../style.css";
import "../Components/leftbar/Leftbar.css";
import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { FaAngleDown } from "react-icons/fa";
// import { Motion, spring } from "react-motion";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LeftbarCategory from "./leftbar/LeftbarCategory";
// import { Dropdown, Form } from "react-bootstrap";
// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "../App.js";

  
// export default class Leftbar extends Component {
  function Leftbar() {
  // 파일 다 따로 만들어서 해보기
      const { user, hospital } = useSelector(({ user, hospital }) => ({
        user: user.user,
        hospital: hospital.hospital,
      }));
  // const state = {
  //   height: 0,
  // };
  // state = {
  //   height: 0,
  // };

//   const hospitalanimate = () => {
//     this.setState((state) => ({
//       height: state.height === 233 ? 0 : 233,
//     }));
//   };
//   const reservationanimate = () => {
//     this.setState((state) => ({ height: state.height === 233 ? 0 : 233 }));
//   };
//  const boardanimate = () => {
//     this.setState((state) => ({ height: state.height === 233 ? 0 : 233 }));
//   };
  // render = () => (
    // console.log(hospital.username)
    return (
      <div>
        <ul
          // class="leftbar-scope"
          class="leftbar-scope navbar-nav sidebar-color sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <LeftbarCategory
            selections={[
              {
                title: '병원검색',
                address: '/hospital',
              },
              // {
              //   title: '내 예약 내역',
              //   address: '/reservation',
              // },
              // {
              //   title: "내",
              //   address: "/reservation",
              // },
            ]}
            h={47}
          >
            Hospital
          </LeftbarCategory>
          <LeftbarCategory
            selections={[
              // {
              //   title: '제품 등록',
              //   address: '/writeproductpage',
              // },
              {
                title: '전제 제품',
                address: '/allproduct',
              },
            ]}
            h={47}
          >
            Product
          </LeftbarCategory>
          <LeftbarCategory
            selections={[
              {
                title: '전체 글',
                address: '/postlistpage',
              },
              // {
              //   title: '후기 작성',
              //   address: '/writepostpage',
              // },
              // {
              //   title: '내가 쓴 글',
              //   address: '/mypostlistpage',
              // },
            ]}
            h={47}
          >
            Community
          </LeftbarCategory>
          {user && (
            <LeftbarCategory
              selections={[
                {
                  title: '내 정보',
                  address: '/',
                },
                {
                  title: '내가 쓴 글',
                  address: '/mypostlistpage',
                },
                {
                  title: '내 진료 내역',
                  address: '/reservation',
                },
              ]}
              h={141}
            >
              My Page
            </LeftbarCategory>
          )}
          {hospital && (
            <LeftbarCategory
              selections={[
                {
                  title: '병원 정보',
                  address: '/',
                },
                {
                  title: '진료 내역',
                  address: '/',
                },
                // {
                //   title: '판매 중인 제품',
                //   address: '/productonsale',
                // },
                {
                  title: '판매 제품 변경',
                  address: '/productlistpage',
                },
                {
                  title: '새 제품 등록',
                  address: '/writeproductpage',
                },
              ]}
              h={188}
              // h={235}
            >
              My Page
            </LeftbarCategory>
          )}
        </ul>
      </div>
    );
}
const styles = {
  menu: {
    // justifyContent: "center",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    borderTop: "3px solid #f0f0f0",
    padding: "0px 30px",
    // width: "90%",
    marginRight: "10px",
    marginLeft: "10px",
    borderRadius: "10px",
  },
  selection: {
    padding: 10,
    justifyContent: "center",
    margin: 0,
    borderBottom: "1px solid #ededed",
  },
  button: {
    color: "white",
    fontSize: "small",

    fontWeight: "bolder",
    textDecoration: "none",
    // padding: "15px 20px",
    paddingLeft: "20px",
    paddingTop: "15px",
    paddingBottom: "15px",
    // justifyContent: "center",
    // alignItems: "center",
    display: "flex",
    cursor: "pointer",
  },
};
export default Leftbar;
