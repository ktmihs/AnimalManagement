import React, { useState } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import ReservationContent from './ReservaionContent'
import TimeTable from './TimeTable'

function ReservationPage({location,history}){
    const [time,setTime]=useState({
        year:'',
        month:'',
        dates:'',
        hour:'',
        minute:''
    })
    const [nextPage,setNextPage]=useState(false)

    const getTime=(startDate)=>{
        setTime({
            year:startDate.getFullYear(),
            month:startDate.getMonth()+1,
            dates:startDate.getDate(),
            hour:startDate.getHours(),
            minute:startDate.getMinutes()
        })
    }
    const inner={
        display:'inline-block',
        margin:'0 5px'
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
                <div style={inner}>
                    {nextPage?
                    <>
                        <ReservationContent time={time}/>
                        <div style={buttons}>
                            <button style={leftButton} className='button' onClick={()=>setNextPage(false)}>이전으로</button>
                            <button style={rightButton} className='button' onClick={()=>history.push('/CheckReservationPage')}>예약하기</button>  
                        </div>
                    </>
                    :
                    <>
                        <TimeTable getTime={getTime}/>
                        {time.minute!==''?
                            <div style={buttons}>
                                <button style={leftButton} className='button' onClick={()=>history.push('/HospitalPage')}>취소</button>
                                <button style={rightButton} className='button' onClick={()=>setNextPage(true)}>다음으로</button>  
                            </div>
                        :
                        <></>
                        }
                    </>
                    }
                </div>
            </div>
        </Content>
    )
}
export default ReservationPage