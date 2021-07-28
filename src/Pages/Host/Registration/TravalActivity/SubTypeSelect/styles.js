import styled from 'styled-components';

export const SubtypeContainer = styled.div`
  display: ${props => (props.$isSelectType ? 'flex' : 'none')};
  gap: 20px;
`;

export const SubtypeButtonBox = styled.div`
  opacity: ${props => (props.$activeType ? 1 : 0)};
  width: 195px;

  transition: opacity 0.3s;
`;

export const SubtypeButton = styled.button`
  display: block;
  margin: 10px auto;
  height: 25px;
  width: 150px;
  border: 0px;
  border-radius: 5px;
  background-color: ${props => (props.$type ? '#ffe5ec' : '#f6f6f6')};
  color: ${props => (props.$type ? '#ff0045' : 'black')};
  font-size: 12px;
`;
