import React, { useContext, useState } from 'react';
import { RegistrationContext, RegistrationUpdateContext } from '../context';
import BackImageContainer from './BackImageContainer/BackImageContainer';
import ProfileImageContainer from './ProfileImageContainer/ProfileImageContainer';
import * as S from './styles';

function HostIntroduce() {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handleNextButton = () => {
    if (getter.uploadBackImage === '') {
      alert('배경이미지를 등록해주세요!');
      return;
    }

    if (getter.uploadProfileImage === '') {
      alert('프로필이미지를 등록해주세요!');
      return;
    }

    if (getter.nicknameValue === '') {
      alert('닉네임을 설정해주세요!');
      return;
    }

    if (getter.subjectValue === '') {
      alert('타이틀을 설정해주세요!');
      return;
    }
    setter.setActiveCategory('TravelActivity');
  };

  const handleNickname = e => {
    setter.setNicknameValue(e.target.value);
  };

  const handleSubject = e => {
    setter.setSubjectValue(e.target.value);
  };

  return (
    <>
      <S.AboutME>
        클래스를 등록하기 전에
        <br />
        자신에 대해 알려주세요.
      </S.AboutME>
      <S.AddInfo>
        튜터로 한 번만 등록하면 다양한 클래스를 여실 수 있어요 :)
      </S.AddInfo>

      <BackImageContainer />

      <ProfileImageContainer />

      <S.NicknameContainer>
        <S.NicknameTitle>닉네임</S.NicknameTitle>
        <S.NicknameInputBox>
          <S.NicknameInput
            type="text"
            maxLength="8"
            onChange={handleNickname}
          />
          <S.NicknameCount>{`(${getter.nicknameValue.length}/8)`}</S.NicknameCount>
        </S.NicknameInputBox>
      </S.NicknameContainer>

      <S.SubjectContainer>
        <S.SubjectTitle>타이틀</S.SubjectTitle>
        <S.SubjectInputBox>
          <S.SubjectInput type="text" maxLength="40" onChange={handleSubject} />
          <S.SubjectCount>{`(${getter.subjectValue.length}/40)`}</S.SubjectCount>
        </S.SubjectInputBox>
      </S.SubjectContainer>

      <S.NextButton onClick={handleNextButton}>다음</S.NextButton>
    </>
  );
}

export default HostIntroduce;
