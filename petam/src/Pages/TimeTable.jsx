import React from 'react'
import '../Components/Content.css'

function TimeTable({location,history}){
    const buttons={
        textAlign:'center'
    }
    const leftButton={
        display:'inline-block',
        backgroundColor:'#BBBCBC'
    }
    const rightButton={
        display:'inline-block',
        backgroundColor:'#5F8DDA'
    }
    return(
        <>
            <div className='contentBox'>
                <div>
                    Calendar
                </div>
                <div>
                    TimeTable
                </div>
            </div>
            <div style={buttons}>
                <button style={leftButton} className='button' onClick={()=>history.push('/HospitalPage')}>취소</button>
                <button style={rightButton} className='button' onClick={()=>history.push('/TimeTable')}>다음으로</button>  
            </div>
        </>
    )
}
export default TimeTable