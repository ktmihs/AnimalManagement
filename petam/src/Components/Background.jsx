import React from 'react'

function Background({children}){
    const style={
        backgroundColor: '#D4E0F3',
        padding: '0px 20px',
        height: '100vh'
    }
    const container={
        padding: '5vh 10%'
    }
    return (
        <div style={style}>
            <div style={container}>
                {children}
            </div>
        </div>
    )
}

export default Background
