import React,{useState} from 'react'
import '../../style.css'
import "./Register.css"
import "./sign.css"
import RegisterFormFooter from './RegisterFormFooter'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import axios from 'axios'

function RegisterFormContent(){
    const [authActions,setAuthActions]=useState({
        username:'',
        email:'',
        password:'',
        passwordConfirm:'',
        form:'register'
    })
    const {username,email,password,passwordConfirm}=authActions
    const handleChange=(e)=>{
        const {name,value}=e.target
        setAuthActions({
            ...authActions,
            [name]: value
        })
        console.log(name,value)
    }
    const handleSubmit=()=>{
        axios.post("/api/auth",authActions)
        .then((response) => {
            console.log(response)
            alert(authActions.username+authActions.email+authActions.password)
          })
          .catch((error) => {
            console.log(error)
          })
    }
    return(
        <form>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-user"></i> </span></div>
                <input name="username" value={username} onChange={handleChange} class="form-control" placeholder="Full name"/>
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-envelope"></i> </span></div>
                <input name="email"  value={email} onChange={handleChange} class="form-control" placeholder="Email address" type="email"/>
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input name="password"  value={password} onChange={handleChange} class="form-control" placeholder="Create password" type="password" />
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input name="passwordConfirm"  value={passwordConfirm} onChange={handleChange} class="form-control" placeholder="Repeat password" type="password"/>
            </div>                                     
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" onSubmit={handleSubmit}> Create Account  </button>
            </div>  
            <RegisterFormFooter/>
        </form>
    )
}
export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(RegisterFormContent);
//export default RegisterFormContent