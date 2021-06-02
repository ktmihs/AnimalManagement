import React from 'react';
 
const PostTableRow = ({ children }) => {
  return (
    <tr className="post-table-row">
      {
        children
      }
    </tr>
  )
}
 
export default PostTableRow;