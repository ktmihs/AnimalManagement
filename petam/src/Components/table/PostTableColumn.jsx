import React from 'react';
 
const PostTableColumn = ({ children }) => {
  return (
    <td className="post-table-column">
      {
        children
      }
    </td>
  )
}
 
export default PostTableColumn;