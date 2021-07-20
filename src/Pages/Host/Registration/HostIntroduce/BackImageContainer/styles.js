import styled from 'styled-components';

export const BackImageContainer = styled.div`
  font-size: 14px;
`;

export const BackImageTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const BackImageAddBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackImageAdd = styled.div`
  position: relative;
  width: 180px;
  height: 100px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 10px;
`;

export const previewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  display: ${props => (props.previewImageValue ? 'inline' : 'none')};
`;

export const BackImageUpload = styled.input`
  display: none;
`;

export const BackPlusIcon = styled.img`
  position: absolute;
  bottom: 2px;
  right: 5px;
  border-radius: 50%;
  filter: invert(100%);
  background-color: #2c2c2c;
`;

export const BackImageSampleBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackImageWrongSampleBox = styled(BackImageAdd)`
  border: 2px solid #c31d1d;
`;

export const BackImageSampleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  transform: translate(-50%, -50%);
`;

export const BackImageCorrectSampleBox = styled(BackImageAdd)`
  border: 2px solid green;
`;

export const BackImageCaution = styled.p`
  margin-top: 10px;
  color: #797d84;
  font-size: 12px;
`;
