//data item 하나하나 보여주기
 
import React from 'react'
import './reservation.css'

import TimeBtnAble from './TimeBtnAble'
import TimeBtnDisabled from './TimeBtnDisabled'

function Item({lastTime,reservationTime,time,selectTime}){
    console.log(lastTime,time.split(':')[0])
    return(
        <>{
            lastTime.hour>time.split(':')[0] || (lastTime.hour==time.split(':')[0] && lastTime.minute>=time.split(':')[1]) || (reservationTime && reservationTime.find(item=>item===time))?
            <TimeBtnDisabled time={time}/>
            :
            <TimeBtnAble selectTime={selectTime} time={time}/>
        }</>  
    )
}
export default Item