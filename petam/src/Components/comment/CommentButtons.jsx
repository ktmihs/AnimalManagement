import React from "react";
import "./Comment.css";

const CommentButtons = ({ children }) => {
  const floatRight = {
    float: "right",
    fontSize: "small",
  };
  const update = {
    marginRight: "15px",
    padding: '0px 7px',
  
  };
  const remove = {
    
    padding: '0px 7px',
  };
 
  


  return (
    <div>
      <div className="comment-buttons  ">
        {/* <div className="comment-button b"style={remove} onClick={commentRemove}>삭제</div>
        <div style={floatRight}> | </div>
        <div className="comment-button b" style={update} onClick={commentUpdate}>
          수정
        </div> */}
      </div>
    </div>
  );
};

export default CommentButtons;
