import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router'
import Content from '../Content'
import '../../style.css'
import "../sign/Register.css"
import "../sign/sign.css"

// 마이페이지 첫화면
function Information(){
    const res=useHistory()
    const [isHospital,setIsHospital]=useState(false) // 병원인지 개인인지 여부 확인
    const [hospital,setHospital]=useState('456456456')   // 현재 로그인 된 사업자번호로 접근
    const [email,setEmail]=useState('1410ahs@naver.com')    // 현재 로그인 된 이메일로 접근
    
    useEffect(() => {
        // 로그인 된 정보에 따라 병원인지 개인인지 구분하기
        // isHospital true or false 로 변경하기
        // 에 따라 setHospital or setEmail 해주기
    }, [])

    const handleClick=(e)=>{
        console.log(e)
        {
            isHospital? 
            (
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:`/modify`,
                    user:hospital,
                    isHospital:isHospital
                })
            )
            : 
            (
                res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
                    pathname:`/modify`,
                    user:email,
                    isHospital:isHospital
                })
            )
        }
    }
    const myReservation=()=>{
        res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
            pathname:`/reservation`,
            hostId:'ktmihs' // 본인 아이디
        })
    }
    const hspReservation=()=>{
        res.push({      //전부 작성되면 다음 페이지로 이동 & 정보 보내기
            pathname:`/hspReservation`,
            hostId:'ktmihs' // 본인 아이디
        })
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
            {isHospital?
            <div style={buttons}>
                <button className='regbtn' style={leftButton} onClick={handleClick}>
                    <h4>병원 정보 수정하기</h4><br/>
                </button> 
                <button className='regbtn' style={leftButton} onClick={hspReservation}>
                    <h4>병원 예약 내역 확인하기</h4><br/>
                </button> 
            </div>
            :
            <div style={buttons}>
                <button className='regbtn' style={leftButton} onClick={handleClick}>
                    <h4>정보 수정하기</h4><br/>
                    <h4>반려동물 등록하기</h4>
                </button> 
                <button className='regbtn' style={rightButton} onClick={myReservation}>
                    <h4>내 예약 내역 확인하기</h4><br/>
                </button>
            </div>
            }
        </Content>
    )
}
export default Information