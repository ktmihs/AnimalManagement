import React from 'react'
import {Link} from 'react-router-dom'
import Background from '../Components/Background'

function ErrorPage(){
    const error={
        background:'white',
        borderRadius:'20px',
        textAlign:'center',
        color:'red',
        fontSize:'30px',
        margin:'20vh 20%',
        padding:'15vh 5vw',
        width:'50%'
    }
    const home={
        textAlign:'center',
        textDecorationLine:'none',
        color:'#395382'
    }
    return(
        <Background>
            <div style={error}>
                <strong>PAGE ERROR!!</strong>
            </div>
            <Link to='/'>
                <h3 style={home}>link to home</h3>
            </Link>
        </Background>
    )
}
export default ErrorPage