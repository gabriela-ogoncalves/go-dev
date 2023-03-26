import Number from '../Number/Number';
import './styles.scss';

const BoxInfo = (props) => {
  const { type } = props;
  const { aulas, exercicios } = props.info;

  const title = type === 'aulas' ? 'Aulas' : 'Exercícios'; 

  return(
    <section id='box-info'>
      <div className='box-info__container'>
        <span className='box-info__container__title'>{title}</span>
        <Number
          type={type}
          items={type === 'aulas' ? aulas : exercicios}
          currentItem={props.currentItem}
        />
      </div>
    </section>
  );
};

export default BoxInfo;