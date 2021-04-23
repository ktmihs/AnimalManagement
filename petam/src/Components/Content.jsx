import React from 'react'

function Content({children}){
    const bodyStyle={
        background:'white',
        height:'80vh',
        width:'70%',
        padding:'5px',
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