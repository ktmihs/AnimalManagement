import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Components/Content.css'

function SearchContent(){
    const [info,setInfo]=useState({
        name:'병원',
        img:'/sev.jpg',
        ph:'02-123-1004'
    })
    const bodyHospital={
        display:'inline-block',
        border:'5px solid #98B6E4',
        textAlign:'center',
        height:'190px',
        width:'160px',
        margin:'20px 20px 0 20px'
    }
    const imgStyle={
        width:'150px',
        height:'130px',
        verticalAlign:'top'
    }

    return(
        <Link to='/HospitalPage'>
            <div style={bodyHospital}>
                <img style={imgStyle} src={info.img}/>
                {info.name}<br/>
                tel: {info.ph}
            </div>
        </Link>
    )
}
export default SearchContent