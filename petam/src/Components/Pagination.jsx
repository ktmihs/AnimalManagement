import { render } from "@testing-library/react"
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
  let pArr=pageNumber.slice(0,10)

  //함수 다시 만들기
  
  const firstPage=()=>{
    setBlockNum(0)
    setCurrPage(1)
    pArr=pageNumber.slice(0,10)
    paginate((blockNum*10)+currPage)
  }
  const lastPage=()=>{
    setBlockNum(Math.ceil(Number(pageNumber)/4))
    setCurrPage(Number(pageNumber))
    pArr=pageNumber.slice((blockNum)*10+1,currPage)
    paginate(currPage)
  }
  const prevPage=()=>{
    if(currPage<=1)
        return
    if((currPage-1)<=10*Number(blockNum)){
        setBlockNum(n=>n-1)
    }
    setCurrPage(n=>n-1)
  }
  const nextPage=()=>{
    if(currPage>=pNum)
        return
    if(10*Number(blockNum+1)<Number(currPage+1)){
        setBlockNum(n=>n+1)        
    }
    setCurrPage(n=>n+1)
  }

  const pageBtn={
    height:'30px',
    border:'1px solid #ffffff',
    backgroundColor:'#b5cfff',
    borderRadius:'6px',
    padding:'0 12px',
    cursor:'pointer',
    boxSizing:'border-box',
    position:'relative',
  }
  const style={
    position:'relative',
    bottom:'-3vw',
    padding:'auto',
    margin:'auto',
    paddingBottom:'20px',
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