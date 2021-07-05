import axios from "axios";
import React from "react";

const ProductHospitalTableColumnName = ({ his, _id, children }) => {
  const toHospitalDetail = () => {
    {
      // console.log(useHistory());
      console.log("tohospital");
      console.log(_id);
      console.log(his);
      let name;
      const res = axios.get("/api/hospitals/read/" + _id).then((response) => {
        console.log("response: ", response);
        name = response.data.name;
        console.log("name", name);

        his.push("/hospital/" + response.data.name);
      });
      console.log(res);
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
      onClick={toHospitalDetail}
      // onClick={() => history.push("/PostView/" + { test })}
    >
      {children}
    </td>
  );
};

export default ProductHospitalTableColumnName;
