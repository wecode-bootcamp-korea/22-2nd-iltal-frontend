import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  font-size: 14px;
`;

export const ProfileImageTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const ProfileImageAddBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const ProfileImageAdd = styled.div`
  position: relative;
  height: 76px;
  width: 76px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
`;

export const ProfileImageUpload = styled.input`
  display: none;
`;

export const PreviewProfileImage = styled.img`
  display: ${props => (props.previewProfileImage ? 'inline' : 'none')};
  height: 99%;
  width: 99%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfilePlusIcon = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  filter: invert(100%);
  border-radius: 50%;
  background-color: #2c2c2c;
`;

export const ProfileImageSampleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImageWrongSampleBox = styled.div`
  position: relative;
  height: 64px;
  width: 64px;
`;

export const ProfileImageWrongImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const ProfileWrongIcon = styled.img`
  position: absolute;
  width: 66px;
  top: -1px;
  left: -1px;
`;

export const ProfileImageCorrectSampleBox = styled(
  ProfileImageWrongSampleBox
)``;

export const ProfileImageCorrectImage = styled(ProfileImageWrongImage)`
  object-fit: cover;
`;

export const ProfileCorrectIcon = styled(ProfileWrongIcon)``;

export const ProfileImageCaution = styled.p`
  margin-top: 10px;
  color: #797d84;
  font-size: 12px;
`;
