//pagination

import React from "react"
import PageButton from "./PageButton"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = []
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i)
  }
  let pArr=pageNumber.slice(0,10)
  let pgNum=50-pageNumber.length

  const style={
    margin:`3vw ${pgNum}%`,
    padding:'5px 0',
    textAlign:'center'
}

  return (
    <ul className="pagination" style={style}>
      |&nbsp;&nbsp;
      {pArr.map((pageNum) => (
          <li
          key={pageNum}
          className="pagination_item"
          onClick={() => paginate(pageNum)}
          >
          {pageNum}&nbsp;&nbsp;
          </li>
      ))}
      |
    </ul>
  )
}

export default Pagination