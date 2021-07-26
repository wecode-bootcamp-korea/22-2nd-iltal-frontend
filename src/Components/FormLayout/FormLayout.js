import React from 'react';

import styled from 'styled-components';

export default function FormLayout(props) {
  return (
    <FormLayoutWraper>
      <Formheader>
        <h1>
          간편하게 가입하고 iltal의 <br />
          다양한 호스트를 만나보세요.
        </h1>
      </Formheader>
      {props.children}
    </FormLayoutWraper>
  );
}

//Styled Component
const FormLayoutWraper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  flex-direction: column;
`;

const Formheader = styled.header`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;
