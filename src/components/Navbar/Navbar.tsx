import * as React from 'react';
import styled from 'styled-components';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

interface INavbarProps {}

const navbarLinks = [
  {
    title: 'Home',
    href: 'home',
  },
  {
    title: 'What is GPT?',
    href: 'wgpt3',
  },
  {
    title: 'Open AI',
    href: 'possibility',
  },
  {
    title: 'Case Studies',
    href: 'features',
  },
  {
    title: 'Library',
    href: 'blog',
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = props => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLinksLogo>
          <img src={logo} alt='logo ' />
        </NavbarLinksLogo>
        <NavbarLinksContainer>
          {navbarLinks.map(navbarLink => (
            <p>
              <a href={`#${navbarLink.href}`}>{navbarLink.title}</a>
            </p>
          ))}
        </NavbarLinksContainer>
      </NavbarLinks>
      <NavbarSignIn>
        <p>Sign in</p>
        <button>Sign up</button>
      </NavbarSignIn>
      <NavbarMenu>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <NavbarMenuContainer>
            {navbarLinks.map(navbarLink => (
              <p>
                <a href={`#${navbarLink.href}`}>{navbarLink.title}</a>
              </p>
            ))}
            <NavbarMenuContainerLinksSignIn>
              <p>Sign in</p>
              <button>Sign up</button>
            </NavbarMenuContainerLinksSignIn>
          </NavbarMenuContainer>
        )}
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width:700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width:550px) {
    padding: 2rem;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const NavbarLinksLogo = styled.div`
  margin-right: 2rem;

  img {
    width: 62.56px;
    height: 16.02px;
  }
`;

const NavbarLinksContainer = styled.div`
  display: flex;

  p {
    color: white;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }

  /* Media Queries */
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const NavbarSignIn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    color: white;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }

  button {
    background-color: #ff4b20;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    outline: 0;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width:550px) {
    display: none; 
  }
`;

const NavbarMenu = styled.div`
  margin: 1rem;
  display: none;
  position: relative;

  svg {
    cursor: pointer;
  }

  /* Media Queries */
  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

const NavbarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

  p {
    margin: 0.8rem 0;
    color: white;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    cursor: pointer;
  }

  button {
    background-color: #ff4b20;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    outline: 0;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  /* Animation */
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (max-width:550px) {
    top: 20px;
  }
`;

const NavbarMenuContainerLinksSignIn = styled.div`
  display: none;

  @media screen and (max-width:550px) {
    display: block;
  }
`;
