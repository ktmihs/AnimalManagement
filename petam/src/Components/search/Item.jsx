import React from 'react'
import '../Content.css'
import './Search.css'

// 병원 하나씩 보여주기 & 예약 정보 하나씩 보여주기 (linkname으로 구분)
function Item({linkName,item}){
    const link=linkName
    const name=item.name
    const id=item._id
    const hospitalName=item.hospitalName

    return(
        link==='hospital'?
        <a href={`/${link}/${name}`}>
            <div className="item-box">
                {
                    item.image===[]?
                    <img className="img-style" src={item.image}/>
                    :
                    <img className="img-style" src={'no_img.jpg'}/>
                }
                {item.name}<br/>
                tel: {item.tel}
            </div>
        </a>
        :
        <div className="reservation">
            <h5 className='sign'>{hospitalName}</h5>
            {item.dateDay}<br/>
            {item.type}<br/>
            <a href={`/${link}/${id}`}><h5 className='sign'>▶</h5></a>
        </div>
    )
}
export default Item