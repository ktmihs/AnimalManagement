import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'

function CheckReservationPage({location,history}){
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
                        예약 병원 : 신촌 세브란스 병원<br/>
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
                <button style={leftButton} className='button' onClick={()=>history.push('/')}>예약 취소</button>
                <button style={rightButton} className='button' onClick={()=>history.push('/MyReservationPage')}>확인</button>  
            </div>
        </Content>
    )
}

export default CheckReservationPage