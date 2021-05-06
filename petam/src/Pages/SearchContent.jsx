import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Content.css'

function SearchContent(){

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

    return(
        <Link to='/HospitalPage'>
            <div style={bodyHospital}>
                <img style={imgStyle} src='/logo.jpg'/>
                병원1<br/>
                tel: 02-123-1004
            </div>
        </Link>
    )
}
export default SearchContent