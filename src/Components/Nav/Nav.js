import { Link } from 'react-router-dom';

import { useState } from 'react';

import styled from 'styled-components';

function Nav() {
  const [activeMenu, setActiveMenu] = useState('');

  const handleNav = event => {
    setActiveMenu(event.target.name);

    // close
    if (activeMenu === event.target.name) {
      setActiveMenu('');
    }
  };

  return (
    <Navigator>
      <NavWarpper>
        <Link to="/">
          <Logo>iltal</Logo>
        </Link>
        <TravelAndActivity>
          {NAV_MENU.map(({ name, title, subNav }, index) => (
            <MainNav key={index}>
              <button onClick={handleNav} name={name}>
                {title}
              </button>
              <SubNav activeMenu={activeMenu} name={name}>
                <li>
                  {subNav.map((subNavList, index) => (
                    <Link to={subNavList.link} key={index}>
                      {subNavList.name}
                    </Link>
                  ))}
                </li>
              </SubNav>
            </MainNav>
          ))}
        </TravelAndActivity>
      </NavWarpper>
      <RegisterAndLogin>
        <li>
          <Link to="/manual">호스트 등록</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </RegisterAndLogin>
    </Navigator>
  );
}

// CONST DATA
const NAV_MENU = [
  {
    id: 1,
    name: 'trip',
    title: '여행',
    subNav: [
      { name: '러닝·라이딩', link: '' },
      { name: '캠핑', link: '' },
      { name: '도보여행', link: '' },
    ],
  },

  {
    id: 2,
    name: 'activity',
    title: '액티비티',
    subNav: [
      { name: '수상레포츠', link: '' },
      { name: '트레킹', link: '' },
      { name: '요가·필라테스', link: '' },
    ],
  },
];

const Navigator = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${({ theme }) => theme.displayFlex('space-between', 'center')};
  padding: 10px 200px 0;
  height: 74px;
  font-family: ${props => props.theme.fontContent};
  font-size: 16px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #ffffff;
`;

const NavWarpper = styled.div`
  ${({ theme }) => theme.displayFlex};
`;

const Logo = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`;

const TravelAndActivity = styled.ul`
  ${({ theme }) => theme.displayFlex};
`;

const MainNav = styled.li`
  margin-left: 40px;

  button {
    font-size: 16px;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`;

const SubNav = styled.ul`
  position: absolute;
  top: 74px;
  ${({ theme }) => theme.displayFlex};
  padding: 20px 0;
  visibility: ${props =>
    props.activeMenu === props.name ? 'visible' : 'hidden'};
  background-color: #ffffff;

  a {
    margin-right: 30px;

    &:hover {
      font-weight: bold;
    }
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
