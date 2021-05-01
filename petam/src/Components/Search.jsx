import React from 'react'
import '../Components/Content.css'

function Search(){
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
        <div className='headerContainer'>
            <input style={search}/>
            <button className="button" style={searchButton}>검색</button>
        </div>
    )
}

export default Search