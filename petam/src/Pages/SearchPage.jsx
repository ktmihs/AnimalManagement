//검색 페이지

import React, { useState,useEffect } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/search/Search'
import SearchContent from '../Components/search/SearchContent'
import axios from 'axios'
import Pagination from '../Components/pagination/Pagination'

function SearchPage(){
    const [searchWord,setSearchWord]=useState('병원')
    // const [searchWord,setSearchWord]=useState({
    //     hospitals:[],
    //     userInput:""
    // })
    const [info,setInfo]=useState([])   //병원 정보
    const [loading,setLoading]=useState(false)    //로딩 중 표시
    const [currentPage,setCurrentPage]=useState(1)  //현재 페이지
    const [postsPerPage,setPostsPerPage]=useState(100)                //한 페이지에서 보여줄 info 수

    const linkName='hospital'       // 링크이름

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
                res=>{
                    setInfo(res.data),
                    res.data.length>1000?
                    setPostsPerPage(150)
                    :
                    console.log(res.data.length)
                },
                setLoading(false),
            )
            .catch(err=>console.log(err))
        }
        fetchPosts()
    }, [])

    //병원 검색 받으면 리렌딩 ()
    const getSearchWord=(word)=>{
        setSearchWord(word)
        console.log(word)
        console.log(searchWord)
        
    }
    const button={
        position:'relative',
        left:'95%',
        textAlign:'right'
    }
    // const searchResult=(data)=>{
    //     console.log(data)
    //     //<div>{props.value}</div>
    // }
    return (
        <Content>
            <a name='top'/>
            <h2 className='name'>'{searchWord}' 검색 결과</h2>
            <a href='#bottom' style={button}>🔽</a>
            <Search
                //onCreate={searchResult}
                getSearchWord={getSearchWord}
            />
            <div className='bodyContainer'>
                <SearchContent linkName={linkName} info={currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={info.length} paginate={paginate}/>
            </div>
            <a href='#top' name='bottom' style={button}>🔼</a>
        </Content>
      )
}

export default SearchPage