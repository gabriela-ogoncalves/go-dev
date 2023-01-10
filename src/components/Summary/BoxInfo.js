import Number from '../Number/Number';
import './styles.scss';

const BoxInfo = (props) => {
  const { type } = props;
  const { aulas, exercicios } = props.info;

  const title = type === 'aulas' ? 'Aulas' : 'Exercícios'; 

  return(
    <section id='box-info'>
      <fieldset>
        <legend>{title}</legend>
        <Number
          type={type}
          items={type === 'aulas' ? aulas : exercicios}
          currentItem={props.currentItem}
        />
      </fieldset>
    </section>
  );
};

export default BoxInfo;