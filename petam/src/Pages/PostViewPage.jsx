// joo-ju
// 글의 상세 내용을 보여주는 페이지

import "../style.css";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../Components/Content";
import "../Components/Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import PostViewTitle from "../Components/view/PostViewTitle";

import PostViewWriterDate from "../Components/view/PostViewWriterDate";
import PostViewContent from "../Components/view/PostViewContent";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export default class PostViewPage extends Component {
  // changeHandler = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // submitHandler = (e) => {
  //   const title = this.postTitle.value;
  //   const content = this.postContent.value;
  //   e.preventDefault();
  //   console.log(title);
  //   console.log(content);
  //   // console.log(this.state)
  // };
  // postWrite = () => {
  //   const title = this.postTitle.value;
  //   const content = this.postContent.value;

  //   if (title === "" || title === undefined) {
  //     alert("제목을 입력해주세요.");
  //     this.postTitle.focus();
  //     return;
  //   } else if (content === "" || content === undefined) {
  //     alert("내용을 입력해주세요.");
  //     this.postContent.focus();
  //     return;
  //   }

  //   const send_param = {
  //     title: this.postTitle.value,
  //     content: this.postContent.value,
  //   };
  //   console.log(send_param);
  //   // axios.get("https://jsonplaceholder.typicode.com/posts/")
  //   //   .then(function (response) {
  //   //   alert.log(response.userId)
  //   //   })
  //   // axios.get("http://localhost:4000/")
  //   //   .then(function (response) {
  //   //   alert.log("sdf")
  //   // })
  //   axios
  //     .post("/api/posts", send_param)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // render() {
  render = () => (
    // const { title, content } = this.state
    <Content className="b">
      <PostViewTitle>제목</PostViewTitle>
      <PostViewWriterDate writer="작성자" date="2021-05-01" />
      <hr className="w-90" />
      <div className="col-12 m-auto bg-white">
        <PostViewContent>------!!!@#($%&#$(x</PostViewContent>

        {/* <div class="col-sm-3 float-right">
          <Button
            class=" btn w-100  btn-success "
            variant="danger"
            // onClick={this.postWrite}
            // type='submit'
            block
          >
            취소
          </Button>
</div> */}
      </div>
      <div class="position-bottom-right ">
        <Button
          class="   "
          variant="secondary"
          // type="submit"
          block
          disabled="true"
        >
          수정
        </Button>
      </div>
    </Content>
  );
}
