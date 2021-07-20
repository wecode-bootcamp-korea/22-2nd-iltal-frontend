import React, { useState, useRef, useContext } from 'react';
import * as S from './styles';
import { RegistrationUpdateContext } from '../../context';

function BackImageContainer() {
  const [previewBackImage, setPreviewBackImage] = useState('');

  const { setter } = useContext(RegistrationUpdateContext);

  const backImageUploadRef = useRef(null);

  const uploadBackFile = e => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function (e) {
        setPreviewBackImage(e.target.result);
      };

      setter.setUploadBackImage(e.target.files[0]);
    }
  };

  const loadBackImage = () => {
    backImageUploadRef.current.click();
  };

  return (
    <S.BackImageContainer>
      <S.BackImageTitle>배경화면 사진</S.BackImageTitle>

      <S.BackImageAddBox>
        <S.BackImageAdd onClick={loadBackImage}>
          <S.BackImageUpload
            ref={backImageUploadRef}
            type="file"
            accept="image/*"
            onChange={uploadBackFile}
          />
          <S.previewImage
            alt="preview"
            src={previewBackImage}
            previewImageValue={previewBackImage}
          />
          <S.BackPlusIcon alt="plus_icon" src="images/regis-plus.png" />
        </S.BackImageAdd>

        <S.BackImageSampleBox>
          <S.BackImageWrongSampleBox>
            <S.BackImageSampleImage
              alt="wrong_image"
              src="https://images.unsplash.com/photo-1626750513479-879820721d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />
            <S.BackIcon alt="wrong_icon" src="images/regis-ban.png" />
          </S.BackImageWrongSampleBox>

          <S.BackImageCorrectSampleBox>
            <S.BackImageSampleImage
              alt="correct_image"
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
            />
            <S.BackIcon alt="correct_icon" src="images/regis-check.png" />
          </S.BackImageCorrectSampleBox>
        </S.BackImageSampleBox>
      </S.BackImageAddBox>

      <S.BackImageCaution>
        ⚠️ 여행이나 액티비티와 관계없은 사진은 승인이 어렵습니다.
      </S.BackImageCaution>
    </S.BackImageContainer>
  );
}

export default BackImageContainer;
