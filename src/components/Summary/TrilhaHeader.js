import './styles.scss';

const TrilhaHeader = ({name, logo}) => {
  return(
    <div className='info-header'>
      <span className='info-header__name'>{name}</span>
      <img src={logo} className='info-header__image' />
    </div>
  );
};

export default TrilhaHeader;