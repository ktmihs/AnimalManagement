// joo-ju

import "../style.css";
import React, { Component } from "react";
import Content from '../Components/Content'
import '../Components/Content.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Pagination from "../common/Pagination";

export default class PostListPage extends Component {
  render = () => (
    <Content>
      <h2 className="name">글 쓰기</h2>

      <div className="col-12 m-auto bg-white">
        {/* 글 목록 */}
        {/* <hr className="col-10"></hr> */}
        {/* vh-70은 나중에 페이징하면서 사용할 듯 */}
        <div className="col-12 m-auto pt-3">
          <form class="user">
            <div class="form-group ">
              {/* <p>제목</p> */}
              <div class="col-sm-12 mb-3 mb-sm-0">
                <input
                  type="text"
                  class="form-control w-100 b form-control-lg"
                  id="exampleFirstName"
                  placeholder="제목"
                />
              </div>
            </div>

            <div class="form-group he-60 ">
              {/* <h6>내용</h6> */}
              <div class="col-sm-12 mb-5 h-90 mb-sm-0">
                <textarea
                  type="textarea"
                  class="form-control mb-1 w-100 b h-100 form-control-lg"
                  id="exampleFirstName"
                  placeholder="내용"
                />
              </div>

              <div class="form-group mt-3">
                <div class="col-sm-3 float-left">
                  <button class=" btn w-100  btn-success ">
                    <a href="#" class=" text-white">
                      저장{" "}
                    </a>
                  </button>

                  {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
                </div>

                <div class="col-sm-3 float-right">
                  <button class=" btn w-100  btn-danger ">
                    <a href="#" class=" text-white">
                      취소{" "}
                    </a>
                  </button>

                  {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
                </div>
              </div>
            </div>

            {/* <!-- <a href="#" class="btn   btn-user btn-block" style="background-color:red; 88a; color: white"><i class="fas fa-check" style=""></i>   수정  </a> -->

                      <!-- <div><a href="login.html" class="btn btn-primary btn-user btn-block">회원가입</a></div> --> */}
          </form>
        </div>
      </div>
    </Content>
  );
}
