import React from 'react'
import Components from '../Components/Components'
import '../Components/Content.css'

function CheckReservationPage({location,history}){
    const contents={
        textAlign:'center',
        margin:'30px 0 20px 0'
    }
    const leftContent={
        display:'inline-block',
        padding:'20px 30px 30px 10px',
        height:'300px',
        width:'40%',
        borderRight:'3px solid #BBBCBC',
        overflow:'hidden',
        wordWrap:'break-word',
        lineHeight:'30px'
    }
    const rightContent={
        display:'inline-block',
        padding:'20px 10px 30px 30px',
        height:'300px',
        width:'40%',
        overflow:'hidden',
        wordWrap:'break-word',
        color:'red',
        lineHeight:'30px'
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
        <Components>
            <h2 className='name'>신촌 세브란스 병원</h2>
            <div className='bodyContainer'>
                <div style={contents}>
                    <div style={leftContent}>
                        <div>
                            <h3>예약 정보</h3>
                            예약 번호 : 1235468788<br/>
                            예약 병원 : 신촌 세브란스 병원<br/>
                            예약자 : 보리<br/>
                            예약 일정 : 2021년 04월 14일 16일<br/>
                            예약 목적 : 정기 검진<br/>
                            기타 내용 : 없음<br/>
                        </div>
                    </div>
                    <div style={rightContent}>
                        <div>
                            <br/>※주의사항※<br/><br/><br/>
                            당일 예약 불가합니다.<br/>
                            예약 취소는 1일 전까지 가능합니다.<br/>
                            예약 관련 자세한 사항은 병원으로 문의 바랍니다.
                        </div>
                    </div>
                </div>
                <div style={buttons}>
                    <button style={leftButton} className='button' onClick={()=>history.push('/HospitalPage')}>예약 취소</button>
                    <button style={rightButton} className='button' onClick={()=>history.push('/MyReservationPage')}>확인</button>  
                </div>
            </div>
        </Components>
    )
}

export default CheckReservationPage