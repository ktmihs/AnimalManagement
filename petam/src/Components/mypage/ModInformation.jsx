import React,{useState} from 'react'
import { useHistory, useLocation } from 'react-router'

import '../../style.css'
import "../sign/Register.css"
import "../sign/sign.css"
import InfoContent from './InfoContent'
import InfoHspContent from '../hsppage/InfoHspContent'
import InfoTitle from './InfoTitle'

// 정보 수정 페이지
function ModInformation({history,props}){
    const res=useHistory()
    const user=useLocation().user
    const isHospital=useLocation().isHospital

    const myPet=()=>{
        res.push({
            pathname:'/addPet/',
            email:user
        })
    }

    const articleStyle={
        maxWidth: '500px',
        padding:'20px 0',
        margin:'10px'
    }
    const margin={
        marginTop:'55px'
    }
    const pet={
        display:'inline-block',
        width:'15vw',
        maxWidth:'130px',
        height:'50px',
        backgroundColor:'#19447390',
        color:'white',
        fontSize:'17px',
        border:'0',
        borderRadius:'5px',
        margin:'10px',
    }
    const text={
        display:'inline-block'
    }
    const bottom={
        marginLeft:'130px'
    }
    return(
        <div style={margin}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
            <div class="container container fadeInDown">
                <div>
                    {isHospital?
                    // 병원 정보 수정 content
                    <article id="formContent" class="card-body mx-auto" style={articleStyle}>
                        <div>
                        <InfoTitle />
                        <InfoHspContent user={user}/>
                        </div>
                    </article>
                    :
                    // 개인 정보 수정 content
                    <article id="formContent" class="card-body mx-auto" style={articleStyle}>
                        <div>
                        <InfoTitle />
                        <InfoContent user={user}/>
                        </div>
                        <div style={bottom}>
                            <small style={text}>반려동물 등록하기 <h5 style={text}>👉</h5></small>
                            <button style={pet} onClick={myPet}>MY PET</button>
                        </div>
                    </article>
                    }
                </div>
            </div> 
        </div>
    )
}
export default ModInformation