import React from "react";
import { useHistory, useLocation } from "react-router";

const PostTableColumn = ({ his, _id, children }) => {
  const toPostDetail = () => {
    {
      // console.log(useHistory());
      console.log("toPostDetail");
      console.log(_id);
      console.log(his);
      his.push("/PostView/" + _id);
      // window.location.href = "/PostView/" + { test };
      // console.log("/PostView/" + { test });
    }
  };
  return (
    // <div className="d">

    <td
      className=" post-table-column"
      onClick={toPostDetail}
      // onClick={() => history.push("/PostView/" + { test })}
    >
      {children}
    </td>
    // </div>
  );
};

export default PostTableColumn;
