import React from 'react';
import SupportCard from './SupportCard/SupportCard';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function Manual() {
  const history = useHistory();

  const goToRegistration = () => {
    history.push('/registration');
  };

  return (
    <>
      <S.TitleContainer>
        <S.Title>
          모두함께 <br />
          어울려 <br />
          놀아볼까요?
          <S.RegistrationButton onClick={goToRegistration}>
            <span>호스트등록 하기</span>
            <div>
              <S.ButtonArrow src="/images/Manual_right-arrow.png" />
            </div>
          </S.RegistrationButton>
        </S.Title>
        <S.TitleImage src="/images/Manual_image.png" />
      </S.TitleContainer>

      <S.SupportWrapper>
        <S.SupportContainer>
          <S.SupportTitle>
            iltal 호스트는 <br />
            어떻게 등록하나요?
          </S.SupportTitle>
          <S.SupportCards>
            <SupportCard
              step="step 1"
              image="/images/icon-judge.png"
              mainText="호스트 등록 & 심사"
              subText={`호스트소개를 작성해주시면 일탈 MD가 확인 후
                      호스트 등록을 도와드립니다.`}
            />

            <SupportCard
              step="step 2"
              image="/images/icon-matching.png"
              mainText="호스트 노출 & 매칭"
              subText={`일탈만의 맞춤 추천 알고리즘으로 호스트님의
                      호스트를 더 많은 분들에게 노출하며 매칭을
                      도와드립니다.`}
            />

            <SupportCard
              step="step 3"
              image="/images/icon-money.png"
              mainText="첫 호스트 진행 & 정산"
              subText={`첫 호스트 진행 후 정산 받기 신청 시 3~5일
                      이내 수입을 정산해 드립니다.`}
            />
          </S.SupportCards>
        </S.SupportContainer>
      </S.SupportWrapper>
    </>
  );
}

export default Manual;
