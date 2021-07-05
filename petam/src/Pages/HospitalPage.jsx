// 병원 세부 정보 & 예약 및 후기 링크

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Content from "../Components/Content";
import "../Components/Content.css";
import Search from "../Components/search/Search";
import ProductXscroll from "../Components/product/ProductXscroll";
import axios from "axios";

function HospitalPage(props) {
  const [hospitalInfo, setHospitalInfo] = useState({
    //나중에 ''로 초기화 후, db에서 받아 set에 넣어주기
    id: "",
    name: "",
    img: "/sev.jpg",
    addr: "",
    tel: "",
    time: "09:00 - 18:00",
    avg: "0", //평점
  });

  const [hospital,setHospital]=useState(props.match.params.name)

  useEffect(() => {
      axios.get('/api/hospitals/read/name/'+hospital) 
          .then(
              ctx=>{
                  console.log(ctx)
                  const _avg = (ctx.data.score / ctx.data.count).toFixed(2);
                  setHospitalInfo({
                      ...hospitalInfo,
                      id:ctx.data._id,
                      name:ctx.data.name,
                      addr:ctx.data.new_addr,
                      tel:ctx.data.tel,
                      _id: ctx.data._id,
                      products: ctx.data.products,
                      avg: _avg,
              })},
              console.log(hospitalInfo),
          )
          .catch(
              err=>console.log(err)
          )
  }, [])

  const hspId=useHistory()        // history.push로 연결된 링크에 보내주기

  const handleClick=()=>{
      hspId.push({
          pathname: '/ReservationPage',
          id:hospitalInfo.id,
          name:hospital
      })
    }
    const topContent={
        padding:'0 10%',
        display:'flex',
        flexDirection:'row'
    }
    const hospitalImg={
        width:'190px',
        height:'190px',
        verticalAlign:'top'
    }
    const buttons={
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        margin:'7%'
    }
    const topButton={
        display:'block',
        backgroundColor:'#5F8DDA',
        marginBottom:'5%'
    }
    const bottomButton={
        display:'block',
        backgroundColor:'#5F8DDA'
    }
    const bottomContent={
        fontSize:'14px',
        textAlign:'left',
        margin:'3% 10%',
        overflow:'auto',
        height:'150px'
    }
    return(
        <Content>
            <h2 className='name' value={hospital}>{hospital}</h2>
            <Search/>
            <div className='bodyContainer'>
                <div className="contentBox">
                    <div style={topContent}>
                        <img style={hospitalImg} src={hospitalInfo.img} alt="hospitalImg"/>
                        <div style={buttons}>
                            <button style={topButton} className='button' onClick={handleClick}>예약하기</button>
                            <button style={bottomButton} className='button'>후기</button>
                        </div>
                    </div>
                    <div style={bottomContent}>
                        병원명: {hospitalInfo.name}<br/>
                        병원주소: {hospitalInfo.addr}<br/>
                        전화번호: {hospitalInfo.tel}<br/>
                        운영시간: {hospitalInfo.time}<br/>
                        평점: {hospitalInfo.avg}
                    </div>
                </div>
                <div className="contentBox"></div>
            </div>
          </div>
          <div style={bottomContent}>
            병원명: {hospitalInfo.name}
            <br />
            병원주소: {hospitalInfo.addr}
            <br />
            전화번호: {hospitalInfo.tel}
            <br />
            운영시간: {hospitalInfo.time}
            <br />
            평점: {hospitalInfo.avg}
          </div>
        </div>
        {/* <div className=""> */}
        <ProductXscroll>{hospitalInfo.products}</ProductXscroll>
        {/* </div> */}
      </div>
    </Content>
  );
}
export default HospitalPage;
