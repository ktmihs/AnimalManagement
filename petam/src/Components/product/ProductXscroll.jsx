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
  };
  let sellingPrice
  return (
    <div style={scope} className="bo">
      <div id="XProduct" className="product-x-scroll ">
        <ul className="_ul ">
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
              console.log("productId", item.productId);
              console.log("sellingprice : ", item.price)
              console.log("children : ", children)
              useEffect(async () => {
                try {
                  // const hospital = axios.get("api/hospitals/readone/" + )
                  const res = axios
                    .get("/api/products/readone/" + item.productId)
                    .then((response) => {
                      console.log(response.data);
                      console.log("ctx : ", response.data)
                      const p = item.price
                      // const p = response.data.price;
                      setProductData({
                        _id: response.data._id,
                        name: response.data.name,
                        company: response.data.company,
                        // price: response.data.price,
                        price: p
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                      });
                      console.log("price", productData);
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
        </ul>
      </div>
    </div>
  );
};

export default ProductXscroll;
