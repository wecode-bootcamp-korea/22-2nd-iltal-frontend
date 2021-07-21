import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import DropDownFilter from './DropDownFilter';
import RadioBtnFilter from './RadioBtnFilter';
import SortBtnFilter from './SortBtnFilter';
import { GET_MAIN_API } from '../../config';
import { Col } from 'antd';
import { useLocation } from 'react-router-dom';

function Main() {
  const [cards, setCards] = useState([]);
  const [state, setState] = useState('서울');
  const [price, setPrice] = useState('');
  const [group, setGroup] = useState('');
  const [radioValue, setRadioValue] = useState(1);
  const [sortValue, setSortValue] = useState('');
  const location = useLocation(null);
  const categoryId = location.search.split('?')[1];

  useEffect(() => {
    getCards();
  }, [state, price, group, categoryId]);

  const getCards = () => {
    fetch(
      `${GET_MAIN_API}?${categoryId}&region=${state}&ordering=${
        price === '' ? 'price' : price
      }&group=${group}`,
    )
      .then(res => res.json())
      .then(data => setCards(data.message));
  };
  const renderCards = cards.map((card, idx) => {
    return (
      <Col>
        <Cards key={idx} card={card} />
      </Col>
    );
  });
  const priceRadioBtn = e => {
    if (e.target.value === 1) return 'price';
    else if (e.target.value === 2) return '-price';
    setRadioValue(e.target.value);
    setPrice(e.target.value);
  };
  const sortBtn = e => {
    if (e.currentTarget.value === 0) return 0;
    else if (e.currentTarget.value === 1) return 1;
    setSortValue(e.currentTarget.value);
    setGroup(e.currentTarget.value);
  };
  return (
    <div>
      <CategoryContainer>
        <CategoryMain>
          <DropDownFilter setState={setState} />
          <RadioBtnFilter
            setPrice={setPrice}
            priceRadioBtn={priceRadioBtn}
            radioValue={setRadioValue}
          />
          <SortBtnFilter
            setGroup={setGroup}
            sortBtn={sortBtn}
            sortValue={sortValue}
          />
        </CategoryMain>
      </CategoryContainer>
      <CardContainer>
        <RowGrid>{renderCards}</RowGrid>
      </CardContainer>
      <CardFooter />
    </div>
  );
}
const CategoryContainer = styled.div`
  ${props => props.theme.displayFlex('space-between')};
  padding: 0 200px;
  margin: 6em 0 2em 0;
  height: 218px;
  font-family: ${props => props.theme.fontContent};
  font-size: 16px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #ffffff;
`;
const CategoryMain = styled.div`
  padding: 10px 0;
  z-index: 20;
`;
const CardContainer = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')}
  margin-bottom: 10em;
`;
const RowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  gap: 50px;
`;
const CardFooter = styled.div`
  height: 100px;
`;
export default Main;
