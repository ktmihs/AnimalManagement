import React,{useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router'

function InfoContent({user}){
    const [information,setInformation]=useState({
            email:'',
            username:'',
            password:'',
            form:'login'
        })
    const [passwordConfirm,setPasswordConfirm]=useState('')
    const {email,username,password}=information

    const res=useHistory()

    useEffect(() => {
        axios.get('/api/auth/email/'+user)
        .then(
            ctx=>{setInformation({
                ...information,
                email:ctx.data.email
            })
            console.log(ctx)
            })
    }, [])

    const handleChange=(e)=>{
        const {name,value}=e.target
        name==='passwordConfirm'?       // 비밀번호 확인일 경우에만 따로 저장
        setPasswordConfirm(value)
        :
        setInformation({
            ...information,
            [name]: value
        })
        console.log(name,value)
    }
    const handleCheck=(e)=>{
        e.preventDefault();
        (username==='' || password==='' || passwordConfirm==='')?    //미입력 사항 존재할 때
            swal('','모두 작성해주세요!','warning')
        :
        (
            password !== passwordConfirm?
                swal('','비밀번호와 비밀번호 확인이 일치하지 않습니다!','warning')
            :
            (
                handleSubmit(),
                swal('','수정된 정보로 저장됩니다!', 'success'),
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:'/info',
                })
            )
        )
    }
    const handleSubmit=()=>{
        axios.put("/api/auth/"+email,information)        // 기존 등록 병원
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const divstyle={
        display:'inline-block',
        textAlign:'center'
    }
    const input={
        height:'50px',
        width:'40vw',
        maxWidth:'350px',
        borderRadius:'25px',
        border:'3px solid #55569960',
        textAlign:'center',
        backgroundColor:'#f7f7f7'
    }
    const inputDisabled={
        height:'50px',
        width:'40vw',
        maxWidth:'350px',
        borderRadius:'25px',
        backgroundColor:'#88888840',
        color:'gray'
    }
    const modifyBtn={
        width:'150px',
        height:'50px',
        padding:'0',
        color:'white',
        textAlign:'center',
        borderRadius:'25px',
        backgroundColor:'#3547aadd',
        boxShadow:'0px 0px 0px 0px'
    }

    return(
        <form onSubmit={handleCheck}>
            <div style={divstyle}>
                <input style={inputDisabled} type="text" class='mt-2' name="email" placeholder="email" value={email} disabled/>
            </div>
            <div style={divstyle}>
                <input style={input} class='mt-2' name="username" placeholder="username" value={username} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} type="password" class='mt-2' name="password" placeholder="password" value={password} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} type="password" class='mt-2' name="passwordConfirm" placeholder="confirm password" value={passwordConfirm} onChange={handleChange}/>
            </div>
            <div>
                <button style={modifyBtn} type="submit" class="mt-4">수정하기</button>
            </div>
        </form>
    )
}

export default InfoContent