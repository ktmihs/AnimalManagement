// joo-ju
// 글의 상세 내용을 보여주는 페이지

import "../style.css";
import React, { Component, useEffect, useState } from "react";
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

// export default class PostViewPage extends Component {
function PostViewPage({ match }) {
  // 글 상세보기
  const { _id } = match.params;
  console.log(match.params);
  const [data, setData] = useState({});
  // const [data, setData] = useState([
  //   {
  //     _id: "",
  //     title: "",
  //     content: "",
  //     writer: "",
  //     enrollTime: "",
  //   },
  // ]);
  // useEffect(() => {
  //   setData(getPostByNo(no));
  // }, []);
  useEffect(async () => {
    try {
      // 데이터를 받아오는 동안 시간 소요 되므로 await로 대기
      // const res = await axios.get("http://localhost:4000/api/posts/list");
      const res = await axios.get("/api/posts/detail", {
        params: {
          _id: _id,
        },
      });
      console.log("글 상세보기 : ", res);
      const _postData = await res.data.map(
        (rowData) => (
          setLastIdx(lastIdx + 1),
          {
            _id: rowData._id,
            no: rowData.no,
            title: rowData.title,
            content: rowData.content,
            writer: rowData.writer,
            enrollTime: rowData.enrollTime,
          }
        )
      );
      setData(data.concat(_postData));
    } catch (e) {
      console.error(e.message);
    }
  }, []);
  return (
    // render = () => (
    // const { title, content } = this.state
    <div>
      <Content className="b">
        <PostViewTitle>{rowData.title}</PostViewTitle>
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
export default PostViewPage;
