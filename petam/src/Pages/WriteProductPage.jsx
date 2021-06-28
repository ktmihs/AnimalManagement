// joo-ju

import "../style.css";
import "../Components/product/product.css";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../Components/Content";
import "../Components/Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const floatLeft = {
  float: "left",
};
const floatRight = {
  float: "right",
};
const he = {
  height: "250px",
};

export default class WriteProductPage extends Component {
  productWrite = () => {
    console.log("productWrite");
    const name = this.productName.value;
    const sellingPrice = this.productSellingPrice.value;
    const price = this.productPrice.value;
    const company = this.productCompany.value;

    // if (name === "" || name === undefined) {
    //   alert("제품 이름을 입력해주세요.");
    //   this.productName.focus();
    //   return;
    // } else if (sellingPrice === "" || sellingProduct === undefined) {
    //   alert("판매가를 입력해주세요.");
    //   this.productSellingPrice.focus();
    //   return;
    // } else if (company === "" || company === undefined) {
    //   alert("판매가를 입력해주세요.");
    //   this.productCompany.focus();
    //   return;
    // }

    const send_param = {
      name: this.productName.value,
      sellingPrice: this.productSellingPrice.value,
      price: this.productPrice.value,
      company: this.productCompany.value,
    };

    console.log("send_param : ", send_param);
    axios
      .post("/api/products", send_param)
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
      <h2 className="name">제품 등록</h2>

      <div className="col-12 m-auto bg-white ">
        <div className="col-12 m-auto pt-3">
          <Form class="user">
            <div class="form-group  " style={he}>
              <div class="col-sm-12 mb-3 mb-sm-0">
                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input"
                  ref={(ref) => (this.productName = ref)}
                  value={this.productName}
                  placeholder="제품 이름"
                />
                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input"
                  ref={(ref) => (this.productCompany = ref)}
                  value={this.productCompany}
                  placeholder="제조원"
                />
                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input-50"
                  ref={(ref) => (this.productPrice = ref)}
                  value={this.productPrice}
                  placeholder="정가"
                />
                <input
                  // type="price"
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input-50"
                  style={floatRight}
                  ref={(ref) => (this.productSellingPrice = ref)}
                  value={this.productSellingPrice}
                  placeholder="판매가"
                />

                {/* <div class="form-group mt-3"> */}
                <div class="col-sm-3 float-left">
                  <Button
                    class=" btn w-100  btn-success "
                    variant="success"
                    type="submit"
                    block
                    onClick={this.productWrite}
                  >
                    저장
                  </Button>
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
                  </Button>

                  {/* <!-- <button type="text" class=" btn form-control bg-gray-400 form-control-user"  style="border:1px solid red; text-align:center;" > <p style="border:1px solid red; text-align:center; vertical-align: middle;" >중복확인</p></button> --> */}
                </div>
              </div>
            </div>
          </Form>
          {/* </div> */}
        </div>
      </div>
    </Content>
  );
}
