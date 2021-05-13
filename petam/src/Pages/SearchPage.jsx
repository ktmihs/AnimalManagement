import React, { useState } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'
import SearchContent from './SearchContent'

function SearchPage(){
    const [searchWord,setSearchWord]=useState('')
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
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
            </div>
        </Content>
      )
}

export default SearchPage