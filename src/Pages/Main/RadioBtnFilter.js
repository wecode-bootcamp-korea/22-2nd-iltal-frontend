import React from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
const RadioBtnFilter = ({ priceRadioBtn, radioValue }) => {
  return (
    <div>
      <PriceInbox>
        <Price>가격</Price>
        <RadioBtn>
          <Radio.Group onChange={priceRadioBtn} radioValue={radioValue}>
            <Radio value={'-price'}>높은 가격순</Radio>
            <Radio value={'price'}>낮은 가격순</Radio>
          </Radio.Group>
        </RadioBtn>
      </PriceInbox>
    </div>
  );
};
const PriceInbox = styled.div`
  display: flex;
  margin: 15px 60px;
  height: 40px;
`;
const Price = styled.div`
  padding-top: 13px;
  width: 100px;
  color: #222;
  letter-spacing: -0.3px;
  font-weight: 600;
`;
const RadioBtn = styled.div`
  padding-top: 10px;
  margin-left: -20px;
`;
export default RadioBtnFilter;
