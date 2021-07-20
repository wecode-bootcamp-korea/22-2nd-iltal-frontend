import styled, { css } from 'styled-components';

export const TypeContainer = styled.div`
  font-size: 14px;
`;

export const TypeTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const TypeButtonBox = styled.div``;

export const TypeButton = styled.button`
  height: 40px;
  width: 195px;
  margin-right: 20px;
  border: 0px;
  border-radius: 8px;
  background-color: ${props => (props.$type ? '#ffe5ec' : '#f6f6f6')};
  color: ${props => (props.$type ? '#ff0045' : 'black')};
`;
