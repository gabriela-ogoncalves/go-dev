import React from 'react';

import './styles.scss';

export default function Card() {
  // const { nome, logo, qtdAulas, qtdExercicios } = props.item;

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__user__image">
          <img className="card__user__avatar" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" alt="" />
        </div>
        <div className="card__text__container"> 
          <div className="card__text__user">
          JavaScript
          </div>
          <div className="card__text__job">
            Front-End
          </div>
          <div className="card__text__about">
            A person with passion for web designing and a great enthuiast of coding.....
          </div>
          <a href="?" className="btn btn__hire">
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
