import React, { useContext, useState, useEffect } from 'react';
import Context from '../../Context.js';
import LoginForm from '../Login/LoginForm.js';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import SummaryService from '../../services/Summary.js';

import './styles.scss';
import TrilhasProgress from '../TrilhasProgress/TrilhasProgress.js';

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
      <div className='profile-info'>
        <article className='profile-info__header'>
          <Avatar
            sx={{ width: 120, height: 120, bgcolor: 'var(--go-dev-border)' }}
          />
          <p className='profile-info__header__username'>@{user.username}</p>
          <p className='profile-info__header__job'>{type} Go Dev</p>
        </article>

        <article className='profile-info__details'>
          <p className='profile-info__details__title'>Suas informações</p>
          <Divider />
          <div className='profile-info__details__parts'>
            <p className='profile-info__details__parts__left'>
              Nome de usuário
            </p>
            <p className='profile-info__details__parts__right'>
              {user.username}
            </p>
            <p className='profile-info__details__parts__left'>E-mail</p>
            <p className='profile-info__details__parts__right'>{user.email}</p>
            <p className='profile-info__details__parts__left'>
              Tipo de usuário
            </p>
            <p className='profile-info__details__parts__right'>{type}</p>
          </div>
        </article>

        <article className='profile-info__trilhas'>
          <p className='profile-info__trilhas__title'>Seu desempenho</p>
          <Divider />
          <div className='profile-info__trilhas__list'>
            {userPerfomance && performance && (
              <TrilhasProgress performance={performance} from='profile-info' />
            )}
          </div>
        </article>
      </div>
    );
  } else {
    window.location = '/login';
    return <LoginForm />;
  }
};

export default ProfileInfo;
