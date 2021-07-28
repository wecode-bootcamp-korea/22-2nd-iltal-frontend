import { useState } from 'react';
import { POST_LOGIN_API } from '../../../src/config.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function EmailLogin() {
  const [userInputs, setUserInputs] = useState({
    eamil: '',
    password: '',
  });

  const { email, password } = userInputs;

  const InputHandler = event => {
    const { name, value } = event.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const history = useHistory();

  const requestLogin = () => {
    fetch(`${POST_LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          alert('로그인되었습니다.');
          localStorage.setItem('access_token', res.access_token);
          history.push('/');
        } else {
          alert(`양식을 다시 확인해주세요.`);
        }
      });
  };

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
          {EMAIL_LOGIN_DATA.map(({ type, name, placeholder }, index) => (
            <Input
              key={index}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
              onChange={InputHandler}
            />
          ))}
          <LoginButton onClick={requestLogin}>로그인 하기</LoginButton>
        </FormSection>
        <FootLists>
          <FootList>
            <Link to="/signup">회원 가입</Link>
          </FootList>
          <FootList>비밀번호찾기</FootList>
        </FootLists>
      </EmailLoginForm>
    </EmailLoginWrapper>
  );
}

// Input map 데이터
const EMAIL_LOGIN_DATA = [
  {
    name: 'email',
    type: 'email',
    placeholder: '이메일 주소를 입력해주세요',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '8글자 이상, 소문자나 대문자 입력하고 특수문자',
  },
];

const EmailLoginWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  height: 100vh;
`;

const EmailLoginForm = styled.div`
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
