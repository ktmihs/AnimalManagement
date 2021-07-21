import React, { useState } from 'react'
import Item from './Item'
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"

function TimeList({timeList, reservationTime,selectTime}){
  
  // 병원 오픈시간, 마감시간 제외
  // 점심시간 제외
  // 예약된 시간 제외
  
  const currentDate = new Date()
  let minute=currentDate.getMinutes()
  let hour=currentDate.getHours()
  if(minute>30){
    minute-=30
    hour+=1
  } else {minute+=30}

  console.log(currentDate,minute,hour)
  const [lastTime,setLastTime]=useState({
    hour:hour,
    minute:minute
  })
  const timelist={
        //width:'600px',
        //height:'300px',
        margin:'0 5vw',
        //border:'1px solid black'
      }

  return(
      <div style={timelist}>
          {
            timeList.map(time=><Item lastTime={lastTime} reservationTime={reservationTime} time={time} selectTime={selectTime}/>)
          }
      </div>
    )
}
export default TimeList