import React,{useState,useEffect} from 'react'
import './reservation.css'
import DatePicker from "react-datepicker"
import { ko } from "date-fns/esm/locale"
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import setDate from "date-fns/setDate"
import setMonth from "date-fns/setMonth"
import { addDays } from 'date-fns'
import swal from 'sweetalert'
import axios from 'axios'
import TimeList from './TimeList'

function TimeTable(props){
    
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime]= useState()

  const {hsp}=props   // 이전 페이지에서 병원 정보 가져오기(id, name)
  const [reservationTime,setReservationTime]=useState(['13:30','18:00'])
  const [timeList,setTimeList]=useState({
    openHour:1,
    openMinute:1,
    closeHour:1,
    closeMinute:1,
    lunchOpenHour:1,
    lunchOpenMinute:1,
    lunchCloseHour:1,
    lunchCloseMinute:1
  })
  const {openHour,openMinute,closeHour,closeMinute,lunchOpenHour,lunchOpenMinute,lunchCloseHour,lunchCloseMinute}=timeList

  let hour=[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  let minute=openMinute
  const [time,setTime]=useState([])

  useEffect(() => {
    axios.get('/api/hospitals/readone/'+hsp.Id)
      .then(ctx=>{
        if(ctx.data.reservationTime)
        setReservationTime(ctx.data.reservationTime)
        if(ctx.data.timeList)
        setTimeList({
          openHour:ctx.data.timeList.openHour,
          openMinute:ctx.data.timeList.openMinute,
          closeHour:ctx.data.timeList.closeHour,
          closeMinute:ctx.data.timeList.closeMinute,
          lunchOpenHour:ctx.data.timeList.lunchOpenHour,
          lunchOpenMinute:ctx.data.timeList.lunchOpenMinute,
          lunchCloseHour:ctx.data.timeList.lunchCloseHour,
          lunchCloseMinute:ctx.data.timeList.lunchCloseMinute
        })
        console.log(ctx,timeList)
        console.log(timeToList())
      })
  }, [time])

  const timeToList=()=>{
    let time=[]
    //hour=hour.filter(item=>openHour<=item && closeHour>=item)
    for(let i=Number(openHour);i<Number(closeHour);i++){
      if(i==Number(openHour) && Number(openMinute)==30){
        time.push(`${i}:30`)
      } else if(i==Number(lunchOpenHour)){
          if(Number(lunchOpenMinute)==30){
            time.push(`${i}:00`)
          }
      } else if(i==Number(lunchCloseHour)){
          if(Number(lunchCloseMinute)==30){ 
            time.push(`${i}:30`)
          } else{
            time.push(`${i}:00`)
            time.push(`${i}:30`)
          }
      } else {
        time.push(`${i}:00`)
        time.push(`${i}:30`)
      }
    }
    if(Number(closeMinute)==30) time.push(`${closeHour}:00`)

  return time
  }


  // const [timeList,setTimeList]=useState([
  //   '7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30',
  //   '11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
  //   '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30',
  //   '19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'
  // ])

  const filterPassedTime = time => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    
    return currentDate.getTime()+1800000 < selectedDate.getTime()   //지난 시간은 선택할 수 없도록 설정(+ 30분 전에는 불가능)
  }
  const selectTime=()=>{
    const currentDate = new Date()
    {(startDate.getDate()===currentDate.getDate() && startDate.getHours()===currentDate.getHours())
      || (startDate.getHours()<9 || startDate.getHours()>20)?
      swal('','시간을 선택해주세요','warning')
      :
      checking()
      }
  }
  const checking=()=>{
    props.getTime(startDate,startTime)
    swal('',`${startDate.getMonth()+1}월 ${startDate.getDate()}일 ${startDate.getHours()}시 ${startDate.getMinutes()}분을 선택하셨습니다`, 'success')
  }
  const info={
    fontSize:'11px',
    marginBottom:'7px'
  }
  const button={
    marginBottom:'25px',
    width:'200px',
    backgroundColor:'rgb(255,170,170)'
  }
  const picker={
    backgroundColor:"#0000aa"
  }
  
  return(
      <>
        <div className='content'>
          <DatePicker
            inline
            style={picker}
            locale={ko}
            selected={startDate}
            onChange={date => setStartDate(date)}
          //  showTimeSelect
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          //  minTime={setHours(setMinutes(new Date(),0),9)}
          //  maxTime={setHours(setMinutes(new Date(),0),20)}
          //  filterTime={filterPassedTime}
          //  excludeTimes={[setMonth(setDate(setHours(setMinutes(new Date(),0),17),10),8)]}
          />
          <TimeList timeList={time} reservationTime={reservationTime} selectTime={startTime}/>
        </div>
        <div style={info}>※ 예약은 최소 30분 전까지 가능합니다<br/>회색 칸은 이미 예약된 시간이거나, 불가능한 시간입니다. ※</div>
        <button style={button} className='button' onClick={selectTime}>날짜 선택</button>
      </>
  )
}
export default TimeTable