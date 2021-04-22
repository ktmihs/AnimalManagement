import React from 'react'
import Components from '../Components/Components'
import '../Components/Content.css'

function ReservationPage({location,history}){
    const contents={
        textAlign:'center',
        margin:'30px 0 20px 0'
    }
    const leftContent={
        display:'inline-block',
        padding:'20px 5% 30px 10px',
        height:'330px',
        width:'40%',
        //borderRight:'3px solid #BBBCBC',
        overflow:'hidden',
        wordWrap:'break-word',
        lineHeight:'30px'
    }
    const rightContent={
        display:'inline-block',
        padding:'20px 10px 30px 5%',
        height:'330px',
        width:'40%',
        overflow:'hidden',
        wordWrap:'break-word',
        lineHeight:'30px',
        //textAlign:'left'
    }
    const select={
        width:'40%',
        marginLeft:'5px'
    }
    const text={
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
        <Components>
            <h2 className='name'>신촌 세브란스 병원</h2>
            <div className='bodyContainer'>
                <div style={contents}>
                    <div style={leftContent}>
                        <div>
                            Calendar
                        </div>
                        <div>
                            TimeTable
                        </div>
                    </div>
                    <div style={rightContent}>
                        <div>
                            예약 일정 : 2021년 04월 14일 16시<br/>
                            예약 목적 : 
                            <select style={select}>
                                <option>정기검진</option>
                                <option>예방접종</option>
                                <option>기타</option>
                            </select>
                            <br/><br/>
                            <textarea style={text}>병원에 보낼 메시지를 적어주세요.</textarea>
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
            </div>
        </Components>
    )
}
export default ReservationPage