import "../style.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Pagination from "../common/Pagination";

export default class test extends Component {
  render = () => (
    <div>
      <Link to="/postlist">
        <button className=" btn btn-success col-5 m-auto text-white text-center p-2 m-1">
          PostList(글목록)
        </button>
      </Link>
    </div>
  );
}
