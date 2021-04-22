import React from 'react'
import Components from '../Components/Components'
import '../Components/Content.css'

function HospitalPage({location,history}){
    const logo={
        display:'inline-block',
        marginRight:'20px',
        height:'40px',
        verticalAlign:'top'     //이미지 하단 여백 없애기
    }
    const search={
        display:'inline-block',
        border:'1px solid #bbbcbc',
        borderRadius:'5px',
        width:'40%',
        height:'35px'
    }
    const contents={
        textAlign:'center',
        marginTop:'30px'
    }
    const leftContent={
        display:'inline-block',
        padding:'20px 0px 0px 10px',
        marginRight:'3%',
        height:'400px',
        width:'40%',
        border:'1px dotted #bbbcbc',
        //borderRight:'3px solid #BBBCBC',
        overflow:'hidden',
        wordWrap:'break-word',
        lineHeight:'30px'
    }
    const leftTopContent={
    }
    const leftBottomContent={
        fontSize:'14px',
        textAlign:'left',
        paddingLeft:'10%'
    }
    const hospitalImg={
        display:'inline-block'
    }
    const buttons={
        display:'inline-block',
        textAlign:'center',
        margin:'0'
    }
    const topButton={
        display:'block',
        backgroundColor:'#5F8DDA'
    }
    const bottomButton={
        display:'block',
        backgroundColor:'#5F8DDA'
    }
    const rightContent={
        display:'inline-block',
        padding:'20px 10px 0px 0px',
        marginLeft:'3%',
        height:'400px',
        width:'40%',
        border:'1px dotted #bbbcbc',
        overflow:'hidden',
        wordWrap:'break-word',
        lineHeight:'30px',
        //textAlign:'left'
    }


    return(
        <Components>
            <h2 className='name'>신촌세브란스</h2>
            <div className='headerContainer'>
                <img style={logo} src="/logo2.jpg" alt="petAm"/>
                <input style={search}/>
                    {/*search 창*/}
            </div>
            <div className='bodyContainer'>
                <div style={contents}>
                    <div style={leftContent}>
                        <div style={leftTopContent}>
                            <img style={hospitalImg} src="/logo2.jpg" alt="petAm"/>
                            <div style={buttons}>
                                <button style={topButton} className='button' onClick={()=>history.push('/ReservationPage')}>예약하기</button>
                                <button style={bottomButton} className='button'>후기</button>
                            </div>
                        </div>
                        <div style={leftBottomContent}>
                            병원명: 신촌 세브란스 병원<br/>
                            병원주소: 서울 서대문구 연세로 50-1<br/>
                            전화번호: 02-1599-1004<br/>
                            운영시간: 09:00-18:00<br/>
                            평점: 4.7
                        </div>
                    </div>
                    <div style={rightContent}>
                        <div>
                            제품 리스트
                        </div>
                    </div>
                </div>
            </div>
        </Components>
    )
}
export default HospitalPage