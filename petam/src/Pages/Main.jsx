import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import MainHospitalContent from './MainHospitalContent'

function Main() {

  const contents={
    textAlign:'center',
    marginTop:'30px'
  }
  const mainAd={
    border:'1px dotted #bbbcbc',
    textAlign:'center',
    margin:'20px 10%',
    padding:'20px 0',
    width:'80%'
  }

  return (
    <Content>
      <h2 className='name'>Main Page!!</h2>
      <div style={contents} className='bodyContainer'>
        <MainHospitalContent/>
        <MainHospitalContent/> {/*나중에 제품으로 변경*/}
      </div>
      <div style={mainAd}>
        main page default ad
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
