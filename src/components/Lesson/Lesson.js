import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import BoxInfo from '../Summary/BoxInfo';

import Context from '../../Context';

import AulaService from '../../services/Aula';
import SummaryService from '../../services/Summary';

import { isMobile } from '../../helpers/utils';

import './styles.scss';

export default function Lesson({ topics, currentItem, trilhaId }) {
  const param = useParams();
  const [ user ] = useContext(Context);
  const [aula, setAula] = useState({});
  /* eslint-disable-next-line */
  const [topico, setTopico] = useState({});
  /* eslint-disable-next-line */
  const [summaryTrilha, setSummaryTrilha] = useState({});
  const [completed, setCompleted] = useState(undefined);
  const [lessons, setLessons] = useState([]);

  const invalidStatus = user ? false : true;

  useEffect(() => {
    if (topics) {
      let items = [];

      topics.map((item) => {
        item.aulas.map((aula) => {
          items.push(aula);
        });
      });

      setLessons(items);
    }
  }, [topics]);

  useEffect(() => {
    const getAula = async () => {
      const aula = await AulaService.getAulaById(param.aula);
      const topico = aula && await AulaService.getTopicoById(aula.topic_id, param.trilha);

      if (!ignore) {
        setAula(aula);
        setTopico(topico);
        setCompleted(aula.status);
      }
    };

    let ignore = false;
    getAula();
    return () => {
      ignore = true;
    };
  }, [param]);

  useEffect(() => {
    if (!user || !aula || completed == null)
      return;
    
    const setStatus = async () => {
      await AulaService.sendAulaStatus(aula.id, completed);
    };

    setStatus();
  }, [completed]);

  useEffect(() => {
    const getCurrentTrilha = async () => {
      const trilha = await SummaryService.getTrilhaById(parseInt(param.id));

      if (!ignore) {
        setSummaryTrilha(trilha);
      }
    };

    let ignore = false;
    getCurrentTrilha();
    return () => {
      ignore = true;
    };
  }, [param.id]);

  const isLastItem = lessons.length > 0 && lessons.slice(-1)[0].id === currentItem.id;

  return (
    <>
      <a className="back-screen" href={`/trilhas/resumo/${trilhaId}`}>
        <ArrowBackIcon />
        <span className="back-screen__text">
          voltar para o resumo da trilha
        </span>
      </a>
      <div id="lesson">
        <div className="lesson__topics">
          {topics &&
            topics.map((item) => {
              return (
                <div key={item.id} className="lesson__topics__topic">
                  <span className="lesson__topics__topic__text">
                    TÓPICO {item.id}
                  </span>
                  {item &&
                    item.aulas.map((aula) => {
                      const isActive = aula.id === currentItem.id;
                      const classBase = isActive
                        ? 'lesson__topics__lessons__active'
                        : aula.status === 'done'
                          ? 'lesson__topics__lessons__done'
                          : 'lesson__topics__lessons';

                      return (
                        <a
                          key={aula.id}
                          className={classBase}
                          href={`${aula.id}`}
                        >
                          <span className="lesson__topics__lessons__text">
                            Aula {aula.id}
                          </span>
                        </a>
                      );
                    })}
                </div>
              );
            })}
        </div>
        <div className="lesson__item">
          {isMobile && (
            <div className="lesson__badge">AULA {currentItem.id}</div>
          )}
          <div className="lesson__item__title">{currentItem.title}</div>
          <div className="lesson__item__description">{currentItem.desc}</div>
          <YoutubeEmbed url="https://www.youtube.com/embed/JHO_oIg0OcA" />
          {
            user && (
              <div className="lesson__status">
                <input
                  type="checkbox"
                  name="completed"
                  checked={completed}
                  onChange={(e) => setCompleted(e.target.checked)}
                  disabled={invalidStatus}
                />
                <span className="lesson__status__text">
                  {completed ? 'aula concluída!' : 'concluir aula'}
                </span>
              </div>
            )
          }
        </div>
      </div>

      {lessons && isMobile && (
        <div className="grid-lessons">
          <BoxInfo
            type="aulas"
            currentItem={currentItem}
            items={lessons}
            screen="lesson"
            user={user}
          />
        </div>
      )}

      {
        isLastItem && completed && (
          <a className="go-to-exercices" href={`/trilhas/resumo/${trilhaId}`}>
            <span className="go-to-exercices__text">
              ir para os exercícios
            </span>
            <ArrowForwardIcon />
          </a>
        )
      }
    </>
  );
}
