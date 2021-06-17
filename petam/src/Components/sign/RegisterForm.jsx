import React from 'react'
import '../../style.css'
import "./Register.css"
import "./sign.css"
import RegisterTitle from './RegisterTitle'
import RegisterFormContent from './RegisterFormContent'

function RegisterForm(){
    const articleStyle={
        maxWidth: '600px',
        padding:'20px 10%',
        margin:'10px'
    }
    return(
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
            <div class="container container fadeInDown">
                <div>
                    <article id="formContent" class="card-body mx-auto" style={articleStyle}>
                        <RegisterTitle/>        {/* 소셜 로그인 */}
                        <RegisterFormContent/>  {/* 일반 로그인 */}
                    </article>
                </div>
            </div> 
        </>
    )
}
export default RegisterForm