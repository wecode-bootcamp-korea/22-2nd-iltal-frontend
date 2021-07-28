import styled from 'styled-components';

export const Wrap = styled.div`
  min-width: 1200px;
  margin-top: 150px;
  margin-bottom: 100px;
  /* background-color: aqua; */
  border-bottom: 1px solid #cccccc;
  font-family: ${({ theme }) => theme.fontContent};
`;

export const Header = styled.div`
  h2 {
    margin: 0px auto;
    padding-bottom: 10px;
    width: 1200px;
    /* background-color: gainsboro; */
    border-bottom: 1px solid #eee;
    font-size: 17px;
    font-weight: 600;
  }
`;

export const HeaderTitle = styled.h2`
  margin: 0px auto;
  padding-bottom: 10px;
  width: 1200px;
  /* background-color: gainsboro; */
  border-bottom: 1px solid #eee;
  font-size: 17px;
  font-weight: 600;
`;
export const Container = styled.div`
  position: relative;
  background-color: white;
  margin: 45px auto 0px auto;
  width: 1200px;
`;

export const Index = styled.ul`
  position: absolute;
  list-style: none;
`;

export const IndexList = styled.li`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${props => (props.colors ? 'black' : '#ccc')};
`;

export const Main = styled.div`
  position: relative;
  width: 600px;
  margin-left: 240px;
  padding-bottom: 150px;
  display: ${props => (props.isOn ? 'block' : 'none')};
`;
