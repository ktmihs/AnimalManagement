import React from 'react'
import { useState,useEffect } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import axios from 'axios'

function ConfirmReservationPage(props){
    const [hospital,setHospital]=useState(props.match.hospitalName)
    console.log(props.match.hospitalName)
    useEffect(() => {
        const fetchPosts=async()=>{
            axios.get('api/reservations/host?hospitalName='+hospital) 
            .then(
                res=>setHospitalInfo({
                    
                    name:res.hospitalName,
                    tel:'024567899',
                    ...hospitalInfo,
                }),
                console.log(hospital),
            )
            .catch(
                console.log('fail'),
                err=>console.log(err)
                )
        }
        fetchPosts()
    }, [])
    const contentBox={
        border:'none',
        height:'auto'
    }
    const buttons={
        textAlign:'center'
    }
    const leftButton={
        display:'inline-block',
        backgroundColor:'red'
    }
    const rightButton={
        display:'inline-block',
        backgroundColor:'#5F8DDA'
    }
    return(
        <Content>
            <h2 className='name'>예약 정보 확인</h2>
            <div className='bodyContainer'>
                <div className='contentBox' style={contentBox}>
                    <div>
                        예약 번호 : 1235468788<br/>
                        예약 병원 : {hospital}<br/>
                        예약자 : 보리<br/>
                        예약 일정 : 2021년 04월 14일 16일<br/>
                        예약 목적 : 정기 검진<br/>
                        기타 내용 : 없음
                    </div>
                </div>
                <div className='contentBox' style={contentBox}>
                    <div>
                        ※주의사항※<br/><br/>
                        당일 예약 불가합니다.<br/>
                        예약 취소는 1일 전까지 가능합니다.<br/>
                        예약 관련 자세한 사항은 병원으로 문의 바랍니다.
                    </div>
                </div>
            </div>
            <div style={buttons}>
                <button style={leftButton} className='button' onClick={()=>props.history.push('/')}>예약 취소</button>
                <button style={rightButton} className='button' onClick={()=>props.history.push('/MyReservationPage')}>확인</button>  
            </div>
        </Content>
    )
}

export default ConfirmReservationPage