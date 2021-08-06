// joo-ju

import "../style.css";
import React, { Component, useState, useEffect } from "react";
import "../Components/rating/rating.css";
import { FaStar } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import Content from "../Components/Content";
import "../Components/Content.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const WritePostPage = ({ postTitle, postContent }) => {
  // user 정보 조회
        const { user, hospital } = useSelector(({ user, hospital }) => ({
          user: user.user,
          hospital: hospital.hospital,
        }));
  // 먼저 병원 정보 조회
  useEffect(async () => {
    try {

      console.log("user : ", user.username);
      // console.log("hospital : ", hospital.username)
      console.log("dsdfsdf")
      

          // const user = useSelector((state) => state.user.userData);
      console.log("--",hospitalId);
      const res = axios
        .get("/api/hospitals/readone/" + hospitalId)
        .then((response) => {
          console.log("response.data : ", response.data);
          // console.log("로그인 정보 : ", user);
          setHospitalData({
            _id: hospitalId,
            score: response.data.score,
            count: response.data.count,
          });
        });
      console.log("hospitalData", hospitalData);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  //별점을 계산
  // 가장 마지막 clicked[5]는 true가 총 몇개인지 나타내는 변수
  // clicked[5]가 최종적으로 저장되는 값.
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    0,
  ]);
  const countstar = 0;
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    clickStates[5] = 0;
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        clickStates[i] = true;
        clickStates[5] += 1;
      } else clickStates[i] = false;
    }

    setClicked(clickStates);
    console.log(clickStates);
  };

  const postWrite = async () => {
    const title = postTitle.value;
    const content = postContent.value;


    if (title === "" || title === undefined) {
      alert("제목을 입력해주세요.");
      // this.postTitle.focus();
      postTitle.focus();
      return;
    } else if (content === "" || content === undefined) {
      alert("내용을 입력해주세요.");
      // this.postContent.focus();
      postContent.focus();
      return;
    } else if (clicked[5] == 0) {
      alert("평점을 입력해주세요.");
      return;
    }

    console.log(user.username)

    const send_param = {
      content: postContent.value,
      title: postTitle.value,
      score: clicked[5],
      view: 0,
      writer: user.username,
      hospitalId: hospitalId,
    };

    // 게시글 저장
    axios
      .post("/api/posts/", send_param)
      .then((response) => {
        console.log("save post", response);
      })
      .catch((error) => {
        console.log(error);
      });

    // 병원 별점 계산을 위해 병원 데이터 업데이트
    // count 1 더해주고 score도 합해준다
    const res2 = axios.put("/api/hospitals/" + hospitalId, {
      ...hospitalData,
      score: parseInt(hospitalData.score) + parseInt(clicked[5]),
      count: parseInt(hospitalData.count) + 1,
    });
    console.log(send_param);
    console.log("res : ", res);
  };

  const hospitalId = '6108d6ad3bc5d0b0e56ae1ac';
  const [hospitalData, setHospitalData] = useState([
    {
      _id: hospitalId,
      score: "",
      count: "",
    },
  ]);

  const scope = {
    minHeight: "70px",
    paddingTop: "10px",
  };
  const h25 = {
    minHeight: "25vh",
  };

  // render() {
  // render = () => (
  return (
    // const { title, content } = this.state
    <Content class=" " style={scope}>
      <h2 className="name">글 쓰기</h2>

      <div className="col-12 m-auto bg-white">
        <div className="col-12 m-auto pt-3">
          <Form
            class="user"
            id="WritePostPage"
            // onSubmit={this.postWrite}
            // onSubmit={postWrite}
          >
            <div class="form-group ">
              {/* <p>제목</p> */}
              <div class="col-sm-12  mb-s3 msb-sm-0">
                {/* <Form.Control */}
                <input
                  type="text"
                  class="form-control mb- w-100   form-control-lg"
                  // id="postTitle"
                  // ref={(ref) => (this.postTitle = ref)}
                  ref={(ref) => (postTitle = ref)}
                  maxLength="50"
                  value={postTitle}
                  // value={this.postTitle}
                  placeholder="제목"
                />
              </div>
            </div>

            <div class="form-group  ">
              <div class="col-sm-12  mb-5  mb-sm-0">
                <textarea
                  type="textarea"
                  class="form-control mb-1 w-100  h-100 form-control-lg"
                  style={h25}
                  placeholder="내용"
                  ref={(ref) => (postContent = ref)}
                  value={postContent}
                />
              </div>
              <div className="rating">
                별점
                <div class="stars">
                  <FaStar
                    size="30"
                    onClick={(e) => handleStarClick(e, 0)}
                    className={clicked[0] ? "clickedstar" : null}
                  />
                  <FaStar
                    size="30"
                    onClick={(e) => handleStarClick(e, 1)}
                    className={clicked[1] ? "clickedstar" : null}
                  />
                  <FaStar
                    size="30"
                    onClick={(e) => handleStarClick(e, 2)}
                    className={clicked[2] ? "clickedstar" : null}
                  />
                  <FaStar
                    size="30"
                    onClick={(e) => handleStarClick(e, 3)}
                    className={clicked[3] ? "clickedstar" : null}
                  />
                  <FaStar
                    size="30"
                    onClick={(e) => handleStarClick(e, 4)}
                    className={clicked[4] ? "clickedstar" : null}
                  />
                </div>
              </div>
              <div class="form-group mt-3" style={scope}>
                <div class="col-sm-3 float-left">
                  <Button
                    class=" btn w-100  btn-success "
                    // onClick={this.postWrite}
                    onClick={postWrite}
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
};
export default WritePostPage;
