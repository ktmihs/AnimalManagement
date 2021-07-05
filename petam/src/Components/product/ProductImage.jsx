import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductImage = (props) => {
  const { children } = props;
  return (
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">
    <div className="product-image ">imageimage{children}</div>
    // </div>
    // </Link>
  );
};

export default ProductImage;
