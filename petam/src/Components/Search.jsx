import React,{useState} from 'react'
import '../Components/Content.css'

function Search({getSearchWord}){
    const [searchWord,setSearchWord]=useState('')

    const handleChange=(e)=>{
        setSearchWord(e.target.value)

    }
    const handleSubmit=()=>{
        getSearchWord(searchWord)
        res.push({
            pathname:`/hospital/${searchWord}`
        })
        //alert('hospital '+searchWord)
            // 디비 서치할 때 사용
    }

    const search={
        display:'inline-block',
        border:'1px solid #bbbcbc',
        borderRadius:'5px',
        width:'40%',
        height:'35px'
    }
    const searchButton={
        backgroundColor:'#dddddd',
        marginLeft:'10px',
        width:'80px'
    }
    return (
        <form onSubmit={handleSubmit} className='headerContainer'>
            <input placeholder="병원을 검색하세요..." value={searchWord} onChange={handleChange} name="name" style={search}/>
            <button type="submit" className="button" style={searchButton}>검색</button>
        </form>
    )    
}

export default Search