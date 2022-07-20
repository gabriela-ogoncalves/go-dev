import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  return(
    <article>
      <nav className='nav'>
        <Link to='/' className='site-title'>Go Dev!</Link>
        <ul>
          <CustomLink href ='/trilhas'>Trilhas</CustomLink>
          <CustomLink href ='/about'>About</CustomLink>
        </ul>
      </nav>
    </article>
  )
}

const CustomLink = ({ href, children, ...props }) => {
  const path = useResolvedPath(href);
  const isActive = useMatch({ path: path.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;