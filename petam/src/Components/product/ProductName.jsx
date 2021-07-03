import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductName = (props) => {
  const { children } = props;
  return (
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">
    <div className="product-name">{children}</div>
    // </div>
    // </Link>
  );
};

export default ProductName;
