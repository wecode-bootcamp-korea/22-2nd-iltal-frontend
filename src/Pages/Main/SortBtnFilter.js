import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const SortBtnFilter = ({ sortBtn }) => {
  return (
    <div>
      <TypeInbox>
        <Type>종류</Type>
        <SortInbox>
          <Button onClick={sortBtn} value={0}>
            1인
          </Button>
          <Button onClick={sortBtn} value={1}>
            그룹
          </Button>
        </SortInbox>
      </TypeInbox>
    </div>
  );
};

const TypeInbox = styled.div`
  display: flex;
  margin: 0 60px;
  height: 40px;
`;

const Type = styled.div`
  padding-top: 13px;
  width: 100px;
  color: #222;
  letter-spacing: -0.3px;
  font-weight: 600;
`;

const SortInbox = styled.div`
  display: flex;
  margin: 8px -20px;
  height: 40px;
`;

export default SortBtnFilter;
