import React from 'react'
import {Link} from 'react-router-dom'
import Content from '../Components/Content'
import '../Components/Content.css'

function Main() {

  const contents={
    textAlign:'center',
    marginTop:'30px'
  }
  const contentBox={
    display:'inline-block',
    padding:'10px 0px',
    marginRight:'3%',
    height:'25vw',
    width:'300px',
    border:'1px dotted #bbbcbc',
    //borderRight:'3px solid #BBBCBC',
    overflow:'hidden',
    wordWrap:'break-word',
    lineHeight:'30px'
  }
  const TopContent={
    textAlign:'center',
    marginTop:'10px'
  }
  const logo={
    display:'inline-block',
    marginRight:'2%',
    height:'40px',
    verticalAlign:'top'     //이미지 하단 여백 없애기
  }
  const contentName={
    textAlign:'center',
    fontSize:'18px',
    TextDecoration:'none',
    color:'#395382',
    display:'inline-block',
    borderRadius:'5px',
    width:'50%',
    padding:'4px 0'
  }
  const BottomContent={
    padding:'0 20px'
  }
  const ad={
    backgroundColor:'#dddddd',
    textAlign:'center',
    fontSize:'20px',
    margin:'20px 0',
    height:'100%',
    width:'100%'
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
        <div style={contentBox}>
          <div style={TopContent}>
            <img style={logo} src="/logo.jpg" alt="petAm"/>
            <Link to='/SearchPage'><div style={contentName}><strong>병원 검색</strong></div></Link>            
          </div>
          <div style={BottomContent}>
            <div style={ad}>    {/*나중에 이미지로 대체*/}
              <br/>메인 광고
              <br/><br/>
            </div>
            <div style={ad}>
              <br/>메인 광고
              <br/><br/>
            </div>
          </div>
        </div>
        <div style={contentBox}>
          <div style={TopContent}>
            <img style={logo} src="/logo.jpg" alt="petAm"/>
            <Link to=''><div style={contentName}><strong>제품 검색</strong></div></Link>
          </div>
          <div style={BottomContent}>
            <div style={ad}>
              <br/>메인 광고
              <br/><br/>
            </div>
            <div style={ad}>
              <br/>메인 광고
              <br/><br/>
            </div>
          </div>
        </div>
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
