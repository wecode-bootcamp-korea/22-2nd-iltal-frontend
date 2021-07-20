import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Nav() {
  return (
    <Navigator>
      <NavWarpper>
        <Link to="/">
          <Logo>iltal</Logo>
        </Link>
        <TravelAndActivity>
          <MainNav>
            <Link>여행</Link>
            <SubNav>
              <li>
                {TRAVEL_LIST.map((nav, index) => (
                  <Link to={nav.link} key={index}>
                    {nav.name}
                  </Link>
                ))}
              </li>
            </SubNav>
          </MainNav>
          <MainNav>
            <Link>액티비티</Link>
            <SubNav>
              <li>
                {ACTIVITY_LIST.map((nav, index) => (
                  <Link to={nav.link} key={index}>
                    {nav.name}
                  </Link>
                ))}
              </li>
            </SubNav>
          </MainNav>
        </TravelAndActivity>
      </NavWarpper>
      <RegisterAndLogin>
        <li>
          <Link to="/Registration">호스트 등록</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </RegisterAndLogin>
    </Navigator>
  );
}

// CONST DATA
const TRAVEL_LIST = [
  { name: '러닝·라이딩', link: '' },
  { name: '캠핑', link: '' },
  { name: '도보여행', link: '' },
];

const ACTIVITY_LIST = [
  { name: '수상레포츠', link: '' },
  { name: '트레킹', link: '' },
  { name: '요가·필라테스', link: '' },
];

const Navigator = styled.div`
  position: relative;
  ${props => props.theme.displayFlex('space-between', '')};
  margin: 0 200px;
  height: 64px;
  font-family: ${props => props.theme.fontContent};
  font-size: 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const NavWarpper = styled.div`
  ${({ theme }) => theme.displayFlex}
`;

const Logo = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`;

const TravelAndActivity = styled.ul`
  ${({ theme }) => theme.displayFlex}
`;

const MainNav = styled.li`
  margin-left: 40px;

  a {
    &:hover {
      font-weight: bold;
    }
  }
`;

const SubNav = styled.ul`
  position: absolute;
  top: 63px;
  ${({ theme }) => theme.displayFlex}
  padding: 20px 0;
  visibility: hidden;
  li {
    margin-right: 30px;
  }
`;

const RegisterAndLogin = styled.ul`
  ${({ theme }) => theme.displayFlex}
  justify-content: center;
  align-items: center;

  li {
    margin-left: 30px;

    &:hover {
      font-weight: bold;
    }
  }
`;

export default Nav;
