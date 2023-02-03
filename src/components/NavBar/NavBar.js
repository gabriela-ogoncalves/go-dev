import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import AuthService from '../../services/auth.js';

import logo from '../../assets/logo/go-dev-logo.png';
import MenuIcon from './MenuIcon';

import ProfileMenu from '../Profile/ProfileMenu.js';

import './styles.scss';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const user = AuthService.getCurrentUser();

  console.log('user: ', user);

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
          { user && 
            <Link to='/profile'>
              <ProfileMenu user={user} AuthService={AuthService} /> 
            </Link>
          }
            <CustomLink onClick={toggleNav} role="link" href="/trilhas">
              Trilhas
            </CustomLink>
            <CustomLink onClick={toggleNav} role="link" href="/certificados">
              Certificados
            </CustomLink>
            {!user && (
              <>
                <CustomLink onClick={toggleNav} role="link" href="/cadastro">
                  Cadastro
                </CustomLink>
                <CustomLink onClick={toggleNav} role="link" href="/login">
                  Login
                </CustomLink>
              </>
            )}
            { user &&
              <li className='navigation-menu__logout'>
                <button
                  className='profile-menu__button__logout'
                  onClick={() => {
                    if (confirm('Tem certeza que deseja sair?')) {
                      AuthService.logout();
                    }
                  }}
                >
                  Sair
                </button>
              </li>
            }
          </ul>
        </div>
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