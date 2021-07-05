import React from "react";

const ProductHospitalColumnTel = ({ his, type, _id, children }) => {
  const toPostDetail = () => {
    {
      // console.log(useHistory());
      console.log("toPostDetail");
      console.log(_id);
      console.log(his);
      if (type == "post") {
        his.push("/PostView/" + _id);
      } else if (type == "product") {
        his.push("/product/detail/" + _id);
      }
      // window.location.href = "/PostView/" + { test };
      // console.log("/PostView/" + { test });
    }
  };
  return (
    <td onClick={toPostDetail} className="product-table-column-title">
      {children}
    </td>
  );
};

export default ProductHospitalColumnTel;
