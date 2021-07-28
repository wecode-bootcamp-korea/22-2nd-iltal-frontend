import React, { useContext } from 'react';
import { RegistrationContext, RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function PersonnelTypeSelect() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleOnePersonButton = () => {
    setter.setActivePersonnelType(0);
  };

  const handleGroupButton = () => {
    setter.setActivePersonnelType(1);
  };

  return (
    <S.TypeContainer>
      <S.TypeTitle>인원 선택</S.TypeTitle>
      <div>
        <S.TypeButton
          onClick={handleOnePersonButton}
          $type={getter.activePersonnelType === 0}
        >
          1인
        </S.TypeButton>
        <S.TypeButton
          onClick={handleGroupButton}
          $type={getter.activePersonnelType === 1}
        >
          그룹
        </S.TypeButton>
      </div>
    </S.TypeContainer>
  );
}

export default PersonnelTypeSelect;
