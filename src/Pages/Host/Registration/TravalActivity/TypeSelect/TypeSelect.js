import React, { useContext } from 'react';
import { RegistrationContext, RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function TypeSelect() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleTravelButton = () => {
    setter.setActiveType(1);
  };

  const handleActivityButton = () => {
    setter.setActiveType(2);
  };

  return (
    <S.TypeContainer>
      <S.TypeTitle>유형 선택</S.TypeTitle>
      <div>
        <S.TypeButton
          onClick={handleTravelButton}
          $type={getter.activeType === 1}
        >
          여행
        </S.TypeButton>
        <S.TypeButton
          onClick={handleActivityButton}
          $type={getter.activeType === 2}
        >
          액티비티
        </S.TypeButton>
      </div>
    </S.TypeContainer>
  );
}

export default TypeSelect;
