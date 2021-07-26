import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import "../../style.css";
import "../button/Button.css";
/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  // border:1px solid red;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          {/* <Link to="/">REACTERS</Link> */}
                <Link to="/main">
            <h3
              class="main-button  mb-lg-2 mb-3"
              // className="b bg-primary m-auto text-2140C text-center p-3 "
            >
              <span className="text-pet h4">
                <b>pet</b>
              </span>
              <span className="text-white">
                <b>A</b>
              </span>
              <span className="text-2140C h4">
                <b>m</b>
              </span>

              {/* <img src={imgUser} className="w-25 h-25"></img> */}
            </h3>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
