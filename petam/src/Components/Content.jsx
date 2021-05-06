import React from 'react'
import './Content.css'

function Content({children}){
    const bodyStyle={
        background:'white',
        height:'auto',
        minHeight:'77vh',
        width:'90%',
        padding:'10px 5px',
        margin:'4% 5%',
        borderRadius:'20px'
    }
    return(
        <div style={bodyStyle}>
            {children}
        </div>
    )
}
export default Content