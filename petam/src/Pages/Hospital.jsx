import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Components/Content.css'

function Hospital({item}){
       
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
            <div style={bodyHospital}>
                {item.name}<br/>
                {item.old_addr}<br/>
                tel: {item.tel}
            </div>
    )
}
export default Hospital