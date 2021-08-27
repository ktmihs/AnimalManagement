import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

import Content from "../Components/Content";
import "../Components/Content.css";
import Search from "../Components/search/Search";
import ProductXscroll from "../Components/product/ProductXscroll";
import axios from "axios";

// 병원 세부 정보 & 예약 및 후기 링크
function HospitalPage(props) {
    const { user, loghospital } = useSelector(({ user, hospital }) => ({
        user: user.user,
        loghospital: hospital.hospital,
    }))
  const [hospitalInfo, setHospitalInfo] = useState({
    //나중에 ''로 초기화 후, db에서 받아 set에 넣어주기
    id: "",
    name: "",
    img: "",
    addr: "",
    tel: "",
    time: "09:00 - 18:00",
    lunch:'',
    company_number:'',
    avg: "0", //평점
  });

  const [hospital,setHospital]=useState(props.match.params.name)

  useEffect(() => {
      axios.get('/api/hospitals/read/name/'+hospital) 
          .then(
              ctx=>{
                  console.log(ctx)
                  const _avg = (ctx.data.score / ctx.data.count).toFixed(2);
                  ctx.data.timeList?
                  setHospitalInfo({
                    id:ctx.data._id,
                      name:ctx.data.name,
                      addr:ctx.data.new_addr,
                      tel:ctx.data.tel,
                      img:ctx.data.image,
                      _id: ctx.data._id,
                      company_number:ctx.data.company_number,
                      products: ctx.data.products,
                      avg: _avg,
                    time:ctx.data.timeList.openHour+':'+ctx.data.timeList.openMinute+'-'+ctx.data.timeList.closeHour+':'+ctx.data.timeList.closeMinute,
                    lunch:ctx.data.timeList.lunchOpenHour+':'+ctx.data.timeList.lunchOpenMinute+'-'+ctx.data.timeList.lunchCloseHour+':'+ctx.data.timeList.lunchCloseMinute
                  })
                  :
                  setHospitalInfo({
                      ...hospitalInfo,
                      id:ctx.data._id,
                      name:ctx.data.name,
                      addr:ctx.data.new_addr,
                      tel:ctx.data.tel,
                      img:ctx.data.image,
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
    
      const postClick = () => {
        hspId.push({
          pathname: '/hospitalpostlistpage/'+hospital,
          id: hospitalInfo.id,
          name: hospital,
        });
      };
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
        margin:'3% 10% 0 10%',
        overflow:'auto',
        height:'180px'
    }
    return(
        <Content>
            <h2 className='name' value={hospital}>{hospital}</h2>
            <div className='bodyContainer'>
                <div className="contentBox">
                {
                loghospital || !user || hospitalInfo.company_number===''? // 병원으로 로그인 했거나, 로그인을 안 했거나, 해당 병원이 등록 안 된 병원일 경우
                    hospitalInfo.img && hospitalInfo.img!==''?
                    <img style={hospitalImg} src={`../${hospitalInfo.img.split('\\')[2]}`} alt="hospitalImg"/>
                    :
                    <img style={hospitalImg} src={'../no_img.jpg'}/>
                :
                    <div style={topContent}>
                        {
                            hospitalInfo.img && hospitalInfo.img!==''?
                            <img style={hospitalImg} src={`../${hospitalInfo.img.split('\\')[2]}`} alt="hospitalImg"/>
                            :
                            <img style={hospitalImg} src={'../no_img.jpg'}/>
                        }
                        <div style={buttons}>
                            <button style={topButton} className='button' onClick={handleClick}>예약하기</button>
                            <button style={bottomButton} className='button' onClick = {postClick}>후기</button>
                        </div>
                    </div>
                }
                    <div style={bottomContent}>
                        병원명: {hospitalInfo.name}<br/>
                        병원주소: {hospitalInfo.addr}<br/>
                        전화번호: {hospitalInfo.tel}<br/>
                        운영시간: {hospitalInfo.time}<br/>
                        점심시간: {hospitalInfo.lunch}<br/>
                        평점: {hospitalInfo.avg}
                    </div>
                </div>
                <div className="contentBox"></div>
            </div>
            <ProductXscroll>{hospitalInfo.products}</ProductXscroll>
        </Content>
    )
}
 
export default HospitalPage;
