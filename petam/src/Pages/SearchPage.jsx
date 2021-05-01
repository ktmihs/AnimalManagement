import React from 'react'
import {Link} from 'react-router-dom'
import Content from '../Components/Content'
import '../Components/Content.css'
import Search from '../Components/Search'

function SearchPage(){
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
        <Content>
            <h2 className='name'>'신촌세브란스' 검색 결과</h2>
            <Search/>
            <div className='bodyContainer'>
                <Link to='/HospitalPage'>
                    <div style={bodyHospital}>
                        <img style={imgStyle} src='/logo.jpg'/>
                        병원1<br/>
                        tel: 02-123-1004
                    </div>
                </Link>
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
        </Content>
      )
}

export default SearchPage