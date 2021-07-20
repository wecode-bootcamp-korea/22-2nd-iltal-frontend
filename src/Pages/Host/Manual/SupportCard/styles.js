import styled from 'styled-components';

export const SupportCard = styled.div`
  margin-top: 80px;
  width: 340px;
  height: 370px;
  font-family: ${props => props.theme.fontContent};
`;

export const SupportStep = styled.h3`
  width: 80px;
  padding: 8px 0px 8px 0px;
  margin: 0px auto;
  background-color: black;
  border-radius: 42px;
  text-align: center;
  font-weight: 900;

  span {
    position: relative;
    top: -2px;
  }
`;

export const SupportImageBox = styled.div`
  position: relative;
  height: 120px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #f6f6f6;
`;

export const SupportImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SupportTextBox = styled.div`
  padding-top: 1px;
  height: 185px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 3px 3px 11px 0 #69021f;
  color: ${props => props.theme.fontColor};
`;

export const SupportText = styled.div`
  text-align: center;

  h2 {
    margin: 37px 0px 20px 0px;
    font-size: 24px;
    font-weight: 900;
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }
`;
