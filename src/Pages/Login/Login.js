import React from 'react';
import { useEffect } from 'react';

import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GET_KAKAO_API } from '../../../src/config.js';

function Login() {
  const history = useHistory();

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${GET_KAKAO_API}`, {
          method: 'GET',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('access_token', res.TOKEN);
            alert('로그인되었습니다.');
            history.push('/');
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <FormHeader>
          <h1>
            간편하게 가입하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <LoginButton kakao onClick={loginWithKakao}>
            <i className="fas fa-comment" />
            카카오톡으로 로그인
          </LoginButton>
          <LoginButton>
            <i className="fab fa-apple fa-lg" />
            Apple로 로그인
          </LoginButton>
        </FormSection>
        <FootLists>
          <FootList>
            <i className="fab fa-facebook-f" />
          </FootList>
          <FootList>
            <Link to="/email-login">이메일</Link>
          </FootList>
          <FootList>아이디찾기</FootList>
        </FootLists>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  height: 100vh;
`;

const LoginForm = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  flex-direction: column;
  width: 420px;
  padding: 35px 70px;
  border: 1px solid #eeeeee;
`;

const FormHeader = styled.header`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  h1 {
    color: ${props => props.theme.fontColor};
    font-weight: normal;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SrOnly = styled.h2`
  ${props => props.theme.srOnly}
`;

const LoginButton = styled.button`
  margin-top: 10px;
  padding: 12px 0;
  font-size: 14px;
  background-color: ${props => (props.kakao ? '#FEEB49' : '#222222')};
  color: ${props => (props.kakao ? '#222222' : '#FFFFFF')};

  i {
    margin-right: 8px;
  }
`;

const FootLists = styled.ul`
  display: flex;
  margin-top: 100px;
  font-size: 12px;
`;

const FootList = styled.li`
  margin-right: 15px;

  &::after {
    content: '|';
    margin-left: 10px;
    line-height: 14px;
  }

  &:last-child::after {
    content: '';
    margin-left: 0;
    line-height: 0;
  }
`;

export default Login;
