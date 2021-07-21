import React,{useState} from 'react'
import '../../style.css'
import "./Register.css"
import "./sign.css"
import RegisterFormFooter from './RegisterFormFooter'
/*
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth'; */
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory, useLocation } from 'react-router'

function HospitalRegisterFormContent(){
    const [time,setTime]=useState({
        hour:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        minute:[0,30]
    })

    const [hospital,setHospital]=useState({
        name:'',
        company_number:'',
        password:'',
        timeList:{
            openHour:1,
            openMinute:1,
            closeHour:1,
            closeMinute:1,
            lunchOpenHour:1,
            lunchOpenMinute:1,
            lunchCloseHour:1,
            lunchCloseMinute:1
        },
        form:'register'
    })
    const {name,company_number,password,timeList}=hospital           // 기존 병원 입력 데이터
    const {openHour,openMinute,closeHour,closeMinute,lunchOpenHour,lunchOpenMinute,lunchCloseHour,lunchCloseMinute}=timeList

    const [passwordConfirm,setPasswordConfirm]=useState('')

    const [newHospital,setNewHospital]=useState({
        tel:'',
        old_addr:'',
        new_addr:'',
        zip_code:'',
        name:'',
        company_number:'',
        password:'',
        timeList:{
            openHour:1,
            openMinute:1,
            closeHour:1,
            closeMinute:1,
            lunchOpenHour:1,
            lunchOpenMinute:1,
            lunchCloseHour:1,
            lunchCloseMinute:1
        },
    })
    const {tel,old_addr,new_addr,zip_code}=newHospital      // 새로운 병원 입력 데이터

    const handleChange=(e)=>{               // 입력이 들어올 때마다
        const {name,value}=e.target
        name==='passwordConfirm'?       // 비밀번호 확인일 경우에만 따로 저장
        setPasswordConfirm(value)
        :
        setHospital({                   // 그 외에는 hospital에 저장
            ...hospital,
            [name]: value
        })
        newHandleChange(e)
        console.log(name,value)
    }
    const newHandleChange=(e)=>{        // 새로운 병원일 경우 추가 데이터 작성 & 저장
        const {name,value}=e.target
        name==='passwordConfirm'?       // 비밀번호 확인일 경우에만 따로 저장
        setPasswordConfirm(value)
        :
        setNewHospital({
            ...newHospital,
            [name]:value
        })
    }
    const timeHandleChange=(e)=>{
        const {name,value}=e.target
        setNewHospital({
            ...newHospital,
            timeList:{
                ...timeList,
                [name]:value
            }
        }),
        setHospital({
            ...hospital,
            timeList:{
                ...timeList,
                [name]:value
            }
        })
    }
    const [id,setId]=useState()         // 병원 이름으로 검색하여 id 받아옴
    const [newClient,setNewClient]=useState(false)  // 기존 병원인지 새 병원인지 구분
    const [checkCom,setCheckCom]=useState(false)

    const findHospital=(e)=>{           // 기존 병원인지 확인하는 함수(찾기 버튼 클릭시 발생)
        console.log(e)
        axios.get('/api/hospitals/read/name/'+name)     // 병원 이름 검색해서 데이터 확인
        .then(
            ctx=>{
                ctx.data._id?                           // 병원 이름이 존재할 경우
                (
                console.log(ctx.data),
                setId(ctx.data._id),                    // 해당 병원 id 저장
                swal('','기존 등록 병원입니다.','success')
                )
                :
                swal('','등록되지 않은 병원입니다. 신규가입을 하시겠습니까?','warning')
                .then( setNewClient(true) )          // 새로운 병원임을 표시
            }
        ).catch( console.log(e) )
    }
    
    const checkCompany=(e)=>{           // 사업자 등록번호 중복 확인
        axios.get('/api/hospitals/read/company/'+company_number)     // 사업자 등록 번호 검색해서 데이터 확인
        .then(
            ctx=>{
                !ctx.data._id?                           // 등록되지 않은 번호일 경우(사용할 수 있는 경우)
                (
                console.log(ctx.data),
                swal('','사용 가능한 사업자 등록 번호입니다.','success')
                .then(
                    setCheckCom(true)
                )
                )
                :
                swal('','사용할 수 없는 번호입니다.','warning')
                .then( 
                    setHospital({
                        ...hospital,
                        company_number:''
                    }) ,
                    setCheckCom(false)
                )          // 새로운 병원임을 표시
            }
        ).catch( console.log(e) )
    }

    const handleClick=(e)=>{
        e.preventDefault();         // 화면 그대로 유지한 채 나머지 수행(리로딩 방지)
        !checkCom?                  // 사업자 등록 번호 중복 체크 여부(통과되었는지)
            swal('','사업자 등록번호 중복확인을 해주세요!','warning')
        :
            (name==='' || company_number==='' || password==='' || passwordConfirm==='')?    //미입력 사항 존재할 때
                swal('','모두 작성해주세요!','warning')
            :
                password !== passwordConfirm?       // 비밀번호와 비밀번호 확인이 일치하지 않을 때
                    swal('','비밀번호를 다시한번 확인해주세요!','warning')
                :                               
                    (                               // 모두 정상적으로 입력되었을 시,
                    handleSubmit(),
                    swal('','회원가입을 축하합니다!', 'success'),
                    res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                        pathname:'/login',
                    })
                    )
    }

    const res=useHistory()  // 페이지 이동
    const handleSubmit=()=>{
        newClient?                                                    
        axios.post("/api/hospitals",newHospital)        // 새로 등록하는 병원
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        :                                          
        axios.put("/api/hospitals/"+id,hospital)        // 기존 등록 병원
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    const selectBox={
        width:'97px',
        height:'35px',
        margin:'5px',
        border:'0',
        borderRadius:'5px',
        backgroundColor:'#b0cdff45',

    }
    return(
        <form onSubmit={handleClick}>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-user"></i> </span></div>
                <input name="name" value={name} onChange={handleChange} class="form-control" placeholder="hospital name"/>
                <span class="input-group-text" onClick={findHospital}>찾기</span>
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend"><span class="input-group-text"> <i class="fa fa-envelope"></i> </span></div>
                <input name="company_number" value={company_number} onChange={handleChange} class="form-control" placeholder="Company Registration Number"/>
                <span class="input-group-text" onClick={checkCompany}>중복확인</span>
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input name="password"  value={password} onChange={handleChange} class="form-control" placeholder="Create password" type="password" />
            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input name="passwordConfirm"  value={passwordConfirm} onChange={handleChange} class="form-control" placeholder="Repeat password" type="password"/>
            </div>

            {/* time select */}
            <h5>병원 운영 시간</h5>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                <select name='openHour' value={openHour} onChange={timeHandleChange} style={selectBox}>      
                    {
                        time.hour.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> open hour </option>
                </select>
                <h3>:</h3>
                <select name='openMinute' value={openMinute} onChange={timeHandleChange} style={selectBox}>      
                    {
                        time.minute.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> open minute </option>
                </select>
                </div>
                <h4>~</h4>
                <div class="input-group-append">
                <select name='closeHour' value={closeHour} onChange={timeHandleChange} style={selectBox}>      
                {
                        time.hour.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value='1' hidden> close hour </option>
                </select>
                <h3>:</h3>
                <select name='closeMinute' value={closeMinute} onChange={timeHandleChange} style={selectBox}>      
                {
                        time.minute.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> close minute </option>
                </select>
                </div>
            </div>
            <h5>병원 점심 시간</h5>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                <select name='lunchOpenHour' value={lunchOpenHour} onChange={timeHandleChange} style={selectBox}>      
                    {
                        time.hour.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> lunch open hour </option>
                </select>
                <h3>:</h3>
                <select name='lunchOpenMinute' value={lunchOpenMinute} onChange={timeHandleChange} style={selectBox}>      
                    {
                        time.minute.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> lunch open minute </option>
                </select>
                </div>
                <h4>~</h4>
                <div class="input-group-append">
                <select name='lunchCloseHour' value={lunchCloseHour} onChange={timeHandleChange} style={selectBox}>      
                {
                        time.hour.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> lunch close hour </option>
                </select>
                <h3>:</h3>
                <select name='lunchCloseMinute' value={lunchCloseMinute} onChange={timeHandleChange} style={selectBox}>      
                {
                        time.minute.map(item=>{
                            return(
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                    <option value="1" hidden> lunch close minute </option>
                </select>
                </div>
            </div>
            {
                newClient?
                <>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                        </div>
                        <input name="tel"  value={tel} onChange={newHandleChange} class="form-control" placeholder="전화 번호"/>
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-home"></i> </span>
                        </div>
                        <input name="old_addr"  value={old_addr} onChange={newHandleChange} class="form-control" placeholder="지번 주소" />
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-home"></i> </span>
                        </div>
                        <input name="new_addr"  value={new_addr} onChange={newHandleChange} class="form-control" placeholder="도로명 주소"/>
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-address-book"></i> </span>
                        </div>
                        <input name="zip_code"  value={zip_code} onChange={newHandleChange} class="form-control" placeholder="우편번호" />
                    </div>
                </>
                :
                null
            }
            
            
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" > Create Account  </button>
            </div>  
            <RegisterFormFooter/>
        </form>
    )
}
/* export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(RegisterFormContent);
 */
export default React.memo(HospitalRegisterFormContent)