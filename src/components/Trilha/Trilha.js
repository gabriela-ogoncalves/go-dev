import React from 'react';

import './styles.scss';

export default function Trilha(props) {
  const { nome, logo, qtdAulas, qtdExercicios } = props.item;

  return (
    <div className='trilha'>
      <span className='trilha__name'>{nome}</span>
      <img className='trilha__image' alt='Logo da linguagem' src={logo} />
      <div className='trilha__info'>
        <span className='trilha__info__aula'>{qtdAulas} aulas</span>
        <span>{qtdExercicios} exercícios</span>
      </div>
    </div>
  );
}
