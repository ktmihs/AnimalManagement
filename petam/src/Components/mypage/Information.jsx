import React from 'react'
import { useHistory, useLocation } from 'react-router'

import '../../style.css'
import "../sign/Register.css"
import "../sign/sign.css"

function Information(){
    const articleStyle={
        maxWidth: '600px',
        padding:'20px 10%',
        margin:'10px'
    }
    const margin={
        marginTop:'55px'
    }
    
    return(
        <div style={margin}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
            <div class="container container fadeInDown">
                <div>
                    <article id="formContent" class="card-body mx-auto" style={articleStyle}>
                        회원 정보 수정
                        .......
                        <button onClick={"/pet"}>동물 등록</button>
                    </article>
                </div>
            </div> 
        </div>
    )
}
export default Information