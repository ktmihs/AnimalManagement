//product 제품 설명
import React from "react";
import "./ProductView.css";
const scope = {
  width: "45%",
  float: "left",
  border: "1px solid lightgray",
  //   border: "2px solid orange",
  minHeight: "200px",
  marginBottom: "20px",
  marginLeft: "15px",
  borderRadius: "10px",
};
const floatRight = {
  float: "right",
};
const ProductViewImage = ({ image,company, price, children }) => {
  return (
    <div style={scope}>
      {
        image && image!==''?
        <img src={'../../'+image.split('\\')[2]}/>
        :
        <img src={'no_img.jpg'}/>
      }
      {/* <div className="   product-title">제조원</div>
      <div className="product-detail">{company}</div>

      <div className="  product-title ">정가</div>
      <div className="product-detail">{price}</div> */}
    </div>
  );
};

export default ProductViewImage;
