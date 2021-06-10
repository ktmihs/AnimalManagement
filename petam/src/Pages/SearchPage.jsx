import React, { useState,useEffect } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'
import SearchContent from './SearchContent'
import axios from 'axios'
import Pagination from '../Components/Pagination'

function SearchPage(){
    const [searchWord,setSearchWord]=useState('병원')
    // const [searchWord,setSearchWord]=useState({
    //     hospitals:[],
    //     userInput:""
    // })
    const [info,setInfo]=useState([])   //병원 정보
    const [loading,setLoading]=useState(false)    //로딩 중 표시
    const [currentPage,setCurrentPage]=useState(1)  //현재 페이지
    const [postsPerPage]=useState(4)                //한 페이지에서 보여줄 info 수

    const indexOfLastPost=currentPage*postsPerPage  //해당 페이지에서 마지막 info의 index
    const indexOfFirstPost=indexOfLastPost-postsPerPage //  ...      첫번째 ...
    const currentPosts=info.slice(indexOfFirstPost, indexOfLastPost)    //각 페이지에서 보여질 info 배열
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const fetchPosts=async()=>{
            setLoading(true)
            axios.get('api/hospitals/read')
            //axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(
                res=>setInfo(res.data),
                setLoading(false)
            )
            .catch(err=>console.log(err))
        }
        fetchPosts()
    }, [])

    const getSearchWord=(word)=>{
        setSearchWord(word)
        console.log(word)
        console.log(searchWord)
        
    }
    // const searchResult=(data)=>{
    //     console.log(data)
    //     //<div>{props.value}</div>
    // }
    return (
        <Content>
            <h2 className='name'>'{searchWord}' 검색 결과</h2>
            <Search
                //onCreate={searchResult}
                getSearchWord={getSearchWord}
            />
            <div className='bodyContainer'>
                <SearchContent info={currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={info.length} paginate={paginate}/>
            </div>
        </Content>
      )
}

export default SearchPage