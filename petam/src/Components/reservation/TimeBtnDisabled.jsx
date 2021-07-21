import React from 'react'

function TimeBtnDisabled({time}){
    console.log('b:',time)
    const timeBtnDisabled={
        display:'inline-box',
        width:'70px',
        height:'35px',
        backgroundColor:'#dddddd',
        color:'white',
        fontSize:'14px',
        border:'0',
        borderRadius:'5px',
        margin:'2px 3px'
      }
    return(
        <button style={timeBtnDisabled} value={time} disabled>{time}</button>
    )
}
export default TimeBtnDisabled