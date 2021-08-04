import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
// background: white;
/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const mypage = {
  marginLeft: '20px'
}

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout, onHLogout,onMy, hospital }) => {
  // console.log(hospital)
  // console.log("user : ", user)
  return (
    <>
      <nav class=" shadow-sm navbar navbar-expand navbar-light bg-primary topbar  static-top shadow">
        <div className=" col-12">
          <HeaderBlock>
            <Wrapper>
              <Link to="/main">
                <h3
                  class="main-button"
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
                </h3>
              </Link>

              {user && (
                <div className="right">
                  <UserInfo>{user.username}</UserInfo>
                  <Button onClick={onLogout}>로그아웃</Button>
                  <Button style={mypage}to="/mypage">My</Button>
                </div>
              )}
              {!user && !hospital && (
                <div className="right b">
                  <Button to="/login">개인 로그인</Button>
                  <Button to="/hlogin">병원 로그인</Button>
                </div>
              )}
            </Wrapper>
          </HeaderBlock>
          <Spacer />
        </div>
      </nav>
    </>
  );
};

export default Header;
