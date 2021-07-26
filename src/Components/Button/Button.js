import React from 'react';

import styled from 'styled-components';

export default function Button() {
  return (
    <ButtonWrapper>
      <i /> 버튼
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  margin-top: 10px;
  padding: 12px 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #222222;
  border: 1px solid #222222;

  i {
    margin-right: 8px;
  }
`;
