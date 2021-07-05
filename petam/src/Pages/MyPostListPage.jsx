// joo-ju

import "../style.css";
import React, { Component, useEffect, useState } from "react";
import Content from "../Components/Content";
import "../Components/Content.css";
import PostTable from "../Components/table/PostTable";
import PostTableColumn from "../Components/table/PostTableColumn";
import PostTableRow from "../Components/table/PostTableRow";
import PostTableColumnNo from "../Components/table/PostTableColumnNo";
import PostTableColumnTitle from "../Components/table/PostTableColumnTitle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import dateFormat from "dateformat";
import axios from "axios";

function MyPostListPage({ location, history }) {
  // function getPostDetail(e) {
  //   console.log("/PostView/" + this.postid.value);
  //   window.location.href = "/PostView/" + this.postid.value;
  // }
  const [postData, setpostData] = useState([
    {
      _id: "",
      title: "",
      content: "",
      writer: "",
      enrollTime: "",
    },
  ]);

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(async () => {
    try {
      // 데이터를 받아오는 동안 시간 소요 되므로 await로 대기
      const res = await axios.get("/api/posts/read/" + "jooju");
      console.log(res);
      const _postData = await res.data.map(
        (rowData) => (
          setLastIdx(lastIdx + 1),
          {
            _id: rowData._id,
            no: rowData.no,
            view: rowData.view,
            title: rowData.title,
            content: rowData.content,
            writer: rowData.writer,
            // dateformat을 이용하여 년-월-일 로 표현
            enrollTime: dateFormat(rowData.enrollTime, "yyyy-mm-dd"),
            // enrollTime: rowData.enrollTime,
          }
        )
      );
      setpostData(postData.concat(_postData));
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  const toPostDetail = () => {
    {
      console.log("toPostDetail");
    }
  };
  return (
    <Content>
      <h2 className="name">내가 쓴 글</h2>

      <div className="col-12 m-auto bg-white">
        {/* 글 목록 */}
        {/* <hr className="col-10"></hr> */}
        {/* vh-70은 나중에 페이징하면서 사용할 듯 */}
        <div className="col-12 m-auto pt-3">
          <div className="table table-responsive">
            <PostTable
              headersName={["no", "", "제목", "등록일", "작성자", "조회수"]}
            >
              {lastIdx !== 0 ? (
                // 포스트를 역순으로 출력하고 싶다면 .reverse()를 추가하면 된다
                postData.reverse().map(
                  (rowData) =>
                    // 최초 선언한 기본값은 나타내지 않음
                    rowData._id !== "" && (
                      // <a
                      //   class="test"
                      //   href="http://localhost:3000/PostView/${rowData._id}"
                      // >
                      <PostTableRow
                      // onClick={toPostDetail}
                      // value={rowData._id}
                      // ref={(ref) => (this.postid = ref)}
                      >
                        <PostTableColumnNo
                          his={history}
                          type="post"
                          _id={rowData._id}
                        >
                          {rowData.no}
                        </PostTableColumnNo>
                        <PostTableColumn
                          his={history}
                          type="post"
                          _id={rowData._id}
                        >
                          {/* {rowData._id} */}
                        </PostTableColumn>

                        {/* <Link to={`/postView/${rowData._id}`}> */}
                        <PostTableColumnTitle
                          his={history}
                          _id={rowData._id}
                          type="post"
                          // onClick={() =>
                          //   history.push("/PostView/${rowData._id}")
                          // }
                        >
                          {rowData.title}
                        </PostTableColumnTitle>
                        {/* </Link> */}
                        <PostTableColumn
                          his={history}
                          type="post"
                          _id={rowData._id}
                        >
                          {rowData.enrollTime}
                        </PostTableColumn>
                        <PostTableColumn
                          his={history}
                          type="post"
                          _id={rowData._id}
                        >
                          {" "}
                          {rowData.writer}
                        </PostTableColumn>
                        <PostTableColumn
                          his={history}
                          type="post"
                          _id={rowData._id}
                        >
                          {rowData.view}
                        </PostTableColumn>
                      </PostTableRow>
                      // </a>
                    )
                )
              ) : (
                <PostTableRow>
                  <PostTableColumnNo></PostTableColumnNo>
                  <PostTableColumn></PostTableColumn>
                  <PostTableColumnTitle>
                    작성된 글이 없습니다.
                  </PostTableColumnTitle>
                  <PostTableColumn></PostTableColumn>
                  <PostTableColumn></PostTableColumn>
                  <PostTableColumn></PostTableColumn>
                </PostTableRow>
              )}
            </PostTable>
          </div>
        </div>
      </div>
    </Content>
  );
}
export default MyPostListPage;
