// joo-ju

import "../style.css";
import React, { Component, useEffect, useState } from "react";
import Content from "../Components/Content";
import "../Components/button/Button.css";
import "../Components/Content.css";
import "../Components/comment/Comment.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";
import PostTable from "../Components/table/PostTable";
import ProductViewImage from "../Components/view/ProductViewImage";
import ProductViewName from "../Components/view/ProductViewName";
import ProductViewDetail from "../Components/view/ProductViewDetail";
import ProductViewCompanyAndPrice from "../Components/view/ProductViewCompanyAndPrice";
import ProductHospitalTable from "../Components/table/ProductHospitalTable";
import ProductHospitalTableRow from "../Components/table/ProductHospitalTableRow";

// import PostTableColumnTitle from "../Components/table/PostTableColumnTitle";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function ProductViewPage(props) {
  const _id = props.match.params._id;
  const [productData, setProductData] = useState([
    {
      _id: "",
      name: "",
      price: "",
      company: "",
      discription: "",
      hospitals: [],
      enrollTime: "",
    },
  ]);

  useEffect(async () => {
    try {
      console.log("product detail");
      console.log("_id : ", _id);
      const res = await axios.get("/api/products/readone/" + _id);

      console.log("res : ", res.data);

      setProductData({
        _id: res.data._id,
        no: res.data.no,
        name: res.data.name,
        company: res.data.company,
        price: res.data.price,
        discription: res.data.discription,
        hospitals: res.data.hospitals,
        // dateformat을 이용하여 년-월-일 시:분:초 로 표현
        enrollTime: dateFormat(res.data.enrollTime, "yyyy-mm-dd hh:mm:ss"),
      });
      //   setProductData(productData.concat(_commentData));
      console.log("productData.hospitals:", res.data.hospitals);
      //   console.log("map:", res.data.hospitals.map());
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
      <Content className="">
        <ProductViewName class="">{productData.name}</ProductViewName>

        {/* <PostViewWriterDate
          writer={productData.writer}
          date={productData.enrollTime}
        /> */}
        <hr className="w-90" />
        <div className="col-12 m-auto bg-white" style={scope}>
          <ProductViewImage></ProductViewImage>
          <ProductViewCompanyAndPrice
            company={productData.company}
            price={productData.price}
          ></ProductViewCompanyAndPrice>

          <ProductViewDetail>{productData.discription}</ProductViewDetail>

          <Link style={{ textDecorationLine: "none" }} to="/allproductlistpage">
            <div class="tolist">목록으로</div>
          </Link>
        </div>
      </Content>

      {/* 판매하는 병원 목록 */}

      <Content>
        <h2 className="name">판매중인 병원</h2>
        <ProductHospitalTable
          headersName={["병원명", "전화번호"]}
          hospitalinfo={productData.hospitals}
        >
          {/* <ProductHospitalTable headersName={productData.hospitals}> */}
          {/* <ProductHospitalTableRow
            headersName={productData.hospitals}
          ></ProductHospitalTableRow> */}
        </ProductHospitalTable>

        {/* <div className="col-12 m-auto bg-white">
          <div className="col-12 m-auto pt-3">
            <div className="table table-responsive">
              <ProductHospitalTable headersName={["병원", "전화번호"]}>
                {lastIdx !== 0 ? (
                  // 포스트를 역순으로 출력하고 싶다면 .reverse()를 추가하면 된다
                  res.data.hospitals &&
                  res.data.hospitals.map(
                    (rowData) => console.log(rowData),
                    // 최초 선언한 기본값은 나타내지 않음
                    rowData !== "" && (
                      <ProductHospitalTableRow>
                        {rowData}
                      </ProductHospitalTableRow>
                    )
                  )
                ) : (
                  <div> 판매하는 병원이 없습니다.</div>
                )}
              </ProductHospitalTable>
            </div>
          </div>
        </div>*/}
      </Content>
    </div>
  );
}
export default ProductViewPage;

const scope = {
  minHeight: "300px",
};
