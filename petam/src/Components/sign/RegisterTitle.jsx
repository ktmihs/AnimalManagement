import React from 'react'
import '../../style.css'
import "./Register.css"
import "./sign.css"

function RegisterTitle(){
    return(
        <>
            <h3 class="card-title mt-2 mb-4 text-center">Sign Up</h3>
            <div class="form-group input-group">
                <a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login to Twitter</a>
                <a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login to facebook</a>
            </div>
            <p class="divider-text"><span class="bg-white">OR</span></p>
        </>
    )
}
export default RegisterTitle