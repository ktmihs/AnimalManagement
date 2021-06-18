//data item 하나하나 보여주기
 
import React from 'react'
import '../Content.css'
import './Search.css'

function Item({linkName,item}){
    const link=linkName
    const name=item.name
    const id=item._id
    const hospitalName=item.hospitalName
    console.log(id)

    return(
        link==='hospital'?
        <a href={`/${link}/${name}`}>
            <div className="item-box">
                <img className="img-style" src={'Sev.jpg'}/>
                {item.name}<br/>
                tel: {item.tel}
            </div>
        </a>
        :
        <div className="reservation">
            <h5>{hospitalName}</h5>
            {item.dateDay}<br/>
            {item.type}<br/>
            <a href={`/${link}/${id}`}><h4>▶</h4></a>
        </div>
    )
}
export default Item