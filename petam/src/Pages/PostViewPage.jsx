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
      <Content>
        <div className="col-12 m-auto bg-white">
          <div className="col-12 m-auto ,pt-3">
            <Form
              class="user"
              id="WritePostPage"
              // onSubmit={this.postWrite}
              // onSubmit = {this.submitHandler}
            >
              <div class="form-group mt-3">
                <div class="float-right">
                  <div
                    class="comment-write-button"
                    variant="primary"
                    // onClick={this.postWrite}
                    // type='submit'
                    block
                  >
                    저장
                  </div>
                </div>
              </div>
              <div class="form-group comment-scope ">
                <div>
                  <textarea
                    type="textarea"
                    class="form-control comment-input"
                    placeholder="comments..."
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Content>
    </div>
  );
}
export default PostViewPage;
