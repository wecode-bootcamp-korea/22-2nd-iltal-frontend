import React, { useContext } from 'react';
import TypeSelect from './TypeSelect/TypeSelect';
import SubtypeSelect from './SubTypeSelect/SubTypeSelect';
import PersonnelTypeSelect from './PersonnelTypeSelect/PersonnelTypeSelect';
import RegionSelect from './RegionSelect/RegionSelect';
import PriceSelect from './PriceSelect/PriceSelect';
import { RegistrationContext, RegistrationUpdateContext } from '../context';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import * as S from './styles';

function TravelActivity(props) {
  const { getter } = useContext(RegistrationContext);
  const { setter } = useContext(RegistrationUpdateContext);

  const handlePrevButton = () => {
    setter.setActiveCategory('Host');
  };

  const handleNextButton = () => {
    if (getter.reviseAddress === '') {
      alert('주소를 입력해주세요');
      return;
    }

    if (getter.price === 0) {
      alert('가격을 입력해주세요');
      return;
    }
    //토큰
    const accessToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Rycaz6XldIy-q-xnORvTDQcdfOvEuTrE1BSSf74AiEQ';

    //헤더
    const headerData = {
      headers: { Authorization: accessToken },
    };

    //유저데이터
    const userFormData = new FormData();
    const userFormDataList = [
      { profile_url: getter.uploadProfileImage },
      { nickname: getter.nicknameValue },
    ];

    for (let data of userFormDataList) {
      console.log(data);
      userFormData.append(data.key, data.value);
    }

    //상품데이터
    const productFormData = new FormData();
    const productFormDataList = [
      { title: getter.subjectValue },
      { region: getter.addressSido },
      { price: getter.price },
      { is_group: getter.activePersonnelType },
      { host_id: 1 },
      { subcategory_id: getter.activeSubtype },
      { background_url: getter.uploadBackImage },
    ];

    for (let data of productFormDataList) {
      console.log(data);
      productFormData.append(data.key, data.value);
    }

    //Post
    axios.post('http://10.58.4.213:8000/users/host', userFormData, headerData);

    axios.post(
      'http://10.58.4.213:8000/products/product',
      productFormData,
      headerData
    );

    alert('축하합니다. 등록이 완료되었습니다!');

    props.history.push('/');
  };

  return (
    <>
      <S.OpenHost>
        안녕하세요, 호스트님
        <br />
        여행&액티비티를 열고 싶으신가요?
      </S.OpenHost>
      <S.AddInfo>다음 절차를 따라서 호스트님의 유형을 선택해주세요!</S.AddInfo>

      <TypeSelect />

      <SubtypeSelect />
      {getter.activeSubtype && (
        <>
          <PersonnelTypeSelect />

          {getter.activePersonnelType !== '' && (
            <>
              <RegionSelect />
              <PriceSelect />

              <S.PrevButton onClick={handlePrevButton}>이전</S.PrevButton>

              <S.NextButton onClick={handleNextButton}>완료</S.NextButton>
            </>
          )}
        </>
      )}
    </>
  );
}

export default withRouter(TravelActivity);
