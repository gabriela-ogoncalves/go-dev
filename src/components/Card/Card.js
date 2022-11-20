import React from 'react';

import './styles.scss';

export default function Card(props) {
  const { nome, area, logo, qtdAulas, qtdExercicios } = props.item;
  
  // console.log('teste', teste);
  return (
    <div className='wrapper'>
      <div className='trilha'>
       <div className="trilha__image">
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

        <a href="?" className="trilha__button">
          Saiba mais
        </a>
      </div>
      </div>
    </div>
  );
}
