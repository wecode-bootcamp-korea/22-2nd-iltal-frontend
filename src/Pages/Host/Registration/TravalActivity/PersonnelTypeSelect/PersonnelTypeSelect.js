import React, { useState, useContext } from 'react';
import { RegistrationContext, RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function PersonnelTypeSelect() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleOnePersonButton = () => {
    setter.setActivePersonnelType(false);
  };

  const handleGroupButton = () => {
    setter.setActivePersonnelType(true);
  };

  return (
    <S.TypeContainer>
      <S.TypeTitle>인원 선택</S.TypeTitle>
      <div>
        <S.TypeButton
          onClick={handleOnePersonButton}
          $type={getter.activePersonnelType === false}
        >
          1인
        </S.TypeButton>
        <S.TypeButton
          onClick={handleGroupButton}
          $type={getter.activePersonnelType === true}
        >
          그룹
        </S.TypeButton>
      </div>
    </S.TypeContainer>
  );
}

export default PersonnelTypeSelect;
