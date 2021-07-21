import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Regions = [
  { id: 1, value: '서울' },
  { id: 2, value: '경기도' },
  { id: 3, value: '강원도' },
  { id: 4, value: '경상도' },
  { id: 5, value: '충청도' },
  { id: 6, value: '전라도' },
  { id: 7, value: '제주도' },
];

const DropDownFilter = props => {
  const [region, setRegion] = useState([]);

  const regionDropdown = e => {
    setRegion(e.target.value);
    props.setState(e.target.value);
  };

  // 받고
  return (
    <div>
      <AreaInbox>
        <Area>지역</Area>
        <Select onChange={regionDropdown} value={region}>
          {Regions.map(item => (
            <Option key={item.id} value={item.key}>
              {item.value}
            </Option>
          ))}
        </Select>
      </AreaInbox>
    </div>
  );
};

const AreaInbox = styled.div`
  display: flex;
  margin: 0 60px;
  height: 40px;
`;

const Area = styled.div`
  padding-top: 13px;
  width: 100px;
  color: #222;
  letter-spacing: -0.3px;
  font-weight: 600;
`;

const Select = styled.select`
  margin-left: -20px;
`;

const Option = styled.option``;

export default withRouter(DropDownFilter);
