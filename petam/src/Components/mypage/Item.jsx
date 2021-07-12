//data item 하나하나 보여주기
 
import React,{useState} from 'react'
import PetInfo from './PetInfo'

import './mypage.css'

function Item({item}){

    const [ modalOpen, setModalOpen ] = useState(false);
    let header=`${item.name}\'s info`
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    return(
        <React.Fragment>
            <button className="petDiv" onClick={openModal}>
                <h6>{item.name}</h6>
            </button>
            <PetInfo open={modalOpen} close={closeModal} header={header} item={item} />
        </React.Fragment>
    )
}
export default Item