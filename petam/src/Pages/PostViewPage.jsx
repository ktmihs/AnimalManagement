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
import CommentTop from "../Components/comment/CommentTop";
import CommentDetail from "../Components/comment/CommentDetail";
import CommentButtons from "../Components/comment/CommentButtons";

import { useSelector } from 'react-redux';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function PostViewPage(props) {
    const { user, hospital } = useSelector(({ user, hospital }) => ({
    user: user.user,
    hospital: hospital.hospital,
  }));
  const _id = props.match.params._id;
  const [commentData, setCommentData] = useState([
    {
      _id: "",
      content: "",
      writer: "",
      post_id: "",
      enrollTime: "",
    },
  ]);
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
        // view: parseInt(res.data.view) + 1,
        // dateformat을 이용하여 년-월-일 시:분:초 로 표현
        enrollTime: dateFormat(res.data.enrollTime, "yyyy-mm-dd hh:mm:ss"),
      });

      console.log("postData:", postData);

      // 게시 글의 조회수를 1씩 증가
      const req = axios.put("/api/posts/" + _id, {
        ...res.data,
        view: parseInt(res.data.view) + 1,
      });
      console.log("update post view : ", req);
      console.log("-----comment-----");
      //comments
      const commentRes = await axios.get("/api/comments/read/post/" + _id);
      console.log("commentRes : ", commentRes);
      const _commentData = await commentRes.data.map(
        (cData) => (
          setLastIdx(lastIdx + 1),
          {
            _id: cData._id,
            content: cData.content,
            writer: cData.writer,
            post_id: _id,
            // dateformat을 이용하여 년-월-일 로 표현
            enrollTime: dateFormat(cData.enrollTime, "yyyy-mm-dd hh:mm"),
            // enrollTime: rowData.enrollTime,
          }
        )
      );
      setCommentData(commentData.concat(_commentData));
    } catch (e) {
      console.error(e.message);
    }
  }, []);
  const [lastIdx, setLastIdx] = useState(0);
  // 댓글 작성 함수들

  // const constructor(props) {
  //   super(props);
  //   this.state = {value: ' '}
  // }
  const handleSubmit = (e) => {
    alert("An essay was submitted: " + this.state.value);
    e.preventDefault();
  };

  const writer = "joo-ju";
  // function submitHandler (async (e) => {
  //   const writer = "joo-ju"
  //   const comContent = this.comContent.value;
  //   e.preventDefault();
  //   console.log(writer);
  //   console.log(comContent);
  // };

  // commentWrite (async () => {
  //   const commentWrite = (e) => {
  // e.preventDefault();
  //   // function commentWrite( async () => {
  //     // const comContent = this.comContent.value;
  //     // const comContent = comContent.value;
  //     const comContent = this.comContent.value;
  //     // if (title === "" || title === undefined) {
  //     //   alert("제목을 입력해주세요.");
  //     //   this.postTitle.focus();
  //     //   return;
  //     // } else if (content === "" || content === undefined) {
  //     //   alert("내용을 입력해주세요.");
  //     //   this.postContent.focus();
  //     //   return;
  //     // }

  //     const send_param = {
  //       // post_id: this.postId.value,
  //       post_id: _id,
  //       // content: comContent,
  //       content: this.comContent.value,
  //       // writer: this.writer.value,
  //       writer: writer,
  //     };
  //     console.log("send_param : ", send_param);
  //     axios
  //       .post("/api/comments", send_param)
  //       .then((response) => {
  //         console.log("response : ", response);
  //         console.log("success");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //   };

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
          <Link style={{ textDecorationLine: 'none' }} to="/postlistpage">
            <div class="tolist">목록으로</div>
          </Link>
        </div>
      </Content>
      <Content>
        {user && <CommentWrite pid={postData._id}>{postData._id}</CommentWrite>}
        {/* Comment */}

        {lastIdx !== 0 ? (
          // 포스트를 역순으로 출력하고 싶다면 .reverse()를 추가하면 된다
          commentData &&
          commentData.reverse().map(
            (cData) =>
              // 최초 선언한 기본값은 나타내지 않음
              cData._id !== '' && (
                <div className="  ">
                  <CommentTop
                    writer={cData.writer}
                    time={cData.enrollTime}
                  ></CommentTop>
                  <CommentDetail>{cData.content}</CommentDetail>
                  <CommentButtons>--</CommentButtons>
                  <hr className="w-90" />
                </div>
              ),
          )
        ) : (
          <CommentTop> 작성된 글이 없습니다.</CommentTop>
        )}
      </Content>
    </div>
  );
}
export default PostViewPage;
