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
    const [hospital,setHospital]=useState({
        name:'',
        company_number:'',
        password:'',
        form:'register'
    })
    const {name,company_number,password}=hospital           // 기존 병원 입력 데이터
    const [passwordConfirm,setPasswordConfirm]=useState('')

    const [newHospital,setNewHospital]=useState({
        tel:'',
        old_addr:'',
        new_addr:'',
        zip_code:'',
        name:'',
        company_number:'',
        password:''
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
        setNewHospital({
            ...newHospital,
            [name]:value
        })
    }
    const [id,setId]=useState()         // 병원 이름으로 검색하여 id 받아옴
    const [newClient,setNewClient]=useState(false)  // 기존 병원인지 새 병원인지 구분

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
    
    const handleClick=(e)=>{
        e.preventDefault();         // 화면 그대로 유지한 채 나머지 수행(리로딩 방지)

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
            {

            }
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
                <></>
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