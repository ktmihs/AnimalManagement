import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import Content from '../Components/Content';
import '../Components/Content.css';
import Search from '../Components/search/Search';
import ProductXscroll from '../Components/product/ProductXscroll';
import axios from 'axios';
import { BiPhone, BiLocationPlus } from "react-icons/bi"
import { RiTimeFill, RiTimeLine } from "react-icons/ri"
import { FaStar } from 'react-icons/fa';

// 병원 세부 정보 & 예약 및 후기 링크
function HospitalPage(props) {
  const { user, loghospital } = useSelector(({ user, hospital }) => ({
    user: user.user,
    loghospital: hospital.hospital,
  }));
  const [hospitalInfo, setHospitalInfo] = useState({
    //나중에 ''로 초기화 후, db에서 받아 set에 넣어주기
    id: '',
    name: '',
    img: '',
    addr: '',
    tel: '',
    time: '09:00 - 18:00',
    lunch: '',
    company_number: '',
    avg: '0', //평점
  });

  const [hospital, setHospital] = useState(props.match.params.name);

  useEffect(() => {
    axios
      .get('/api/hospitals/read/name/' + hospital)
      .then((ctx) => {
        console.log(ctx);
          const _avg = (ctx.data.score / ctx.data.count).toFixed(2);
          let openMinute, closeMinute, lunchOpenMinute, lunchCloseMinute;
          if (ctx.data.timeList.openMinute == 0) { openMinute = "00" }
          else {openMinute = ctx.data.timeList.openMinute; }
          if (ctx.data.timeList.closeMinute == 0) {
            closeMinute = '00';
          } else {
            closeMinute = ctx.data.timeList.closeMinute;
          }
          if (ctx.data.timeList.lunchOpenMinute == 0) {
            lunchOpenMinute = '00';
          } else {
            lunchOpenMinute = ctx.data.timeList.lunchOpenMinute;
          }
          if (ctx.data.timeList.lunchCloseMinute == 0) {
            lunchCloseMinute = '00';
          } else {
            lunchCloseMinute = ctx.data.timeList.lunchCloseMinute;
          }
        ctx.data.timeList
            ? 
                setHospitalInfo({
              id: ctx.data._id,
              name: ctx.data.name,
              addr: ctx.data.new_addr,
              tel: ctx.data.tel,
              img: ctx.data.image,
              _id: ctx.data._id,
              company_number: ctx.data.company_number,
              products: ctx.data.products,
              avg: _avg,
              time:
                ctx.data.timeList.openHour +
                ':' +
                openMinute +
                '  -  ' +
                ctx.data.timeList.closeHour +
                ':' +
               closeMinute,
              lunch:
                ctx.data.timeList.lunchOpenHour +
                ':' +
                lunchOpenMinute +
                '  -  ' +
                ctx.data.timeList.lunchCloseHour +
                ':' +
     lunchCloseMinute,
            })
          : setHospitalInfo({
              ...hospitalInfo,
              id: ctx.data._id,
              name: ctx.data.name,
              addr: ctx.data.new_addr,
              tel: ctx.data.tel,
              img: ctx.data.image,
              _id: ctx.data._id,
              products: ctx.data.products,
              avg: _avg,
            });
      }, console.log(hospitalInfo))
      .catch((err) => console.log(err));
  }, []);

  const hspId = useHistory(); // history.push로 연결된 링크에 보내주기

  const handleClick = () => {
    hspId.push({
      pathname: '/ReservationPage',
      id: hospitalInfo.id,
      name: hospital,
    });
  };

  const postClick = () => {
    hspId.push({
      pathname: '/hospitalpostlistpage/' + hospital,
      id: hospitalInfo.id,
      name: hospital,
    });
  };
  const topContent = {
    padding: '0 10%',
    display: 'flex',
    flexDirection: 'row',
  };
  const hospitalImg = {
    width: '190px',
    height: '190px',
    verticalAlign: 'top',
  };
  const buttons = {
    display: 'flex',
    width: '100%',
    border: '1px solid green',
    flexDirection: 'column',
    textAlign: 'center',
    // margin: '7%',
  };
  const topButton = {
    display: 'block',
    backgroundColor: '#5F8DDA',
    marginBottom: '5%',
    width: "40%",
    float: 'left',
  };
  const bottomButton = {
    display: 'block',

    width: '40%',
    backgroundColor: '#5F8DDA',
    float: 'right',
  };
  const bottomContent = {
    fontSize: '14px',
    textAlign: 'left',
      margin: '3% 10% 0 10%',
    overflow: 'auto',
      height: '220px',
      width: "80vw"
    // float: 'left',
  };
    const info = {
        // border: '1px solid green',
        marginBottom: '7px',
        fontSize : "large",
        
    }
    const detail = {
        // border: '1px solid green',
        // width: "calc(100% - 110px)",
        marginRight: '10px',
        
    }
    const w = {
        width: '150px',
        float: "left",
    }
    const margin = {
        marginRight: '20px',
    }
  return (
    <Content>
      <h2 className="name" value={hospital}>
        {hospital}
      </h2>
      <div className="bodyContainer ">
        <div className="">
                  <div className="contentBox ">
                      {/* <div className = "ContentBoxHospitalInfo"> */}
            {loghospital || !user || hospitalInfo.company_number === '' ? ( // 병원으로 로그인 했거나, 로그인을 안 했거나, 해당 병원이 등록 안 된 병원일 경우
              hospitalInfo.img && hospitalInfo.img !== '' ? (
                <img
                  style={hospitalImg}
                  src={`../${hospitalInfo.img.split('\\')[2]}`}
                  alt="hospitalImg"
                />
              ) : (
                <img style={hospitalImg} src={'../no_img.jpg'} />
              )
            ) : (
              <div style={topContent}>
                {hospitalInfo.img && hospitalInfo.img !== '' ? (
                  <img
                    style={hospitalImg}
                    src={`../${hospitalInfo.img.split('\\')[2]}`}
                    alt="hospitalImg"
                  />
                ) : (
                  <img style={hospitalImg} src={'../no_img.jpg'} />
                )}
              </div>
            )}
          </div>
          {/* <div className="contentBox b"> */}
                  
                      <div className = "ContentBoxHospitalInfo">
            <div style={bottomContent}>
              <div style={info}>
                <div style={w}>
                  <BiLocationPlus size="25" style={margin} />
                  {/* <span style={title}> 주소 </span>{' '} */}
                  주소
                </div>
                <span style={detail}>{hospitalInfo.addr}</span>
              </div>{' '}
              <div style={info}>
                <div style={w}>
                  <BiPhone size="25" style={margin} />
                  전화번호
                </div>
                <span style={detail}>{hospitalInfo.tel}</span>
              </div>
              <div style={info}>
                <div style={w}>
                  <RiTimeLine size="25" style={margin} />
                  운영 시간
                </div>
                <span style={detail}>{hospitalInfo.time}</span>
              </div>
              <div style={info}>
                <div style={w}>
                  <RiTimeFill size="25" style={margin} />
                  점심 시간
                </div>
                <span style={detail}>{hospitalInfo.lunch}</span>
              </div>
              <div style={info}>
                <div style={w}>
                  <FaStar size="25" style={margin} />
                  평점
                </div>
                <span style={detail}>{hospitalInfo.avg}</span>
              </div>
     
            </div>
          </div>

          <div className="contentBox">
            {loghospital || !user || hospitalInfo.company_number === '' ? ( // 병원으로 로그인 했거나, 로그인을 안 했거나, 해당 병원이 등록 안 된 병원일 경우
              <></>
            ) : (
              //   <div style={topContent}>
              <div>
                {/* <div style={buttons}> */}
                <button
                  style={topButton}
                  className="button"
                  onClick={handleClick}
                >
                  예약하기
                </button>
                <button
                  style={bottomButton}
                  className="button"
                  onClick={postClick}
                >
                  후기
                </button>
                {/* </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <ProductXscroll>{hospitalInfo.products}</ProductXscroll>
    </Content>
  );
}

export default HospitalPage;
