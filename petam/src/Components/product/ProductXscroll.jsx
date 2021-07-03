import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import axios from "axios";
import ProductPrice from "./ProductPrice";

const ProductXscroll = (props) => {
  const { children } = props;
  const scope = {
    minWidth: "100%",
    maxWidth: "100%",
    // border: "1px solid red",
    // borderTop: "3px solid lightgray",
    // borderBottom: "3px solid lightgray",
  };
  return (
    <div style={scope} className="bo">
      <div id="XProduct" className="product-x-scroll ">
        <ul className="_ul ">
          {/* {children &&
            children.map((item, index) => {
              const [productData, setProductData] = useState([
                {
                  _id: '',
                  name: '',
                  company: '',
                  image: []
                },
              ]);

              console.log("item", item);
              // useEffect(async () => {
              //   const res = axios.get("api/products/readone/"+item.productId)
              //   return () => {
              //     cleanup
              //   }
              // }, [input])
  return(
          
              );
            }
            
          } */}

          {children &&
            children.map((item, index) => {
              const [productData, setProductData] = useState([
                {
                  _id: "",
                  name: "",
                  company: "",
                  price: "",
                },
              ]);
              console.log(item.productId);

              useEffect(async () => {
                try {
                  const res = axios
                    .get("/api/products/readone/" + item.productId)
                    .then((response) => {
                      console.log(response.data.name);
                      const p = response.data.price;
                      setProductData({
                        _id: response.data._id,
                        name: response.data.name,
                        company: response.data.company,
                        // price: response.data.price,
                        price: p
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                      });
                      console.log(productData);
                      // console.log("res: ", res.data)
                    });
                } catch (e) {
                  console.error(e.message);
                }
              }, []);

              return (
                <li class="product-item ">
                  <ProductImage></ProductImage>
                  <ProductName>
                    [{productData.company}] {productData.name}
                  </ProductName>
                  <ProductPrice>{productData.price}</ProductPrice>
                </li>
              );
            })}

          {/* <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li>
          <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li>
          <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li>
          <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li>
          <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li>
          <li class="product-item">
            <ProductImage></ProductImage>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
          </li> */}
        </ul>
      </div>
    </div>
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">
    // <tr className="">{children}</tr>
    // </div>
    // </Link>
  );
};

export default ProductXscroll;
