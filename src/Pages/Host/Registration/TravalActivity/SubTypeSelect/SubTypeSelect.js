import React, { useContext } from 'react';
import { RegistrationContext, RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function SubtypeSelect() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleSubtype = idx => {
    setter.setActiveSubtype(idx);
  };

  return (
    <S.SubtypeContainer $isSelectType={getter.activeType}>
      <S.SubtypeButtonBox $activeType={getter.activeType === 1}>
        {['러닝&라이딩', '캠핑', '도보여행'].map((subtype, index) => {
          return (
            <S.SubtypeButton
              onClick={() => {
                handleSubtype(index + 1);
              }}
              key={index}
              $type={getter.activeSubtype === index + 1}
            >
              {subtype}
            </S.SubtypeButton>
          );
        })}
      </S.SubtypeButtonBox>

      <S.SubtypeButtonBox $activeType={getter.activeType === 2}>
        {['수상레포츠', '트레킹', '요가&필라테스'].map((subtype, index) => {
          return (
            <S.SubtypeButton
              onClick={() => {
                handleSubtype(index + 4);
              }}
              key={index}
              $type={getter.activeSubtype === index + 4}
            >
              {subtype}
            </S.SubtypeButton>
          );
        })}
      </S.SubtypeButtonBox>
    </S.SubtypeContainer>
  );
}

export default SubtypeSelect;
