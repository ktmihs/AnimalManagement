import React from 'react'
import Content from '../Components/Content'
import '../Components/Content.css'

function HospitalPage({location,history}){
    const search={
        display:'inline-block',
        border:'1px solid #bbbcbc',
        borderRadius:'5px',
        width:'40%',
        height:'35px'
    }
    const searchButton={
        backgroundColor:'#dddddd',
        marginLeft:'10px',
        width:'80px'
    }
    const topContent={
        width:'100%',
        padding:'0 7%',
        display:'flex',
        flexDirection:'row'
    }
    const hospitalImg={
        width:'120px',
        height:'150px',
        verticalAlign:'top'

    }
    const buttons={
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        margin:'7%'
    }
    const topButton={
        display:'block',
        backgroundColor:'#5F8DDA',
        marginBottom:'5%'
    }
    const bottomButton={
        display:'block',
        backgroundColor:'#5F8DDA'
    }
    const bottomContent={
        fontSize:'14px',
        textAlign:'left',
        margin:'10%'
    }
    return(
        <Content>
            <h2 className='name'>신촌세브란스</h2>
            <div className='headerContainer'>
                <input style={search}/>
                <button className="button" style={searchButton}>검색</button>
            </div>
            <div className='bodyContainer'>
                <div className="contentBox">
                    <div style={topContent}>
                        <img style={hospitalImg} src="/logo2.jpg" alt="petAm"/>
                        <div style={buttons}>
                            <button style={topButton} className='button' onClick={()=>history.push('/ReservationPage')}>예약하기</button>
                            <button style={bottomButton} className='button'>후기</button>
                        </div>
                    </div>
                    <div style={bottomContent}>
                        병원명: 신촌 세브란스 병원<br/>
                        병원주소: 서울 서대문구 연세로 50-1<br/>
                        전화번호: 02-1599-1004<br/>
                        운영시간: 09:00-18:00<br/>
                        평점: 4.7
                    </div>
                </div>
                <div className="contentBox"></div>
            </div>
        </Content>
    )
}
export default HospitalPage