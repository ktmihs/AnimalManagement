import React from 'react'
import {Link} from 'react-router-dom'
import Content from '../Components/Content'
import '../Components/Content.css'

function MyReservationPage({location, history}){
    const totalCount={
        textAlign:'right'
    }
    const reservationContainer={
        height:'300px',
        textAlign:'center'
    }
    const reservation={
        height:'160px',
        width:'140px',
        padding:'20px 5px',
        margin:'40px 20px',
        border:'4px solid #98B6E4',
        borderRadius:'30px',
        display:'inline-block',
        textAlign:'center',
        fontSize:'14px'
    }
    const button={
    backgroundColor:'#BBBCBC'
    }
    return(
        <Content>
            <h2 className='name'>내 예약 내역</h2>
            <div className='bodyContainer'>
                    <div style={totalCount}>총 5건</div>
                    <hr/>
                    <div style={reservationContainer}>
                        <div style={reservation}>
                            <h5>신촌세브란스</h5>
                            4월 16일 14시<br/>
                            정기 검진<br/><br/>
                            <Link to='/CheckReservationPage'><h4>▶</h4></Link>
                        </div>
                        <div style={reservation}>
                        <h5>신촌세브란스</h5>
                            4월 16일 14시<br/>
                            정기 검진<br/><br/>
                            <Link to='/CheckReservationPage'><h4>▶</h4></Link>
                        </div>
                    </div>
                <hr/>
                <button style={button} className='button' onClick={()=>history.push('/')}>뒤로가기</button>
            </div>
        </Content>
    )
}

export default MyReservationPage