import React, { Fragment } from 'react';
import HappyFace from './HappyFace';
import SadFace from './SadFace';

const QuestionResult = ({ item, answer }) => {
  return (
    <>
      <div className="exercise__container__item__result">
        <div className="exercise__container__item__result__icon">
          {item.respostaCerta === answer ? <HappyFace /> : <SadFace />}
        </div>
        <div
          className={`exercise__container__item__result__text ${
            item.respostaCerta === answer ? 'correct' : 'fail'
          }`}
        >
          RESPOSTA {item.respostaCerta === answer ? 'CORRETA!' : 'ERRADA...'}
        </div>
      </div>
      {answer !== item.respostaCerta && (
        <div className="exercise__container__item__result__correct-answer">
          A resposta correta é a <b>{item.respostaCerta}</b>.
        </div>
      )}
    </>
  );
};

const ChooseAnswer = ({ answer, confirmAnswer, removeAnswer }) => {
  return (
    <div className="exercise__container__item__final-answer">
      <p className="exercise__container__item__final-answer__text">
        Você marcou a opção <b>{answer}</b>
      </p>
      <div className="exercise__container__item__final-answer__buttons">
        <button
          name="button-confirm-answer"
          className="exercise__container__item__final-answer__buttons__confirm"
          type="submit"
          value="Confirmar resposta"
          onClick={confirmAnswer}
        >
          Confirmar resposta
        </button>
        <button
          name="button-cancel-answer"
          className="exercise__container__item__final-answer__buttons__cancel"
          type="reset"
          value="Remover resposta"
          onClick={removeAnswer}
        >
          Remover resposta
        </button>
      </div>
    </div>
  );
};

const FeedbackExercise = ({
  showFeedback,
  item,
  answer,
  confirmAnswer,
  removeAnswer,
}) => {
  if (showFeedback) {
    return <QuestionResult item={item} answer={answer} />;
  }

  return (
    <ChooseAnswer
      answer={answer}
      confirmAnswer={confirmAnswer}
      removeAnswer={removeAnswer}
    />
  );
};

export default FeedbackExercise;
