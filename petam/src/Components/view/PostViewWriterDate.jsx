import React from "react";
import "./PostView.css";

const PostViewWriterDate = (props) => {
  const { headersName, children } = props;
  <div className="post-view">
    {headersName.map((item, index) => {
      return (
        <td className="post-table-header-column" key={index}>
          {item}
        </td>
      );
    })}
  </div>;
  //   return (
  //     <div>
  //       <h6 className="post-view-writer-date">{writer}</h6>
  //       <h6 className="post-view-writer-date">{date}</h6>
  //     </div>
  //   );
};

export default PostViewWriterDate;

// const PostTable = props => {
//   const { headersName, children } = props;

//   return (
//     <table className="post-table">
//       <thead>
//         <tr>
//           {
//             headersName.map((item, index) => {
//               return (
//                 <td className="post-table-header-column" key={index}>{ item }</td>
//               )
//             })
//           }
//         </tr>
//       </thead>
//       <tbody>
//         {
//           children
//         }
//       </tbody>
//     </table>
//   )
// }

// export default PostTable;
