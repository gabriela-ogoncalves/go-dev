import React, { Fragment, useState, useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Separator from '../Separator/Separator';

import './styles.scss';

const Exercise = ({
  item,
  trilhaId
}) => {
  const LETTER_OPTIONS = ['A', 'B', 'C', 'D', 'E'];
  const baseClass = 'exercise__container__item__answers__answer';

  const [optionSeleted, setOptionSelected] = useState(null);
  const [lastOptionSeleted, setLastOptionSelected] = useState(null);
  const [answer, setAnswer] = useState('');

  const activeOption = (e) => {
    const option = e.target.innerText;
    const container = document.getElementById(`option-${option}`);
    
    if (optionSeleted) setLastOptionSelected(optionSeleted);
    setOptionSelected(container);
  };

  useEffect(() => {
    if (optionSeleted) {
      optionSeleted.classList.add('active');
      if (lastOptionSeleted) lastOptionSeleted.classList.remove('active');
      setAnswer(optionSeleted.innerText);
    }
  }, [optionSeleted]);

  const confirmAnswer = () => {
    console.log('apertou no botão de confirmar');
  };

  const removeAnswer = () => {
    optionSeleted.classList.remove('active');
    setOptionSelected(null);
    setLastOptionSelected(null);
    setAnswer('');
  };

  console.log('item: ', item);
  console.log('answer', answer);

  return (
    <>
      <a className="back-screen" href={`/trilhas/resumo/${trilhaId}`}>
        <ArrowBackIcon />
        <span className="back-screen__text">
          voltar para o resumo da trilha
        </span>
      </a>

      <section className="exercise">
        <fieldset className="exercise__container">
          <legend className="exercise__container__header">
            EXERCÍCIO {item.id}
          </legend>
          <div className="exercise__container__item">
            <div className="exercise__container__item__title">{item.title}</div>
            <div className="exercise__container__item__description">
              {item.desc}
            </div>
            <div className="exercise__container__item__answers">
              {item &&
                item.respostas &&
                item.respostas.map((option, index) => {
                  return (
                    <div key={index} className={baseClass}>
                      <span
                        id={`option-${LETTER_OPTIONS[index]}`}
                        className={`${baseClass}__letter`}
                        onClick={(e) => activeOption(e)}
                      >
                        {LETTER_OPTIONS[index]}
                      </span>
                      <span className={`${baseClass}__text`}>{option}</span>
                    </div>
                  );
                })}
            </div>
            {answer && answer !== '' && (
              <>
                <Separator />
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
              </>
            )}
          </div>
        </fieldset>
      </section>
    </>
  );
};

export default Exercise;