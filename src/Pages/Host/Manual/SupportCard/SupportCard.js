import React from 'react';
import * as S from './styles';

function SupportCard(props) {
  return (
    <S.SupportCard>
      <S.SupportStep>
        <span>{props.step}</span>
      </S.SupportStep>
      <S.SupportImageBox>
        <S.SupportImage src={props.image} alt="support_card" />
      </S.SupportImageBox>
      <S.SupportTextBox>
        <S.SupportText>
          <h2>{props.mainText}</h2>
          {props.subText.split('\n').map((line, idx) => {
            return <p key={idx}>{line}</p>;
          })}
        </S.SupportText>
      </S.SupportTextBox>
    </S.SupportCard>
  );
}

export default SupportCard;
