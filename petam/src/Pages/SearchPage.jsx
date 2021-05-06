import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'
import SearchContent from './SearchContent'

function SearchPage(){
    const searchResult=(data)=>{
        console.log(data)
        //<div>{props.value}</div>
    }
    return (
        <Content>
            <h2 className='name'>'신촌세브란스' 검색 결과</h2>
            <Search
                onCreate={searchResult}
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