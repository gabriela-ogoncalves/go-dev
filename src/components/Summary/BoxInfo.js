import Number from '../Number/Number';
import './styles.scss';

const BoxInfo = (props) => {
  const { type } = props;

  const lessons = props.items || props.info.aulas;
  const exercises = props.items || props.info.exercicios;

  const title = type === 'aulas' ? 'Aulas' : 'Exercícios';

  const isLessonScreen = props.screen === 'lesson';
  const classBase = isLessonScreen ? 'box-info-lesson' : 'box-info';

  return(
    <section id='box-info'>
      <div className={`${classBase}__container`}>
        <span className={`${classBase}__container__title`}>{title}</span>
        <Number
          type={type}
          items={type === 'aulas' ? lessons : exercises}
          currentItem={props.currentItem}
          isLessonScreen={isLessonScreen}
          user={props.user}
        />
      </div>
    </section>
  );
};

export default BoxInfo;