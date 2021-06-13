//data item 하나하나 보여주기
 
import React from 'react'
import '../Content.css'
import './Search.css'

function Item({item}){

    const name=item.name
    const id=item._id
    console.log(id)

    return(
        <a href={`/hospital/${name}`}>
            <div className="item-box">
                <img className="img-style" src={'Sev.jpg'}/>
                {item.name}<br/>
                tel: {item.tel}
            </div>
        </a>
    )
}
export default Item