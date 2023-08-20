import React, { useContext, useState, useEffect } from 'react';
import Context from '../../Context.js';
import LoginForm from '../Login/LoginForm.js';
import TrilhasProgress from '../TrilhasProgress/TrilhasProgress.js';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import SummaryService from '../../services/Summary.js';

import GraduateBrain from '../../assets/images/graduate-brain.jpg';
import './styles.scss';

const ProfileInfo = () => {
  const [user] = useContext(Context);
  const [userPerfomance, setUserPerformance] = useState();

  if (user) {
    const type = user.roles[0] === 'ROLE_USER' ? 'Estudante' : 'Administrador';
    let performance = [];

    useEffect(() => {
      if (!userPerfomance) {
        SummaryService.getSummaryByUser().then((res) =>
          setUserPerformance(res)
        );
      }
    }, []);

    if (userPerfomance) {
      const {completedPaths, uncompletedPaths} = userPerfomance;
      if (completedPaths.length > 0) {
        completedPaths.map(path => {
          Object.assign(path, { status: 'done' });
          performance.push(path);
        });
      }

      if (uncompletedPaths.length > 0) {
        uncompletedPaths.map(path => {
          Object.assign(path, { status: 'progress' });
          performance.push(path);
        });
      }
    }

    return (
      <div className="profile-info">
        <article className="profile-info__header">
          <Avatar
            sx={{ width: 120, height: 120, bgcolor: 'var(--go-dev-border)' }}
          />
          <p className="profile-info__header__username">@{user.username}</p>
          <p className="profile-info__header__job">{type} Go Dev</p>
        </article>

        <article className="profile-info__details">
          <p className="profile-info__details__title">Suas informações</p>
          <Divider />
          <div className="profile-info__details__parts">
            <p className="profile-info__details__parts__left">
              Nome de usuário
            </p>
            <p className="profile-info__details__parts__right">
              {user.username}
            </p>
            <p className="profile-info__details__parts__left">E-mail</p>
            <p className="profile-info__details__parts__right">{user.email}</p>
            <p className="profile-info__details__parts__left">
              Tipo de usuário
            </p>
            <p className="profile-info__details__parts__right">{type}</p>
          </div>
        </article>

        <article className="profile-info__trilhas">
          <p className="profile-info__trilhas__title">Seu desempenho</p>
          <Divider />
          {userPerfomance && performance.length > 0 ? (
            <div className="profile-info__trilhas__list">
              <TrilhasProgress performance={performance} from="profile-info" />
            </div>
          ) : (
            <div className="profile-info__progress">
              <p className="profile-info__progress__text">
                Você ainda não iniciou nenhuma trilha...
              </p>
              <a
                href="/trilhas"
                role="button"
                className="profile-info__progress__subtext"
              >
                Vamos nessa?
              </a>
              <img
                className="profile-info__progress__image"
                src={GraduateBrain}
                alt="cérebro graduado"
              />
            </div>
          )}
        </article>
      </div>
    );
  } else {
    window.location = '/login';
    return <LoginForm />;
  }
};

export default ProfileInfo;
