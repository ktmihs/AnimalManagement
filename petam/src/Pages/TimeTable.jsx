import React,{useState} from 'react'
import '../Components/Content.css'
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import swal from 'sweetalert';

function TimeTable(props){
    
    const [startDate, setStartDate] = useState(
      // setHours(setMinutes(new Date(), 30), 16)
      new Date()
    );
    const filterPassedTime = time => {
      const currentDate = new Date()
      const selectedDate = new Date(time)
      
      return currentDate.getTime()+1800000 < selectedDate.getTime()   //지난 시간은 선택할 수 없도록 설정
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
      props.getTime(startDate)
      swal('',`${startDate.getMonth()+1}월 ${startDate.getDate()}일 ${startDate.getHours()}시 ${startDate.getMinutes()}분을 선택하셨습니다`, 'success')
    }
    const info={
      fontSize:'11px',
      marginTop:'-7px',
      marginBottom:'7px'
    }
    const button={
      marginBottom:'25px',
      width:'200px',
      backgroundColor:'rgb(255,170,170)'
    }
    const contentBox={
      border:'none',
      marginTop:'-10px',
      marginBottom:'-60px'
    }
    const picker={
      backgroundColor:"#0000aa"
    }

    return(
        <>
          <div style={contentBox} className='contentBox'>
            <DatePicker
              style={picker}
              locale={ko}
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              inline
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
              minTime={setHours(setMinutes(new Date(),0),9)}
              maxTime={setHours(setMinutes(new Date(),0),20)}
              filterTime={filterPassedTime}
            />
          </div>
          <div style={info}>※ 예약은 최소 30분 전까지 가능합니다<br/>회색 칸은 이미 예약된 시간이거나, 불가능한 시간입니다. ※</div>
          <button style={button} className='button' onClick={selectTime}>날짜 선택</button>
        </>
    )
}
export default TimeTable