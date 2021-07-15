import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import MainAd from '../Components/main/MainAd'
import MainHospitalContent from '../Components/main/MainHospitalContent'

function Main() {

  const contents={
    textAlign:'center',
    marginTop:'30px'
  }
  

  return (
    <Content>
      <h2 className='name'>Main Page!!</h2>
      <div style={contents} className='bodyContainer'>
        <MainHospitalContent/>
        <MainHospitalContent/> {/*나중에 제품으로 변경*/}
      </div>
      <MainAd/>
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
