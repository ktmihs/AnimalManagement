// 검색어에 맞는 병원 정보 보여주기(map으로)

import React from 'react'
import '../Content.css'
import Item from './Item'

function SearchContent({info, loading}){
    if (loading){
        return <h2>Loading...</h2>
    }
    return(
        <>
            {
                info.map(item=>{
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
        }
        </>
    )
}
export default SearchContent