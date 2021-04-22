import '../style.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "../App.js";

export default class TopBar extends Component {
  render = () => (
    <div>
      {/* nav태그의 mb-3은 content와 간격 띄우기 */}
      <nav class=" shadow-sm navbar navbar-expand navbar-light bg-primary topbar  static-top shadow">
        <div className="col-9">
          <Link to="/main">
            <h3 className="bg-primary m-auto text-2140C text-center p-3 ">
  
                <span className="text-pet h4">
                  <b>pet</b>
                </span>
                <span className="text-white">
                  <b>A</b>
                </span>
                <span className="text-2140C h4">
                  <b>m</b>
                </span>
              
              {/* <img src={imgUser} className="w-25 h-25"></img> */}
            </h3>
          </Link>
        </div>
        <div className="  col-3">
          <button className=" btn-light btn col-5 m-auto text-2140C text-center p-2 m-1">
            Sign In
          </button>
          <button className=" btn-secondary btn col-5 m-auto text-white text-center float-right p-2 m-1">
            Sign Up
          </button>
        </div>

        {/* <!-- Topbar Navbar --> */}
      </nav>
    </div>
  );
}