import React,{useState,useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Content from '../Components/Content'
import '../Components/Content.css'
import SearchContent from '../Components/search/SearchContent'
import axios from 'axios'
import Pagination from '../Components/pagination/Pagination'

// 내 예약 내역 페이지
function MyReservationPage(){
    const [info,setInfo]=useState([])   //병원 정보
    const [loading,setLoading]=useState(false)    //로딩 중 표시
    const [currentPage,setCurrentPage]=useState(1)  //현재 페이지
    const [postsPerPage]=useState(4)                //한 페이지에서 보여줄 info 수

    const linkName='reservation'         // 링크이름
    //const [hostId,setHostId]=useState('1410ahs@naver.com')
    
    //if (useLocation()) setHostId(useLocation().hostId)

    const indexOfLastPost=currentPage*postsPerPage  //해당 페이지에서 마지막 info의 index
    const indexOfFirstPost=indexOfLastPost-postsPerPage //  ...      첫번째 ...
    const currentPosts=info.slice(indexOfFirstPost, indexOfLastPost)    //각 페이지에서 보여질 info 배열
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const fetchPosts=async()=>{
            setLoading(true)
            axios.get('api/reservations/filter/'+'1410ahs@naver.com')   // 현재 로그인 된 아이디로 예약된 내역 모두 불러오기
            .then(
                res=>setInfo(res.data),
                setLoading(false)
            )
            .catch(err=>console.log(err))
        }
        fetchPosts()
    }, [])
    
    const totalCount={
        textAlign:'right'
    }
    return(
        <Content>
            <h2 className='name'>내 예약 내역</h2>
            <div className='bodyContainer'>
                <div style={totalCount}>총 {info.length}건</div>
                <hr/>
                <div >
                    <SearchContent linkName={linkName} info={currentPosts} loading={loading}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={info.length} paginate={paginate}/>
                </div>
                <hr/>
            </div>
        </Content>
    )
}

export default MyReservationPage