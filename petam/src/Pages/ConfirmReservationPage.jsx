import React from 'react'
import { useState,useEffect } from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'
import axios from 'axios'
import swal from 'sweetalert'

function ConfirmReservationPage(props){
    const [id,setId]=useState(props.match.params._id)
    const [reservation,setReservation]=useState({
        no:0,
        name:'',
        type:'',
        memo:'',
        dateDay:''
    })
    const {no,name,type,memo,dateDay}=reservation
    useEffect(() => {
        const findReserve=async()=>{
            axios.get('/api/reservations/read/'+id) 
            .then(
                ctx=>setReservation({
                    no:ctx.data.no,
                    name:ctx.data.hospitalName,
                    type:ctx.data.type,
                    memo:ctx.data.memo,
                    dateDay:ctx.data.dateDay
                }),
                console.log(id),
            )
            .catch(
                err=>console.log(err)
                )
        }
        findReserve()
    }, [])

    const cancelReserve=async()=>{
        axios.delete('/api/reservations/'+id) 
        swal({
            text:'예약이 취소되었습니다.',
            icon:'success',
            //closeOnClickOutside:false,
            confirm:{
                text:'확인',
                value:true
            }
        }).then(
            props.history.push({
                pathname:'/reservation',
            })
        )
    }

    const handleClick=()=>{
        console.log(reservation.name,reservation.type,reservation.dateDay)
        swal({
            title:'예약을 취소하시겠습니까?',
            text:`예약병원: ${reservation.name}
            종류: ${reservation.type}
            예약날짜: ${reservation.dateDay}`,
            icon: "warning",
            buttons: ['cancel',true],
            dangerMode: true,
            closeOnClickOutside:false,
            confirm:{
                text:'확인',
                value:true
            }
        }).then((willDelete) => {
            if (willDelete) { cancelReserve() } 
        })
    }

    const contentBox={
        border:'none',
        height:'auto'
    }
    const buttons={
        textAlign:'center'
    }
    const leftButton={
        display:'inline-block',
        backgroundColor:'red'
    }
    const rightButton={
        display:'inline-block',
        backgroundColor:'#5F8DDA'
    }
    return(
        <Content>
            <h2 className='name'>예약 정보 확인</h2>
            <div className='bodyContainer'>
                <div className='contentBox' style={contentBox}>
                    <div>
                        예약 번호 : {no}<br/>
                        예약 병원 : {name}<br/>
                        예약자 : 보리<br/>
                        예약 일정 : {dateDay}<br/>
                        예약 목적 : {type}<br/>
                        기타 내용 : {memo}
                    </div>
                </div>
                <div className='contentBox' style={contentBox}>
                    <div>
                        ※주의사항※<br/><br/>
                        당일 예약 불가합니다.<br/>
                        예약 취소는 1일 전까지 가능합니다.<br/>
                        예약 관련 자세한 사항은 병원으로 문의 바랍니다.
                    </div>
                </div>
            </div>
            <div style={buttons}>
                <button style={leftButton} className='button' onClick={handleClick}>예약 취소</button>
                <button style={rightButton} className='button' onClick={()=>props.history.push('/reservation')}>확인</button>  
            </div>
        </Content>
    )
}

export default ConfirmReservationPage