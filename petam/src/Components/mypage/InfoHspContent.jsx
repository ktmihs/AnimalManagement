import React,{useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router'

function InfoHspContent({user}){
    const [hospital,setHospital]=useState({
        tel:'',
        old_addr:'',
        new_addr:'',
        zip_code:'',
        name:'',
        company_number:'',
        password:''
    })
    const {tel,old_addr,new_addr,zip_code,name,company_number,password}=hospital 
    const [passwordConfirm,setPasswordConfirm]=useState('')
    const [id,setId]=useState()
    const res=useHistory()

    useEffect(() => {
        axios.get('/api/hospitals/read/company/'+user)
        .then(
            ctx=>{setHospital({
                tel:ctx.data.tel,
                old_addr:ctx.data.old_addr,
                new_addr:ctx.data.new_addr,
                zip_code:ctx.data.zip_code,
                company_number:ctx.data.company_number,
                name:ctx.data.name,
                password:ctx.data.password
            })
            setId(ctx.data._id)
            console.log(ctx,ctx.data)
            })
    }, [])

    const handleChange=(e)=>{
        const {name,value}=e.target
        name==='passwordConfirm'?       // 비밀번호 확인일 경우에만 따로 저장
        setPasswordConfirm(value)
        :
        setHospital({
            ...hospital,
            [name]: value
        })
        console.log(name,value)
    }
    const handleCheck=(e)=>{
        e.preventDefault();
        (tel==='' || old_addr==='' || new_addr==='' || zip_code==='' || password==='' || passwordConfirm==='')?    //미입력 사항 존재할 때
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
        axios.put("/api/hospitals/"+id,hospital)        // 기존 등록 병원
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
                <input style={inputDisabled} type="text" class='mt-2' name="user" value={user} disabled/>  
            </div>
            <div style={divstyle}>
                <input style={inputDisabled} type="text" class='mt-2' name="name" value={name} disabled/>
            </div>
            <div style={divstyle}>
                <input style={input} class='mt-2' name="tel" placeholder="tel" value={tel} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} class='mt-2' name="old_addr" placeholder="old_addr" value={old_addr} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} class='mt-2' name="new_addr" placeholder="new_addr" value={new_addr} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} class='mt-2' name="zip_code" placeholder="zip_code" value={zip_code} onChange={handleChange}/>
            </div>
            <div style={divstyle}>
                <input style={input} type="password" class='mt-2' name="password" placeholder="password" onChange={handleChange}/>
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

export default InfoHspContent