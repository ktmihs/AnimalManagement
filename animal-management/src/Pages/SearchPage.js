import React from 'react'
import '../Components/Content.css'

function SearchPage(){
    const logo={
        display:'inline-block',
        marginRight:'20px',
        height:'40px',
        verticalAlign:'top'     //이미지 하단 여백 없애기
    }
    const search={
        display:'inline-block',
        border:'1px solid #bbbcbc',
        borderRadius:'5px',
        width:'40%',
        height:'35px'
    }
    const bodyHospital={
        display:'inline-block',
        border:'1px solid gray',
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
            <h2 className='name'>'신촌세브란스' 검색 결과</h2>
            <div className='headerContainer'>
                <img style={logo} src="/logo2.jpg" alt="petAm"/>
                <input style={search}/>
                    {/*search 창*/}
            </div>
            <div className='bodyContainer'>
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
        </>
      )
}

export default SearchPage