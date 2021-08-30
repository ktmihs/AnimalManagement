// joo-ju
// 제품을 등록할 수 있는 페이지

import "../style.css";
import "../Components/product/product.css";
import React, { useState,Component } from "react";
import { Button, Form, ImgInput } from "react-bootstrap";
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
  height: "520px",
  // justifyContent: "center",
};
const formData=new FormData()

export default class WriteProductPage extends Component {

  state={
    send_param:{
      name:'',
      price:'',
      company:'',
      discription:'',
      image:''
    },
    image:{
      file:'',
      previewURL:''
    }
  }
  handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({
      send_param:{
        ...this.state.send_param,
        [name]:value
      }
    })
    console.log(this.state)
  }
  handleImage=(e)=>{
    e.preventDefault(); 
    this.handleChange(e)
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        image:{
          file : file,
          previewURL : reader.result 
        }
      })
    }
    reader.readAsDataURL(file)
    console.log(this.state.send_param)
    console.log(e,e.target.files[0],e.target.files[0].name)
    formData.append('image', e.target.files[0])
    formData.append('filename',e.target.files[0].name)
    formData.append('productname',this.state.send_param.name)
    for(let data of formData){console.log(data[0],data[1])}
  }
  
  productWrite = () => {
    console.log("productWrite");
    // const name = this.productName.value;
    // // const sellingPrice = this.productSellingPrice.value;
    // const price = this.productPrice.value;
    // const company = this.productCompany.value;
    // const discription = this.productDiscription.value;
    
    // const image=this.productImage.value;
    
    const config = {
        headers: {
        'content-type': 'multipart/form-data'
        }    
    }
    //빈파일이 아닌 경우 함수 진행
    // if (event.target.files !== null) {
    //   //FormData 생성
    //   const fd = new FormData();

    //   const image = event.target.file[0];
    // }

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

    

    // const send_param = {
    //   name: this.productName.value,
    //   // sellingPrice: this.productSellingPrice.value,
    //   price: this.productPrice.value,
    //   company: this.productCompany.value,
    //   discription: this.productDiscription.value,
    //   image: this.productImage.value
    // };
    console.log('formData:',formData)
    axios.post("/api/images/product/image",formData,config)
    .then((response) => {
        console.log(response,formData.entries()[0])
    })
    .catch((error) => {
        console.log(error)
    })

    console.log("send_param : ", this.state.send_param);
    axios
      .post("/api/products", this.state.send_param)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // isSelectedImg = (event) => {
  //   //빈파일이 아닌 경우 함수 진행
  //   if (event.target.files !== null) {
  //     //FormData 생성
  //     const fd = new FormData();
  //     console.log(fd);
  //     //FormData에 key, value 추가하기
  //     fd.append("image", event.target.files[0]);
  //     // axios 사용해서 백엔드에게 파일 보내기
  //     axios
  //       .post(`${URL}/user/profile-upload`, fd)
  //       // .post("/api/products/")
  //       .then((res) => {
  //         //응답으로 받은 url 저장하기 (응답 내용의 표시나 방법은 백엔드와 결정해야한다.)
  //         setImgUpload(res.data.image_url);
  //         // 최종적으로 DB에 저장될 url을 보내는 과정이 부모 컴포넌트에 있기 때문에 부모 컴포넌트에 url을 보내는 과정
  //         props.imgStore(res.data.image_url);
  //       })
  //       //에러가 날 경우 처리
  //       .catch((error) => {
  //         console.log(error.response);
  //       });
  //   }
  // };

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
                <div style={floatLeft}>
                  {
                    this.state.image.file?
                    <div>
                      <img className=" product-image-preview" src={this.state.image.previewURL}/>
                    </div>
                    :
                    <div className=" product-image-preview"></div>
                  }
                  <input
                  className="product-input-image"
                  type="file"
                  accept="image/*"
                  value={this.state.send_param.image}
                  name="image"
                  id="image"
                  //ref={(ref) => (this.productImage = ref)}
                  onChange={this.handleImage}
                  ></input>
                </div>
                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input-60"
                  style={floatRight}
                  //ref={(ref) => (this.productName = ref)}
                  name="name"
                  value={this.state.send_param.name}
                  onChange={this.handleChange}
                  placeholder="제품 이름"
                />

                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input-60"
                  style={floatRight}
                  //ref={(ref) => (this.productCompany = ref)}
                  name="company"
                  value={this.state.send_param.company}
                  onChange={this.handleChange}
                  placeholder="제조원"
                />
                <input
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input-60"
                  style={floatRight}
                  //ref={(ref) => (this.productPrice = ref)}
                  name="price"
                  value={this.state.send_param.price}
                  onChange={this.handleChange}
                  placeholder="정가"
                />

                <textarea
                  // lassName="form-control product-input w-100 form-control-lg"
                  className="product-input"
                  //ref={(ref) => (this.productDiscription = ref)}
                  name="discription"
                  value={this.state.send_param.discription}
                  onChange={this.handleChange}
                  placeholder="제품 설명"
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
