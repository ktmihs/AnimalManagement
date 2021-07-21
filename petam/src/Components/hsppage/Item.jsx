//data item 하나하나 보여주기
 
import React,{useState} from 'react'
import './hsppage.css'
import axios from 'axios'

function Item({hspId,item}){

    const handleSubmit=()=>{
        swal('','진료완료!','success')
        axios.delete('/api/reservations/'+item._id) 
        axios.delete('/api/hospitals/'+hspId+'/'+item.dateDay)
    }
    const handleClick=()=>{
        console.log(hspId)
        swal({
            text:'진료완료 처리를 하시겠습니까?',
            icon: "warning",
            buttons: ['cancel',true],
            dangerMode: true,
            closeOnClickOutside:false,
            confirm:{
                text:'확인',
                value:true
            }
        })
        .then((willCheck)=>{
            if(willCheck) handleSubmit()
        })
    }
    return(
        <div>
            <td className="td">{item.dateDay}</td>
            <td className="td">{item.pet}</td>
            <td className="td">{item.type}</td>
            <td className="td">{item.memo}</td>
            <td className="td"><button className="reserve-check" onClick={handleClick}>진료완료</button></td>
            <hr/>
        </div>
    )
}
export default Item