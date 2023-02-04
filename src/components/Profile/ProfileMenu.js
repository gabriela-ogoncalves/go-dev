import React, { useContext } from 'react';
import profile_img from '../../assets/images/profile.jpg';
import Context from '../../Context';

import './styles.scss';

const ProfileMenu = () => {
  const [user] = useContext(Context);

  return (
    <div id='profile-menu' className='profile-menu'>
      <div className='profile-menu__button'>
        <div className='profile-menu__button__container'>
          <img src={profile_img} className='profile-menu__button__image' />
        </div>
        <p className='profile-menu__button__text'>Olá, {user.username}</p>
      </div>
    </div>
  
  );
};

export default ProfileMenu;
