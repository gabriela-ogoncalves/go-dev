import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/logo/go-dev-logo.png';

const NavBar = () => {
  return (
    <article data-testid='nav-bar'>
      <nav className='nav'>
        <Link to='/' data-testid='go-dev-logo' className='site-title'>
          <img src={logo} alt='Logo Go Dev' className="logo-image" />
        </Link>
        <ul>
          <CustomLink role='link' href='/trilhas'>Trilhas</CustomLink>
          <CustomLink role='link' href='/certificados'>Certificados</CustomLink>
        </ul>
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