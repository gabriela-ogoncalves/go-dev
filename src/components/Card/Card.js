import React from 'react';
import crown from '../../../src/assets/images/crown.png';

import './styles.scss';

export default function Card(props) {
  const { nome, area, logo, qtdAulas, qtdExercicios, status } = props.item;
  
  return (
    <div className='wrapper'>
      <div className='trilha'>
        <div className='trilha__image'>
          <img className="trilha__image__avatar" src={logo} alt="Logo da trilha" />
        </div>

      <div className="trilha__text"> 
        <div className="trilha__text__name">
          {nome}
        </div>
        
        <div className="trilha__text__area">
          {area}
        </div>
       
        <div className="trilha__text__info">
          <span>{qtdAulas} aulas</span>
          <span>{qtdExercicios} exercícios</span>
        </div>

        <a href={`/trilhas/resumo/${nome.toLowerCase()}`} className="trilha__button">
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
