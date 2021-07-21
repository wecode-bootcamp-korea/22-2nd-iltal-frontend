import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
function Nav(props) {
  const [activeMenu, setActiveMenu] = useState('');
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(activeMenu);
  }, [activeMenu]);
  useEffect(() => {
    setActiveMenu(false);
  }, [location.pathname]);
  useEffect(() => {
    const detectScroll = () => setActiveMenu(false);
    document.addEventListener('scroll', detectScroll);
    return () => {
      document.removeEventListener('scroll', detectScroll);
    };
  });
  const handleMainNav = event => {
    const { name } = event.target;
    setActiveMenu(name === activeMenu ? '' : name);
    history.push(`/?category=${event.target.id}`);
  };
  const handleSubNav = event => {
    const { name } = event.target;
    setActiveMenu(name === activeMenu ? '' : name);
    console.log(event.target.id);
    history.push(`/?subcategory=${event.target.id}`);
  };
  const goToMain = () => {
    history.push(`/`);
  };
  return (
    <Navigator>
      <NavWarpper>
        <button onClick={goToMain}>
          <Logo>iltal</Logo>
        </button>
        <TravelAndActivity>
          {NAV_MENU.map(({ name, title, subNav, id }, index) => (
            <MainNav key={index}>
              <button onClick={handleMainNav} name={name} id={id}>
                {title}
              </button>
              <SubNav activeMenu={activeMenu} name={name}>
                {subNav.map((subList, index) => (
                  <li key={index}>
                    <button
                      onClick={handleSubNav}
                      name={subList.name}
                      id={subList.id}
                    >
                      {subList.name}
                    </button>
                  </li>
                ))}
              </SubNav>
            </MainNav>
          ))}
        </TravelAndActivity>
      </NavWarpper>
      <RegisterAndLogin>
        <li>
          <Link to="/Manual">호스트 등록</Link>
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
      { id: 1, name: '러닝·라이딩' },
      { id: 2, name: '캠핑' },
      { id: 3, name: '도보여행' },
    ],
  },
  {
    id: 2,
    name: 'activity',
    title: '액티비티',
    subNav: [
      { id: 4, name: '수상레포츠' },
      { id: 5, name: '트레킹' },
      { id: 6, name: '요가·필라테스' },
    ],
  },
];
const Navigator = styled.div`
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
  z-index: 999;
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
  top: 70px;
  ${({ theme }) => theme.displayFlex};
  padding: 20px 0;
  visibility: ${props =>
    props.activeMenu === props.name ? 'visible' : 'hidden'};
  li {
    margin-right: 10px;
    a {
      &:hover {
        font-weight: bold;
      }
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
