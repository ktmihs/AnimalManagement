import '../../style.css';
import React from "react";
import { Link } from 'react-router-dom';

// 로그인, 회원가입 버튼
function SignButton(){
    return(
        <>
            <Link to='/login'>
                <button className=" btn-light btn col-5 m-auto text-2140C text-center p-2 m-1">
                    Sign In
                </button>
            </Link>
            <Link to='/register'>
                <button className=" btn-secondary btn col-5 m-auto text-white text-center float-right p-2 m-1">
                    Sign Up
                </button>
            </Link>
        </>
    )
}
export default SignButton