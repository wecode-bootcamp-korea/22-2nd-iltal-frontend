import React, { useState, useRef, useContext } from 'react';
import { RegistrationUpdateContext } from '../../context';
import * as S from './styles';

function ProfileImageContainer() {
  const [previewProfileImage, setPreviewProfileImage] = useState('');

  const { setter } = useContext(RegistrationUpdateContext);

  const ProfileImageUpload = useRef(null);

  const uploadProfileFile = e => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function (e) {
        setPreviewProfileImage(e.target.result);
      };

      setter.setUploadProfileImage(e.target.files[0]);
    }
  };

  const loadProfileImage = () => {
    ProfileImageUpload.current.click();
  };

  return (
    <S.ProfileImageContainer>
      <S.ProfileImageTitle>프로필 사진</S.ProfileImageTitle>

      <S.ProfileImageAddBox>
        <S.ProfileImageAdd onClick={loadProfileImage}>
          <S.ProfileImageUpload
            ref={ProfileImageUpload}
            type="file"
            accept="image/*"
            onChange={uploadProfileFile}
          />
          <S.PreviewProfileImage
            alt="preview"
            src={previewProfileImage}
            previewProfileImage={previewProfileImage}
          />
          <S.ProfilePlusIcon src="images/regis-plus.png" />
        </S.ProfileImageAdd>

        <S.ProfileImageSampleBox>
          <S.ProfileImageWrongSampleBox>
            <S.ProfileImageWrongImage src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
            <S.ProfileWrongIcon src="images/regis-thin-ban.png" />
          </S.ProfileImageWrongSampleBox>

          <S.ProfileImageWrongSampleBox>
            <S.ProfileImageWrongImage src="https://images.unsplash.com/photo-1534996858221-380b92700493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
            <S.ProfileWrongIcon src="images/regis-thin-ban.png" />
          </S.ProfileImageWrongSampleBox>

          <S.ProfileImageCorrectSampleBox>
            <S.ProfileImageCorrectImage src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80" />
            <S.ProfileCorrectIcon src="images/regis-thin-checkicon.png" />
          </S.ProfileImageCorrectSampleBox>
        </S.ProfileImageSampleBox>
      </S.ProfileImageAddBox>

      <S.ProfileImageCaution>
        ⚠️ 얼굴이 나오지 않는 동물/캐릭터/단순 배경 사진은 승인이 어렵습니다.
        호스트님의 사진으로 등록해 주세요.
      </S.ProfileImageCaution>
    </S.ProfileImageContainer>
  );
}

export default ProfileImageContainer;
