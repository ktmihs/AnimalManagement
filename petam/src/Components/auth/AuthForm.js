import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import '../../style.css';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    // color:red;
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[5]};
  // padding-bottom: 0.5rem;
  // padding: 0.7rem;
  padding: 13px 20px;
  outline: none;
  border-radius: 20px;
  // border-radius: 0.5rem;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '개인 회원가입',
  hregister: '병원 회원가입',
  hlogin: '병원 로그인'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
const title = {
  textAlign: 'center',
  marginBottom:'2rem',
};

const link = {
  marginRight: '1.5rem',
}

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3 className="mt-lg-2" style={title}>
        {text}
      </h3>
      <form onSubmit={onSubmit}>
        {/* {type === 'hlogin' && (
          <>
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="병원명"
              onChange={onChange}
              value={form.name}
            />
          </>
        )} */}
        {type !== 'hregister' ? (
          <>
            <StyledInput
              autoComplete="username"
              name="username"
              placeholder="아이디"
              onChange={onChange}
              value={form.username}
            />
            <StyledInput
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={onChange}
              value={form.password}
            />
          </>
        ) : (
          <>
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="병원 이름"
              onChange={onChange}
              value={form.name}
            />
            <StyledInput
              // autoComplete="openTime"
              name="companyNumber"
              placeholder="사업자 번호"
              // type="password"
              onChange={onChange}
              value={form.companyNumber}
            />
            <StyledInput
              autoComplete="username"
              name="username"
              placeholder="병원 아이디"
              onChange={onChange}
              value={form.username}
            />
            {/* <StyledInput
              // autoComplete="company_number"
              name="company_number"
              placeholder="사업자번호"
              onChange={onChange}
              value={form.company_number}
            /> */}
            <StyledInput
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={onChange}
              value={form.password}
            />
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <StyledInput
              // autoComplete="openTime"
              name="tel"
              placeholder="도로명 주소"
              // type="password"
              onChange={onChange}
              value={form.tel}
            />
            <StyledInput
              // autoComplete="openTime"
              name="newAddr"
              placeholder="도로명 주소"
              // type="password"
              onChange={onChange}
              value={form.newAddr}
            />
            <StyledInput
              // autoComplete="new-password"
              name="oldAddr"
              placeholder="지번 주소"
              // type="password"
              onChange={onChange}
              value={form.oldAddr}
            />
            <StyledInput
              // autoComplete="new-password"
              name="zipCode"
              placeholder="우편번호"
              // type="password"
              onChange={onChange}
              value={form.zipCode}
            />
          </>
        )}

        {type === 'register' && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="이름"
              onChange={onChange}
              value={form.name}
            />
            <StyledInput
              autoComplete="email"
              name="email"
              placeholder="이메일"
              onChange={onChange}
              value={form.email}
            />
            <StyledInput
              // autoComplete="phone"
              name="phone"
              placeholder="전화번호"
              onChange={onChange}
              value={form.phone}
            />
          </>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '3rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' && (
          <>
            <Link to="/register" style={link}>
              개인 회원가입
            </Link>

            <Link to="/hregister" style={link}>
              병원 회원가입
            </Link>

            <Link to="/hlogin">병원 로그인</Link>
          </>
        )}
        {type === 'hlogin' && (
          <>
            <Link to="/register" style={link}>
              개인 회원가입
            </Link>
            <Link to="/hregister" style={link}>
              병원 회원가입
            </Link>

            <Link to="/login">개인 로그인</Link>
          </>
        )}
        {type === 'register' && (
          <>
            <Link to="/hregister" style={link}>
              병원 회원가입
            </Link>
            <Link to="/login" style={link}>
              개인 로그인
            </Link>

            <Link to="/hlogin">병원 로그인</Link>
          </>
        )}
        {type === 'hregister' && (
          <>
            <Link to="/register" style={link}>
              개인 회원가입
            </Link>
            <Link to="/login" style={link}>
              개인 로그인
            </Link>

            <Link to="/hlogin">병원 로그인</Link>
          </>
        )}
        {/* {type === 'login' ? (
          <>
            <Link to="/register" style={link}>
              개인 회원가입
            </Link>

            <Link to="/hregister">병원 회원가입</Link>

            <Link to="/hlogin">병원 로그인</Link>
          </>
        ) : (
          <>
            <Link to="/login">개인 로그인</Link>
            <Link to="/register" style={link}>
              개인 회원가입
            </Link>


            <Link to="/hlogin">병원 로그인</Link>
          </>
        )} */}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
