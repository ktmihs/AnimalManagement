// 임시 헤더 파일

import React from 'react'

function Header(){
    const headerStyle={
        margin:'30px 0'
    }
    const headerContainer={
        textAlign:'center'
    }
    const logo={
        display:'inline-block',
        marginRight: '5px'
    }
    const search={
        display:'inline-block',
        margin:'10px'
    }
    return(
        <div style={headerStyle}>
            <div style={headerContainer}>
                <img style={logo} src="https://heropcode.github.io/GitHub-Responsive/img/logo.svg" alt="GitHub Logo"/>
                <input style={search}/>
                    {/*search 창*/}
                    search!
            </div>
        </div>
    )
}
export default Header