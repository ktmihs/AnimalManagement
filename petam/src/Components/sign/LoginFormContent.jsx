import React,{useState} from 'react'
import "./sign.css"
/* import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from '../Pages/Auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
 import * as authActions from '../../redux/modules/auth';
*/
function LoginFormContent(){
    const [authActions,setAuthActions]=useState({
            email:'',
            password:'',
            form:'login'
        })
    const {email,password}=authActions
    const handleChange=(e)=>{
        const {name,value}=e.target
        setAuthActions({
            ...authActions,
            [name]: value
        })
    }
    return(
        <form>
            <input type="text" id="login" class="mt-2" name="email" placeholder="email" value={email} onChange={handleChange}/>
            <input type="text" id="password" class="mt-2" name="password" placeholder="password" value={password} onChange={handleChange}/>
            <input type="submit" class="mt-4" value="Log In"/>
        </form>
    )
}
/* 
export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(LoginFormContent);
 */
export default LoginFormContent