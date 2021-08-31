import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const b = {
  border: "1px solid red",
}
const ProductName = (props) => {
  const { children } = props;
  // let name 
  // if (children.length > 5) {
  //   name = children.slice(0, 4)
  // }
  return (
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">
    <div className="product-name">{children}</div>
    // </div>
    // </Link>
  );
};

export default ProductName;
