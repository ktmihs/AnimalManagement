import React from "react";
import "./PostView.css";

// const PostViewWriterDate = (props) => {
//   const { headersName, children } = props;
//   <div className="post-view">
//     {headersName.map((item, index) => {
//       return <h6 key={index}>{item}</h6>;
//     })}
//   </div>;
//   //   return (
//   //     <div>
//   //       <h6 className="post-view-writer-date">{writer}</h6>
//   //       <h6 className="post-view-writer-date">{date}</h6>
//   //     </div>
//   //   );
// };

// export default PostViewWriterDate;

const PostTable = (props) => {
  const { writer, date, children } = props;

  return (
    // <table className="">
    //   <thead>
    <div className="">
      <div className=" post-view-writer-date">
        {writer} ⎢ {date}
      </div>
    </div>
  );
};

export default PostTable;
