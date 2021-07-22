import React from 'react';

import styled from 'styled-components';

//인자자리에서 바로 구조분해 할당 할 수 있다. 매개변수
export default function Input({ type, text }) {
  return (
    <InputWrapper
      name={type}
      type={type}
      placeholder={text}
      autoComplete="off"
    />
  );
}

const InputWrapper = styled.input`
  width: 100%;
  padding: 25px 5px 10px 5px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  outline: none;
`;
