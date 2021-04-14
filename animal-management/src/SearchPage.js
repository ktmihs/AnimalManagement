import React from 'react'
import Background from './Background'
import Footer from './Footer'

function SearchPage(){
    const headerStyle={
        margin:'30px 0'
    }
    const headerContainer={
        textAlign:'center'
    }
    const logo={
        display:'inline-block',
        marginRight:'20px',
        height:'40px',
        verticalAlign:'top'     //이미지 하단 여백 없애기
    }
    const search={
        display:'inline-block',
        width:'40%',
        height:'35px'
    }
    const bodyStyle={
        background:'white',
        height:'500px',
        margin:'40px 0 60px 0',
        borderRadius:'20px'
    }
    const bodyContainer={
        textAlign:'center',
        paddingTop:'20px'
    }
    const bodyHospital={
        display:'inline-block',
        border:'1px solid skyblue',
        textAlign:'center',
        height:'190px',
        width:'160px',
        margin:'20px 20px 0 20px'
    }
    const imgStyle={
        width:'150px',
        verticalAlign:'top'
    }
    return (
        <>
            <Background>
                <div style={headerStyle}>
                    <div style={headerContainer}>
                        <img style={logo} src="/logo2.jpg" alt="petAm"/>
                        <input style={search}/>
                            {/*search 창*/}
                    </div>
                </div>
                <div style={bodyStyle}>
                    <div style={bodyContainer}>
                        <div style={bodyHospital}>
                            <img style={imgStyle} src='/logo.jpg'/>
                            병원1<br/>
                            tel: 02-123-1004
                        </div>
                        <div style={bodyHospital}>
                            <img style={imgStyle} src='/logo.jpg'/>
                            병원2<br/>
                            tel: 02-123-1004
                        </div>
                        <div style={bodyHospital}>
                            <img style={imgStyle} src='/logo.jpg'/>
                            병원3<br/>
                            tel: 02-123-1004
                        </div>
                        <div style={bodyHospital}>
                            <img style={imgStyle} src='/logo.jpg'/>
                            병원4<br/>
                            tel: 02-123-1004
                        </div>
                    </div>
                </div>
            </Background>
            <Footer/>
        </>
      )
}

export default SearchPage