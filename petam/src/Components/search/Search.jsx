import React,{useState} from 'react'
import '../Content.css'
import './Search.css'

function Search({getSearchWord}){
    const [searchWord,setSearchWord]=useState('')

    const handleChange=(e)=>{
        setSearchWord(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        getSearchWord(searchWord)
        // res.push({
        //     pathname:`/hospital/${searchWord}`
        // })
        //alert('hospital '+searchWord)
            // 디비 서치할 때 사용
    }

    return (
        <form onSubmit={handleSubmit} className='headerContainer'>
            <input placeholder="병원을 검색하세요..." value={searchWord} onChange={handleChange} name="name" className="search"/>
            <button type="submit" className="button search-button">검색</button>
        </form>
    )    
}

export default Search