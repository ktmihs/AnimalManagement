// 검색어에 맞는 병원 정보 보여주기(map으로)

import React from 'react'
import './hsppage.css'
import Item from './Item'

function reserveContent({hspId,info}){

    return(
        <>
            <table className="tables">
                <div>
                    <th className="th">예약 시간</th>
                    <th className="th">이름</th>
                    <th className="th">진단 종류</th>
                    <th className="th">내용</th>
                    <th className="th">확인</th>
                </div>
                <hr/>
                {
                    info.map(item=>{
                        return(
                            <Item key={item.id} hspId={hspId} item={item}/>
                        )
                    })
                }
            </table>
        </>
    )
}
export default reserveContent