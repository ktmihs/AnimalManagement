import React from 'react'
import {Link} from 'react-router-dom'

function Title({title}){
    return(
        <>
            <img className="logo" src="/hospital.png" alt='none'/>
            <Link to='/hospital'><div className="contentName">{title}</div></Link> 
        </>
    )
}
export default Title