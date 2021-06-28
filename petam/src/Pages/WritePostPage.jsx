// joo-ju

import "../style.css";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../Components/Content";
import "../Components/Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
export default class WritePostPage extends Component {
  postWrite = () => {
    const title = this.postTitle.value;
    const content = this.postContent.value;

    if (title === "" || title === undefined) {
      alert("제목을 입력해주세요.");
      this.postTitle.focus();
      return;
    } else if (content === "" || content === undefined) {
      alert("내용을 입력해주세요.");
      this.postContent.focus();
      return;
    }

    const send_param = {
      // headers,
      // "title": "a",
      // "content": "a",
      // "tags": "공지"

      title: this.postTitle.value,
      content: this.postContent.value,
    };
    console.log(send_param);
    axios
      .post("/api/posts", send_param)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // render() {
  render = () => (
    // const { title, content } = this.state
    <Content>
      <h2 className="name">글 쓰기</h2>

      <div className="col-12 m-auto bg-white">
        <div className="col-12 m-auto pt-3">
          <Form
            class="user"
            id="WritePostPage"
            onSubmit={this.postWrite}
            // onSubmit = {this.submitHandler}
          >
            <div class="form-group ">
              {/* <p>제목</p> */}
              <div class="col-sm-12 mb-3 mb-sm-0">
                <Form.Control
                  type="text"
                  class="form-control w-100 b form-control-lg"
                  // id="postTitle"
                  ref={(ref) => (this.postTitle = ref)}
                  maxLength="50"
                  value={this.postTitle}
                  placeholder="제목"
                />
              </div>
            </div>

            <div class="form-group he-60 ">
              {/* <h6>내용</h6> */}
              <div class="col-sm-12 mb-5 h-90 mb-sm-0">
                <textarea
                  type="textarea"
                  class="form-control mb-1 w-100  h-100 form-control-lg"
                  // id="postContent"
                  ref={(ref) => (this.postContent = ref)}
                  placeholder="내용"
                  value={this.postContent}
                />
              </div>

              <div class="form-group mt-3">
                <div class="col-sm-3 float-left">
                  <Button
                    class=" btn w-100  btn-success "
                    // onClick={this.postWrite}
                    variant="success"
                    type="submit"
                    block
                  >
                    저장
                    {/* <p class=" text-white">
                      저장{" "}
                    </p> */}
                  </Button>

                  {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
                </div>

                <div class="col-sm-3 float-right">
                  <Button
                    class=" btn w-100  btn-success "
                    variant="danger"
                    // onClick={this.postWrite}
                    // type='submit'
                    block
                  >
                    취소
                    {/* <p class=" text-white">
                      저장{" "}
                    </p> */}
                  </Button>

                  {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
                </div>
              </div>
            </div>

            {/* <!-- <a href="#" class="btn   btn-user btn-block" style="background-color:red; 88a; color: white"><i class="fas fa-check" style=""></i>   수정  </a> -->

                      <!-- <div><a href="login.html" class="btn btn-primary btn-user btn-block">회원가입</a></div> --> */}
          </Form>
        </div>
      </div>
    </Content>
  );
}
