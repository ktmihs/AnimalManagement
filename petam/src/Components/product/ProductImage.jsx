import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductImage = (props) => {
  const { children } = props;
  console.log(children)
  return (
    // <Link class="b link-title" to={`/postView/${_id}`}>
    // <div className="b">
    <>
      {
        children && children!==''?
        <img style={{width:'150px', height:'150px'}} src={'../'+children.split('\\')[2]} alt="image"/>
        :
        <img src={'../no_img.jpg'}/>
      }
    </>
    //<div className="product-image ">imageimage{children}</div>
    // </div>
    // </Link>
  );
};

export default ProductImage;
