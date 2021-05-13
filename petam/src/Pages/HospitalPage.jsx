import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'

function HospitalPage({location,history}){
    const [hospitalInfo,setHospitalInfo]=useState({     //나중에 ''로 초기화 후, db에서 받아 set에 넣어주기
        id:'980505',
        name:'신촌세브란스',
        img:'/sev.jpg',
        addr:'서울 서대문구 연세로 50-1',
        ph:'02-1599-1004',
        time:'09:00 - 18:00',
        avg:'5' //평점
    })
    
    const hspId=useHistory()
    
    const handleClick=()=>{
        hspId.push({
            pathname: '/ReservationPage',
            id:hospitalInfo.id,
            name:hospitalInfo.name
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
        margin:'3% 10%'
    }
    return(
        <Content>
            <h2 className='name' value={hospitalInfo.name}>{hospitalInfo.name}</h2>
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
                        전화번호: {hospitalInfo.ph}<br/>
                        운영시간: {hospitalInfo.time}<br/>
                        평점: {hospitalInfo.avg}
                    </div>
                </div>
                <div className="contentBox"></div>
            </div>
        </Content>
    )
}
export default HospitalPage