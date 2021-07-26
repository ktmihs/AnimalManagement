import React from 'react'
import { useLocation } from 'react-router'
import '../../style.css'
import "./Register.css"
import "./sign.css"
import RegisterTitle from './RegisterTitle'
import RegisterFormContent from './RegisterFormContent'
import HospitalRegisterFormContent from './HospitalRegisterFormContent'

// 회원가입 폼
function RegisterForm(){
    const articleStyle={
        maxWidth: '600px',
        padding:'20px 10%',
        margin:'10px'
    }
    const margin={
        marginTop:'55px'
    }
    const category=useLocation().category
    
    return(
        <div style={margin}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
            <div class="container container fadeInDown">
                <div>
                    <article id="formContent" class="card-body mx-auto" style={articleStyle}>
                        <RegisterTitle category={category}/>        {/* title + 소셜 회원가입 */}
                        {
                            category==="병원"?
                            <HospitalRegisterFormContent category={category}/> 
                            :
                            <RegisterFormContent category={category}/>
                        }
                        
                    </article>
                </div>
            </div> 
        </div>
    )
}
export default RegisterForm