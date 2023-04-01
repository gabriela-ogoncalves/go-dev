import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BoxInfo from './BoxInfo';
import TrilhaInfo from './TrilhaInfo';

import SummaryService from '../../services/Summary.js';

const SummaryTrilha = (props) => {
  const param = useParams();
  const {info} = props;
  const [userPerfomance, setUserPerformance] = useState();

  const topics = info && info.topicos && info.topicos.sort((a, b) => a.id - b.id);

  useEffect(() => {
    if (!userPerfomance) {
      SummaryService.getTrilhaByUser(parseInt(param.trilha)).then((res) =>
        setUserPerformance(res)
      );
    }
  }, []);

  const trilhaInfo = userPerfomance || info;

  return(
    <section id='summary-trilha'>
      <TrilhaInfo info={trilhaInfo} />
      <section className='summary-trilha-group'>
        {topics && topics.map(topico => {
          return(
            <fieldset key={topico.id} className='summary-trilha'>
              <legend className='summary-trilha__badge'>
                <span className='summary-trilha__badge__text'>
                  TÓPICO {topico.id}
                </span>
              </legend>
              <div className='summary-trilha__container'>
                <div className='summary-trilha__container__name'>
                  <div className='summary-trilha__container__name__title'>
                    {topico.nome}
                  </div>
                  <div className='summary-trilha__container__name__description'>
                    {topico.desc}
                  </div>
                </div>
                <div className='summary-trilha__container__info'>
                  <BoxInfo type='aulas' info={topico} />
                  <BoxInfo type='exercicios' info={topico} />
                </div>
              </div>
            </fieldset>
          );
        })}
      </section>
    </section>
  );
};

export default SummaryTrilha;