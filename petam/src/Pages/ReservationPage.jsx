import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Content from '../Components/Content'
import '../Components/Content.css'
import ReservationContent from '../Components/reservation/ReservaionContent'
import TimeTable from '../Components/reservation/TimeTable'
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
        pet:'',
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

    const hspId=useLocation()       // 이전 페이지에서 받아서 사용
    const [hsp,setHsp]=useState({
        Id:hspId.id,
        Name:hspId.name
    })
    console.log(hsp,hsp.Id)

    const res=useHistory()
    const toCheck=()=>{{    
        reserve.pet==='' || reserve.option==='' || reserve.option==='기타' && reserve.text===''?    //미입력 사항 존재할 때
        (
            reserve.pet==='' || reserve.option===''?
            swal('','예약 동물과 예약 목적을 선택해주세요!','warning')
            :
            swal('','예약 목적에 대한 메시지를 작성해주세요!','warning')
        )
        :
        res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
            pathname:'/CheckReservationPage',
            id:hsp.Id,
            name:hsp.Name,
            pet:reserve.pet,
            option:reserve.option,
            text:reserve.text,
            dateDay:`${time.year}년 ${time.month}월 ${time.dates}일 ${time.hour}시 ${time.minute}분`
        })
    }}
    const getTime=(startDate,startTime)=>{
        setTime({
            year:startDate.getFullYear(),
            month:startDate.getMonth()+1,
            dates:startDate.getDate(),
            hour:startTime.split(':')[0],
            minute:startTime.split(':')[1]
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
            <h2 className='name'>{hsp.Name}</h2>
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
                        <TimeTable getTime={getTime} hsp={hsp}/>
                        {time.minute!==''?
                            <div style={buttons}>
                                <button style={leftButton} className='button' onClick={()=>history.push('/Hospital/'+hsp.Name)}>취소</button>
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