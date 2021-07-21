import { useState } from 'react';
// import { POST_LOGIN_API } from '../../../src/config.js';
import styled from 'styled-components';

import { useHistory } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputEmail = event => {
    setEmail(event.target.value);
  };

  const handleInputPassword = event => {
    setPassword(event.target.value);
  };

  const history = useHistory();

  // const requestLogin = () => {
  //   fetch(`${POST_LOGIN_API}`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.access_token) {
  //         alert('로그인되었습니다.');
  //         localStorage.setItem('access_token', res.access_token);
  //         history.push('/');
  //       } else {
  //         alert(`양식을 다시 확인해주세요.`);
  //       }
  //     });
  // };

  return (
    <EmailLoginWrapper>
      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>

      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>

      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>

      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>

      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>

      <EmailLoginForm>
        <FormHeader>
          <h1>
            간편하게 로그인하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            autoComplete="off"
            onChange={handleInputEmail}
          />
          <Input
            type="password"
            placeholder="8글자 이상, 소문자나 대문자 입력하고 특수문자"
            autoComplete="off"
            onChange={handleInputPassword}
          />
          {/* <LoginButton onClick={requestLogin}>로그인 하기</LoginButton> */}
        </FormSection>
      </EmailLoginForm>
    </EmailLoginWrapper>
  );
}

const EmailLoginWrapper = styled.div`
  /* ${({ theme }) => theme.displayFlex('center', 'center')}; */
  height: 100vh;
  padding-top: 150px;
  /* margin-top: 150px; */
`;

const EmailLoginForm = styled.div`
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

const Input = styled.input`
  padding: 25px 5px 10px 5px;
  border: none;
  border-bottom: 1px solid #eeeeee;
  outline: none;
  font-size: 14px;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  padding: 12px 0;
  font-size: 14px;
  background-color: ${({ theme }) => theme.mainColor};
  color: #ffffff;
`;
