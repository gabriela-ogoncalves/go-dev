import React, { Fragment, useState, useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Separator from '../Separator/Separator';
import FeedbackExercise from './FeedbackExercise';

import './styles.scss';

const Exercise = ({
  item,
  trilhaId,
  completed,
  user,
  userAnswer,
  ExercicioService,
  exercisesList,
  param
}) => {
  const LETTER_OPTIONS = ['A', 'B', 'C', 'D', 'E'];
  const baseClass = 'exercise__container__item__answers__answer';

  const [nextItem, setNextItem] = useState();

  const [optionSeleted, setOptionSelected] = useState(null);
  const [lastOptionSeleted, setLastOptionSelected] = useState(null);
  const [answer, setAnswer] = useState(userAnswer);
  const [showResult, setShowResult] = useState(false);

  const coloringOptions = () => {
    if (optionSeleted) {
      if (item.respostaCerta === answer) {
        optionSeleted.classList.add('correct');
      } else {
        optionSeleted.classList.add('fail');
        const correctEl = document.getElementById(`option-${item.respostaCerta}`);
        correctEl.classList.add('correct');
      }
    }
  };

  if (completed) {
    coloringOptions();
  }

  // pegando o elemento da opção selecionada egravando na variável "optionSelected"
  const activeOption = (e) => {
    if (!showResult) {
      const option = e.target.innerText;
      fillOptionSelected(option);
    }
  };

  const fillOptionSelected = (option) => {
    const container = document.getElementById(`option-${option}`);
      
    if (optionSeleted) setLastOptionSelected(optionSeleted);
    setOptionSelected(container);  
  };

  // ativando a opção selecionada como ativa e desativando a última selecionada
  useEffect(() => {
    if (optionSeleted) {
      optionSeleted.classList.add('active');
      if (lastOptionSeleted) lastOptionSeleted.classList.remove('active');
      setAnswer(optionSeleted.innerText);
    }
  }, [optionSeleted]);

  // função para confirmar a resposta selecionada
  const confirmAnswer = async () => {
    await ExercicioService.sendExercicioStatus(item.id, answer, user);
    setShowResult(true);
    coloringOptions();
  };

  // função para remover a resposta selecionada
  const removeAnswer = () => {
    optionSeleted.classList.remove('active');
    setOptionSelected(null);
    setLastOptionSelected(null);
    setAnswer('');
  };

  // setando as infos do próximo exercício na variável "nextItem"
  useEffect(() => {
    if (exercisesList) {
      exercisesList.forEach((exercise, index) => {
        if (exercise.id === item.id) {
          if(exercisesList[index+1]) setNextItem(exercisesList[index+1]);
        }
      });
    }
  }, [exercisesList]);

  useEffect(() => {
    if (LETTER_OPTIONS.includes(userAnswer)){ 
      fillOptionSelected(userAnswer);
      setAnswer(userAnswer);
    }
  }, [userAnswer]);

  const exerciceIndex = exercisesList.findIndex(el => {
    return el.id === item.id;
  })+1;
  
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
            EXERCÍCIO {exerciceIndex !== 0 && exerciceIndex}
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
                    <div key={index} className={completed ? `${baseClass} disable-events` : baseClass }>
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
                <FeedbackExercise
                  showFeedback={showResult || completed}
                  item={item}
                  answer={answer}
                  confirmAnswer={confirmAnswer}
                  removeAnswer={removeAnswer}
                />
              </>
            )}
          </div>
        </fieldset>
      </section>

      {
        nextItem && (
          <a className="next-exercise" href={`/trilhas/${param.trilha}/${trilhaId}/exercicios/${nextItem.id}`}>
            <span className="next-exercise__text">
              próximo exercício
            </span>
            <ArrowForwardIcon />
          </a>
        )
      }
    </>
  );
};

export default Exercise;