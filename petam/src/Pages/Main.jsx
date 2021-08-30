import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import MainHospitalContent from '../Components/main/MainHospitalContent'
import MainProductContent from '../Components/main/MainProductContent'
import { useSelector } from 'react-redux'

// 메인 페이지
function Main() {

  const { user, hospital } = useSelector(({ user, hospital }) => ({
    user: user.user,
    hospital: hospital.hospital,
  }));

  return (
    <Content>
      {hospital && (
        <div>
          {/* {hospital.username}
          {hospital.company_number} */}
        </div>
    )}
      
      <h2 className="name">Main Page!!</h2>
      <div className="bodyContainer">
        <MainHospitalContent />
        <MainProductContent /> 
      </div>
    </Content>
  )
}

{/*
function Main({location, history}) {
 
  return (
    <Components>
        <button onClick={()=> history.push('/SearchPage')}>검색 페이지</button>
        <button onClick={()=> history.push('/HospitalPage')}>병원 페이지</button>
        <button onClick={()=> history.push('/ReservationPage')}>예약하기</button>
        <button onClick={()=> history.push('/CheckReservationPage')}>예약 확인</button>
        <button onClick={()=> history.push('/MyReservationPage')}>내 예약 내역</button>
    </Components>
  )
}

*/}

export default Main
