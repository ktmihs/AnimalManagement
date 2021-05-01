import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import ReservationContent from './ReservaionContent'
import TimeTable from './TimeTable'

function ReservationPage({location,history}){
    const inner={
        display:'inline-block',
        margin:'0 5px'
    }
    return(
        <Content>
            <h2 className='name'>신촌 세브란스 병원</h2>
            <div className='bodyContainer'>
                <div style={inner}>
                    <TimeTable/>
                </div>
                <div style={inner}>
                    <ReservationContent/>
                </div>
                
            </div>
        </Content>
    )
}
export default ReservationPage