import { Link } from 'react-router-dom';
import { getStatus } from '../../helpers/utils';

import TrilhaHeader from './TrilhaHeader';

import './styles.scss';

const TrilhaInfo = ({info}) => {
  const {nome, logo, status, id} = info;
  const classStatus = status === 'done' ? 'done' : 'progress';

  return(
    <section id='summary-trilha-info' >
      <TrilhaHeader name={nome} logo={logo} />

      <div className='info-status'>
        <span 
          className={`info-status__text info-status__text__${classStatus}`}
        >
          TRILHA {getStatus(status)}
        </span>
        <Link
          to={`/certificado/${id}`}
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