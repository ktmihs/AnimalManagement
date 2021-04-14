import React from 'react'
//import Body from './Body'
//import Header from './Header'
import Log from './Log'

function Background({children}){
    const style={
        backgroundColor: '#98B6E4',
        color: '#395382',
        padding: '5px 20px'
    }
    const container={
        padding: '0 10%'
    }
    return (
        <div style={style}>
            <Log/>
            <br/>
            <div style={container}>
                {/*
                <Header/>
                <Body/>
                */}
                {children}
            </div>
        </div>
    )
}

export default Background
