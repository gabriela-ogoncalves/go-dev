import { useState, useContext } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import logo from '../../assets/logo/go-dev-logo.png';
import MenuIcon from './MenuIcon';
import Menu from './Menu';

import './styles.scss';
import Context from '../../Context.js';
import Status from './Status';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLogged] = useContext(Context);
  const isMobile = document.body.offsetWidth <= 700;

  const enableMenu = isLogged || (isMobile && !isLogged);


  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  
  return (
    <article data-testid="nav-bar">
      <nav className="navigation">
        <Link to="/" data-testid="go-dev-logo" className="brand-name">
          <img src={logo} alt="Logo Go Dev" className="logo-image" />
        </Link>

        <button
          className="hamburger"
          onClick={toggleNav}
          type="button"
          name="menu"
        >
          <MenuIcon />
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            {!isLogged && (
              <>
                <CustomLink onClick={toggleNav} role="link" href="/trilhas">
                  Trilhas
                </CustomLink>
                <CustomLink onClick={toggleNav} role="link" href="/cadastro">
                  Cadastro
                </CustomLink>
                <CustomLink onClick={toggleNav} role="link" href="/login">
                  Login
                </CustomLink>
              </>
            )}
          </ul>
        </div>
        { isLogged && !isMobile && <Status />}
        { enableMenu &&  <Menu />}

      </nav>
    </article>
  );
};

const CustomLink = ({ href, children, ...props }) => {
    const path = useResolvedPath(href);
    const isActive = useMatch({ path: path.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
        <Link to={href} {...props}>
            {children}
        </Link>
        </li>
    );
};

export default NavBar;