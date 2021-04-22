import "../style.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "../App.js";

export default class Leftbar extends Component {
  render = () => (
    <div>
      <ul
        class="navbar-nav sidebar-color sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <li class="nav-item active">
          <div class="nav-link">
            <i class="fas fa-fw fa-cog"></i>
            <span>병원찾기</span>
          </div>
        </li>

        <hr class="sidebar-divider " />

        <li class="  nav-item active">
          <div class="nav-link">
            <span>진료예약</span>
          </div>
        </li>

        <hr class="sidebar-divider" />

        <li class="  nav-item active">
          <div class="nav-link">
            <span>커뮤니티</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
