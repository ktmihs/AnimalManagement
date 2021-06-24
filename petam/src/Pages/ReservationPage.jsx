import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Content from '../Components/Content'
import '../Components/Content.css'
import ReservationContent from './ReservaionContent'
import TimeTable from './TimeTable'
import swal from 'sweetalert'

function ReservationPage({location,history}){
    const [time,setTime]=useState({
        year:'',
        month:'',
        dates:'',
        hour:'',
        minute:''
    })
    const [reserve,setReserve]=useState({
        option:'',
        text:''
    })

    const getReserve=(name,value)=>{
        setReserve({
            ...reserve,
            [name]: value,
        })
    }

    const [nextPage,setNextPage]=useState(false)

    const hspId=useLocation()
    const hspName=hspId.name
    const res=useHistory()
    const toCheck=()=>{{    
        reserve.option==='' || reserve.option==='기타' && reserve.text===''?    //미입력 사항 존재할 때
        (
            reserve.option===''?
            swal('','예약 목적을 선택해주세요!','warning')
            :
            swal('','예약 목적에 대한 메시지를 작성해주세요!','warning')
        )
        :
        res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
            pathname:'/CheckReservationPage',
            name:hspName,
            option:reserve.option,
            text:reserve.text,
            dateDay:`${time.year}년 ${time.month}월 ${time.dates}일 ${time.hour}시 ${time.minute}분`
        })
    }}
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
            <h2 className='name'>{hspName}</h2>
            <div className='bodyContainer'>
                <div style={inner}>
                    {nextPage?
                    <>
                        <ReservationContent time={time} getReserve={getReserve}/>
                        <div style={buttons}>                   
                            {/* onClick으로 이름 넘기기 */} 
                            <button style={leftButton} className='button' onClick={()=>setNextPage(false)}>이전으로</button>
                            <button style={rightButton} className='button' onClick={toCheck}>예약하기</button>  
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