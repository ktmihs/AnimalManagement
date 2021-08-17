import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'
import swal from 'sweetalert';
import { useHistory } from 'react-router'
import "./mypage.css"

// 개인 회원의 개인정보 수정 페이지
function InfoContent(){
    const { user, hospital } = useSelector(({ user, hospital }) => ({
        user: user.user,
        hospital: hospital.hospital,
    }))
    const main=useHistory()
    if(!user) return main.push('/')
    const [information,setInformation]=useState({
            email:user.username,
            username:'',
            password:''
        })
    const [passwordConfirm,setPasswordConfirm]=useState('')
    const {email,username,password}=information

    const res=useHistory()

    useEffect(() => {
        axios.get('/api/auth/user/'+user._id)
        .then(
            ctx=>{setInformation({
                ...information,
                email:ctx.data.email,
                username:ctx.data.username
            })
            console.log(ctx)
            })
    }, [user])

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
                    pathname:'/',
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

    return(
        <form onSubmit={handleCheck}>
            <div className='divstyle'>
                <input className="inputDisabled mt-3" name="email" placeholder="email" value={email} disabled/>
            </div>
            <div className='divstyle'>
                <input className="input mt-3" name="username" value={username} onChange={handleChange}/>
            </div>
            <div className='divstyle'>
                <input className="input mt-3" type="password" name="password" placeholder="password" value={password} onChange={handleChange}/>
            </div>
            <div className='divstyle'>
                <input className="input mt-3" type="password" name="passwordConfirm" placeholder="confirm password" value={passwordConfirm} onChange={handleChange}/>
            </div>
            <div>
                <button className="modifyBtn mt-4 mb-3" type="submit">수정하기</button>
            </div>
        </form>
    )
}

export default InfoContent