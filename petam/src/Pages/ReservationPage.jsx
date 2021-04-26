import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'

function ReservationPage({location,history}){
    const selectBox={
        width:'40%',
        marginLeft:'5px'
    }
    const textBox={
        height:'100px',
        width:'80%'
    }
    const warningText={
        fontSize:'11px'
    }
    const buttons={
        textAlign:'center'
    }
    const leftButton={
        display:'inline-block',
        backgroundColor:'#BBBCBC'
    }
    const rightButton={
        display:'inline-block',
        backgroundColor:'#5F8DDA'
    }
    return(
        <Content>
            <h2 className='name'>신촌 세브란스 병원</h2>
            <div className='bodyContainer'>
                <div className='contentBox'>
                    <div>
                        Calendar
                    </div>
                    <div>
                        TimeTable
                    </div>
                </div>
                <div className='contentBox'>
                    <div>
                        예약 일정 : 2021년 04월 14일 16시<br/>
                        예약 목적 : 
                        <select style={selectBox}>
                            <option>정기검진</option>
                            <option>예방접종</option>
                            <option>기타</option>
                        </select>
                        <br/><br/>
                        <textarea style={textBox}>병원에 보낼 메시지를 적어주세요.</textarea>
                        <div style={warningText}>
                            ※주의사항※<br/>
                            예약 1일 전까지 무료 취소 가능합니다.<br/>
                            회색 칸은 이미 예약된 시간이거나, 불가능한 시간입니다.
                        </div>
                    </div>
                </div>
            </div>
            <div style={buttons}>
                <button style={leftButton} className='button' onClick={()=>history.push('/HospitalPage')}>취소</button>
                <button style={rightButton} className='button' onClick={()=>history.push('/CheckReservationPage')}>예약하기</button>  
            </div>
        </Content>
    )
}
export default ReservationPage