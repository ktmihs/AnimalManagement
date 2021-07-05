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
    margin:'3vw 10% 3vw 10%',
    padding:'5px 0',
}

  return (
    <ul className="pagination" style={style}>
      <PageButton postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}>
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