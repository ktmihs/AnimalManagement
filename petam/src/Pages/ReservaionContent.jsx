import React, { useState } from 'react'
import '../Components/Content.css'

function ReservationContent({time}){
    const [selectTime,setSeleteTime]=useState()
    
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
    return(
        <>
            <div className='contentBox'>
                <div>
                    예약 일정 : {time.year}년 {time.month}월 {time.dates}일 {time.hour}시 {time.minute}분<br/>
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
        </>
    )
}
export default ReservationContent
