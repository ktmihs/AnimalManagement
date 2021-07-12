import React from 'react'
import './mypage.css'
import Item from './Item'

function PetsInfo({info}){
    
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
export default PetsInfo