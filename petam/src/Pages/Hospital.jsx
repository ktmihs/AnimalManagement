import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Components/Content.css'

function Hospital({item}){
       
    const bodyHospital={
        display:'inline-block',
        border:'4px dotted #98B6E4',
        textAlign:'center',
        height:'190px',
        width:'170px',
        margin:'20px 20px 0 20px',
        padding:'5px 0',
        fontSize:'14px'
    }
    const imgStyle={
        width:'150px',
        height:'130px',
        verticalAlign:'top'
    }

    const name=item.name
    const id=item._id
    console.log(id)

    return(
        <a href={`/hospital/${name}`}>
            <div style={bodyHospital}>
                <img style={imgStyle} src={'Sev.jpg'}/>
                {item.name}<br/>
                tel: {item.tel}
            </div>
        </a>
    )
}
export default Hospital