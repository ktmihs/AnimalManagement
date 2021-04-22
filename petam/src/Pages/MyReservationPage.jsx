import React from 'react'
import Components from '../Components/Components'
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
        padding:'5px',
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
        <Components>
            <h2 className='name'>내 예약 내역</h2>

            <div className='bodyContainer'>
                <div>
                    <div style={totalCount}>총 5건</div>
                    <hr/>
                    <div style={reservationContainer}>
                        <div style={reservation}>
                            <h3>신촌세브란스</h3>
                            4월 16일 14시<br/><br/>
                            정기 검진<br/><br/>
                            ▶
                        </div>
                        <div style={reservation}>
                        <h3>신촌세브란스</h3>
                            4월 16일 14시<br/><br/>
                            정기 검진<br/><br/>
                            ▶
                        </div>
                    </div>
                </div>
                <hr/>
                <button style={button} className='button' onClick={()=>history.push('/')}>뒤로가기</button>
            </div>
        </Components>
    )
}

export default MyReservationPage