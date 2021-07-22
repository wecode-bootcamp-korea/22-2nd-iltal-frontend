import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { POST_SIGNUP_API } from '../../../src/config.js';
import styled from 'styled-components';

import { validationFunction } from '../../utils/Validation';

function Signup() {
  const [userInputs, setUserInputs] = useState({
    name: '',
    eamil: '',
    password: '',
  });

  const { name, email, password } = userInputs;

  const InputHandler = event => {
    const { name, value } = event.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const isAllInputValid = () => {
    Object.entries(userInputs).every(([key, value]) =>
      validationFunction[key](value)
    );
  };

  const history = useHistory();

  const requestSignup = () => {
    if (isAllInputValid) {
      fetch(`${POST_SIGNUP_API}`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      alert('가입이 완료되었습니다');
      history.push('/login');
    } else {
      return alert('양식을 다시 확인해주세요');
    }
  };

  return (
    <SignupWrapper>
      <SignupForm>
        <FormHeader>
          <h1>
            간편하게 가입하고 iltal의 <br />
            다양한 호스트를 만나보세요.
          </h1>
        </FormHeader>
        <FormSection>
          <SrOnly>singup input</SrOnly>

          {SINGUP_DATA.map(({ type, name, placeholder }, index) => (
            <Input
              key={index}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
              onChange={InputHandler}
            />
          ))}
          <SignupButton onClick={requestSignup}>회원가입 하기</SignupButton>
        </FormSection>
      </SignupForm>
    </SignupWrapper>
  );
}

// Input map 데이터
const SINGUP_DATA = [
  {
    name: 'name',
    type: 'text',
    placeholder: '이름(실명)을 입력해주세요',
  },
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

const SignupWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  height: 100vh;
`;

const SignupForm = styled.div`
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

const SignupButton = styled.button.attrs()`
  margin-top: 50px;
  padding: 12px 0;
  font-size: 14px;
  background-color: ${({ theme }) => theme.mainColor};
  color: #ffffff;
`;

export default Signup;
