import React, { useContext } from 'react';
import HostIntroduce from './HostIntroduce/HostIntroduce';
import TravelActivity from './TravalActivity/TravelActivity';
import {
  RegistProviderWapper,
  RegistrationContext,
  RegistrationUpdateContext,
} from './context';
import * as S from './styles';

function Registration() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleHostOn = () => {
    setter.setActiveCategory('Host');
  };

  const handleTravelActivityOn = () => {
    setter.setActiveCategory('TravelActivity');
  };

  return (
    <S.Wrap>
      <S.Header>
        <S.HeaderTitle>내 호스트 만들기</S.HeaderTitle>
      </S.Header>
      <S.Container>
        <S.Index>
          <S.IndexList
            colors={getter.activeCategory === 'Host'}
            onClick={handleHostOn}
          >
            호스트 소개
          </S.IndexList>
          <S.IndexList
            colors={getter.activeCategory === 'TravelActivity'}
            onClick={handleTravelActivityOn}
          >
            여행&액티비티 소개
          </S.IndexList>
        </S.Index>

        <S.Main isOn={getter.activeCategory === 'Host'}>
          <HostIntroduce />
        </S.Main>

        <S.Main isOn={getter.activeCategory === 'TravelActivity'}>
          <TravelActivity />
        </S.Main>
      </S.Container>
    </S.Wrap>
  );
}

const RegistrationContextWrapper = () => {
  return (
    <RegistProviderWapper>
      <Registration />
    </RegistProviderWapper>
  );
};

export default RegistrationContextWrapper;
