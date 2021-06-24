import React from 'react'
import "./sign.css"
import LoginTitle from './LoginTitle'
import LoginFormContent from './LoginFormContent'
import LoginFormFooter from './LoginFormFooter'

function LoginForm(){

    return(
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <LoginTitle/>
                <LoginFormContent/>
                <LoginFormFooter/>
            </div>
        </div>
    )
}
export default LoginForm