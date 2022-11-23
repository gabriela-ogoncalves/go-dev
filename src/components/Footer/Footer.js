import './styles.scss';
import logo from '../../assets/logo/go-dev-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <a data-testid="go-dev-logo" href="/">
			<img src={logo} alt='Logo Go Dev'/>
      </a>
      <span className="footer__copyright">Feito por Gabriela Gonçalves e Marco Cardoso</span>
    </footer>
  );
};

export default Footer;