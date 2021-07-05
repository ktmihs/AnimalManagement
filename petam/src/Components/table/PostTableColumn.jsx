import React from "react";
import { useHistory, useLocation } from "react-router";

const PostTableColumn = ({ his, type, _id, children }) => {
  const toDetail = () => {
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
    // <div className="d">

    <td
      className=" post-table-column"
      onClick={toDetail}
      // onClick={() => history.push("/PostView/" + { test })}
    >
      {children}
    </td>
    // </div>
  );
};

export default PostTableColumn;
