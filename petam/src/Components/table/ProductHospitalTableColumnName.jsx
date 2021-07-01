import React from "react";

const ProductHospitalTableColumnName = ({ his, _id, children }) => {
  const toPostDetail = () => {
    {
      // console.log(useHistory());
      console.log("tohospital");
      console.log(_id);
      console.log(his);
      // if (type == "post") {
      //   his.push("/PostView/" + _id);
      // } else if (type == "product") {
      //   his.push("/product/detail/" + _id);
      // }
      // window.location.href = "/PostView/" + { test };
      // console.log("/PostView/" + { test });
    }
  };
  return (
    <td
      className=" product-table-column"
      // onClick={toDetail}
      // onClick={() => history.push("/PostView/" + { test })}
    >
      {children}
    </td>
  );
};

export default ProductHospitalTableColumnName;
