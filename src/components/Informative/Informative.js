import Icon from './Icon';
import languages from '../../assets/images/languages.png';
import './styles.scss';

const Informative = ({ user }) => {
  return (
    <>
      <div className='informative'>
        <div className='informative__item'>
          <div className='informative__item__icon'>
            <Icon type='video-watch' />
          </div>
          <div className='informative__item__description'>
            <span>Na palma das suas mãos</span>
            <span>
              Tudo online, totalmente gratuito e feito exclusivamente para você
            </span>
          </div>
        </div>

        <div className='informative__item'>
          <div className='informative__item__icon'>
            <Icon type='online-education' />
          </div>
          <div className='informative__item__description'>
            <span>Aulas e exercícios</span>
            <span>
              Selecionamos as melhores aulas e elaboramos vários exercícios para
              você fixar bem o conteúdo
            </span>
          </div>
        </div>

        <div className='informative__item'>
          <div className='informative__item__icon'>
            <Icon type='online-graduation' />
          </div>
          <div className='informative__item__description'>
            <span>Garanta o seu certificado</span>
            <span>
              Realizando toda a trilha, você pode garantir seu certificado de
              conclusão
            </span>
          </div>
        </div>
      </div>

      <div className='call'>
        <img src={languages} alt='programming languagens image' />
        <div className='call-info'>
          <h1>
            {user
              ? 'Fique de olho no seu desempenho!'
              : 'Torne-se um dos nossos estudantes'}
          </h1>
          <h2>
            {user
              ? 'Aqui você consegue acompanhar o seu progresso e saber quanto falta para garantir o seu certificado.'
              : 'Quer aprender programação de forma lúdica e diferente do convencional? Cadastre-se no Go Dev e garanta já essa oportunidade. É tudo gratuito!'}
          </h2>
          <a
            href={user ? '/profile' : '/cadastro'}
            role='button'
            className='button'
          >
            {user ? 'Ir para o meu perfil' : 'Quero me cadastrar!'}
          </a>
        </div>
      </div>
    </>
  );
};

export default Informative;
