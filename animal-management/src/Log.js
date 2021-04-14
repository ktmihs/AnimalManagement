import React from 'react'

function Log(){
    
    const sign={
        float:'right',
        padding:'5px 10px'
    }
    const signIn={
        float:'left'
    }
    const bar={
        float:'left',
        margin:'0 10px'
    }
    const signUp={
        float:'left'
    }
    return(
        <div style={sign}>
            <div style={signIn}>signIn</div>
            <div style={bar}>|</div>
            <div style={signUp}>signUp</div>
        </div>
    )
}

export default Log