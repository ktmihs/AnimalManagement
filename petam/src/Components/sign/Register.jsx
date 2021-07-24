import React from 'react'
import { useHistory } from 'react-router'
import Content from '../Content'
import '../../style.css'
import "./Register.css"
import "./sign.css"

// 회원 가입(병원과 일반 구분해서 회원가입)
function Register(){
    const res=useHistory()

    const handleClick=(e)=>{
        console.log(e)
        {
            e.target.id==="hospital"? 
            (
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:`/register/${e.target.id}`,
                    category:'병원'
                })
            )
            : 
            (
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:`/register/${e.target.id}`,
                    category:'일반'
                })
            )
        }
    }
    const buttons={
        textAlign:'center',
        height:'100%',
        margin:'10vh 5vw'
    }
    const leftButton={
        backgroundColor:'rgb(209, 225, 245)',
        color:'#333333'
    }
    const rightButton={
        backgroundColor:'#5F8DDA',
    }

    return(
        <Content>    
            <div style={buttons}>
                <button className='regbtn' style={leftButton} id="common" onClick={handleClick}>
                    <h4>일반 회원가입</h4><br/>
                    <h6>일반 회원가입 하기</h6>
                </button> 
                <button className='regbtn' style={rightButton} id="hospital" onClick={handleClick}>
                    <h4>병원 회원가입</h4><br/>
                    <h6>병원 회원가입 하기</h6></button>
            </div>
        </Content>
    )
}
export default Register

//https://bootsnipp.com/snippets/z8699