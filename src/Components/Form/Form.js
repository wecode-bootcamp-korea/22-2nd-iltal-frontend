import React from 'react';
import { Link } from 'react-router-dom';

import FormLayout from '../FormLayout/FormLayout';
import Input from '../Input/Input';

import styled from 'styled-components';

export default function Form({ type, inputData }) {
  return (
    <FormWrapper>
      <FormLayout>
        {type === 'login' && (
          <FormContent>
            <SrOnly>login input</SrOnly>
            <LoginButton kakao>
              <i className="fas fa-comment" />
              카카오톡으로 로그인
            </LoginButton>
            <LoginButton>
              <i className="fab fa-apple fa-lg" />
              Apple로 로그인
            </LoginButton>
            <FootLists>
              <FootList>
                <i class="fab fa-facebook-f" />
              </FootList>
              <FootList>
                <Link to="/signup">이메일</Link>
              </FootList>
              <FootList>아이디찾기</FootList>
            </FootLists>
          </FormContent>
        )}

        {type === 'signup' && (
          <FormContent>
            <SrOnly>login input</SrOnly>
            {inputData.map((input, index) => (
              <Input key={index} type={input.type} text={input.text} />
            ))}
            <SignupButton>회원가입 하기</SignupButton>
          </FormContent>
        )}

        {type === 'emailLogin' && (
          <FootLists>
            <FootList>비밀번호 찾기</FootList>
            <FootList>
              <Link to="/signup">회원가입</Link>
            </FootList>
          </FootLists>
        )}
      </FormLayout>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('', 'center')};
  flex-direction: column;
  width: 420px;
  padding: 35px 20px;
  border: 1px solid #cccccc;
`;

const FormContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const SignupButton = styled(LoginButton)`
  margin-top: 80px;
  background-color: ${props => props.theme.mainColor};
`;

const SrOnly = styled.h2`
  ${props => props.theme.srOnly}
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
