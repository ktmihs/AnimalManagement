import React from 'react'
import { useLocation } from 'react-router'
import Content from '../Components/Content'
import '../Components/Content.css'
import swal from 'sweetalert';

function CheckReservationPage({location,history}){
    const reserve=useLocation({
        option:location.option,
        text:location.option,
        dateDay:location.dateDay
    })
    const hspId=useLocation()
    const handleClick=()=>{
        swal({
            text:'예약이 확정되었습니다.',
            icon:'success',
            closeOnClickOutside:false,
            confirm:{
                text:'확인',
                value:true
            }
        }).then((result)=>{
            if(result){
                history.push({
                    pathname:'/MyReservationPage',
                })
            }
        })
    }
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
                        예약 병원 : {hspId.name}<br/>
                        예약자 : 보리<br/>
                        예약 일정 : {reserve.dateDay}<br/>
                        예약 목적 : {reserve.option}<br/>
                        기타 내용 : {reserve.text}
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
                <button style={leftButton} className='button' onClick={()=>history.push('/ReservationPage')}>다시 선택</button>
                <button style={rightButton} className='button' onClick={handleClick}>예약확정</button>  
            </div>
        </Content>
    )
}

export default CheckReservationPage