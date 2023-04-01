import React, { Fragment, useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import BoxInfo from '../Summary/BoxInfo';

import AulaService from '../../services/Aula';
import AuthService from '../../services/auth.js';
// import SummaryService from '../../services/Summary';
import { isMobile } from '../../helpers/utils';

import './styles.scss';

export default function Lesson({
  topics,
  currentItem,
  trilhaId
}) {
  const [completed, setCompleted] = useState(undefined);
  const [lessons, setLessons] = useState([]);

  const invalidStatus = AuthService.getCurrentUser().username ? false : true;

    const handleChange = (e, item) => {
      console.log('chegou no handleChange', {e, item});
      setCompleted(!completed);
      AulaService.sendAulaStatus(item.id, completed);
    };

  // console.log('topics', topics);
  // console.log('currentItem', currentItem);

  useEffect(() => {
    console.log('entrou no use effect', topics);
    if (topics) {
      let items = [];

      topics.map(item => {
        item.aulas.map(aula => {
          items.push(aula);
        });
      });

      console.log('items: ', items);
  
      setLessons(items);
    }
  }, [topics]);

  console.log('lessons: ', lessons);

  return (
    <>
      <a className='back-screen' href={`/trilhas/resumo/${trilhaId}`}>
        <ArrowBackIcon />
        <span className='back-screen__text'>
          voltar para o resumo da trilha
        </span>
      </a>
      <div id='lesson'>
        <div className='lesson__topics'>
          { topics && topics.map(item => {
            return(
              <div key={item.id} className='lesson__topics__topic'>
                <span className='lesson__topics__topic__text'>
                  TÓPICO {item.id}
                </span>
                {item && item.aulas.map(aula => {
                  const isActive = aula.id === currentItem.id;
                  const classBase = isActive ? 'lesson__topics__lessons__active' : 'lesson__topics__lessons';

                  return(
                    <a key={aula.id} className={classBase} href={`${aula.id}`}>
                      <span className='lesson__topics__lessons__text'>
                        Aula {aula.id}
                      </span>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className='lesson__item'>
          { isMobile &&  <div className='lesson__badge'>AULA {currentItem.id}</div> }
          <div className='lesson__item__title'>{currentItem.title}</div>
          <div className='lesson__item__description'>{currentItem.desc}</div>
          <YoutubeEmbed url='https://www.youtube.com/embed/JHO_oIg0OcA' />
          <div className='lesson__status'>
            <input
              type="checkbox"
              name="completed"
              defaultChecked={completed}
              onChange={(e) => handleChange(e, currentItem)}
              disabled={invalidStatus}
              // onChange={(e) => setCompleted(e.target.checked)}
            />
            <span className='lesson__status__text'>concluir aula</span>
          </div>
        </div>
      </div>

      { lessons && isMobile && (
          <div className='grid-lessons'>
            <BoxInfo
              type='aulas'
              currentItem={currentItem}
              items={lessons}
              screen='lesson'
            />
          </div>
        )
      }
    </>
  );
}