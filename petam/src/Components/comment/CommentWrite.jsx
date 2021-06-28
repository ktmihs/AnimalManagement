// joo-ju

import "../../style.css";
import React, { Component, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../Content";
import CommentTop from "../comment/CommentTop";

import dateFormat from "dateformat";
import CommentDetail from "../comment/CommentDetail";
import CommentButtons from "../comment/CommentButtons";
import "../Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

// axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };

const CommentWrite = ({ children, pid, comContent }) => {
  const post_id = children;
  // function CommentWrite (props) {
  // class CommentWrite extends Component {
  // constructor(props) {
  //     super(props);
  //     // console.log(props.data)
  //     this.state = {
  //         pid: ''
  //     };
  // }
  //      constructor(props) {
  //          super(props)
  //          console.log(props);
  //         //  const { pid } = props.pid
  //         //  console.log("pid : ", pid)
  // // console.log("props: ", children)
  //     this.state = {
  //       post_id: '',
  //       content: '',
  //     }
  //     };
  //   const [commentData, setCommentData] = useState([
  //     {
  //       _id: "",
  //       content: "",
  //       writer: "",
  //       post_id: "",
  //       enrollTime: "",
  //     },
  //   ]);

  //   useEffect(async () => {
  //     try {
  //       const res = await axios.get("/api/comments/read/post/" + children);
  //       console.log("===res : ", res);
  //       console.log("===children : ", post_id);
  //       const _commentData = await res.data.map(
  //         (rowData) => (
  //           setLastIdx(lastIdx + 1),
  //           {
  //             _id: rowData._id,
  //             content: rowData.content,
  //             writer: rowData.writer,
  //             post_id: children,
  //             // dateformat을 이용하여 년-월-일 로 표현
  //             enrollTime: dateFormat(rowData.enrollTime, "yyyy-mm-dd hh:mm"),
  //             // enrollTime: rowData.enrollTime,
  //           }
  //         )
  //       );
  //       setCommentData(commentData.concat(_commentData));
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //     //   });
  //   }, []);
  //   const [lastIdx, setLastIdx] = useState(0);

  const comWrite = () => {
    const content = comContent.value;
    const send_param = {
      //   title: this.postTitle.value,
      post_id: children,
      writer: "joo-ju",
      // content: this.comContent.value,
      content: comContent.value,
    };
    console.log("send_param", send_param);
    console.log("children", children);
    // console.log("pid" , this.postId.value);
    axios
      .post("/api/comments", send_param)
      .then((response) => {
        console.log(response);

        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // render() {
  // render = () => (
  // const { pid, children } = this.props;
  return (
    // <Content>
    <div className="  col-12 m-auto bg-white">
      <div className="col-12 m-auto ,pt-3">
        <Form class="user" id="WritePostPage" onSubmit={comWrite}>
          <div class="form-group mt-3">
            <div class="float-right">
              <div
                class="comment-write-button"
                variant="primary"
                onClick={comWrite}
                type="submit"
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
                placeholder="comments…"
                type="submit"
                // ref={(ref) => (this.comContent = ref)}
                ref={(ref) => (comContent = ref)}
                // value={this.comContent}
                value={comContent}

                //   value = "Submit"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
// }
export default CommentWrite;
