import "../style.css";
import "../Components/leftbar/Leftbar.css";
import React, { Component } from "react";
// import { FaAngleDown } from "react-icons/fa";
// import { Motion, spring } from "react-motion";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LeftbarCategory from "./leftbar/LeftbarCategory";
// import { Dropdown, Form } from "react-bootstrap";
// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "../App.js";

export default class Leftbar extends Component {
  // 파일 다 따로 만들어서 해보기
  state = {
    height: 0,
  };
  // state = {
  //   height: 0,
  // };
  hospitalanimate = () => {
    this.setState((state) => ({
      height: state.height === 233 ? 0 : 233,
    }));
  };
  reservationanimate = () => {
    this.setState((state) => ({ height: state.height === 233 ? 0 : 233 }));
  };
  boardanimate = () => {
    this.setState((state) => ({ height: state.height === 233 ? 0 : 233 }));
  };
  render = () => (
    <div>
      <ul
        // class="leftbar-scope"
        class="leftbar-scope navbar-nav sidebar-color sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <LeftbarCategory
          selections={[
            {
              title: "병원검색",
              address: "/hospital",
            },
            {
              title: "내 예약 내역",
              address: "/reservation",
            },
            // {
            //   title: "내",
            //   address: "/reservation",
            // },
          ]}
          h={95}
        >
          병원찾기
        </LeftbarCategory>
        <LeftbarCategory
          selections={[
            {
              title: "제품 등록",
              address: "/writeproductpage",
            },
            {
              title: "All Products",
              address: "/allproductlistpage",
            },
          ]}
          h={95}
        >
          제품찾기
        </LeftbarCategory>
        <LeftbarCategory
          selections={[
            {
              title: "후기",
              address: "/postlistpage",
            },
            {
              title: "후기 작성",
              address: "/writepostpage",
            },
          ]}
          h={95}
        >
          커뮤니티
        </LeftbarCategory>
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
