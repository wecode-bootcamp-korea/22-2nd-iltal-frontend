import React, { useContext } from 'react';
import { RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function PriceSelect() {
  const { setter } = useContext(RegistrationUpdateContext);

  const inputNumberFormat = e => {
    e.target.value = comma(uncomma(e.target.value));

    setter.setPrice(Number(onlynumber(uncomma(e.target.value))));
  };

  const comma = str => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };

  const uncomma = str => {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
  };

  const onlynumber = str => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1');
  };

  return (
    <S.PriceContainer>
      <S.PriceTitle>가격</S.PriceTitle>
      <S.PriceAddInfo>
        ⚠️여행은 1일을 단위/ 액티비티는 1시간을 단위로 합니다!
      </S.PriceAddInfo>

      <S.PriceBox>
        <S.Price type="text" onKeyUp={inputNumberFormat} />
        <S.PriceText>원</S.PriceText>
      </S.PriceBox>
    </S.PriceContainer>
  );
}

export default PriceSelect;
