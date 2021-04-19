import React from 'react'

function Content({children}){
    const bodyStyle={
        background:'white',
        height:'80vh',
        padding:'5px',
        borderRadius:'20px'
    }
    return(
        <div style={bodyStyle}>
            {children}
        </div>
    )
}
export default Content