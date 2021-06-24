// joo-ju

import "../style.css";
import React, { Component, useEffect, useState } from "react";
import Content from "../Components/Content";
import "../Components/button/Button.css";
import { Button, Form } from "react-bootstrap";
import "../Components/Content.css";
import "../Components/comment/Comment.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import PostViewWriterDate from "../Components/view/PostViewWriterDate";
import PostViewContent from "../Components/view/PostViewContent";
import PostViewTitle from "../Components/view/PostViewTitle";
import axios from "axios";
import CommentWrite from "../Components/comment/CommentWrite";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function PostViewPage(props) {

  const _id = props.match.params._id;
  const [postData, setpostData] = useState([
    {
      _id: "",
      title: "",
      content: "",
      writer: "",
      enrollTime: "",
    },
  ]);

  useEffect(async () => {
    try {
      console.log("ss");
      console.log("_id : ", _id);
      const res = await axios.get("/api/posts/readone/" + _id);
      console.log("res : ", res.data);

      setpostData({
        _id: res.data._id,
        no: res.data.no,
        title: res.data.title,
        content: res.data.content,
        writer: res.data.writer,
        // dateformat을 이용하여 년-월-일 시:분:초 로 표현
        enrollTime: dateFormat(res.data.enrollTime, "yyyy-mm-dd hh:mm:ss"),
      });

      console.log("postData:", postData);
    } catch (e) {
      console.error(e.message);
    }
  }, []);


  // 댓글 작성 함수들

  // const constructor(props) {
  //   super(props);
  //   this.state = {value: ' '}
  // }
  const handleSubmit = (e) => {
    alert('An essay was submitted: ' + this.state.value);
    e.preventDefault();
  }
  
    const writer = "joo-ju"
  // function submitHandler (async (e) => {
  //   const writer = "joo-ju"
  //   const comContent = this.comContent.value;
  //   e.preventDefault();
  //   console.log(writer);
  //   console.log(comContent);
  // };

  // commentWrite (async () => {
  const commentWrite = (e) => {
e.preventDefault();
  // function commentWrite( async () => {
    // const comContent = this.comContent.value;
    // const comContent = comContent.value;
    const comContent = this.comContent.value;
    // if (title === "" || title === undefined) {
    //   alert("제목을 입력해주세요.");
    //   this.postTitle.focus();
    //   return;
    // } else if (content === "" || content === undefined) {
    //   alert("내용을 입력해주세요.");
    //   this.postContent.focus();
    //   return;
    // }

    const send_param = {
      // post_id: this.postId.value,
      post_id: _id,
      // content: comContent,
      content: this.comContent.value,
      // writer: this.writer.value,
      writer: writer,
    };
    console.log("send_param : ", send_param);
    axios
      .post("/api/comments", send_param)
      .then((response) => {
        console.log("response : ", response);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  return (
    <div>
      <Content className="b">
        <PostViewTitle>{postData.title}</PostViewTitle>

        <PostViewWriterDate
          writer={postData.writer}
          date={postData.enrollTime}
        />
        <hr className="w-90" />
        <div className="col-12 m-auto bg-white">
          <PostViewContent>{postData.content}</PostViewContent>
          <Link style={{ textDecorationLine: "none" }} to="/postlistpage">
            <div class="tolist">목록으로</div>
          </Link>
        </div>
      </Content>

      {/* Comment */}

      <CommentWrite pid ={postData._id} >{postData._id}</CommentWrite>
    </div>
  );
}
export default PostViewPage;
