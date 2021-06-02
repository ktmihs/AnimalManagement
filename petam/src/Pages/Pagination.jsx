import React from "react"
import { useState } from "react"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = []
  const [blockNum,setBlockNum]=useState(0)
  const [currPage,setCurrPage]=useState(0)

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i)
  }
  const pNum=(pageNumber)
  let pArr=pageNumber.slice(pNum,5)

  //함수 다시 만들기
  
  const firstPage=()=>{
    setBlockNum(0)
    setCurrPage(1)
  }
  const lastPage=()=>{
    setBlockNum(Math.ceil(pNum/5))
    setCurrPage(pNum)
  }
  const prevPage=()=>{
    if(currPage<=1)
        return
    if((currPage-1)<=pageLimit*blockNum){
        setBlockNum(n=>n-1)
    }
    setCurrPage(n=>n-1)
  }
  const nextPage=()=>{
    if(currPage>=pNum)
        return
    if(5*Number(blockNum+1)<Number(currPage+1)){
        setBlockNum(n=>n+1)        
    }
    setCurrPage(n=>n+1)
  }

  const pageBtn={
    height:'30px',
    border:'1px solid #d5d5d5',
    borderRadius:'6px',
    padding:'0 12px',
    cursor:'pointer',
    boxSizing:'border-box',
    position:'relative'
  }
  const style={
    position:'relative',
    bottom:'-3vw',
    paddingBottom:'20px'
}

  return (
    <ul className="pagination" style={style}>
      <button style={pageBtn} onClick={firstPage}>&lt;&lt;</button>
      <button style={pageBtn} onClick={prevPage}>&lt;</button>
      <>
        {pArr.map((pageNum) => (
            <li
            key={pageNum}
            className="pagination_item"
            onClick={() => paginate(pageNum)}
            >
            {pageNum}&nbsp;&nbsp;
            </li>
        ))}
      </>
      <button style={pageBtn} onClick={nextPage}>&gt;</button>
      <button style={pageBtn} onClick={lastPage}>&gt;&gt;</button>
    </ul>
  )
}

export default Pagination