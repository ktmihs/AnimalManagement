// 병원 평점 등록

import "../style.css";
import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import Content from "../Components/Content";
import "../Components/Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const NewPost = () => {
  //  will show state and handles later

  return (
    <Form>
      // other input elements
      <div className={styles.rating}>
        <p>Rating</p>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </Form>
  );
};
