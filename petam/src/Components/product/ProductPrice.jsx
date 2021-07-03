import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductPrice = (props) => {
  const { children } = props;

  // const p = children.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">

    <div className="product-price ">{children}</div>
    // <div className="product-price ">{p}</div>
    // </div>
    // </Link>
  );
};

export default ProductPrice;
