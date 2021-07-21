import styled from 'styled-components';

export const TitleContainer = styled.div`
  position: relative;
  top: 90px;
  width: 1195px;
  height: 740px;
  padding: 1px;
  margin: 0px auto;
`;

export const Title = styled.h1`
  width: 300px;
  margin-top: 100px;
  font-family: ${props => props.theme.fontContent};
  font-size: 55px;
  font-weight: 900;
  line-height: 75px;
`;

export const RegistrationButton = styled.button`
  display: block;
  position: relative;
  margin-top: 30px;
  width: 90%;
  height: 60px;
  border: 0px;
  border-radius: 42px;
  background-color: black;
  color: white;
  font-size: initial;
  font-family: initial;
  line-height: initial;

  span {
    position: absolute;
    left: 30px;
    top: 21px;
    font-size: 18px;
  }

  div {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.theme.mainColor};
  }
`;

export const ButtonArrow = styled.img`
  position: relative;
  top: 15px;
  width: 25px;
  filter: invert(100%);
`;

export const TitleImage = styled.img`
  position: absolute;
  top: 20px;
  right: -220px;
  width: 1065px;
  height: 676px;
`;

export const SupportWrapper = styled.div`
  padding: 130px 0px 156px;
  margin-top: 100px;
  background-color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.fontContent};
  color: white;
`;

export const SupportContainer = styled.div`
  width: 1195px;
  margin: 0px auto;
`;

export const SupportTitle = styled.h1`
  font-size: 37px;
  font-weight: 900;
  line-height: 60px;
  color: white;
`;

export const SupportCards = styled.div`
  display: flex;
  justify-content: space-between;
`;
