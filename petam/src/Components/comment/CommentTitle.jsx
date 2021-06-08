import React from "react";
import "./Comment.css";

const CommentTitle = ({ children }) => {
  return <h4 className="comment-title"> {children}</h4>;
};

export default CommentTitle;
