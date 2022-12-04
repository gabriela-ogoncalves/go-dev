import { Link } from 'react-router-dom';
import { getStatus } from '../../helpers/utils';
import './styles.scss';

const TrilhaInfo = ({info}) => {
  const {nome, logo, status} = info;
  const classStatus = status === 'done' ? 'done' : 'progress';

  return(
    <section id='summary-trilha-info' >
      <div className='info-header'>
        <span className='info-header__name'>{nome}</span>
        <img src={logo} className='info-header__image' />
      </div>

      <div className='info-status'>
        <span 
          className={`info-status__text info-status__text__${classStatus}`}
        >
          TRILHA {getStatus(status)}
        </span>
        <Link
          to='/certificados'
          role='button'
          className={`info-status__button${classStatus !== 'done' ? '-disabled' : ''}`}
        >
          OBTER CERTIFICADO
        </Link>

      </div>
    </section>
  );
};

export default TrilhaInfo;