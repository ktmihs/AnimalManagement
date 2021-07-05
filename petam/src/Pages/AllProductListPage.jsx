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
import ProductTableButton from "../Components/table/ProductTableButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import dateFormat from "dateformat";
import axios from "axios";
import SearchProduct from "../Components/search/SearchProduct";

function AllProductListPage({ location, history }) {
  // function getPostDetail(e) {
  //   console.log("/PostView/" + this.postid.value);
  //   window.location.href = "/PostView/" + this.postid.value;
  // }
  const [productData, setProductData] = useState([
    {
      _id: "",
      no: "",
      name: "",
      company: "",
      price: "",
      enrollTime: "",
    },
  ]);

  const [lastIdx, setLastIdx] = useState(0);
  const hospitalId = "60da89269392a9b8dd76732d";
  useEffect(async () => {
    try {
      // 데이터를 받아오는 동안 시간 소요 되므로 await로 대기
      // const res = await axios.get("http://localhost:4000/api/posts/list");
      const res = await axios.get("/api/products/read");
      console.log(res);
      const _productData = await res.data.map(
        (rowData) => (
          setLastIdx(lastIdx + 1),
          {
            _id: rowData._id,
            no: rowData.no,
            name: rowData.name,
            price: rowData.price,
            company: rowData.company,
            // dateformat을 이용하여 년-월-일 로 표현
            enrollTime: dateFormat(rowData.enrollTime, "yyyy-mm-dd"),
            // enrollTime: rowData.enrollTime,
          }
        )
      );
      setProductData(productData.concat(_productData));
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <Content>
      <h2 className="name">All Products</h2>
      <SearchProduct></SearchProduct>
      <div className="col-12 m-auto bg-white">
        {/* 글 목록 */}
        {/* <hr className="col-10"></hr> */}
        {/* vh-70은 나중에 페이징하면서 사용할 듯 */}
        <div className="col-12 m-auto pt-3">
          <div className="table table-responsive">
            <PostTable
              headersName={["no", "", "제조원", "제품명", "정가", "등록일", ""]}
            >
              {lastIdx !== 0 ? (
                // 포스트를 역순으로 출력하고 싶다면 .reverse()를 추가하면 된다
                productData.reverse().map(
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
                          type="product"
                          _id={rowData._id}
                        >
                          {rowData.no}
                        </PostTableColumnNo>
                        <PostTableColumn
                          his={history}
                          type="product"
                          _id={rowData._id}
                        >
                          {/* {rowData._id} */}
                        </PostTableColumn>

                        {/* <Link to={`/postView/${rowData._id}`}> */}
                        <PostTableColumnTitle
                          his={history}
                          type="product"
                          _id={rowData._id}
                          // onClick={() =>
                          //   history.push("/PostView/${rowData._id}")
                          // }
                        >
                          {rowData.company}
                        </PostTableColumnTitle>
                        {/* </Link> */}
                        <PostTableColumn
                          his={history}
                          type="product"
                          _id={rowData._id}
                        >
                          {rowData.name}
                        </PostTableColumn>
                        <PostTableColumn
                          his={history}
                          type="product"
                          _id={rowData._id}
                        >
                          {rowData.price}
                        </PostTableColumn>
                        <PostTableColumn
                          his={history}
                          type="product"
                          _id={rowData._id}
                        >
                          {rowData.enrollTime}
                        </PostTableColumn>

                        <ProductTableButton
                          his={history}
                          hospitalId={hospitalId}
                          _id={rowData._id} //제품의 _id
                        >
                          {/* {rowData.enrollTime} */}
                        </ProductTableButton>
                      </PostTableRow>
                      // </a>
                    )

                  //  <PostTableColumn
                  //         his={history}
                  //         type="product"
                  //         _id={rowData._id}
                  //       >
                  //         {rowData.enrollTime}
                  //       </PostTableColumn>
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
export default AllProductListPage;
