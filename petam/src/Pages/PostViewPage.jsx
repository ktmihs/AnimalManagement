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
import CommentTitle from "../Components/comment/CommentTitle";
import "../Components/comment/Comment.css";
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
    <div>
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
          {/* <div class="position-bottom-right "> */}
          <Button
            class="  position-button-right "
            variant="secondary"
            // type="submit"
            block
            disabled="true"
          >
            수정
          </Button>
          {/* </div> */}
        </div>
      </Content>

      {/* Comment */}
      <Content>
        <div className=" col-12 m-auto pt-3 comment">
          <Form class=" user" id="WriteComment" onSubmit={this.postWrite}>
            <div class=" comment-write-button">
              <Button
                class=" btn w-100  btn-primary "
                // onClick={this.postWrite}
                variant="primary"
                type="submit"
                block
              >
                저장
              </Button>
            </div>
            <div class="form-group comment-input">
              <Form.Control
                type="text"
                class="form-control w-100  form-control-lg"
                // id="postTitle"
                ref={(ref) => (this.postTitle = ref)}
                // maxLength="50"
                value={this.postTitle}
                placeholder="comments..."
              />
            </div>
          </Form>

          {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
          {/* </div> */}
        </div>

        {/* <CommentTitle>Comment</CommentTitle> */}
      </Content>
    </div>
  );
}
