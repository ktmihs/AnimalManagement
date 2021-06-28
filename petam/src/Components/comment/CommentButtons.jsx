import React from "react";
import "./Comment.css";

const CommentButtons = ({ children }) => {
  const floatRight = {
    float: "right",
    fontSize: "small",
  };
  const update = {
    marginRight: "15px",
  };
  return (
    <div>
      <div className="comment-buttons  ">
        <div className="comment-button">삭제</div>
        <div style={floatRight}> | </div>
        <div className="comment-button" style={update}>
          수정
        </div>
      </div>
    </div>
  );
};

export default CommentButtons;
