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

  const style={
    position:'relative',
    bottom:'-3vw',
    padding:'auto',
    marginTop:'3vw',
    paddingBottom:'20px',
}

  return (
    <ul className="pagination" style={style}>
      <PageButton>
        {pArr.map((pageNum) => (
            <li
            key={pageNum}
            className="pagination_item"
            onClick={() => paginate(pageNum)}
            >
            {pageNum}&nbsp;&nbsp;
            </li>
        ))}
      </PageButton>
    </ul>
  )
}

export default Pagination