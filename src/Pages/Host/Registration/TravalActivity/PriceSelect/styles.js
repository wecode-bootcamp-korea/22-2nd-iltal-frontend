import styled, { css } from 'styled-components';

export const PriceContainer = styled.div`
  position: relative;
  top: 70px;
  font-size: 14px;
`;

export const PriceTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const PriceAddInfo = styled.h3`
  margin-bottom: 15px;
  font-size: 13px;
  color: grey;
`;

export const PriceBox = styled.div`
  width: 30%;
  position: relative;
  margin-bottom: 80px;
`;

export const Price = styled.input`
  padding: 10px 25px 10px 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PriceText = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #646464;
`;
