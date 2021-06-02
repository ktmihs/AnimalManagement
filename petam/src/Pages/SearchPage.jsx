import React, { useState,useEffect } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'
import SearchContent from './SearchContent'
import axios from 'axios'

function SearchPage(){
    const [searchWord,setSearchWord]=useState('병원')
    // const [searchWord,setSearchWord]=useState({
    //     hospitals:[],
    //     userInput:""
    // })
    const [info,setInfo]=useState([])
    useEffect(() => {
        //axios.get('https://localhost:4000/api/hospitals/list') // 내 주소 못 불러오겠움... 다른 데이터로는 됨
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>setInfo(res.data))
        .catch(err=>console.log(err))
    }, [])

    const getSearchWord=(word)=>{
        setSearchWord(word)
        console.log(word)
        console.log(searchWord)
    }
    const searchResult=(data)=>{
        console.log(data)
        //<div>{props.value}</div>
    }
    return (
        <Content>
            <h2 className='name'>'{searchWord}' 검색 결과</h2>
            <Search
                //onCreate={searchResult}
                getSearchWord={getSearchWord}
            />
            <div className='bodyContainer'>
                <SearchContent info={info} />
            </div>
        </Content>
      )
}

export default SearchPage