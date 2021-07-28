import styled from 'styled-components';

export const MapAddressBox = styled.div``;

export const MapAddressTitle = styled.h2`
  margin: 15px 0px 10px 0px;
  font-size: 13px;
`;

export const MapAddress = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }
`;
