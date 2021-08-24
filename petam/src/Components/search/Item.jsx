import axios from 'axios'
import React,{useState,useEffect} from 'react'
import '../Content.css'
import './Search.css'

// 병원 하나씩 보여주기 & 예약 정보 하나씩 보여주기 (linkname으로 구분)
function Item({linkName,item}){
    const link=linkName
    const name=item.name
    const id=item._id
    const hospitalName=item.hospitalName
    const [image,setImage]=useState('')
    // useEffect(() => {
    //     if(link==='hospital' && item.image){
    //         setImage('C:\Users\yello\AnimalManagement\petam-server\src\api\images/images/'+item.image.split('\\')[2])
    //     } 'C:/Users/yello/AnimalManagement/petam-server/src/api/images/images/'+item.image.split('\\')[2]
    // }, [])
    return link === 'hospital' ? (
      <a href={`/${link}/${name}`}>
        <div className="item-box">
          {item.image && item.image !== '' ? (
            <img className="img-style" src={item.image.split('\\')[2]} />
          ) : (
            <img className="img-style" src={'no_img.jpg'} />
          )}
          {item.name}
          <br />
          tel: {item.tel}
        </div>
      </a>
    ) : link === 'complete' ? (
      <div className="reservation">
        <h5 className="sign">{hospitalName}</h5>
        {item.dateDay}
        <br />
        {item.type}
        <br />
        {/* <a href={`/${link}/${id}`}>
          <h6 className="reserve-btn">후기작성</h6>
        </a> */}
        <a href={`/writepostpage/${id}`}>
          <h6 className="reserve-btn">후기작성</h6>
        </a>
      </div>
    ) : (
      <div className="reservation">
        <h5 className="sign">{hospitalName}</h5>
        {item.dateDay}
        <br />
        {item.type}
        <br />
        <a href={`/${link}/${id}`}>
          <h5 className="sign-btn">▶</h5>
        </a>
      </div>
    );
}
export default Item