import React from 'react'
import axios from 'axios'

const PetInfo = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, item } = props

    const handleSubmit=()=>{
        axios.delete('/api/auth/pet/'+item.parent+'/'+item.name)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        axios.delete('/api/pets/'+item.parent+'/'+item.name)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        close
    }
    const deletePet=()=>{
        swal({
            text:`등록된 ${item.name} 정보를 삭제하시겠습니까?`,
            icon: "warning",
            buttons: ['cancel',true],
            dangerMode: true,
            closeOnClickOutside:false,
            confirm:{
                text:'확인',
                value:true
            }
        })
        .then((willDelete)=>{
            if(willDelete) handleSubmit()
        })
    }
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { 
            open ? 
            (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        <h6>이름 : {item.name}<br/></h6>
                        <h6>성별 : {item.gender}<br/></h6>
                        <h6>생년월일 : {item.age}<br/></h6>

                    </main>
                    <footer>
                        <button className="close" onClick={deletePet}> 삭제 </button>
                    </footer>
                </section>
            ) 
            : 
            null 
            }
        </div>
    )
}
export default PetInfo