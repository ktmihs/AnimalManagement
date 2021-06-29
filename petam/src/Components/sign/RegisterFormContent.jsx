import React,{useState} from 'react'
import '../../style.css'
import "./Register.css"
import "./sign.css"
import RegisterFormFooter from './RegisterFormFooter'
/*
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth'; */
import axios from 'axios'
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router'


function RegisterFormContent(){
    const [authActions,setAuthActions]=useState({
        username:'',
        email:'',
        password:'',
        form:'register'
    })
    const {username,email,password}=authActions
    const [passwordConfirm,setPasswordConfirm]=useState('')
    const handleChange=(e)=>{
        const {name,value}=e.target
        name==='passwordConfirm'?       // 비밀번호 확인일 경우에만 따로 저장
        setPasswordConfirm(value)
        :
        setAuthActions({
            ...authActions,
            [name]: value
        })
        console.log(name,value)
    }
    const res=useHistory()

    const [check,setCheck]=useState(false)
    const checkEmail=(e)=>{           // 기존 병원인지 확인하는 함수(찾기 버튼 클릭시 발생)
        console.log(e)
        axios.get('/api/auth/email/'+email)     // 병원 이름 검색해서 데이터 확인
        .then(
            ctx=>{
                ctx.data.email?                           // 병원 이름이 존재할 경우
                swal('','이미 존재하는 이메일입니다. 다른 것을 사용해주세요.','warning') // 사용할 수 없게하기
                :
                swal('','사용할 수 있는 이메일입니다.','success').then(setCheck(true))
            }
        ).catch( console.log(e) )
    }
    const handleClick=(e)=>{
        e.preventDefault();

        if(!check){
            swal('','중복확인을 해주세요.','warning')
        }
        else{
        (username==='' || email==='' || password==='' || passwordConfirm==='')?    //미입력 사항 존재할 때
            swal('','모두 작성해주세요!','warning')
        :
        (
            password !== passwordConfirm?
                swal('','비밀번호를 다시한번 확인해주세요!','warning')
            :
            (
                handleSubmit(),
                swal('','회원가입을 축하합니다!', 'success'),
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:'/login',
                })
            )
        )
        }
    }
    
    const handleSubmit=()=>{
        axios.post("/api/auth",authActions)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <form onSubmit={handleClick}>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-envelope"></i> </span></div>
                <input name="email"  value={email} onChange={handleChange} class="form-control" placeholder="Email address" type="email"/>
                <span class="input-group-text" onClick={checkEmail}>중복확인</span>
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-user"></i> </span></div>
                <input name="username" value={username} onChange={handleChange} class="form-control" placeholder="Full name"/>
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
                <button type="submit" class="btn btn-primary btn-block" > Create Account  </button>
            </div>  
            <RegisterFormFooter/>
        </form>
    )
}
/* export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(RegisterFormContent);
 */
export default RegisterFormContent