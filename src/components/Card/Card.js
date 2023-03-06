import React from 'react';
import crown from '../../../src/assets/images/crown.png';

import './styles.scss';

const calculeTotal = (topics, type) => {
  let total = 0;

  topics.map(topic => {
    total = total + topic[type].length;
  });

  return total;
};

export default function Card(props) {
  const { id, nome, area, logo, qtdAulas, qtdExercicios,
    name, description, topics, status
  } = props.item;

  return (
    <div className='wrapper'>
      <div className='trilha'>
        <div className='trilha__image'>
          <img className="trilha__image__avatar" src={logo} alt="Logo da trilha" />
        </div>

      <div className="trilha__text"> 
        <div className="trilha__text__name">
          {nome || name}
        </div>
        
        <div className="trilha__text__area">
          {area || description}
        </div>
       
        <div className="trilha__text__info">
          <span>{qtdAulas || calculeTotal(topics, 'lessons')} aulas</span>
          <span>{qtdExercicios || calculeTotal(topics, 'exercises')} exercícios</span>
        </div>

        <a href={`/trilhas/resumo/${id}`} className="trilha__button">
          Saiba mais
        </a>

        { status && (
          <div className='trilha__status'>
            <div className={`trilha__status__${status}`}>
              <span>{status === 'done' ? 'CONCLUÍDO' : 'EM ANDAMENTO'}</span>
            </div>
          </div>
        )}

        { status && status === 'done' && (
          <div className='trilha__status__image'>
            <img src={crown} />
          </div>
        )}
        
      </div>
      </div>
    </div>
  );
}
