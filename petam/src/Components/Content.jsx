import React from 'react'
import './Content.css'

function Content({children}){
    const bodyStyle={
        background:'white',
        height:'auto',
        minHeight:'75vh',
        width:'80%',
        padding:'10px 5px',
        margin:'5vh 10%',
        borderRadius:'20px'
    }
    return(
        <div style={bodyStyle}>
            {children}
        </div>
    )
}
export default Content