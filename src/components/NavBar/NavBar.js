import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import logo from '../../assets/logo/go-dev-logo.png';
import MenuIcon from './MenuIcon';

import './styles.scss';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <article data-testid='nav-bar'>
      <nav className='navigation'>
          <Link
              to='/'
              data-testid='go-dev-logo'
              className='brand-name'
          >
              <img src={logo} alt='Logo Go Dev' className="logo-image" />
          </Link>

        <button
          className='hamburger'
          onClick={toggleNav}
          type='button'
          name='menu'
        >
          <MenuIcon />
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <CustomLink onClick={toggleNav} role='link' href='/trilhas'>Trilhas</CustomLink>
            <CustomLink onClick={toggleNav} role='link' href='/certificados'>Certificados</CustomLink>
            <CustomLink onClick={toggleNav} role='link' href='/cadastro'>Cadastro</CustomLink>
            <CustomLink onClick={toggleNav} role='link' href='/login'>Login</CustomLink>          
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