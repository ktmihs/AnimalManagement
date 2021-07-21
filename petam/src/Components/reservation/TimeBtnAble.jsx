import React,{useState} from 'react'

function TimeBtnAble({time,selectTime}){

    const [select,setSelect]=useState(selectTime)
    const handleClick=(e)=>{
        console.log(e,time)
        setSelect(time)
    }
    const timeBtn={
        display:'inline-box',
        width:'70px',
        height:'35px',
        backgroundColor:'#9478ff80',
        color:'white',
        fontSize:'14px',
        border:'0',
        borderRadius:'5px',
        margin:'2px 3px'
      }
    return(
        <button onClick={handleClick} style={timeBtn} value={time}>{time}</button>
    )
}
export default TimeBtnAble