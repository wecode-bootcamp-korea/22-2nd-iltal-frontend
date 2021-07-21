import styled from 'styled-components';

export const AboutME = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
`;

export const AddInfo = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

//닉네임

export const NicknameContainer = styled.div`
  font-size: 14px;
`;

export const NicknameTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const NicknameInputBox = styled.div`
  position: relative;
  font-size: 12px;
`;

export const NicknameInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 50px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const NicknameCount = styled.span`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: #797d84;
`;

//타이틀

export const SubjectContainer = styled.div`
  font-size: 14px;
`;

export const SubjectTitle = styled.h2`
  margin: 40px 0px 15px 0px;
  font-weight: 600;
`;

export const SubjectInputBox = styled.div`
  position: relative;
  font-size: 12px;
`;

export const SubjectInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 50px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const SubjectCount = styled.span`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: #797d84;
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 0px;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 13px;
`;
