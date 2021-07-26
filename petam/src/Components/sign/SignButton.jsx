import '../../style.css';
import React from "react";
import { Link } from 'react-router-dom';

function SignButton(){

    return(
        <>
            <Link to='/login'>
                <button className=" btn-light btn col-5 m-auto text-2140C text-center p-2 m-1">
                    Login
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